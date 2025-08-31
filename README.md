# Sync‑Code (Realtime Collaborative Code Editor)

**Sync‑Code** is a real-time collaborative code editor built from scratch. It allows multiple users to edit code together, share sessions, and collaborate efficiently.

---

##  Features

- **Real-time collaboration**: Multiple users can code together live.
- **Room-based sharing**: Create or join unique rooms via an ID.
- **Syntax highlighting** & **auto-language detection** for clean UI.
- **Code execution**: Run code within the environment.
- **User presence & selection indicators**: See who’s online and what they’re editing.
- **Live chat**: Communicate with teammates in-session.
- **Download code as ZIP**: Save your work easily.
- **Dark/light themes** and customizable editor settings.

---

##  Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, Socket.IO
- **Real-Time Sync**: WebSockets via Socket.IO
- **Deployment**: Vercel

---

##  Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### 1. Clone the Project
```bash
git clone https://github.com/Priyanshupriyadarshi29/sync-code.git
cd sync-code
2. Configure Environment Variables
Create a .env file (or use example.env as reference).
For example:

ini
Copy code
PORT=3000
CLIENT_URL=http://localhost:5173
3. Install Dependencies & Run
bash
Copy code
npm install         # or yarn install
npm run dev         # or yarn dev
Then access the app at:
http://localhost:5173 (or the port specified)

Contributing
Want to contribute? Feel free to:

Fork the repository

Fork → Clone → Feature branch → Commit → Create Pull Request

About
Developed by Priyanshu Priyadarshi. Designed to offer seamless, real-time coding collaboration—perfect for pair programming, teaching, or coding sessions.
