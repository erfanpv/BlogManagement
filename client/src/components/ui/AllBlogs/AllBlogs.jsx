"use client";
import React from "react";
import Image from "next/image";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import arrowIcon from "../../../../public/Icons/arrowIcons.png";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useFetchAllBlogs } from "@/hooks/useBlog";

const AllBlogs = () => {
  const { data: blogs, isLoading, isError } = useFetchAllBlogs();

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
    <div className=" mx-auto p-6 pt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog, index) => (
          <div
            key={blog._id || index}
            className="bg-customGray rounded-lg shadow-lg overflow-hidden border border-gray-700 transition transform hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={600}
              className="w-full h-48 md:h-56 object-cover transition duration-300 hover:opacity-90"
              placeholder="blur"
              blurDataURL={blog.image}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{blog.category}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {blog.paragraphs[0].description || "Blog description here..."}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <button
                    aria-label="Like"
                    className="p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-red-500 transition"
                  >
                    <HeartIcon className="w-5 h-5" />
                  </button>
                  <button
                    aria-label="Share"
                    className="p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-blue-500 transition"
                  >
                    <ShareIcon className="w-5 h-5" />
                  </button>
                </div>
                <button
                  className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                  onClick={() => handleBlogView(blog._id)}
                >
                  Read More
                  <Image
                    src={arrowIcon}
                    className="ml-2 w-4"
                    alt="Arrow Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
