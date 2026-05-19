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