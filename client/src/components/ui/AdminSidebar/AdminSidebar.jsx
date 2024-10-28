import React, { useState } from "react";
import Link from "next/link";
import { ChevronUp, Users, Home, LogOut } from "lucide-react";
import Image from "next/image";
import futureTechLog from "../../../../public/logos/futureTech.png";

const Sidebar = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState(null);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const getItemClasses = (section) => {
    const isActive = activeSection === section;
    return `flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-300 ${
      isActive
        ? "bg-white text-black"
        : "text-gray-300 hover:bg-zinc-800 hover:text-white"
    }`;
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white flex flex-col shadow-lg transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center justify-center">
          <Image
            src={futureTechLog}
            alt="Logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto">
        {/* Dashboard Section */}
        <Link href="/admin/dashboard" passHref>
          <div className="px-4 mt-6 hover:border-l-4 focus:border-l-4 border-l-yellow-600 outline-none transition-all duration-100 ease-in-out">
            <div
              className={getItemClasses("dashboard")}
              onClick={() => handleSectionClick("dashboard")}
            >
              <Home className="w-6 h-6" />
              <span className="font-medium ml-2">Dashboard</span>
            </div>
          </div>
        </Link>

        {/* Blog Section */}
        <div className="relative transition">
          <div
            className="px-4 mt-6 hover:border-l-4 focus:border-l-4 border-l-yellow-600 outline-none transition-all duration-100 ease-in-out"
            onClick={handleToggle}
          >
            <div
              onClick={() => handleSectionClick("blog")}
              className={getItemClasses("blog")}
            >
              <span className="flex mr-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                  />
                  <path stroke="currentColor" strokeWidth="2" d="M4 8h16" />
                </svg>
              </span>
              <span>
                Blog
                <ChevronUp
                  className={`absolute right-0 top-4 ml-auto mr-5 h-4 transition ${
                    isChecked ? "rotate-180" : ""
                  } ${
                    activeSection == "blog" ? "text-black" : "text-gray-300"
                  }`}
                />
              </span>
            </div>
          </div>
          <ul
            className={`flex m-2 flex-col overflow-hidden rounded-xl font-medium transition-all duration-300 ${
              isChecked ? "max-h-96" : "max-h-0"
            }`}
          >
            <Link href="/admin/create-blog" passHref>
              <li className="flex m-2 cursor-pointer py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:text-yellow-600">
                Create Blog
              </li>
            </Link>
            <Link href="/admin/blog-list" passHref>
              <li className="flex m-2 cursor-pointer py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:text-yellow-600">
                List Blog
              </li>
            </Link>
          </ul>
        </div>

        {/* Users Section */}
        <Link href={"/admin/all-users"} passHref>
          <div className="px-4 mt-6 hover:border-l-4 focus:border-l-4 border-l-yellow-600 outline-none transition-all duration-100 ease-in-out">
            <div
              className={getItemClasses("users")}
              onClick={() => handleSectionClick("users")}
            >
              <Users className="w-6 h-6 mr-2" />
              <span className="font-medium">Users</span>
            </div>
          </div>
        </Link>

        {/* Logout Section */}
        <div className="px-4 mt-6 hover:border-l-4 focus:border-l-4 border-l-yellow-600 outline-none transition-all duration-100 ease-in-out">
          <div
            className={getItemClasses("logout")}
            onClick={() => handleSectionClick("logout")}
          >
            <LogOut className="w-6 h-6 mr-2" />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 p-3 text-gray-300 hover:bg-zinc-800 rounded-lg cursor-pointer transition duration-200">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div>
            <div className="text-sm font-medium">Anita Cruz</div>
            <div className="text-xs text-gray-500">anita@somemail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
