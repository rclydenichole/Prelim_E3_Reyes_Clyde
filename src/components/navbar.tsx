'use client';
// First, update your Navbar component to include the dark mode toggle
// components/Navbar.jsx
import Link from 'next/link';
import { UserCircle, Settings, Home, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Clyde Nichole Reyes</span>
            </Link>
          </div>

        {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            
            {/* Desktop Navigation */}
            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <UserCircle className="h-6 w-6" />
            </Link>
            <Link href="/settings" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <Settings className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center">
              <UserCircle className="h-6 w-6" />
              <span className="ml-2">Profile</span>
            </Link>
          </div>
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/settings" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center">
              <Settings className="h-6 w-6" />
              <span className="ml-2">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}