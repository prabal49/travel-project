import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

 
   // Toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white shadow">

      <h1 className="text-xl font-bold text-blue-600">
        TravelWithVibes ✈️
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/budget">Budget</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/assistant">AI</Link>
        <Link to="/login">Login</Link>

        {/* 🌗 TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="text-sm px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;