import React from "react";

export default function AdminNavBar() {
  return (
    <div className="bg-black px-8 py-4 flex items-center justify-start">
      {/* Left section: Title */}
      <div className="text-yellow-500 font-semibold text-lg mr-10">
        Create a Blog
      </div>

      {/* Right section: Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything here..."
          className="bg-gray-800 text-gray-400 placeholder-gray-500 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        {/* Search icon */}
        <span className="absolute left-3 top-2.5 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-3.5-3.5m0 0a5 5 0 1110 0 5 5 0 01-10 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
