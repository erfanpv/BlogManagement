import React from "react";
import AdminNavBar from "@/components/ui/Navbars/AdminNavbar/AdminNavbar";
import CreateBlog from "@/components/ui/CreateBlog/CreateBlog";


const CreateBlogForm = () => {
  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#1a1a1a] p-8 text-gray-300">
        <CreateBlog />
      </div>
    </div>
  );
};

export default CreateBlogForm;
