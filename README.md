# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-25 |
| **Course Day** | Day-9 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn how to serve static files and configure middleware in Express.js. The focus was on creating a basic Express server that serves frontend files from a `public` folder and handles incoming form and JSON data using middleware.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented a basic Express server with middleware and static file serving.

- **How:** Imported `express` and `path` modules, created an Express application, and configured middleware using `express.static()`, `express.urlencoded()`, and `express.json()`. Added a Home Route to serve the `index.html` file from the `public` folder using `res.sendFile()`.

- **Why:** This implementation helped in understanding how Express middleware works and how backend servers serve static frontend files efficiently.

---

### 2. UI/UX Enhancements

- Served frontend files dynamically from the `public` directory.
- Connected backend and frontend through Express routing.
- Improved application structure using middleware configuration.
- Enabled form data and JSON parsing support.

---

### 3. Database / Backend Updates

- Configured Express server setup.
- Implemented middleware for static files and request body parsing.
- Learned how to serve HTML files using `sendFile()`.
- Understood Express application structure and server configuration.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 📸 Screenshots / Proof of Work

> **Server Running Screenshot:**  
> ![Server Screenshot](/Screenshots/terminal.png)

> **Browser Output Screenshot:**  
> ![Browser Screenshot](/Screenshots/calculator.png)

> **Project Structure Screenshot:**  
> ![Project Structure Screenshot](/Screenshots/file-structure.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced confusion understanding middleware functionality in Express.

- **Solution:** Learned that middleware processes incoming requests before they reach routes.

---

- **Problem:** Static frontend files were not loading correctly.

- **Solution:** Used `express.static()` with the correct path using the `path.join()` method.

---

- **Problem:** Difficulty understanding how `sendFile()` works.

- **Solution:** Learned that `sendFile()` sends HTML files directly from the server to the browser.

---

## 💡 Key Learnings

- Learned how to configure middleware in Express.js.
- Understood how to serve static files using `express.static()`.
- Practiced using `express.urlencoded()` and `express.json()`.
- Learned how backend and frontend connect using Express routes.
- Improved understanding of Express server architecture and request handling.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Localhost Server (`http://localhost:3000`)

---

**Signature:**  
**Talpada Ritesh Vijaybhai**
