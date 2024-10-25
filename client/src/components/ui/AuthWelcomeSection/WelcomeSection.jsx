import React from "react";

const WelcomeSection = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center p-8">
      <div className="flex">
        <div className="w-4 h-4 rounded-full bg-gray-500"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
      </div>
      <div className="flex mb-8">
        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
        <div className="w-4 h-4 rounded-full bg-gray-500"></div>
      </div>

      <div className="space-y-2">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          {title}
        </h1>
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default WelcomeSection;
