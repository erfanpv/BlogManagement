import React from "react";

const Modal = ({ isOpen, onClose, title, content, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-[#121212] rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4 text-white">{title}</h2>
        <div className="text-gray-300 mb-4">{content}</div>
        <div className="flex justify-end space-x-2">
          {actions}
          <button
            onClick={onClose}
            className="bg-gray-600 text-white rounded px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
