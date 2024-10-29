import React from "react";
import EditBlog from "@/components/ui/EditBlog/EditBlog";
import AdminNavBar from "@/components/ui/AdminNavbar/AdminNavbar";

const EditBlogPage = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#1a1a1a] p-8 text-gray-300">
        <EditBlog id={id} />
      </div>
    </div>
  );
};

export default EditBlogPage;
