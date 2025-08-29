const fs = require("fs")
const path = require('path');
const filePath = path.join(__dirname, '../configs/orders.json');
const axios = require('axios');
const { setupTradeLockerPlatform,
  sendOrder,
  modifyOrder,
  modifyPosition,
  deleteOrder,
  deletePosition } = require("./TradeLockerPlatform");
let orders = new Map()
let globalAuthToken = null
let tabRequestMaps = new Map();
let requestMap = new Map(); 
let PORT = 9090
let MARGIN = 1
let platform = "mt5"
function type(type,side){
    if(type == "limit")
        if(side == "buy")return "BUY_LIMIT"
            else return "SELL_LIMIT"
    if(type == "market")
        if(side == "buy")return "BUY"
            else return "SELL"
    if(type == "stop")
        if(side == "buy")return "BUY_STOP"
            else return "SELL_STOP"
    if(type == "stoplimit")
        if(side == "buy")return "BUY_STOP_LIMIT"
            else return "SELL_STOP_LIMIT"
}
function sendToClientCmd(messageObj) {
    return new Promise((resolve, reject) => {
        const Net = require('net')
        const client = new Net.Socket();
          
        // Kết nối tới server
        client.connect(PORT, "localhost", () => {
            const msg = JSON.stringify(messageObj) + "\r\n";
            client.write(msg);
        });
        // Nhận dữ liệu trả về
        client.once("data", (chunk) => {
            try {
                const response = JSON.parse(chunk.toString());
                client.end();
                resolve(response);
            } catch (err) {
                client.end();
                reject(new Error("Lỗi parse JSON: " + err.message));
            }});
            // Xử lý lỗi kết nối
            client.once("error", (err) => {
                client.end();
                reject(new Error("Socket error: " + err.message));
            });
          
            client.setTimeout(10000, () => {
                client.end();
                reject(new Error("Socket timeout"));
            });
        });
}
function extractOrderId(url) {
    const match = url.match(/\/(orders|positions)\/(\d+)/);
    return match ? match[2] : null;
}
function extractAccountId(url) {
    const match = url.match(/\/accounts\/(\d+)/);
    return match ? match[1] : null;
}
function setupViewDebugger(view, tabId) {
    try {
        view.webContents.debugger.attach('1.3');
        view.webContents.debugger.sendCommand('Network.enable');
        tabRequestMaps.set(tabId, requestMap);
        const pendingRequests = new Map();
        
        view.webContents.debugger.on('message', async (event, method, params) => {
            if (method === 'Network.responseReceived') {
                const { requestId, response } = params;
                const url = response.url;
                try {
                    const parsedUrl = new URL(url);
                    const rid = parsedUrl.searchParams.get('requestId');

                    // Kiểm tra URL chứa requestId và trùng với giá trị cần tìm
                    const matched = url.includes('https://tradingview-api-client-demo.fpmarkets.com/accounts/') && requestMap.has(rid);
                    if (matched) {
                        pendingRequests.set(requestId, rid);
                        console.log(`[Tab ${tabId}] Network response received for requestId: ${rid}`);
                    }
                } catch (urlError) {
                    // URL không hợp lệ, bỏ qua
                }
            }
            
            if (method === 'Network.loadingFinished') {
                const { requestId } = params;
                if (pendingRequests.has(requestId)) {
                    const rid = pendingRequests.get(requestId);
                    pendingRequests.delete(requestId);
                    const tracked = requestMap.get(rid);
                    
                    try {
                        const { body, base64Encoded } = await view.webContents.debugger.sendCommand('Network.getResponseBody', { requestId });
                        const decoded = base64Encoded ? JSON.parse(Buffer.from(body, 'base64').toString()) : JSON.parse(body);
                        console.log(`[Tab ${tabId}] Response decoded:`, decoded);
                        
                        if (decoded.d && decoded.d.orderId && tracked && tracked.id) {
                            orders.set((decoded.d.orderId).toString(), (tracked.id).toString());
                            console.log(`[Tab ${tabId}] Order mapped: ${decoded.d.orderId} -> ${tracked.id}`);
                            const s = { orders: orders ? [...orders] : []}
                            try {
                                fs.writeFileSync(filePath, JSON.stringify(s), 'utf8');
                                console.log('Saved new orders');
                                                
                            } catch (err) {
                                console.error('Lỗi xử lý file:', err);
                            }
                        }
                    } catch (e) {
                        if (e.message.includes('No resource with given identifier')) {
                            console.warn(`[Tab ${tabId}] Request ${requestId} chưa sẵn sàng để lấy body`);
                        } else {
                            console.error(`[Tab ${tabId}] Lỗi getResponseBody cho ${requestId}:`, e.message);
                        }
                    }
                }
            }
        });
        
        view.webContents.debugger.on('detach', (event, reason) => {
            console.log(`[Tab ${tabId}] Debugger detached: ${reason}`);
        });
        
        console.log(`[Tab ${tabId}] Debugger attached successfully`);
        
    } catch (err) {
        console.error(`[Tab ${tabId}] Error attaching debugger:`, err);
    }
}

