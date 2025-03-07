'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserCircle } from "lucide-react";

export default function Profile() {
  const [siteName, setSiteName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [imageError, setImageError] = useState(false); //for when the image is invalid

  useEffect(() => {
    const savedSiteName = localStorage.getItem("siteName");
    const savedProfileUrl = localStorage.getItem("profileUrl");

    if (savedSiteName) {
      setSiteName(savedSiteName);
    } else {
      setSiteName("Clyde Nichole Reyes");
      localStorage.setItem("siteName", "Clyde Nichole Reyes");
    }
    
    if (savedProfileUrl) {
      setProfileUrl(savedProfileUrl);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profileUrl", profileUrl);
    setImageError(false);
  }, [profileUrl]);
  
  useEffect(() => {
    if (siteName) {
      localStorage.setItem("siteName", siteName);
      document.title = siteName;
    }
  }, [siteName]);

  useEffect(() => {
    const savedSiteName = localStorage.getItem("siteName");
    if (savedSiteName) {
      setSiteName(savedSiteName);
    }
  }, []);

  return (
    <>
      <ThemeProvider>
        <Navbar siteName={siteName} />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <ProfilePicture url={profileUrl} onImageError={() => setImageError(true)} />
              
              <h1 className="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
                {siteName}&apos;s Profile
              </h1>
              
              <div className="w-full mt-6">
                <div className="mb-6">
                  <label 
                    htmlFor="siteName" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter website name"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    This will update the website name across all pages.
                  </p>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="profileUrl" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Profile Picture URL
                  </label>
                  <input
                    type="text"
                    id="profileUrl"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter image URL"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Enter a valid image URL to update your profile picture. Don&apos;t worry, the image will load automatically.
                  </p>
                  {imageError && (
                    <p className="text-sm text-red-500 mt-1">
                      The image URL could not be loaded. Please chekc the URL and try again.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

interface ProfilePictureProps {
  url?: string;
  onImageError?: () => void;
}

function ProfilePicture({ url, onImageError }: ProfilePictureProps) {
  return (
    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-800 shadow-lg">
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          src={url} 
          alt="Profile" 
          className="w-full h-full object-cover"
          onError={onImageError}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <UserCircle className="w-20 h-20 text-gray-400 dark:text-gray-500" />
        </div>
      )}
      <div className="absolute bottom-0 right-0 p-1 bg-white dark:bg-gray-700 rounded-full shadow-md">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
}