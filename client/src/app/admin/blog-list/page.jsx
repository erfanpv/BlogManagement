import React from "react";
import AdminNavBar from "@/components/ui/Navbars/AdminNavbar/AdminNavbar";
import BlogListingTableAdmin from "@/components/ui/BlogListings/BlogListingTableAdmin/BlogListingTableAdmin";

const BlogListingTable = () => {
  return (
    <div>
      <AdminNavBar />
      <BlogListingTableAdmin />
    </div>
  );
};

export default BlogListingTable;
