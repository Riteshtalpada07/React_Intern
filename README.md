# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-20 |
| **Course Day** | Day-7 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn the fundamentals of backend development using Node.js and understand how to create a basic HTTP server using Node’s built-in `http` module. The focus was on handling requests and responses between the server and browser.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Created a basic HTTP server using Node.js.

- **How:** Imported the built-in `http` module using `require()`, created a server using `http.createServer()`, and handled request-response communication using `req` and `res` objects. Displayed a `"Hello World"` message in the browser and started the server on port `3000`.

- **Why:** This implementation helped in understanding how backend servers work internally and how Node.js handles client requests and server responses.

---

### 2. UI/UX Enhancements

- Displayed a simple browser response using server-side JavaScript.
- Improved understanding of browser-server communication flow.
- Learned how server responses are rendered directly in the browser.

---

### 3. Database / Backend Updates

- Implemented a backend server using Node.js.
- Learned how to start and run a local development server.
- Understood request and response handling in backend applications.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
const http = require("http");

const server = http.createServer((req, res) => {

    res.write("Hello World");

    res.end();
});

server.listen(3000, () => {

    console.log("Server is running on port 3000");
});
```
## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced difficulty understanding how servers communicate with browsers.

- **Solution:** Learned the role of request (`req`) and response (`res`) objects in handling browser communication.

---

- **Problem:** The server was not starting correctly during testing.

- **Solution:** Verified the correct file name and executed the server using the `node filename.js` command.

---

- **Problem:** Understanding when to use `res.write()` and `res.end()`.

- **Solution:** Learned that `res.write()` sends data while `res.end()` finishes the response cycle.

---

## 💡 Key Learnings

- Learned how to create a server using Node.js.
- Understood the purpose of the built-in `http` module.
- Learned how request and response objects work.
- Practiced running backend applications using Node.js.
- Improved understanding of client-server communication.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Localhost Server (`http://localhost:3000`)

---

**Signature:**  
**Talpada Ritesh Vijaybhai**
