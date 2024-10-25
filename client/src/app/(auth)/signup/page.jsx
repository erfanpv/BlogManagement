import React from "react";
import SignupForm from "@/components/forms/SignupForm/SignupForm";
import WelcomeSection from "@/components/ui/AuthWelcomeSection/WelcomeSection";

const SignUpPage = () => {
  return (
    <div className="bg-[#1A1A1A] flex items-center justify-center solid #262626 border-t border-gray-800  ">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <WelcomeSection
          title="Welcome,"
          subtitle="Enter Your Details To Create Account"
        />

        {/* Right Section - Form */}
        <div className="min-h-screen flex flex-col justify-center space-y-6 p-10 border-l border-gray-800">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
