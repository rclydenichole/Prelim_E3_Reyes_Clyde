'use client';

import Navbar from "@/components/navbar";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Sun, Moon }from "lucide-react";
import { useEffect, useState } from "react";

export default function Settings() {
  const [siteName, setSiteName ] = useState("");

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

    useEffect(() => {
      const savedSiteName = localStorage.getItem("siteName");
  
      if (savedSiteName) {
        setSiteName(savedSiteName);
      } else {
        setSiteName("Clyde Nichole Reyes");
        localStorage.setItem("siteName", "Clyde Nichole Reyes");
      }
    }, []);

  return (
    <>
    <ThemeProvider>
      <Navbar siteName={siteName} />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Appearance</h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-black dark:text-white">Theme</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {theme === 'dark' ? 'Dark mode is enabled!' : 'Light mode is enabled!'}
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )} 
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
    </>
  );
}