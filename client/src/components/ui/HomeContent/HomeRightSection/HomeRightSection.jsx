"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const HomeRightSection = () => {
  const router = useRouter();
  const token = getCookie("user_token");

  const handleBlogView = () => {
    router.push(`/blogs`);
  };

  return (
    <section className="md:w-1/3 h-full flex ">
      <div className="bg-customGrayrounded-xl p-8 relative overflow-hidden flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-800"
              ></div>
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Explore 1000+ resources</h3>
        <p className="text-gray-400 mb-4">
          Over 1,000 articles on emerging tech trends and breakthroughs.
        </p>
        <button
          className="flex items-center text-gray-300 hover:text-gray-400 transition-colors border px-7 py-3 rounded-md"
          onClick={handleBlogView}
        >
          Explore Resources
          <svg
            className="w-4 h-4 ml-2 text-yellow-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HomeRightSection;
