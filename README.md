# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-13 |
| **Course Day** | Day-2 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to learn React Hooks, especially `useState` and `useEffect`, and understand how state changes trigger side effects in React applications. The focus was on creating a form interface and handling form submission logic using React Hooks.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Created a Resume Form using React Hooks (`useState` and `useEffect`).

- **How:** Implemented a form containing input fields for Name, Email, Phone Number, and Date of Birth. Used `useState` to track the submit count and `useEffect` to monitor changes in the state. Added logic to display an alert message when the submit count becomes even and reload the page automatically.

- **Why:** This implementation helped in understanding state management, side effects, event handling, and how React Hooks work together in functional components.

---

### 2. UI/UX Enhancements

- Designed a simple and structured Resume Form interface.
- Added proper spacing between input fields for better readability.
- Used semantic input types such as `email`, `tel`, and `date` for improved form usability.
- Added interactive form submission behavior using alerts.

---

### 3. Database / Backend Updates

- No backend or database implementation was done today because the task focused on React Hooks and frontend form handling.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);

  function incrementCount(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  useEffect(() => {

    if (count % 2 === 0 && count !== 0) {

      alert("Thanks for submitting the form!");
      window.location.reload();
    }

  }, [count]);

  return (
    <>
      <form action="">
        <h1>Resume Form</h1>

        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" />

        <br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" />

        <br /><br />

        <label htmlFor="phoneNo">Phone No:</label><br />
        <input type="tel" id="phoneNo" name="phoneNo" />

        <br /><br />

        <label htmlFor="DOB">DOB:</label><br />
        <input type="date" id="DOB" name="DOB" />

        <br /><br />

        <button onClick={incrementCount}>Submit</button>
      </form>
    </>
  )
}

export default App
```

---

## 📸 Screenshots / Proof of Work

> **Form UI Screenshot:**  
> ![Form Screenshot](/Screenshots/UI.png)

> **Alert Message Screenshot:**  
> ![Alert Screenshot](/Screenshots/alert%20msg.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced confusion about when `useEffect` executes after state updates.

- **Solution:** Learned that `useEffect` runs whenever the dependency array value changes and used `[count]` as the dependency.

---

- **Problem:** Form was refreshing automatically on button click.

- **Solution:** Used `e.preventDefault()` inside the submit function to prevent default form behavior.

---

- **Problem:** Understanding how to trigger logic only for even submit counts.

- **Solution:** Used the modulus `%` operator with conditional logic inside `useEffect`.

---

## 💡 Key Learnings

- Learned how to use `useState` for state management in React.
- Understood the working of the `useEffect` Hook.
- Practiced handling form events in React.
- Learned how dependency arrays work inside `useEffect`.
- Improved understanding of React functional components and Hooks.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**