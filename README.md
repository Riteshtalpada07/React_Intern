# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-19 |
| **Course Day** | Day-6 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn Custom Hooks in React and understand how reusable stateful logic can be created and shared across components. The focus was on building a Counter Application using a custom hook along with simple CSS styling for improved UI design.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented a Custom Hook Counter Application using `useState`.

- **How:** Created a reusable custom hook named `useCounter` that manages counter state and provides increment and decrement functions. Imported the custom hook inside `App.jsx` and connected it with UI buttons to update the counter dynamically.

- **Why:** This implementation helped in understanding how custom hooks simplify reusable logic in React applications and improve code modularity.

---

### 2. UI/UX Enhancements

- Designed a centered card layout using Flexbox.
- Added clean button styling with hover effects.
- Implemented responsive alignment for better user experience.
- Added spacing, shadows, and border-radius for modern UI appearance.

---

### 3. Database / Backend Updates

- No backend or database updates were implemented because today’s task focused on React Custom Hooks and frontend UI styling.

---

## 💻 Code Snippet: My Primary Contribution

### useCounter.jsx

```javascript
import { useState } from "react";

function useCounter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement
  };
}

export default useCounter;
```

---

### App.jsx

```javascript
import "./App.css";
import useCounter from "./useCounter";

function App() {

  const { count, increment, decrement } = useCounter();

  return (
    <div className="container">

      <div className="card">

        <h1>Custom Hook Counter</h1>

        <h2>Count: {count}</h2>

        <div className="btn-group">

          <button onClick={increment}>
            Increment
          </button>

          <button onClick={decrement}>
            Decrement
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
```

---

### App.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 350px;
}

.card h1 {
  margin-bottom: 20px;
  color: #333;
}

.card h2 {
  margin-bottom: 25px;
  color: #555;
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 15px;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  background-color: #222;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #444;
}
```

---

## 📸 Screenshots / Proof of Work

> **Counter App Screenshot:**  
> ![Counter App Screenshot](/Screenshot/counter.png)

> **Increment Function Screenshot:**  
> ![Increment Screenshot](/Screenshot/increment.png)

> **Decrement Function Screenshot:**  
> ![Decrement Screenshot](/Screenshot/decrement.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced difficulty understanding how custom hooks work internally.

- **Solution:** Learned that custom hooks are reusable JavaScript functions that can use React Hooks like `useState`.

---

- **Problem:** Counter value was not updating correctly during testing.

- **Solution:** Verified state updates using `setCount()` and properly connected event handlers to buttons.

---

- **Problem:** Difficulty creating a clean centered layout.

- **Solution:** Used CSS Flexbox properties like `justify-content` and `align-items` for proper alignment.

---

## 💡 Key Learnings

- Learned how to create and use Custom Hooks in React.
- Understood reusable stateful logic in React applications.
- Practiced `useState` Hook usage inside custom hooks.
- Improved understanding of React component modularity.
- Learned basic responsive UI styling using CSS Flexbox.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**
