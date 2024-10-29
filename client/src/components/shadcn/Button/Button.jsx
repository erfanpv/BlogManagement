import React from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-yellow-400 text-black font-medium py-3 rounded-lg hover:bg-yellow-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

