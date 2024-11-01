import React from "react";
import EditBlog from "@/components/ui/EditBlog/EditBlog";
import TopBanner from "@/components/ui/TopBanner/TopBanner";
import Navbar from "@/components/ui/Navbars/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

const EditBlogPage = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <TopBanner/>
      <Navbar/>
      <div className="min-h-screen bg-[#1a1a1a] p-8 text-gray-300">
        <EditBlog id={id} isNavigate={true}/>
      </div>
      <Footer/>
    </div>
  );
};

export default EditBlogPage;
