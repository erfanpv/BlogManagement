import React from "react";
import { Filter, ChevronDown, MoreVertical } from "lucide-react";
import AdminNavBar from "@/components/ui/AdminNavbar/AdminNavbar";

const UserGridLayout = () => {
  const users = [
    {
      name: "Robert Whitstable",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Francois Boateng",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Elliot Bradbury",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Carlos Heroa",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    // Repeated for multiple rows
    {
      name: "Robert Whitstable",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Francois Boateng",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Elliot Bradbury",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Carlos Heroa",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    // Third row
    {
      name: "Robert Whitstable",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Francois Boateng",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Elliot Bradbury",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
    {
      name: "Carlos Heroa",
      role: "Product manager",
      image: "/api/placeholder/100/100",
      likes: 24,
      comments: 132,
      shares: 31,
    },
  ];

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#121212] p-6">
        {/* Header */}
        <div className="flex justify-end mb-6 space-x-4">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 text-sm">
            <Filter className="w-4 h-4" />
            <span>Filter users</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 text-sm">
            <span>Sort by date</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-gray-300">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 hover:bg-zinc-800/50 transition-colors"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* User Info */}
              <div className="text-center mb-4">
                <h3 className="text-gray-200 font-medium">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.role}</p>
              </div>

              {/* Metrics */}
              <div className="flex justify-center space-x-4 text-sm">
                <div className="text-center">
                  <p className="text-gray-200">{user.likes}</p>
                  <p className="text-gray-400">Like</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-200">{user.comments}</p>
                  <p className="text-gray-400">Comment</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-200">{user.shares}</p>
                  <p className="text-gray-400">Share</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserGridLayout;
