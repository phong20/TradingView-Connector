//+------------------------------------------------------------------+
//|                                           SocketOrderEA.mq5 |
//|                        Copyright 2024, MetaQuotes Software Corp. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2024"
#property link      "https://www.mql5.com"
#property version   "1.00"

#include <Trade\Trade.mqh>

// Windows Socket API
#import "Ws2_32.dll"
   int WSAStartup(int wVersionRequested, uchar &lpWSAData[]);
   int WSACleanup();
   int socket(int af, int type, int protocol);
   int bind(int s, uchar &name[], int namelen);
   int listen(int s, int backlog);
   int accept(int s, int addr, int addrlen);
   int recv(int s, uchar &buf[], int len, int flags);
   int send(int s, uchar &buf[], int len, int flags);
   int closesocket(int s);
   int setsockopt(int s, int level, int optname, uchar &optval[], int optlen);
   ushort htons(ushort hostshort);
   int ioctlsocket(int s, long cmd, ulong &argp);
#import

// Input parameters
input int SocketPort = 9090;
input bool EnableLogging = true;
input bool EnableFuzzySymbolMatching = true; // Cho phép tìm symbol gần giống

// Global variables
int server_socket = -1;
CTrade trade;
string allowed_symbols[];

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
{
    Print("Starting Socket Order EA...");
    
    // Initialize WSA
    uchar wsaData[400];
    int wsaResult = WSAStartup(0x0202, wsaData);
    if(wsaResult != 0)
    {
        Print("WSAStartup failed with error: ", wsaResult);
        return INIT_FAILED;
    }
    
    // Initialize trade object
    trade.SetExpertMagicNumber(12345);
    
    
    // Create server socket
    server_socket = socket(2, 1, 6); // AF_INET, SOCK_STREAM, IPPROTO_TCP
    if(server_socket == -1)
    {
        Print("Failed to create socket");
        WSACleanup();
        return INIT_FAILED;
    }
    
    // Set socket to non-blocking mode
    ulong nonBlocking = 1;
    ioctlsocket(server_socket, 0x8004667e, nonBlocking); // FIONBIO
    
    // Set socket options - reuse address
    uchar optval[4] = {1, 0, 0, 0};
    setsockopt(server_socket, 0xFFFF, 0x0004, optval, 4); // SOL_SOCKET, SO_REUSEADDR
    
    // Prepare server address
    uchar server_addr[16];
    ArrayInitialize(server_addr, 0);
    
    // Fill sockaddr_in structure manually
    server_addr[0] = 2;  // sin_family = AF_INET (low byte)
    server_addr[1] = 0;  // sin_family = AF_INET (high byte)
    
    ushort port_network = htons((ushort)SocketPort);
    server_addr[2] = (uchar)(port_network & 0xFF);      // sin_port (low byte)
    server_addr[3] = (uchar)((port_network >> 8) & 0xFF); // sin_port (high byte)
    
    // sin_addr = INADDR_ANY (0.0.0.0) - already initialized to 0
    
    // Bind socket
    if(bind(server_socket, server_addr, 16) == -1)
    {
        Print("Failed to bind socket to port ", SocketPort);
        closesocket(server_socket);
        WSACleanup();
        return INIT_FAILED;
    }
    
    // Start listening
    if(listen(server_socket, 10) == -1)
    {
        Print("Failed to listen on socket");
        closesocket(server_socket);
        WSACleanup();
        return INIT_FAILED;
    }
    
    Print("Socket server started on port ", SocketPort);
    
    return INIT_SUCCEEDED;
}

//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
    if(server_socket != -1)
    {
        closesocket(server_socket);
        WSACleanup();
        Print("Socket server stopped");
    }
}

//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick()
{
    // Check for incoming connections (non-blocking)
    int client_socket = accept(server_socket, 0, 0);
    if(client_socket != -1)
    {
        HandleClientConnection(client_socket);
        closesocket(client_socket);
    }
}

