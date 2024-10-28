import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import AdminNavBar from "@/components/ui/AdminNavbar/AdminNavbar";

const BlogListingTable = () => {
  const blogs = [
    {
      author: "Tiger Nixon",
      category: "Travel Diaries",
      title: "The Best Kept Secrets",
      datePublished: "22/5/2009",
    },
    {
      author: "Garrett Winters",
      category: "Cultural Insights",
      title: "A Guide for Travelers",
      datePublished: "22/5/2011",
    },
    {
      author: "Ashton Cox",
      category: "Adventure & Exploration",
      title: "Try Dishes",
      datePublished: "25/5/2011",
    },
    {
      author: "Tiger Nixon",
      category: "Travel Diaries",
      title: "The Best Kept Secrets",
      datePublished: "22/5/2009",
    },
    {
      author: "Garrett Winters",
      category: "Cultural Insights",
      title: "A Guide for Travelers",
      datePublished: "22/5/2011",
    },
    {
      author: "Ashton Cox",
      category: "Adventure & Exploration",
      title: "Try Dishes",
      datePublished: "25/5/2011",
    },
    {
      author: "Tiger Nixon",
      category: "Travel Diaries",
      title: "The Best Kept Secrets",
      datePublished: "22/5/2009",
    },
    {
      author: "Garrett Winters",
      category: "Cultural Insights",
      title: "A Guide for Travelers",
      datePublished: "22/5/2011",
    },
    {
      author: "Ashton Cox",
      category: "Adventure & Exploration",
      title: "Try Dishes",
      datePublished: "25/5/2011",
    },
    {
      author: "Tiger Nixon",
      category: "Travel Diaries",
      title: "The Best Kept Secrets",
      datePublished: "22/5/2009",
    },
    {
      author: "Garrett Winters",
      category: "Cultural Insights",
      title: "A Guide for Travelers",
      datePublished: "22/5/2011",
    },
    {
      author: "Ashton Cox",
      category: "Adventure & Exploration",
      title: "Try Dishes",
      datePublished: "25/5/2011",
    },
  ];

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#121212] p-6">
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                  Author
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                  Title
                </th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                  Date Published
                </th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {blogs.map((blog, index) => (
                <tr
                  key={index}
                  className="hover:bg-zinc-800/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {blog.author}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {blog.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">
                    {blog.datePublished}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-gray-300 transition-colors">
                      <Pencil className="w-4 h-4 inline-block" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-300 transition-colors">
                      <Trash2 className="w-4 h-4 inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogListingTable;
