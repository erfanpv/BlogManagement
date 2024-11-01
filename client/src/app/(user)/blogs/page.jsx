import React from "react";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Footer from "@/components/ui/Footer/Footer";
import TopBanner from "@/components/ui/TopBanner/TopBanner";
import Navbar from "@/components/ui/Navbars/Navbar/Navbar";
import AllBlogs from "@/components/ui/AllBlogs/AllBlogs";
import { checkAuthentication } from "@/utils/authServer";

const Page = () => {
  const isAuthenticated = checkAuthentication();

  return (
    <div className="bg-customGray text-white min-h-screen">
      <TopBanner />
      <Navbar showLinks={true} showContactButton={true} isAuthenticated={isAuthenticated} showAuthButtons={true} />
      <AllBlogs />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Page;
