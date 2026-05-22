# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-21 |
| **Course Day** | Day-8 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn Express.js fundamentals and understand how to create APIs using routes and URL parameters. The focus was on building a simple Calculator API using Express and handling arithmetic operations dynamically through route parameters.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented Calculator APIs using Express.js.

- **How:** Created an Express server and defined multiple routes using `app.get()`. Used `req.params` to retrieve values directly from the URL and converted them into numbers using the `Number()` function. Implemented addition, subtraction, and multiplication operations and returned results using `res.send()`.

- **Why:** This implementation helped in understanding routing, API creation, parameter handling, and server-side response management using Express.js.

---

### 2. UI/UX Enhancements

- Built clean URL-based APIs for performing calculations.
- Displayed dynamic responses directly in the browser.
- Structured routes for better readability and API organization.
- Improved understanding of backend request-response flow.

---

### 3. Database / Backend Updates

- Installed and configured Express.js.
- Created backend API routes using `app.get()`.
- Implemented URL parameter handling using `req.params`.
- Built a basic backend calculator server using Node.js and Express.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
const express = require("express");

const app = express();

app.get("/sum/:a/:b", (req, res) => {

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Sum = ${a + b}`);
});

app.get("/sub/:a/:b", (req, res) => {

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Subtraction = ${a - b}`);
});

app.get("/mul/:a/:b", (req, res) => {

    let a = Number(req.params.a);
    let b = Number(req.params.b);

    res.send(`Multiplication = ${a * b}`);
});

app.listen(3000, () => {

    console.log("Server running on port 3000");
});
```

---

## 📸 Screenshots / Proof of Work

> **Terminal Running Server Screenshot:**  
> ![Terminal Screenshot](/Screenshots/terminal.png)

> **Addition API Screenshot:**  
> ![Addition API Screenshot](/Screenshots/sum.png)

> **Substraction API Screenshot:**
> ![Addition API Screenshot](/Screenshots/sub.png)

> **Multiplication API Screenshot:**
> ![Addition API Screenshot](/Screenshots/mul.png)

---


## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced confusion understanding route parameters in Express.

- **Solution:** Learned how `req.params` retrieves dynamic values directly from the URL.

---

- **Problem:** Arithmetic operations were returning incorrect results because URL values were treated as strings.

- **Solution:** Used the `Number()` function to convert string values into numbers before calculations.

---

- **Problem:** Understanding how API routes work internally.

- **Solution:** Practiced creating multiple routes using `app.get()` and tested APIs directly in the browser.

---

## 💡 Key Learnings

- Learned how to create APIs using Express.js.
- Understood routing and URL parameters in backend development.
- Practiced using `req.params` and `res.send()`.
- Learned how Node.js and Express handle client requests.
- Improved understanding of backend server architecture and API flow.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Localhost Server (`http://localhost:3000`)

---

**Signature:**  
**Talpada Ritesh Vijaybhai**