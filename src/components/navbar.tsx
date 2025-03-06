'use client'

import Link from 'next/link';
import { UserCircle, Settings, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Clyde Nichole Reyes</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-700 transition">
              <UserCircle className="h-6 w-6" />
            </Link>
            <Link href="/settings" className="p-2 rounded-full hover:bg-gray-700 transition">
              <Settings className="h-6 w-6" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
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

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/settings2" className="flex items-center p-2 rounded-full hover:bg-gray-700 transition">
              <UserCircle className="h-6 w-6" />
              <span className="ml-2">Profile</span>
            </Link>
          </div>
          <div className="flex space-x-2 px-3 py-2">
            <Link href="/settings" className="flex items-center p-2 rounded-full hover:bg-gray-700 transition">
              <Settings className="h-6 w-6" />
              <span className="ml-2">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}