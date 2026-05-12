# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Talpada Ritesh Vijaybhai |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-12 |
| **Course Day** | Day-1 |
| **GitHub Repo** | https://github.com/Riteshtalpada07/React_Intern.git |

---

## 🎯 Daily Objective

The objective of today’s task was to set up a React project using Vite and understand component-based development in React. The focus was on learning environment variables, props, reusable components, and dynamic rendering using arrays and `.map()`.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented

- **What:** Implemented Skill Prop-Injection using reusable React components and environment variables.

- **How:** Created a `skills` array inside `App.jsx` and passed it as props to the `SkillList` component. The `SkillList` component dynamically rendered `SkillBadge` components using `.map()`. Added conditional rendering logic to display a ⭐ icon for skills with a level greater than or equal to 90. Also displayed the intern name dynamically using `import.meta.env.VITE_INTERN_NAME`.

- **Why:** This implementation helped in understanding React props, dynamic rendering, reusable components, conditional rendering, and environment variable usage in Vite applications.

---

### 2. UI/UX Enhancements

- Created a simple and clean skill dashboard interface.
- Added dynamic star icon rendering for high-level skills.
- Displayed intern name dynamically from the `.env` file.
- Organized the project into reusable React components for better readability.

---

### 3. Database / Backend Updates

- No backend or database changes were implemented because today’s task focused only on React frontend concepts and component rendering.

---

## 💻 Code Snippet: My Primary Contribution

```javascript
import React from 'react'
import SkillBadge from './SkillBadge';

const SkillList = (props) => {

  return (
    props.skill.map(function (elem){

      console.log(elem);

      return (
        <SkillBadge
          name={elem.name}
          level={elem.level}
        />
      )
    })
  )
}

export default SkillList
```

---

## 📸 Screenshots / Proof of Work

> **UI Screenshot:**  
> ![UI Screenshot](/task-1/Screenshots/UI.png)

> **Console Output Screenshot:**  
> ![Console Screenshot](/task-1/Screenshots/console.png)

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Initially faced issues while rendering multiple components dynamically using `.map()`.

- **Solution:** Correctly passed props and used `.map()` to render multiple `SkillBadge` components dynamically.

---

- **Problem:** Difficulty understanding conditional rendering for displaying the ⭐ icon.

- **Solution:** Used an `if-else` condition inside the `SkillBadge` component to check skill levels.

---

- **Problem:** Understanding how to access environment variables in Vite.

- **Solution:** Learned to use `import.meta.env.VITE_INTERN_NAME` to access values from the `.env` file.

---

## 💡 Key Learnings

- Learned how to pass props between React components.
- Understood dynamic rendering using `.map()`.
- Practiced reusable component creation in React.
- Learned conditional rendering inside JSX.
- Understood how to use environment variables in Vite projects.
- Improved understanding of React project structure and component architecture.

---

## 🔗 Live Preview (If applicable)

- **Deployment Link:** Not Deployed Yet

---

**Signature:**  
**Talpada Ritesh Vijaybhai**