function setupSharedSessionInterceptors(tabSession) {
    let action = false
    let firstTime = true
    tabSession.webRequest.onBeforeRequest(async (details, callback) => {
        let called = false;
        const safeCallback = (arg) => {
            if (called) return;
            called = true;
            callback(arg);
        };
        if(details.url.includes('https://tradingview-api-client-demo.fpmarkets.com/accounts/')){
            //Xử lý post order
            if (details.method === 'POST' && details.url.includes('&requestId=')) {
                if (details.uploadData && details.uploadData.length > 0) {
                    const buffer = details.uploadData[0].bytes;
                    if (buffer) {
                        try {
                            const params = new URLSearchParams(buffer.toString());
                            const body = Object.fromEntries(params.entries());
                            const uid = crypto.randomUUID();
                            const timestamp = Date.now();
                            const fingerprint = `${uid}_${timestamp}`;
                            let ticket = ""
                            if(platform=="mt5"){
                                const t = {
                                symbol: body.instrument,
                                volume: Number(body.qty)*MARGIN,
                                action: type(body.type, body.side),
                                ...(body.limitPrice ? { price: Number(body.limitPrice) } : {}),
                                ...(body.stopPrice ? {stop_price: Number(body.stopPrice) } : {}),
                                ...(body.takeProfit ? {tp: Number(body.takeProfit)} : {}),
                                ...(body.stopLoss ? {sl: Number(body.stopLoss)} : {})
                                };
                                
                                const rs = await sendToClientCmd(t);
                                console.log('Order command sent:', t);
                                
                                if(!rs.success)throw new Error("Không mở được order: " + JSON.stringify(rs));
                                
                                ticket = rs.ticket
                            } else {
                                const rs = await sendOrder(
                                    (body.limitPrice ? body.limitPrice:null),
                                    (body.stopPrice ? body.stopPrice:null),
                                    String(Number(body.qty)*MARGIN),
                                    body.instrument,
                                    body.type,
                                    body.side,
                                    (body.takeProfit ? body.takeProfit:null),
                                    (body.stopLoss ? body.stopLoss:null),
                                )
                                ticket = rs
                            }
                            
                            
                            const par = new URL(details.url).searchParams;
                            const rid = par.get('requestId');
                            
                            // Tìm tab nào đang xử lý request này và lưu vào requestMap của tab đó
                            const requestData = {
                                fingerprint,
                                id: ticket,
                                url: details.url,
                                method: details.method,
                            };
                            
                            // Lưu vào tất cả requestMap của các tab (vì không biết tab nào gửi request)
                            // Debugger của mỗi tab sẽ tự filter theo URL mà nó nhận được
                            for (const [tabId, requestMap] of tabRequestMaps) {
                                requestMap.set(rid, requestData);
                            }
                            
                            console.log(`Request ${rid} saved to all tab requestMaps`);
                            action = true

                        } catch (err) {
                            console.error('Lỗi phân tích body:', err);
                            safeCallback({ cancel: true });
                            return;
                        }
                    }
                }
            }
            // Xử lý DELETE orders
            if (details.method === 'DELETE') {
                if(details.url.includes('/orders/')){
                    try {
                        const orderId = extractOrderId(details.url);
                        if (!orders.has(orderId))throw new Error("Không tìm thấy order để hủy:", orderId);
                        const order = orders.get(orderId);
                        if(platform=="mt5"){
                            const t = {
                                action: "DELETE",
                                ticket: order
                            }
                            const rs = await sendToClientCmd(t);
                            if(!rs.success)throw new Error("Không xóa được order: " + JSON.stringify(rs));
                            console.log('Delete order:', t);
                            console.log('Delete result:', rs);
                        }else {
                            const rs = await deleteOrder(order)
                            if(!rs)throw new Error("Không xóa được order: " + JSON.stringify(rs));
                            console.log(rs)
                        }
                        
                        orders.delete(orderId);
                        action = true
                    } catch (err) {
                        console.error("Lỗi xử lý cancelOrder:", err.message || err);
                        return safeCallback({ cancel: true });
                    }
                }
                
                if(details.url.includes('/positions/')){
                    try {
                        const res = await axios.get(
                            `https://tradingview-api-client-demo.fpmarkets.com/accounts/${extractAccountId(details.url)}/orders?locale=en`,
                            {
                                headers: {
                                    'Authorization': globalAuthToken,
                                },
                                timeout: 10000,
                                family: 4,
                                proxy: false
                            }
                        );

                        const order = res.data?.d?.find(order =>
                            order.customFields?.some(field =>
                                field.id === "PositionId" &&
                                field.value.startsWith(extractOrderId(details.url))
                            ));
                        if (!order) throw new Error("Không tìm thấy position phù hợp.");

                        const orderID = order.id;
                        if(!orders.has(orderID)) throw new Error("Không tìm thấy position phù hợp nhằm xóa: ", orderID);
                        const sorder = orders.get(orderID);
                        let body = null
                        if(details.uploadData){
                            const buffer = details.uploadData[0].bytes;
                            const params = new URLSearchParams(buffer.toString());
                            body = Object.fromEntries(params.entries());
                        }
                        if(platform=="mt5"){
                             const t = {
                                action:"DELETE",
                                ticket: sorder,
                                ...(body!==null&&body.amount?{volume:Number(body.amount)*MARGIN}:{})
                            }
                            const rs = await sendToClientCmd(t);
                            console.log('Delete position:', t);
                            console.log('Delete result:', rs);
                            if(!rs.success)throw new Error("Không đóng được order: " + JSON.stringify(rs));
                        } else {
                            const rs = await deletePosition(sorder,(body!==null&&body.amount?Number(body.amount)*MARGIN:null))
                            if(!rs)throw new Error("Không đóng được order: " + JSON.stringify(rs));
                            console.log(rs)
                        }
                        if(body===null){
                            orders.delete(orderID);
                            action = true
                        }
                        
                    } catch (err) {
                        console.error('Lỗi xử lý hoặc lấy orders:', err.message || err);
                        safeCallback({ cancel: true });
                        return;
                    }
                }
            }
             // Xử lý PUT orders
            if (details.method === 'PUT') {
                if(details.url.includes('/orders/')){
                    if (details.uploadData?.length > 0) {
                        const buffer = details.uploadData[0].bytes;
                        
                        if (!buffer) {
                            return callback({ cancel: true });
                        }

                        try {
                            const params = new URLSearchParams(buffer.toString());
                            const body = Object.fromEntries(params.entries());

                            const orderId = extractOrderId(details.url);
                            if(!orders.has(orderId))throw new Error("Không tìm thấy order phù hợp.");
                            const order = orders.get(orderId);
                            if(platform=="mt5"){
                                const t = {
                                    action:"MODIFY",
                                    ticket: order,
                                    ...(body.limitPrice ? {price: Number(body.limitPrice)} : {}),
                                    ...(body.takeProfit ? {tp: Number(body.takeProfit)} : {}),
                                    ...(body.stopLoss ? {sl: Number(body.stopLoss)} : {})
                                }
                                const rs = await sendToClientCmd(t);
                                console.log('Modify order:', t);
                                console.log('Modify result:', rs);
                                if(!rs.success)throw new Error("Không modify được order: " + JSON.stringify(rs));
                            } else {
                                const rs = await modifyOrder(order,{
                                    ...(body.limitPrice ? {price: body.limitPrice} : {}),
                                    ...(body.takeProfit ? {takeProfit: body.takeProfit} : {}),
                                    ...(body.stopLoss ? {stopLoss: body.stopLoss} : {})
                                })
                                if(!rs)throw new Error("Không modify được order: " + JSON.stringify(rs));
                            }
                        } catch (err) {
                            console.error('Lỗi phân tích body:', err);
                            return callback({ cancel: true });
                        }
                    }
                }
                if(details.url.includes('/positions/')){
                    if (details.uploadData?.length > 0) {
                        const buffer = details.uploadData[0].bytes;
                        if (!buffer) return callback({ cancel: true });
                        try {
                            const accountId = extractAccountId(details.url);
                            const orderListResponse = await axios.get(
                                `https://tradingview-api-client-demo.fpmarkets.com/accounts/${accountId}/orders?locale=en`,
                                {
                                    headers: {
                                        Authorization: globalAuthToken,
                                    },
                                    timeout: 10000,
                                    family: 4,
                                    proxy: false
                                }
                            );

                            if (orderListResponse.status < 200 || orderListResponse.status >= 300) 
                                throw new Error('Lỗi lấy danh sách orders:', orderListResponse.statusText)

                            const orderMatch = orderListResponse.data.d.find(order =>
                                order.customFields?.some(field =>
                                    field.id === "PositionId" && field.value.startsWith(extractOrderId(details.url))
                                )
                            );

                            if (!orderMatch) throw new Error('Không tìm thấy position phù hợp.')

                            const orderID = orderMatch.id;
                            const params = new URLSearchParams(buffer.toString());
                            const body = Object.fromEntries(params.entries());
                            // if(!orders.has(orderID)) throw new Error('Không tìm thấy position nhằm modify:', orderID)
                           if(platform=="mt5"){
                                const t = {
                                    action:"MODIFY",
                                    ticket: orders.get(orderID),
                                    ...(body.takeProfit ? {tp: Number(body.takeProfit)} : {}),
                                    ...(body.stopLoss ? {sl: Number(body.stopLoss)} : {})
                                }
                                const rs = await sendToClientCmd(t);
                                console.log('Modify position:', t);
                                console.log('Modify result:', rs);
                                if(!rs.success)throw new Error("Không modify được position: " + JSON.stringify(rs));
                           }else {
                                const rs = await modifyPosition(orders.get(orderID), {
                                    ...(body.takeProfit ? {takeProfit: body.takeProfit} : {}),
                                    ...(body.stopLoss ? {stopLoss: body.stopLoss} : {})
                                })
                                if(!rs)throw new Error("Không modify được position: " + JSON.stringify(rs));
                           }
                        } catch (err) {
                            console.error('Lỗi khi xử lý body hoặc lấy order:', err);
                            return callback({ cancel: true });
                        }
                    }
                }
            }
        }
        const s = { orders: orders ? [...orders] : []}
        if(action){
            action = false
            try {
                fs.writeFileSync(filePath, JSON.stringify(s), 'utf8');
                console.log('Saved new orders:',s);
                                
            } catch (err) {
                console.error('Lỗi xử lý file:', err);
            }
        }
        if(firstTime){
            firstTime = false
            if(fs.existsSync(filePath)){
                const ordersData = fs.readFileSync(filePath, 'utf8');
                const ordersObj = JSON.parse(ordersData);
                console.log('Loading Orders:', ordersObj);
                if(ordersObj.orders.length !== 0)orders = new Map(ordersObj.orders)
                // try {
                //     const p = await sendToClientCmd({action: "GET_POSITIONS"})
                //     const o = await sendToClientCmd({action: "GET_ORDERS"})
                //     console.log(p)
                //     console.log(o)
                //     if(p.positions.length!=0||o.orders.length!=0){
                //         if(ordersObj.orders.length !== 0)orders = new Map(ordersObj.orders)
                //         if(ordersObj.ordersInfo.length !== 0)ordersInfo = new Map(ordersObj.ordersInfo)
                //     }
                // } catch(err){
                //     console.log(err)
                // }
            }else{
                fs.writeFileSync(filePath, JSON.stringify(s), 'utf8');
            }
        }
        callback({});
    });
    
    tabSession.webRequest.onBeforeSendHeaders((details, callback) => {
        const headers = details.requestHeaders;
        const isFromTargetSite = details.initiator?.startsWith('https://tradingview-api-client-demo.fpmarkets.com') ||
            details.url.startsWith('https://tradingview-api-client-demo.fpmarkets.com');

        if (isFromTargetSite && headers.Authorization && globalAuthToken === null) {
            if (headers.Authorization.startsWith('Bearer')) {
                globalAuthToken = headers.Authorization;
                console.log('Captured Bearer token:', globalAuthToken);
            }
        }
        
        // Tìm requestMap phù hợp cho request này
        const par = new URL(details.url).searchParams;
        const rid = par.get('requestId');
        
        if (rid) {
            // Tìm trong các requestMap của các tab
            for (const [tabId, requestMap] of tabRequestMaps) {
                const tracked = requestMap.get(rid);
                if (tracked) {
                    details.requestHeaders['X-Fingerprint'] = tracked.fingerprint;
                    break;
                }
            }
        }
        
        callback({ requestHeaders: details.requestHeaders });
    });
}
async function setupFPmarketAPI(id, browserView, platformData){
    try {
        platform = platformData.platform 
        if(platformData.platform == "mt5"){
            PORT = platformData.port
            await sendToClientCmd({action: "GET_POSITIONS"})
        }
        else {
        await setupTradeLockerPlatform(platformData.username,platformData.password,platformData.server,platformData.session)
        }
        MARGIN = Number(platformData.percentage)
        setupSharedSessionInterceptors(browserView.webContents.session)
        setupViewDebugger(browserView, id)
    } catch(err){
        throw new Error(err)
    }
}
module.exports = {setupFPmarketAPI}