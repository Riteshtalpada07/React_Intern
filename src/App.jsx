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