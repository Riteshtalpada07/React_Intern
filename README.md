# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-16 |
| **Course Day** | Day-5 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn the Context API in React and understand how global state management works without prop drilling. The focus was on creating a Theme Toggle Application using `createContext`, `Provider`, and `useContext()`.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented Theme Toggle functionality using React Context API.

- **How:** Created a `ThemeContext` using `createContext()` and wrapped the application with `ThemeContext.Provider`. Shared the theme state and toggle function globally through the provider and accessed them inside the `Navbar` component using the `useContext()` hook. Added a button to dynamically switch between Light Mode and Dark Mode.

- **Why:** This implementation helped in understanding how Context API eliminates prop drilling and allows global data sharing between components efficiently.

---

### 2. UI/UX Enhancements

- Implemented Light and Dark theme switching.
- Dynamically changed background and text colors based on the current theme.
- Added a Theme Toggle button for better user interaction.
- Created a clean and organized component structure.

---

### 3. Database / Backend Updates

- No backend or database updates were implemented because today’s task focused on React Context API and frontend state management.

---

## 💻 Code Snippet: My Primary Contribution

### ThemeContext.jsx

```javascript
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
```

---

### Navbar.jsx

```javascript
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
      }}
    >
      <h1>Current Theme: {theme}</h1>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Navbar;
```

---

### App.jsx

```javascript
import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

function App() {

  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      <Navbar />
    </ThemeContext.Provider>
  );
}

export default App;
```

---

## 📸 Screenshots / Proof of Work

> **Light Theme Screenshot:**  
> ![Light Theme Screenshot](/Screenshots/light-theme.png)

> **Dark Theme Screenshot:**  
> ![Dark Theme Screenshot](/Screenshots/dark-theme.png)

> **Theme Toggle Button Screenshot:**  
> ![Theme Toggle Screenshot](/Screenshots/theme-toggle.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced confusion understanding how Context API shares data globally.

- **Solution:** Learned how `Provider` passes values to all child components inside the component tree.

---

- **Problem:** Difficulty accessing shared data inside components.

- **Solution:** Used the `useContext()` hook to directly consume context values inside the `Navbar` component.

---

- **Problem:** Understanding how to dynamically switch themes.

- **Solution:** Implemented conditional logic using `useState` to toggle between light and dark themes.

---

## 💡 Key Learnings

- Learned how to create global state using Context API.
- Understood the purpose of `createContext()` and `Provider`.
- Practiced using the `useContext()` hook.
- Learned how Context API helps avoid prop drilling.
- Improved understanding of React Hooks and component communication.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**