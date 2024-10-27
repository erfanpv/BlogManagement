import React from "react";
import Image from "next/image";
import adminLogin from "../../../../../public/images/adminLogin.png";
import AdminLoginForm from "@/components/forms/LoginForm/AdminLogin";

const AdminLoginPage = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center px-8 md:px-12">
          <div className="max-w-md w-full space-y-8">
            <div className="space-y-2">
              <h1 className="text-white text-3xl font-semibold">Login</h1>
              <p className="text-gray-400 text-sm">
                How do I get started lorem ipsum dolor sit?
              </p>
            </div>

            <AdminLoginForm />
          </div>
        </div>

        {/* Right Section*/}
        <div className="hidden md:block relative rounded-lg overflow-hidden bg-yellow-400">
          <div className=" inset-0 flex flex-col justify-center p-10 z-10">
            <h2 className="text-black text-3xl font-medium leading-tight">
              Very good works are
              <br />
              waiting for you
              <br />
              Sign up Now
            </h2>
          </div>
          <div className="absolute bottom-0 right-0 z-20">
            <Image
              src={adminLogin}
              alt="Professional woman with laptop"
              className="object-cover"
              layout="responsive"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
