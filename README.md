# sync-code

A simple **real-time code synchronization** app built with **Node.js** and a minimal frontend.  
Useful for **pair programming, live coding, and collaborative debugging**.

---


---

## 📂 Project Structure

sync-code/
├── server.js # Core backend server
├── src/ # Frontend assets
├── package.json # Node.js dependencies & scripts
├── package-lock.json # Dependency lock file
├── .env example # Sample environment variables




---

## ⚡ Features
- 🔄 **Real-time code sync** – collaborative editing
- 🌐 **Web interface** – lightweight and easy to use
- 🐳 **Docker support** – run anywhere with containers
- 🔑 **Environment-based config** – easy to customize

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)


### Installation

```bash
git clone https://github.com/Priyanshupriyadarshi29/sync-code.git
cd sync-code
cp ".env example" .env   # configure your environment
npm install
Run Locally
bash
Copy code
npm start
The app will start on http://localhost:3000 (or the port you set in .env).

🐳 Run with Docker
bash
Copy code
docker build -t sync-code .
docker run --env-file .env -p 3000:3000 sync-code
Or using Docker Compose:

bash
Copy code
docker-compose up --build
⚙️ Configuration
Set values in .env:

ini
Copy code
PORT=3000
(extend this list with any additional variables you add later)

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a feature branch

Commit your changes

Open a Pull Request
