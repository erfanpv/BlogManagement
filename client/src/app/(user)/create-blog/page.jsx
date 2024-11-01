import React from "react";
import CreateBlog from "@/components/ui/CreateBlog/CreateBlog";
import TopBanner from "@/components/ui/TopBanner/TopBanner";
import Navbar from "@/components/ui/Navbars/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

const page = () => {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <div className="min-h-screen bg-[#1a1a1a] p-8 text-gray-300">
        <CreateBlog />
      </div>
      <Footer />
    </div>
  );
};

export default page;
