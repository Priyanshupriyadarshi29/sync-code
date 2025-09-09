⚡ Sync-Code

A real-time collaborative code synchronization app built with Node.js and a minimal frontend.

Ideal for:
👩‍💻 Pair Programming
📡 Live Coding
🐞 Collaborative Debugging

📂 Project Structure
sync-code/
├── server.js          # Core backend server
├── src/               # Frontend assets
├── package.json       # Node.js dependencies & scripts
├── package-lock.json  # Dependency lock file
├── .env.example       # Sample environment variables

✨ Features

✅ Real-time Sync – instant updates across all users
✅ Lightweight Web Interface – no extra setup required
✅ Customizable via .env – quick and easy configuration

🚀 Getting Started
Prerequisites

Node.js (v14+)

npm

Installation
git clone https://github.com/Priyanshupriyadarshi29/sync-code.git
cd sync-code
cp .env.example .env   # configure environment
npm install

Running Locally
npm start


👉 The app runs on http://localhost:3000
 (or the port set in .env).

⚙️ Configuration

Edit your .env file:

PORT=3000

🛠️ Tech Stack

Node.js – Backend runtime

Express.js – Server framework

Socket.IO – Real-time communication

🧩 How It Works

A user types code in the editor.

The frontend sends the update to the server via WebSockets.

The server broadcasts changes to all clients.

Everyone’s editor syncs instantly.

💡 Result: A smooth, real-time, collaborative coding experience.

🤝 Contributing

Contributions make this project better! 🚀

Fork this repository

Create a new branch: feature/your-feature

Commit with clear messages

Push and open a Pull Request
