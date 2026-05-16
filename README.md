# 📑 Daily Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-15 |
| **Course Day** | Day-4 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn how to use the Fetch API in React for retrieving data from external APIs and displaying it dynamically in the user interface. The task also focused on handling user interaction through button click events.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented Fetch API integration in React using button click events.

- **How:** Created a `getUsers()` function that sends an API request using the JavaScript `fetch()` method. Stored the received response data using React’s `useState` hook and rendered the fetched data dynamically using the `map()` function.

- **Why:** This implementation helped in understanding how React applications communicate with APIs and manage asynchronous data fetching operations.

---

### 2. UI/UX Enhancements

- Added a button-based interaction for fetching API data.
- Displayed fetched user data dynamically on the screen.
- Improved user experience by updating the UI without page reloads.
- Organized API handling logic into a reusable function.

---

### 3. Database / Backend Updates

- No backend or database changes were implemented today because the task focused on frontend API consumption using Fetch API in React.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>

      <h1>Fetch API Example</h1>

      <button onClick={getUsers}>
        Fetch Users
      </button>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default App;
```

---

## 📸 Screenshots / Proof of Work

> **Main UI Screenshot:**  
> ![Main UI Screenshot](/Screenshot/UI.png)

> **Fetched Data Screenshot:**  
> ![Fetched Data Screenshot](/Screenshot/Fetch-Data.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced difficulty understanding asynchronous API calls in React.

- **Solution:** Practiced using the Fetch API with `.then()` and understood how promises work in JavaScript.

---

- **Problem:** Data was not displaying dynamically after fetching.

- **Solution:** Used React `useState` to store API data and rendered it using the `map()` function.

---

- **Problem:** Understanding when API requests should execute.

- **Solution:** Implemented API fetching through button click events using the `onClick` handler.

---

## 💡 Key Learnings

- Learned how to use the Fetch API in React.
- Understood asynchronous operations and promises in JavaScript.
- Learned how to handle API responses using `.json()`.
- Practiced state management using `useState`.
- Improved understanding of dynamic rendering in React applications.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**