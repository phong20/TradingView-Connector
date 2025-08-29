const axios = require("axios");

let axiosInstance;
let baseUrl = ``;

/**
 * Setup TradeLocker platform instance
 */
async function setupTradeLockerPlatform(email, password, server, accountType) {
  try {
    baseUrl = `https://${accountType}.tradelocker.com/backend-api`;
    const data = { email, password, server };

    const rs = await axios.post(baseUrl + "/auth/jwt/token", data);
    axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: { Authorization: "Bearer " + rs.data.accessToken },
    });

    const res = await axiosInstance.get("/auth/jwt/all-accounts");
    const account = res.data.accounts[0];
    if (!account) throw new Error("No account found for this user");

    axiosInstance.defaults.baseURL = baseUrl + "/trade/accounts/" + account.id;
    axiosInstance.defaults.headers["accNum"] = account.accNum;
  } catch (err) {
    throw new Error("setupTradeLockerPlatform error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Send a new order
 */
async function sendOrder(price = null, stopPrice = null, qty, symbol, type, side, takeProfit = null, stopLoss = null) {
  try {
    const symbolInfo = await findSymbol(symbol);
    if (!symbolInfo) throw new Error("Symbol not found: " + symbol);

    const data = {
      ...(price !== null ? { price } : {}),
      ...(stopPrice !== null ? { stopPrice } : {}),
      ...(takeProfit !== null ? { takeProfit } : {}),
      ...(stopLoss !== null ? { stopLoss } : {}),
      qty,
      ...symbolInfo,
      type,
      side,
      validity: type === "market" ? "IOC" : "GTC",
    };
    console.log(data)
    const res = await axiosInstance.post("/orders", data);
    return res.data.d.orderId;
  } catch (err) {
    throw new Error("sendOrder error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Modify an existing order
 */
async function modifyOrder(id, data) {
  try {
    const res = await axiosInstance.patch(baseUrl + "/trade/orders/" + id, data);
    return res.data.s === "ok";
  } catch (err) {
    throw new Error("modifyOrder error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Modify a position from orderId
 */
async function modifyPosition(id, data) {
  try {
    const positionId = await getPositionIdFromOrderId(id);
    if (!positionId) throw new Error("Position not found for orderId: " + id);

    const res = await axiosInstance.patch(baseUrl + "/trade/positions/" + positionId, data);
    return res.data.s === "ok";
  } catch (err) {
    throw new Error("modifyPosition error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Delete an order
 */
async function deleteOrder(id) {
  try {
    const res = await axiosInstance.delete(baseUrl + "/trade/orders/" + id);
    return res.data.s === "ok";
  } catch (err) {
    throw new Error("deleteOrder error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Delete a position from orderId
 */
async function deletePosition(id,qty = null) {
  try {
    const positionId = await getPositionIdFromOrderId(id);
    if (!positionId) throw new Error("Position not found for orderId: " + id);
    const data = qty!==null?{"qty":String(qty)}:null
    const res = await axiosInstance.delete(baseUrl + "/trade/positions/" + positionId, (data!==null?{data: data}:""));
    return res.data.s === "ok";
  } catch (err) {
    throw new Error("deletePosition error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Get all orders (open or history)
 */
async function getAllOrders(history = false) {
  try {
    const endpoint = history ? "/ordersHistory" : "/orders";
    const res = await axiosInstance.get(endpoint);
    return res.data.d;
  } catch (err) {
    throw new Error("getAllOrders error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Map raw orders with config
 */
const mapOrders = (raw, config) => {
  return raw.map((row) =>
    config.columns.reduce((obj, col, idx) => {
      obj[col.id] = row[idx] ?? null;
      return obj;
    }, {})
  );
};

/**
 * Get positionId from orderId
 */
async function getPositionIdFromOrderId(id) {
  try {
    const rs = await getAllOrders(true);
    const res = await axiosInstance.get(baseUrl + "/trade/config");
    const orders = mapOrders(rs.ordersHistory, res.data.d.ordersHistoryConfig);

    const order = orders.find((o) => o.id === id);
    return order ? order.positionId : null;
  } catch (err) {
    throw new Error("getPositionIdFromOrderId error: " + (err.response?.data?.msg || err.message));
  }
}

/**
 * Find symbol info by keyword
 */
async function findSymbol(keyword) {
  try {
    const res = await axiosInstance.get("/instruments");
    const symbols = res.data.d.instruments;

    const symbol = symbols.find(
      (s) =>
        s.name.toLowerCase().includes(keyword.toLowerCase()) ||
        s.localizedName.toLowerCase().includes(keyword.toLowerCase())
    );

    if (keyword.includes("US100") && !symbol) return await findSymbol("ustec");
    if (!symbol) return null;

    const tradeRoute = symbol.routes.find((r) => r.type === "TRADE");

    return {
      tradableInstrumentId: symbol.tradableInstrumentId,
      routeId: tradeRoute ? tradeRoute.id : null,
    };
  } catch (err) {
    throw new Error("findSymbol error: " + (err.response?.data?.msg || err.message));
  }
}

module.exports = {
  setupTradeLockerPlatform,
  sendOrder,
  modifyOrder,
  modifyPosition,
  deleteOrder,
  deletePosition,
  getAllOrders,
};
