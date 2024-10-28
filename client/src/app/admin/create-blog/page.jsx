import React from "react";
import BlogForm from "@/components/forms/BlogForm/BlogForm";
import AdminNavBar from "@/components/ui/AdminNavbar/AdminNavbar";

const CreateBlogForm = () => {
  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#1a1a1a] p-8 text-gray-300">
        <BlogForm />
      </div>
    </div>
  );
};

export default CreateBlogForm;
