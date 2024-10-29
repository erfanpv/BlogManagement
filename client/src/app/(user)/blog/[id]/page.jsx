"use client";
import Image from "next/image";
import React from "react";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Footer from "@/components/ui/Footer/Footer";
import AuthNavbar from "@/components/ui/AuthNavbar/AuthNavbar";
import useFetchBlogs from "@/hooks/useFetchBlogs";
import arrowicon from "../../../../../public/Icons/arrowIcons.png";
import BlogPageById from "@/components/ui/BlogPage/BlogPage";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

const BlogPage = ({ params }) => {
  const { id } = params;

  const router = useRouter();
  const token = getCookie("user_token");

  const handleBlogView = (id) => {
    if (token) {
      router.push(`/blog/${id}`);
    } else {
      router.push(`user/logIn`);
    }
  };

  const { data: blogs, isLoading, isError } = useFetchBlogs();

  return (
    <div>
      <AuthNavbar />

      <BlogPageById id={id} />

      <div className=" border-t border-gray-700 bg-customGray">
        <div className="flex justify-evenly mt-12">
          <h1 className="text-white">Similar news</h1>
          <button className="flex items-center border border-gray-500 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-800 mt-2 md:mt-0">
            View All News
            <Image src={arrowicon} className="ml-2 w-4" alt="Arrow Icon" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  p-14">
          {blogs?.slice(1, 4).map((blog, index) => (
            <div
              key={blog._id || index}
              className="bg-customGray rounded-lg shadow-md p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={600}
                className="w-full h-48 rounded-md object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">
                {blog.title}
              </h3>
              <div className="text-gray-500 text-sm mb-2">
                <p>{blog.category}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">
                  Like
                </button>
                <button className="border border-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-800">
                  Share
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  className="flex items-center border border-gray-500 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-800 font-extralight"
                  onClick={() => handleBlogView(blog._id)}
                >
                  Read More
                  <Image src={arrowicon} className="ml-2 w-4" alt="Arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HeroSection />
      <Footer />
    </div>
  );
};

export default BlogPage;
