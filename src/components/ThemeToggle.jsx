import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-10 w-10 items-center justify-center rounded-full
                 bg-slate-800 text-yellow-400 transition
                 hover:bg-purple-600 hover:text-white"
      aria-label="Toggle theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;