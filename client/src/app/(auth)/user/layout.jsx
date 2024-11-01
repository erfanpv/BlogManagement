import React from "react";
import Navbar from "@/components/ui/Navbars/Navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showLinks={false} showContactButton={false} />
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
