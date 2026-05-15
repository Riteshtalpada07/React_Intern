# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-14 |
| **Course Day** | Day-3 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn React Routing using `react-router-dom` and understand how navigation works in single-page React applications. The focus was on implementing multiple pages and enabling navigation without page reloads.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented Routing in React using `react-router-dom`.

- **How:** Used `BrowserRouter` to wrap the application and created routes using `Routes` and `Route` components. Developed separate `Home` and `About` components and connected them through routing paths. Added a reusable `Navbar` component for navigation between pages.

- **Why:** This implementation helped in understanding client-side routing and how React handles navigation in single-page applications without refreshing the browser.

---

### 2. UI/UX Enhancements

- Created a reusable navigation bar for smooth page navigation.
- Structured the application into separate pages for better organization.
- Enabled seamless navigation between components without page reloads.
- Improved project structure by separating routing and UI components.

---

### 3. Database / Backend Updates

- No backend or database updates were implemented today because the task focused only on frontend routing concepts in React.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

import './App.css'

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
```

---

## 📸 Screenshots / Proof of Work

> **Home Page Screenshot:**  
> ![Home Screenshot](/Screenshot/Home.png)

> **About Page Screenshot:**  
> ![About Screenshot](/Screenshot/About.png)

> **Navbar Screenshot:**  
> ![Navbar Screenshot](/Screenshot/navbar.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced issues understanding how routing works in React applications.

- **Solution:** Learned how `BrowserRouter` manages application routes and wraps all routing components.

---

- **Problem:** Navigation links were refreshing the page instead of routing properly.

- **Solution:** Used React Router components properly and implemented routing inside `Routes`.

---

- **Problem:** Difficulty organizing multiple page components.

- **Solution:** Created separate component files (`Home`, `About`, and `Navbar`) for better project structure and maintainability.

---

## 💡 Key Learnings

- Learned how to implement routing in React using `react-router-dom`.
- Understood the purpose of `BrowserRouter`, `Routes`, and `Route`.
- Learned how single-page applications handle navigation without page reloads.
- Practiced component-based project organization.
- Improved understanding of React application structure and navigation flow.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**