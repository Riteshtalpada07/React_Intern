import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
