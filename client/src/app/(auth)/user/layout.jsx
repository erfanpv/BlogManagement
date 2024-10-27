import React from "react";
import AuthNavbar from "@/components/ui/AuthNavbar/AuthNavbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthNavbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
