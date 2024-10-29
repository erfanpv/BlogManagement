import React from "react";
import { Clock, Eye, Heart } from "lucide-react";
import Image from "next/image";
import { useGetBlogById } from "@/hooks/useBlog";

const BlogPageById = ({ id }) => {
  const { data: blogData, isLoading, error } = useGetBlogById(id);

  return (
    <div className="min-h-screen bg-customGray text-white">
      {/* Hero Section with background image */}
      <div className="relative h-[600px] ">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={blogData?.data?.image || "/default-image.jpg"}
            alt={"blog image"}
            width={800}
            height={600}
            className="w-full h-full rounded-sm object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>

          {/* Blue network overlay pattern */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="w-full h-full bg-[url('/api/placeholder/400/400')] bg-repeat"></div>
          </div>
        </div>

        {/* Heading overlaid on the image */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-end pb-20">
          <h1 className="text-5xl font-bold max-w-4xl">
            The Rise of Artificial Intelligence in Healthcare
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 ">
          {/* Left Content - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold max-w-4xl">Introduction</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {blogData?.data?.paragraphs[0]?.description}
              </p>

              {blogData?.data?.paragraphs?.map((content) => {
                return (
                  <section key={content._id}>
                    <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {content.description}
                    </p>
                  </section>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar - Takes up 1 column */}
          <div className="lg:col-span-1">
            {/* Engagement metrics at the top */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Heart size={16} className="text-red-500" />
                <span className="text-sm">24</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gray-400" />
                <span className="text-sm">3k</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-gray-400" />
                <span className="text-sm">3hr</span>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-400 text-xs uppercase mb-2">
                    Publication Date
                  </h3>
                  <p className="text-sm">
                    {new Date(blogData?.data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs uppercase mb-2">
                    Reading Time
                  </h3>
                  <p className="text-sm">15 min</p>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs uppercase mb-2">
                    Category
                  </h3>
                  <p className="text-sm"> {blogData?.data?.category}</p>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs uppercase mb-2">
                    Author
                  </h3>
                  <p className="text-sm">{blogData?.data?.author}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Introduction</li>
                <li>• AI Diagnostic Imaging</li>
                <li>• Predictive Analytics and Disease Prevention</li>
                <li>• Personalized Treatment Plans</li>
                <li>• Drug Discovery and Research</li>
                <li>• AI in Telemedicine</li>
                <li>• Ethical Considerations</li>
                <li>• The Future of AI in Healthcare</li>
                <li>• Conclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageById;