//+------------------------------------------------------------------+
//| Handle client connection                                          |
//+------------------------------------------------------------------+
void HandleClientConnection(int client_socket)
{
    // Set client socket to blocking mode for this operation
    ulong blocking = 0;
    ioctlsocket(client_socket, 0x8004667e, blocking); // FIONBIO
    
    uchar buffer[4096];
    int bytes_received = recv(client_socket, buffer, 4096, 0);
    
    if(bytes_received <= 0)
    {
        if(EnableLogging) Print("No data received from client");
        return;
    }
    
    // Convert received data to string
    string json_string = "";
    for(int i = 0; i < bytes_received; i++)
    {
        if(buffer[i] == 0) break; // Stop at null terminator
        json_string += CharToString(buffer[i]);
    }
    
    if(EnableLogging) Print("Received JSON: ", json_string);
    
    // Process JSON and create response
    string response = ProcessOrderRequest(json_string);
    
    // Send response back to client
    uchar response_buffer[];
    int response_len = StringToCharArray(response, response_buffer, 0, StringLen(response));
    send(client_socket, response_buffer, response_len, 0);
    
    if(EnableLogging) Print("Response sent: ", response);
}

//+------------------------------------------------------------------+
//| Find best matching symbol                                        |
//+------------------------------------------------------------------+
string FindBestMatchingSymbol(string input_symbol)
{
    // Trước tiên kiểm tra symbol có tồn tại chính xác không
    if(SymbolSelect(input_symbol, true))
    {
        return input_symbol;
    }
    
    if(!EnableFuzzySymbolMatching)
    {
        return "";
    }
    
    string best_match = "";
    int best_score = -1;
    
    // Lấy tất cả symbols có sẵn
    int total_symbols = SymbolsTotal(true);
    
    for(int i = 0; i < total_symbols; i++)
    {
        string symbol = SymbolName(i, true);
        int score = CalculateSymbolSimilarity(input_symbol, symbol);
        
        if(score > best_score)
        {
            best_score = score;
            best_match = symbol;
        }
    }
    
    // Chỉ trả về nếu có độ tương đồng tối thiểu (ít nhất 60%)
    if(best_score >= 60)
    {
        if(EnableLogging) 
            Print("Symbol fuzzy match: '", input_symbol, "' -> '", best_match, "' (score: ", best_score, "%)");
        return best_match;
    }
    
    if(StringFind(input_symbol, "US100")>=0 && best_score <=60)
      return FindBestMatchingSymbol("USTEC");
    if(StringFind(input_symbol, "USOIL")>=0 && best_score <=60)
      return FindBestMatchingSymbol("WTIUSD");
    
    return "";
}

//+------------------------------------------------------------------+
//| Calculate symbol similarity score                                |
//+------------------------------------------------------------------+
int CalculateSymbolSimilarity(string i, string target)
{
    StringToUpper(i);
    StringToUpper(target);
    
    int input_len = StringLen(i);
    int target_len = StringLen(target);
    
    if(input_len == 0 || target_len == 0)
        return 0;
    
    // Kiểm tra nếu input là substring của target
    if(StringFind(target, i) >= 0)
        return 90; // Điểm cao nếu input nằm trong target
    
    // Kiểm tra nếu target là substring của input
    if(StringFind(i, target) >= 0)
        return 85;
    
    // Tính toán Levenshtein distance
    int max_len = MathMax(input_len, target_len);
    int distance = LevenshteinDistance(i, target);
    
    // Chuyển distance thành % similarity
    int similarity = (int)((1.0 - (double)distance / max_len) * 100);
    
    // Bonus points cho các trường hợp đặc biệt
    if(StringLen(i) >= 6 && StringLen(target) >= 6)
    {
        // Kiểm tra 3 ký tự đầu giống nhau (currency pair)
        if(StringSubstr(i, 0, 3) == StringSubstr(target, 0, 3))
            similarity += 10;
        
        // Kiểm tra 3 ký tự cuối giống nhau
        if(StringSubstr(i, 3, 3) == StringSubstr(target, 3, 3))
            similarity += 10;
    }
    
    return MathMin(similarity, 100);
}

