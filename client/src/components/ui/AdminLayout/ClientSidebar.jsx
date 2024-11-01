"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AdminSidebar from "@/components/ui/AdminSidebar/AdminSidebar";

const ClientSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 right-4 p-2 text-white z-50 bg-gray-800 rounded hover:bg-gray-700 transition duration-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white shadow-lg z-40 transition-transform duration-300 md:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar isOpen={isOpen} />
      </div>
    </>
  );
};

export default ClientSidebar;
