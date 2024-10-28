"use client";
import AdminSidebar from "@/components/ui/AdminSidebar/AdminSidebar";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set `isMounted` to true after the component mounts
    setIsMounted(true);

    // Function to handle screen resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Show sidebar on larger screens
      } else {
        setIsOpen(false); // Hide sidebar on smaller screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden relative bg-gray-100">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 right-4 p-2 text-white z-50 bg-gray-800 rounded hover:bg-gray-700 transition duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white shadow-lg z-40 transition-transform duration-300 md:static ${
          isMounted
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "hidden"
        }`}
      >
        <AdminSidebar isOpen={isOpen} />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto transition-all duration-300">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
