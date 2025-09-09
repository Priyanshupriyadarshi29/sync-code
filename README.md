# ⚡️ SYNC-CODE  

A **real-time collaborative code synchronization app** built with **Node.js** and a **minimal frontend**.  

Perfect for:  
- 👩‍💻 **Pair Programming**  
- 📡 **Live Coding**  
- 🐞 **Collaborative Debugging**  

---

# 📂 Project Structure  

- **server.js** – Core backend server (Express + Socket.IO)  
- **src/** – Frontend assets  
  - **index.html** – Main HTML file  
  - **css/** – Stylesheets  
    - style.css  
  - **js/** – Frontend scripts  
    - client.js  
- **config/** – Environment & configuration files  
  - default.js  
- **utils/** – Helper functions  
  - logger.js  
- **package.json** – Dependencies & scripts  
- **package-lock.json** – Dependency lock file  
- **.env.example** – Sample environment variables  
- **README.md** – Project documentation  

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

