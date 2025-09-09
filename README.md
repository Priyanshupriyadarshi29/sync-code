🚀 Sync-Code

A real-time collaborative code synchronization app built with Node.js and a lightweight frontend.

Perfect for pair programming, live coding sessions, and collaborative debugging.

📂 Project Structure
sync-code/
├── server.js          # Core backend server
├── src/               # Frontend assets
├── package.json       # Node.js dependencies & scripts
├── package-lock.json  # Dependency lock file
├── .env.example       # Sample environment variables

⚡ Features

🔄 Real-time code sync – seamless collaborative editing

🌐 Web interface – minimal, fast, and easy to use

🔑 Environment-based config – customizable setup

🛠️ Getting Started
✅ Prerequisites

Node.js (v14 or later recommended)

npm

📥 Installation
git clone https://github.com/Priyanshupriyadarshi29/sync-code.git
cd sync-code
cp ".env.example" .env   # configure your environment
npm install

▶️ Run Locally
npm start


The app will be available at http://localhost:3000
 (or the port you configure in .env).

⚙️ Configuration

Update .env with your settings:

PORT=3000

💻 Tech Stack

Node.js – server-side runtime

Express.js – HTTP request handling

Socket.IO – real-time, event-driven communication

🧠 How It Works

A user types code in the editor.

The frontend sends updates to the server via WebSockets.

The server broadcasts changes to all connected clients.

All editors update instantly, ensuring a smooth collaborative experience.

🤝 Contributing

Contributions are always welcome!

Fork the repository

Create a feature branch (feature/your-feature-name)

Commit your changes with clear messages

Open a Pull Request for review
