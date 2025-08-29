# TradingView MT5 & TradeLocker Connector

This project is a **desktop application** built with **Electron** and **Node.js** that integrates **TradingView** with both **MetaTrader 5 (MT5)** and **TradeLocker**.  
It allows traders to send and manage orders directly from TradingView to **MetaTrader 5 (MT5)** and **TradeLocker**.  

## 🚀 Features
- 📊 Connect TradingView signals to **MetaTrader 5 (MT5)**  
- 🔗 Full support for **TradeLocker** integration  
- 🧪 Works with **FPMarkets demo accounts**  
- ⚡ Real-time order execution and position management  
- 🔒 Secure and configurable API layer  

## 📦 Installation

Clone the repository:
\`\`\`bash
git clone https://github.com/<username>/TradingView.git
cd TradingView
\`\`\`

Install dependencies:
\`\`\`bash
npm install
\`\`\`

---

## ▶️ Usage

Start the application in development mode:
\`\`\`bash
npm start
\`\`\`

Build the application for production:
\`\`\`bash
npm run build
\`\`\`

---

## 🔗 MT5 Integration

To connect with **MetaTrader 5**, download the `MTAPI.ex5` file from the [Releases](../../releases) page and place it inside your MT5 **Experts** directory:
\`\`\`text
MQL5/Experts/MTAPI.ex5
\`\`\`

Then restart MT5 and enable the Expert Advisor.
🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
