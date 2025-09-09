sync-code
A simple real-time code synchronization app built with Node.js and a minimal frontend.

Useful for pair programming, live coding, and collaborative debugging.

📂 Project Structure
sync-code/
├── server.js # Core backend server
├── src/ # Frontend assets
├── package.json # Node.js dependencies & scripts
├── package-lock.json # Dependency lock file
├── .env example # Sample environment variables

⚡ Features
🔄 Real-time code sync – collaborative editing

🌐 Web interface – lightweight and easy to use

🔑 Environment-based config – easy to customize

🛠️ Getting Started
Prerequisites
Node.js (v14+ recommended)

npm

Installation
git clone [https://github.com/Priyanshupriyadarshi29/sync-code.git](https://github.com/Priyanshupriyadarshi29/sync-code.git)
cd sync-code
cp ".env example" .env    # configure your environment
npm install

Run Locally
npm start

The app will start on http://localhost:3000 (or the port you set in .env).

⚙️ Configuration
Set values in .env:

PORT=3000

💻 Technologies Used
Node.js: The server-side JavaScript runtime.

Express: A web framework for Node.js used to handle HTTP requests.

Socket.IO: A library that enables real-time, bidirectional, and event-based communication between the client and the server.

🧠 How it Works
The application uses WebSockets to achieve real-time synchronization. When a user types in the editor, the frontend sends a message with the updated code to the server. The server then broadcasts this change to all other connected clients, ensuring everyone's editor is instantly updated. This happens seamlessly, providing a fluid collaborative experience.

🤝 Contributing
Contributions are welcome! If you'd like to improve this project, here's how you can help:

Fork the repo: Create your own copy of the repository.

Create a feature branch: Name your branch something like feature/add-new-functionality.

Commit your changes: Make sure your commit messages are clear and descriptive.

Open a Pull Request: Submit your changes for review.
