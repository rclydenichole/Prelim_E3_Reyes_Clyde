//import React, { ReactNode } from 'react';
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/ThemeContext";


function Home() {

  return (
    <>
    <ThemeProvider>
      <Navbar />
      <main>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Welcome to Our Website!</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
            We&apos;re excited to have you here. Explore our amazing features and discover what we have to offer.
          </p>
        </div>
    </main>
    </ThemeProvider>
    
    </>
  );
}

export default Home;

