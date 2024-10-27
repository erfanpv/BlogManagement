import React from "react";
import Link from "next/link";
import logo from "../../../../public/logos/Logo.png";
import Image from "next/image";

const HeroSection = () => {
  const featureCards = [
    {
      title: "Resource Access",
      description:
        "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
      link: "#",
    },
    {
      title: "Community Forum",
      description:
        "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
      link: "#",
    },
    {
      title: "Tech Events",
      description:
        "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#111111] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* Logo and Content Section */}
        <div className="flex flex-col md:flex-row mb-24">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-0 md:mr-16">
            <Image
              src={logo}
              alt="FutureTech Logo"
              width={100}
              height={100}
              className="sm:w-[200px] sm:h-[130px]"
            />
          </div>

          {/* Hero Content */}
          <div className=" md:text-left">
            <p className="text-lg font-semibold text-white mb-6 bg-customGray1 py-2 pl-4  w-full md:w-1/3 rounded-md">
              Learn, Connect, and Innovate
            </p>
            <h1 className="text-4xl md:text-5xl mb-6 text-white">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="text-gray-400">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="bg-black p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featureCards.map((card, index) => (
              <Link
                href={card.link}
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-lg group hover:bg-[#222222] transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-white text-lg md:text-xl">
                    {card.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#FFB800] flex items-center justify-center group-hover:bg-[#FFC94D] transition-colors">
                    <svg
                      className="w-4 h-4 text-black transform group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