//+------------------------------------------------------------------+
//| Calculate Levenshtein distance                                   |
//+------------------------------------------------------------------+
int LevenshteinDistance(string s1, string s2)
{
    int len1 = StringLen(s1);
    int len2 = StringLen(s2);
    
    if(len1 == 0) return len2;
    if(len2 == 0) return len1;
    
    // Tạo matrix để tính toán
    int m[];
    ArrayResize(m, (len1 + 1) * (len2 + 1));
    
    // Khởi tạo matrix
    for(int i = 0; i <= len1; i++)
        m[i * (len2 + 1)] = i;
    for(int j = 0; j <= len2; j++)
        m[j] = j;
    
    // Tính toán distance
    for(int i = 1; i <= len1; i++)
    {
        for(int j = 1; j <= len2; j++)
        {
            int cost = (StringGetCharacter(s1, i-1) == StringGetCharacter(s2, j-1)) ? 0 : 1;
            
            int deletion = m[(i-1) * (len2 + 1) + j] + 1;
            int insertion = m[i * (len2 + 1) + (j-1)] + 1;
            int substitution = m[(i-1) * (len2 + 1) + (j-1)] + cost;
            
            m[i * (len2 + 1) + j] = MathMin(MathMin(deletion, insertion), substitution);
        }
    }
    
    return m[len1 * (len2 + 1) + len2];
}

