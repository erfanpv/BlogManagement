import React from "react";
import { ArrowUpRight } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="w-full bg-black py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-gray-300 text-xs sm:text-sm whitespace-nowrap">
        <span>
          Subscribe to our Newsletter for New & Latest Blogs and Resources
        </span>
        <ArrowUpRight className="w-4 h-4 ml-2 text-yellow-400" />
      </div>
    </div>
  );
};

export default TopBanner;
