import React, { forwardRef } from "react";

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`bg-[#2A2A2A] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 px-4 py-3 ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
