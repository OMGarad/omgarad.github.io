
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <button
        onClick={toggleTheme}
        className="fixed right-6 top-6 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? (
          <Moon size={20} className="text-primary" />
        ) : (
          <Sun size={20} className="text-white" />
        )}
      </button>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
