import React from "react";
import TopBanner from "@/components/ui/TopBanner/TopBanner";
import Navbar from "@/components/ui/Navbars/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import BlogListingTableUser from "@/components/ui/BlogListings/BlogListingTable/BlogListingTable";

const page = () => {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <BlogListingTableUser/>
      <Footer />
    </div>
  );
};

export default page;
