"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/logos/futureTech.png";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { checkAuthenticationCleint } from "@/utils/authClient";

const Navbar = ({
  showLinks = true,
  showContactButton = true,
  showAuthButtons = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const isAuthenticated = checkAuthenticationCleint();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    deleteCookie("user_token");
    localStorage.removeItem("userId");
    router.push("/user/logIn");
  };

  return (
    <div className="w-full">
      <nav className="w-full py-4 px-4 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div href={"/"} className="flex items-center">
            <Image
              src={Logo}
              alt="FutureTech Logo"
              width={120}
              height={40}
              className="sm:w-[150px] sm:h-[50px]"
            />
          </div>

          {/* Conditional Navigation links */}
          {showLinks && (
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/blogs" className="text-white hover:text-gray-300">
                News
              </Link>
              <Link href="/blogs" className="text-white hover:text-gray-300">
                Podcasts
              </Link>
              <Link href="/blogs" className="text-white hover:text-gray-300">
                Resources
              </Link>
              <Link href="/my-blogs" className="text-white hover:text-gray-300">
                My Blogs
              </Link>
            </div>
          )}

          {/* Conditional Auth and Contact Buttons */}
          <div className="flex items-center space-x-4">
            {showAuthButtons &&
              isMounted &&
              (isAuthenticated ? (
                <>
                  <Link
                    href="/create-blog"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
                  >
                    Create Blog
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/user/logIn"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/user/signup"
                    className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              ))}
            {showContactButton && (
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                Contact Us
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
