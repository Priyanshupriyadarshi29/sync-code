# ⚡️ SYNC-CODE  

A **real-time collaborative code synchronization app** built with **Node.js** and a **minimal frontend**.  

Perfect for:  
- 👩‍💻 **Pair Programming**  
- 📡 **Live Coding**  
- 🐞 **Collaborative Debugging**  

---

# 📂 Project Structure  

sync-code/
│
├── server.js
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── client.js
│
├── config/
│   └── default.js
│
├── utils/
│   └── logger.js
│
├── package.json
├── .env.example
└── README.md


yaml
Copy code

---

# ✨ Features  

- 🔄 **Real-time Sync** – instant updates across all users  
- 🌐 **Lightweight Web Interface** – no extra setup required  
- 🔑 **Customizable via `.env`** – quick and easy configuration  

---

# 🚀 Getting Started  

## ✅ Prerequisites  
- Node.js (v14+)  
- npm  

## 📥 Installation  

```bash
git clone https://github.com/Priyanshupriyadarshi29/sync-code.git
cd sync-code
cp .env.example .env   # configure environment
npm install
▶️ Running Locally
bash
Copy code
npm start
👉 App runs at http://localhost:3000 (or the port set in .env).

⚙️ Configuration
Set values in your .env file:

env
Copy code
PORT=3000
💻 Tech Stack
⚡ Node.js – Backend runtime

🛠️ Express.js – Server framework

🔗 Socket.IO – Real-time communication

🧠 How It Works
📝 User types code in the editor

📡 Frontend sends updates to server via WebSockets

🔄 Server broadcasts changes to all connected clients

⚡ Editors sync instantly → smooth collaboration

🤝 Contributing
We welcome contributions!

🍴 Fork this repository

🌱 Create a new branch: feature/your-feature

💾 Commit with clear messages

🚀 Push and open a Pull Request

