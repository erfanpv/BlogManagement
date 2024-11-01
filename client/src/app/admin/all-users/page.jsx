"use client";
import React, { useState } from "react";
import AdminNavBar from "@/components/ui/Navbars/AdminNavbar/AdminNavbar";
import Modal from "@/components/ui/Modal/Modal";
import { useBlockOrUnblockUser, useFetchAllUsers } from "@/hooks/useUsers";

const UserGridLayout = () => {
  const { data: users = [], isLoading, isError, error } = useFetchAllUsers(1, 10);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: blockOrUnblockUser, isLoading: isToggling } = useBlockOrUnblockUser()

  const handleUserAction = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleToggleStatus = () => {
    if (selectedUser) {
      blockOrUnblockUser(selectedUser._id, {
        onSuccess: () => closeModal(),
      });
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#121212] p-6">
        {isLoading ? (
          <p className="text-gray-400">Loading users...</p>
        ) : isError ? (
          <p className="text-red-500">Error: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg p-6 hover:bg-zinc-800/50 transition-colors relative"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-white text-2xl">
                        {user.fullName.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-gray-200 font-medium">{user.fullName}</h3>
                  <p className="text-gray-400 text-sm">{user.designation}</p>
                </div>

                <div className="flex justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <p className="text-gray-200">{user.likes || 100}</p>
                    <p className="text-gray-400">Likes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-200">{user.comments || 25}</p>
                    <p className="text-gray-400">Comments</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-200">{user.shares || 300}</p>
                    <p className="text-gray-400">Shares</p>
                  </div>
                </div>

                <button
                  onClick={() => handleUserAction(user)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded px-2 py-1 text-sm"
                >
                  {user.is_blocked ? "Unblock" : "Block"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedUser?.is_blocked ? "Unblock User" : "Block User"}
        content={
          <p>
            Are you sure you want to{" "}
            {selectedUser?.is_blocked ? "unblock" : "block"}{" "}
            <span className="font-semibold">{selectedUser?.fullName}</span>?
          </p>
        }
        actions={
          <button
            onClick={handleToggleStatus}
            disabled={isToggling}
            className={`bg-red-500 text-white rounded px-4 py-2 mr-2 ${
              isToggling ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isToggling
              ? "Processing..."
              : selectedUser?.is_blocked
              ? "Unblock"
              : "Block"}
          </button>
        }
      />
    </div>
  );
};

export default UserGridLayout;
