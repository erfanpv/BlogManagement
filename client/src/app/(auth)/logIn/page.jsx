import React from "react";
import WelcomeSection from "@/components/ui/AuthWelcomeSection/WelcomeSection";
import LoginForm from "@/components/forms/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-[#1A1A1A] flex items-center justify-center border-t border-gray-800">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <WelcomeSection
          title="Welcome,"
          subtitle="Enter Your Details To Stay Logged In"
        />

        {/* Right Section - Form */}
        <div className="min-h-screen flex flex-col justify-center space-y-6 p-8 border-l border-gray-800">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