//+------------------------------------------------------------------+
//| Process order request from JSON                                  |
//+------------------------------------------------------------------+
string ProcessOrderRequest(string json_string)
{
    // Simple JSON parsing without external library
    string action = ExtractJsonValue(json_string, "action");
    string symbol = ExtractJsonValue(json_string, "symbol");
    double volume = StringToDouble(ExtractJsonValue(json_string, "volume"));
    double price = StringToDouble(ExtractJsonValue(json_string, "price"));
    double sl = StringToDouble(ExtractJsonValue(json_string, "sl"));
    double tp = StringToDouble(ExtractJsonValue(json_string, "tp"));
    string comment = ExtractJsonValue(json_string, "comment");
    
    // Thêm tham số cho Stop Limit
    double stop_price = StringToDouble(ExtractJsonValue(json_string, "stop_price"));
    
    if(action == "")
    {
        return CreateErrorResponse("Invalid JSON format - missing action");
    }
    
    
    // Execute order based on action
    bool result = false;
    ulong ticket = 0;
    string error_description = "";
    
    if(action == "BUY")
    {
        result = ExecuteBuyOrder(symbol, volume, price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "SELL")
    {
        result = ExecuteSellOrder(symbol, volume, price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "BUY_LIMIT")
    {
        result = ExecuteBuyLimit(symbol, volume, price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "SELL_LIMIT")
    {
        result = ExecuteSellLimit(symbol, volume, price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "BUY_STOP")
    {
        result = ExecuteBuyStop(symbol, volume, stop_price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "SELL_STOP")
    {
        result = ExecuteSellStop(symbol, volume, stop_price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "BUY_STOP_LIMIT")
    {
        result = ExecuteBuyStopLimit(symbol, volume, price, stop_price , sl, tp, comment, ticket, error_description);
    }
    else if(action == "SELL_STOP_LIMIT")
    {
        result = ExecuteSellStopLimit(symbol, volume, price, stop_price, sl, tp, comment, ticket, error_description);
    }
    else if(action == "CLOSE" || action == "DELETE")
    {
        ulong close_ticket = (ulong)StringToInteger(ExtractJsonValue(json_string, "ticket"));
        double close_volume = StringToDouble(ExtractJsonValue(json_string, "volume"));
        result = CloseOrDeleteOrder(close_ticket, close_volume, error_description);
    }
    else if(action == "MODIFY")
    {
        ulong modify_ticket = (ulong)StringToInteger(ExtractJsonValue(json_string, "ticket"));
        result = ModifyOrderUniversal(modify_ticket, price, sl, tp, error_description);
    }
    else if(action == "GET_POSITIONS")
    {
        return GetPositionsInfo();
    }
    else if(action == "GET_ORDERS")
    {
        return GetOrdersInfo();
    }
    else if(action == "GET_ACCOUNT")
    {
        return GetAccountInfo();
    }
    else
    {
        return CreateErrorResponse("Invalid action: " + action);
    }
    
    // Create response
    if(result)
    {
        return CreateSuccessResponse(ticket, action);
    }
    else
    {
        return CreateErrorResponse(error_description);
    }
}

//+------------------------------------------------------------------+
//| Execute buy stop limit order                                     |
//+------------------------------------------------------------------+
bool ExecuteBuyStopLimit(string symbol, double volume, double stop_price, double limit_price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
    
    // Validate required parameters
    if(stop_price <= 0)
    {
        error_desc = "Buy Stop Limit requires valid stop_price";
        return false;
    }
    
    if(limit_price <= 0)
    {
        error_desc = "Buy Stop Limit requires valid price (limit_price)";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_ASK);
    
    // Validate stop price (must be above current market price for buy)
    if(stop_price <= current_price)
    {
        error_desc = "Buy Stop Limit stop_price must be above current market price (" + 
                    DoubleToString(current_price, 5) + ")";
        return false;
    }
    
    // Validate limit price (should be <= stop price for buy stop limit)
    if(limit_price > stop_price)
    {
        error_desc = "Buy Stop Limit price should be less than or equal to stop_price";
        return false;
    }
    
    // Create the stop limit order
    if(trade.OrderOpen(symbol, ORDER_TYPE_BUY_STOP_LIMIT, volume, limit_price, stop_price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        if(EnableLogging)
        {
            Print("Buy Stop Limit order created - Ticket: ", ticket, 
                  ", Symbol: ", symbol, 
                  ", Volume: ", DoubleToString(volume, 2),
                  ", Stop Price: ", DoubleToString(stop_price, 5),
                  ", Limit Price: ", DoubleToString(limit_price, 5));
        }
        return true;
    }
    
    error_desc = "Buy Stop Limit order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute sell stop limit order                                    |
//+------------------------------------------------------------------+
bool ExecuteSellStopLimit(string symbol, double volume, double stop_price, double limit_price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
    
    // Validate required parameters
    if(stop_price <= 0)
    {
        error_desc = "Sell Stop Limit requires valid stop_price";
        return false;
    }
    
    if(limit_price <= 0)
    {
        error_desc = "Sell Stop Limit requires valid price (limit_price)";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_BID);
    
    // Validate stop price (must be below current market price for sell)
    if(stop_price >= current_price)
    {
        error_desc = "Sell Stop Limit stop_price must be below current market price (" + 
                    DoubleToString(current_price, 5) + ")";
        return false;
    }
    
    // Validate limit price (should be >= stop price for sell stop limit)
    if(limit_price < stop_price)
    {
        error_desc = "Sell Stop Limit price should be greater than or equal to stop_price";
        return false;
    }
    
    // Create the stop limit order
    if(trade.OrderOpen(symbol, ORDER_TYPE_SELL_STOP_LIMIT, volume, limit_price, stop_price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        if(EnableLogging)
        {
            Print("Sell Stop Limit order created - Ticket: ", ticket, 
                  ", Symbol: ", symbol, 
                  ", Volume: ", DoubleToString(volume, 2),
                  ", Stop Price: ", DoubleToString(stop_price, 5),
                  ", Limit Price: ", DoubleToString(limit_price, 5));
        }
        return true;
    }
    
    error_desc = "Sell Stop Limit order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Universal modify function for both positions and pending orders |
//+------------------------------------------------------------------+
bool ModifyOrderUniversal(ulong ticket, double price, double sl, double tp, string &error_desc)
{
    // Trước tiên kiểm tra xem có phải là position không
    if(PositionSelectByTicket(ticket))
    {
        // Đây là position, chỉ có thể modify SL/TP
        if(trade.PositionModify(ticket, sl, tp))
        {
            return true;
        }
        error_desc = "Position modify failed: " + trade.ResultComment();
        return false;
    }
    
    // Kiểm tra xem có phải là pending order không
    if(OrderSelect(ticket))
    {
        string symbol = OrderGetString(ORDER_SYMBOL);
        ENUM_ORDER_TYPE order_type = (ENUM_ORDER_TYPE)OrderGetInteger(ORDER_TYPE);
        double volume = OrderGetDouble(ORDER_VOLUME_CURRENT);
        ENUM_ORDER_TYPE_TIME type_time = (ENUM_ORDER_TYPE_TIME)OrderGetInteger(ORDER_TYPE_TIME);
        datetime expiration = (datetime)OrderGetInteger(ORDER_TIME_EXPIRATION);
        string comment = OrderGetString(ORDER_COMMENT);
        
        // Nếu price = 0, giữ nguyên giá hiện tại
        if(price == 0)
            price = OrderGetDouble(ORDER_PRICE_OPEN);
            
        // Nếu SL = 0, giữ nguyên SL hiện tại
        if(sl == 0)
            sl = OrderGetDouble(ORDER_SL);
            
        // Nếu TP = 0, giữ nguyên TP hiện tại
        if(tp == 0)
            tp = OrderGetDouble(ORDER_TP);
        
        if(trade.OrderModify(ticket, price, sl, tp, type_time, expiration, comment))
        {
            return true;
        }
        error_desc = "Pending order modify failed: " + trade.ResultComment();
        return false;
    }
    
    error_desc = "Order/Position with ticket " + IntegerToString(ticket) + " not found";
    return false;
}

//+------------------------------------------------------------------+
//| Universal close/delete function                                  |
//+------------------------------------------------------------------+
bool CloseOrDeleteOrder(ulong ticket, double volume, string &error_desc)
{
    // Trước tiên kiểm tra xem có phải là position không
    if(PositionSelectByTicket(ticket))
    {
        // Đây là position
        double current_volume = PositionGetDouble(POSITION_VOLUME);
        
        // Nếu volume = 0 hoặc volume >= current_volume thì đóng toàn bộ
        if(volume <= 0 || volume >= current_volume)
        {
            if(trade.PositionClose(ticket))
            {
                if(EnableLogging)
                    Print("Position closed completely - Ticket: ", ticket, ", Volume: ", DoubleToString(current_volume, 2));
                return true;
            }
            error_desc = "Position close failed: " + trade.ResultComment();
            return false;
        }
        else
        {
            // Đóng một phần position
            string symbol = PositionGetString(POSITION_SYMBOL);
            ENUM_POSITION_TYPE pos_type = (ENUM_POSITION_TYPE)PositionGetInteger(POSITION_TYPE);
            
            // Normalize volume theo symbol
            double min_lot = SymbolInfoDouble(symbol, SYMBOL_VOLUME_MIN);
            double lot_step = SymbolInfoDouble(symbol, SYMBOL_VOLUME_STEP);
            
            // Làm tròn volume theo lot step
            if(lot_step > 0)
            {
                volume = MathRound(volume / lot_step) * lot_step;
            }
            
            // Kiểm tra volume tối thiểu
            if(volume < min_lot)
            {
                error_desc = "Partial close volume (" + DoubleToString(volume, 2) + 
                           ") is below minimum lot size (" + DoubleToString(min_lot, 2) + ")";
                return false;
            }
            
            // Kiểm tra volume còn lại sau khi đóng
            double remaining_volume = current_volume - volume;
            if(remaining_volume < min_lot)
            {
                error_desc = "Remaining volume (" + DoubleToString(remaining_volume, 2) + 
                           ") would be below minimum lot size (" + DoubleToString(min_lot, 2) + 
                           "). Use close all instead.";
                return false;
            }
            
            // Thực hiện đóng một phần sử dụng PositionClosePartial
            if(trade.PositionClosePartial(ticket, volume))
            {
                if(EnableLogging)
                    Print("Position partially closed - Original Ticket: ", ticket, 
                          ", Closed Volume: ", DoubleToString(volume, 2),
                          ", Remaining Volume: ", DoubleToString(remaining_volume, 2));
                return true;
            }
            
            error_desc = "Partial position close failed: " + trade.ResultComment();
            return false;
        }
    }
    
    // Kiểm tra xem có phải là pending order không
    if(OrderSelect(ticket))
    {
        // Đây là pending order, chỉ có thể hủy toàn bộ (không thể hủy một phần)
        if(volume > 0)
        {
            error_desc = "Pending orders cannot be partially deleted. Use volume=0 to delete completely.";
            return false;
        }
        
        if(trade.OrderDelete(ticket))
        {
            if(EnableLogging)
                Print("Pending order deleted - Ticket: ", ticket);
            return true;
        }
        error_desc = "Pending order delete failed: " + trade.ResultComment();
        return false;
    }
    
    error_desc = "Order/Position with ticket " + IntegerToString(ticket) + " not found";
    return false;
}

//+------------------------------------------------------------------+
//| Execute buy limit order                                          |
//+------------------------------------------------------------------+
bool ExecuteBuyLimit(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price <= 0)
    {
        error_desc = "Buy Limit requires valid price";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_ASK);
    if(price >= current_price)
    {
        error_desc = "Buy Limit price must be below current market price";
        return false;
    }
    
    if(trade.OrderOpen(symbol, ORDER_TYPE_BUY_LIMIT, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        return true;
    }
    
    error_desc = "Buy Limit order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute sell limit order                                         |
//+------------------------------------------------------------------+
bool ExecuteSellLimit(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price <= 0)
    {
        error_desc = "Sell Limit requires valid price";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_BID);
    if(price <= current_price)
    {
        error_desc = "Sell Limit price must be above current market price";
        return false;
    }
    
    if(trade.OrderOpen(symbol, ORDER_TYPE_SELL_LIMIT, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        return true;
    }
    
    error_desc = "Sell Limit order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute buy stop order                                           |
//+------------------------------------------------------------------+
bool ExecuteBuyStop(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first  
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price <= 0)
    {
        error_desc = "Buy Stop requires valid price";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_ASK);
    if(price <= current_price)
    {
        error_desc = "Buy Stop price must be above current market price";
        return false;
    }
    
    if(trade.OrderOpen(symbol, ORDER_TYPE_BUY_STOP, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        return true;
    }
    
    error_desc = "Buy Stop order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute sell stop order                                          |
//+------------------------------------------------------------------+
bool ExecuteSellStop(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price <= 0)
    {
        error_desc = "Sell Stop requires valid price";
        return false;
    }
    
    double current_price = SymbolInfoDouble(symbol, SYMBOL_BID);
    if(price >= current_price)
    {
        error_desc = "Sell Stop price must be below current market price";
        return false;
    }
    
    if(trade.OrderOpen(symbol, ORDER_TYPE_SELL_STOP, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
    {
        ticket = trade.ResultOrder();
        return true;
    }
    
    error_desc = "Sell Stop order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute buy order                                                |
//+------------------------------------------------------------------+
bool ExecuteBuyOrder(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price == 0)
    {
        // Market order
        if(trade.Buy(volume, symbol, 0, sl, tp, comment))
        {
            ticket = trade.ResultOrder();
            return true;
        }
    }
    else
    {
        // Pending order
        double current_price = SymbolInfoDouble(symbol, SYMBOL_ASK);
        ENUM_ORDER_TYPE pending_type = (price < current_price) ? ORDER_TYPE_BUY_LIMIT : ORDER_TYPE_BUY_STOP;
        
        if(trade.OrderOpen(symbol, pending_type, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
        {
            ticket = trade.ResultOrder();
            return true;
        }
    }
    
    error_desc = "Buy order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Execute sell order                                               |
//+------------------------------------------------------------------+
bool ExecuteSellOrder(string symbol, double volume, double price, double sl, double tp, string comment, ulong &ticket, string &error_desc)
{
    // Find best matching symbol first
    string matched_symbol = FindBestMatchingSymbol(symbol);
    if(matched_symbol != "")
        symbol = matched_symbol;
        
    if(price == 0)
    {
        // Market order
        if(trade.Sell(volume, symbol, 0, sl, tp, comment))
        {
            ticket = trade.ResultOrder();
            return true;
        }
    }
    else
    {
        // Pending order
        double current_price = SymbolInfoDouble(symbol, SYMBOL_BID);
        ENUM_ORDER_TYPE pending_type = (price > current_price) ? ORDER_TYPE_SELL_LIMIT : ORDER_TYPE_SELL_STOP;
        
        if(trade.OrderOpen(symbol, pending_type, volume, 0, price, sl, tp, ORDER_TIME_GTC, 0, comment))
        {
            ticket = trade.ResultOrder();
            return true;
        }
    }
    
    error_desc = "Sell order failed: " + trade.ResultComment();
    return false;
}

//+------------------------------------------------------------------+
//| Get pending orders information                                   |
//+------------------------------------------------------------------+
string GetOrdersInfo()
{
    string json = "{\"success\":true,\"timestamp\":" + IntegerToString(TimeCurrent()) + ",\"orders\":[";
    
    bool first = true;
    for(int i = 0; i < OrdersTotal(); i++)
    {
        ulong ticket = OrderGetTicket(i);
        if(ticket > 0)
        {
            if(!first) json += ",";
            first = false;
            
            json += "{";
            json += "\"ticket\":" + IntegerToString(ticket) + ",";
            json += "\"symbol\":\"" + OrderGetString(ORDER_SYMBOL) + "\",";
            json += "\"type\":" + IntegerToString(OrderGetInteger(ORDER_TYPE)) + ",";
            json += "\"volume\":" + DoubleToString(OrderGetDouble(ORDER_VOLUME_CURRENT), 2) + ",";
            json += "\"price_open\":" + DoubleToString(OrderGetDouble(ORDER_PRICE_OPEN), 5) + ",";
            json += "\"price_stop\":" + DoubleToString(OrderGetDouble(ORDER_PRICE_STOPLIMIT), 5) + ",";
            json += "\"sl\":" + DoubleToString(OrderGetDouble(ORDER_SL), 5) + ",";
            json += "\"tp\":" + DoubleToString(OrderGetDouble(ORDER_TP), 5) + ",";
            json += "\"time_setup\":" + IntegerToString(OrderGetInteger(ORDER_TIME_SETUP)) + ",";
            json += "\"comment\":\"" + OrderGetString(ORDER_COMMENT) + "\"";
            json += "}";
        }
    }
    
    json += "]}";
    return json;
}

//+------------------------------------------------------------------+
//| Extract value from JSON string                                   |
//+------------------------------------------------------------------+
string ExtractJsonValue(string json_str, string key)
{
    string search_key = "\"" + key + "\"";
    int key_pos = StringFind(json_str, search_key);
    if(key_pos == -1) return "";
    
    int colon_pos = StringFind(json_str, ":", key_pos);
    if(colon_pos == -1) return "";
    
    int start_pos = colon_pos + 1;
    
    // Skip whitespace
    while(start_pos < StringLen(json_str) && 
          (StringGetCharacter(json_str, start_pos) == ' ' || 
           StringGetCharacter(json_str, start_pos) == '\t'))
    {
        start_pos++;
    }
    
    if(start_pos >= StringLen(json_str)) return "";
    
    bool is_string = (StringGetCharacter(json_str, start_pos) == '"');
    if(is_string) start_pos++; // Skip opening quote
    
    int end_pos = start_pos;
    if(is_string)
    {
        // Find closing quote
        while(end_pos < StringLen(json_str) && StringGetCharacter(json_str, end_pos) != '"')
            end_pos++;
    }
    else
    {
        // Find comma, closing brace, or end of string
        while(end_pos < StringLen(json_str))
        {
            ushort ch = StringGetCharacter(json_str, end_pos);
            if(ch == ',' || ch == '}' || ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r')
                break;
            end_pos++;
        }
    }
    
    if(end_pos <= start_pos) return "";
    
    return StringSubstr(json_str, start_pos, end_pos - start_pos);
}

//+------------------------------------------------------------------+
//| Get positions information                                         |
//+------------------------------------------------------------------+
string GetPositionsInfo()
{
    string json = "{\"success\":true,\"timestamp\":" + IntegerToString(TimeCurrent()) + ",\"positions\":[";
    
    bool first = true;
    for(int i = 0; i < PositionsTotal(); i++)
    {
        ulong ticket = PositionGetTicket(i);
        if(ticket > 0)
        {
            if(!first) json += ",";
            first = false;
            
            json += "{";
            json += "\"ticket\":" + IntegerToString(ticket) + ",";
            json += "\"symbol\":\"" + PositionGetString(POSITION_SYMBOL) + "\",";
            json += "\"type\":" + IntegerToString(PositionGetInteger(POSITION_TYPE)) + ",";
            json += "\"volume\":" + DoubleToString(PositionGetDouble(POSITION_VOLUME), 2) + ",";
            json += "\"open_price\":" + DoubleToString(PositionGetDouble(POSITION_PRICE_OPEN), 5) + ",";
            json += "\"current_price\":" + DoubleToString(PositionGetDouble(POSITION_PRICE_CURRENT), 5) + ",";
            json += "\"sl\":" + DoubleToString(PositionGetDouble(POSITION_SL), 5) + ",";
            json += "\"tp\":" + DoubleToString(PositionGetDouble(POSITION_TP), 5) + ",";
            json += "\"profit\":" + DoubleToString(PositionGetDouble(POSITION_PROFIT), 2) + ",";
            json += "\"swap\":" + DoubleToString(PositionGetDouble(POSITION_SWAP), 2) + ",";
            json += "\"comment\":\"" + PositionGetString(POSITION_COMMENT) + "\"";
            json += "}";
        }
    }
    
    json += "]}";
    return json;
}

//+------------------------------------------------------------------+
//| Get account information                                           |
//+------------------------------------------------------------------+
string GetAccountInfo()
{
    string json = "{\"success\":true,\"timestamp\":" + IntegerToString(TimeCurrent()) + ",\"account\":{";
    json += "\"balance\":" + DoubleToString(AccountInfoDouble(ACCOUNT_BALANCE), 2) + ",";
    json += "\"equity\":" + DoubleToString(AccountInfoDouble(ACCOUNT_EQUITY), 2) + ",";
    json += "\"margin\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN), 2) + ",";
    json += "\"free_margin\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN_FREE), 2) + ",";
    json += "\"margin_level\":" + DoubleToString(AccountInfoDouble(ACCOUNT_MARGIN_LEVEL), 2) + ",";
    json += "\"profit\":" + DoubleToString(AccountInfoDouble(ACCOUNT_PROFIT), 2) + ",";
    json += "\"currency\":\"" + AccountInfoString(ACCOUNT_CURRENCY) + "\",";
    json += "\"leverage\":" + IntegerToString(AccountInfoInteger(ACCOUNT_LEVERAGE)) + ",";
    json += "\"login\":" + IntegerToString(AccountInfoInteger(ACCOUNT_LOGIN)) + ",";
    json += "\"server\":\"" + AccountInfoString(ACCOUNT_SERVER) + "\",";
    json += "\"company\":\"" + AccountInfoString(ACCOUNT_COMPANY) + "\"";
    json += "}}";
    return json;
}

//+------------------------------------------------------------------+
//| Create success response JSON                                     |
//+------------------------------------------------------------------+
string CreateSuccessResponse(ulong ticket, string action)
{
    string json = "{";
    json += "\"success\":true,";
    json += "\"ticket\":" + IntegerToString(ticket) + ",";
    json += "\"action\":\"" + action + "\",";
    json += "\"timestamp\":" + IntegerToString(TimeCurrent());
    json += "}";
    
    return json;
}

//+------------------------------------------------------------------+
//| Create error response JSON                                       |
//+------------------------------------------------------------------+
string CreateErrorResponse(string error_message)
{
    string json = "{";
    json += "\"success\":false,";
    json += "\"error\":\"" + error_message + "\",";
    json += "\"timestamp\":" + IntegerToString(TimeCurrent());
    json += "}";
    
    return json;
}

//+------------------------------------------------------------------+