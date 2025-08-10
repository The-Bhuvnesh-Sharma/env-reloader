# env-reloader

🚀 **env-reloader** is a lightweight CLI tool that automatically restarts your Node.js server whenever the `.env` file changes.
Perfect for development environments where you frequently update environment variables.

---

## ✨ Features

* 📂 Watches `.env` file for changes
* ⚡ Automatically restarts your Node.js server
* 🎯 Lightweight & easy to use
* 🖥 Works on Windows, macOS, and Linux

---

## 📦 Installation

Install globally:

```bash
npm install -g env-reloader
```

Or install locally (for project-specific use):

```bash
npm install --save-dev env-reloader
```

---

## 🛠 Usage

### 1️⃣ Create a `.env` file

Example:

```env
PORT=3000
MESSAGE=Hello from env-reloader!
```

---

### 2️⃣ Create a test server (`server.js`)

```javascript
require('dotenv').config();

console.log("Server running with PORT:", process.env.PORT);
console.log("Message:", process.env.MESSAGE);
```

---

### 3️⃣ Add script in `package.json` (if installed locally)

```json
"scripts": {
  "dev": "env-reloader server.js"
}
```

---

### 4️⃣ Run the server

#### If installed globally:

```bash
env-reloader server.js
```

#### If installed locally (via npm script):

```bash
npm run dev
```

---

## 🔄 How it Works

* Starts your Node.js server
* Watches the `.env` file for changes
* On `.env` change:

  * Stops the server
  * Reloads `.env`
  * Restarts the server

---

## 📌 Example Workflow

1. Run your project with `env-reloader server.js`
2. Change something in `.env`:

   ```env
   PORT=4000
   MESSAGE=Updated message!
   ```
3. The server automatically restarts and loads the new values without manual intervention.

---
