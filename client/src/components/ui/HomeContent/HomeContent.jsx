"use client";
import React from "react";
import Image from "next/image";
import arrowIcon from "../../../../public/Icons/arrowIcons.png";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useFetchAllBlogs } from "@/hooks/useBlog";

const HomeContent = () => {
  const { data: blogs, isLoading, isError } = useFetchAllBlogs()

  const token = getCookie("user_token");

  const router = useRouter();

  const handleBlogView = (id) => {
    if (token) {
      router.push(`blog/${id}`);
    } else {
      router.push(`user/logIn`);
    }
  };

  return (
    <div className="p-6 bg-customGray">
      {blogs?.length > 0 && (
        <div className="mb-4 p-6 bg-customGray rounded-sm shadow-lg md:flex md:flex-row overflow-hidden">
          <div className="md:w-1/3 w-full h-64 md:h-auto overflow-hidden">
            <Image
              src={blogs[0]?.image}
              alt={blogs[0]?.title}
              width={800}
              height={600}
            />
          </div>
          <div className="md:w-2/3 w-full p-4 md:p-6 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
              {blogs[0]?.paragraphs[0]?.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-8">
              {blogs[0]?.paragraphs[0]?.description}
            </p>
            <div className="text-gray-500 text-xs md:text-sm mb-6 md:mb-10">
              <div className="flex justify-between">
                <span className="font-semibold">Category</span>
                <span className="font-semibold">Publication Date</span>
                <span className="font-semibold">Author</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>{blogs[0].category}</span>
                <span>
                  {new Date(blogs[0].date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>{blogs[0].author}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 mb-2">
              <button className="border border-gray-500 text-white px-3 py-2 rounded-full hover:bg-gray-800">
                Like
              </button>
              <button className="border border-gray-500 text-white px-3 py-2 rounded-full hover:bg-gray-800">
                Share
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                onClick={() => handleBlogView(blogs[0]._id)}
              >
                Read More
                <Image src={arrowIcon} className="ml-2 w-4" alt="Arrow Icon" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-t border-gray-700">
        {blogs?.slice(1, 7).map((blog, index) => (
          <div
            key={blog._id || index}
            className="bg-customGray rounded-lg shadow-md p-4 overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={600}
              className="w-full h-48 md:h-56 rounded-lg object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{blog.category}</p>
            <div className="flex items-center space-x-2 mb-2">
              <button className="border border-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-800">
                Like
              </button>
              <button className="border border-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-800">
                Share
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                onClick={() => handleBlogView(blog._id)}
              >
                Read More
                <Image src={arrowIcon} className="ml-2 w-4" alt="Arrow Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-userCard w-full flex flex-col items-start p-6 py-12 md:py-24 text-left relative">
        <div className="bg-customGray1 text-white px-2 py-1 rounded-sm mb-2">
          Featured Blog
        </div>
        <div className="flex flex-col md:flex-row md:items-center w-full">
          <h2 className="text-2xl md:text-5xl mb-4 md:mb-0 md:mr-4">
            Visual Insights for the Modern Viewer
          </h2>
          <button className="flex items-center border border-gray-500 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-800 mt-2 md:mt-0">
            View All
            <Image src={arrowIcon} className="ml-2 w-4" alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
