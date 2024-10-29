"use client";
import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import AdminNavBar from "@/components/ui/AdminNavbar/AdminNavbar";
import useFetchBlogs from "@/hooks/useFetchBlogs";
import Modal from "@/components/ui/Modal/Modal";
import { useDeleteBlog } from "@/hooks/useBlog";
import { useRouter } from "next/navigation";

const BlogListingTable = () => {
  const { data: blogs, isLoading, isError } = useFetchBlogs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const deleteMutation = useDeleteBlog(); 
  const router = useRouter();


  // Function to open modal with selected blog
  const openDeleteModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeDeleteModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  // Function to handle the delete action
  const handleDeleteBlog = async () => {
    if (!selectedBlog) return;

    await deleteMutation.mutateAsync(selectedBlog._id);
    closeDeleteModal();
  };

  const handleEditBLog = (blog) => {
    router.push(`edit-blog/${blog._id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blogs.</div>;
  }

  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-[#121212] p-6">
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
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
                {blogs?.map((blog) => (
                  <tr
                    key={blog._id}
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
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                        onClick={() => handleEditBLog(blog)}
                      >
                        <Pencil className="w-4 h-4 inline-block" />
                      </button>
                      <button
                        onClick={() => openDeleteModal(blog)}
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                      >
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

      {/* Modal for delete confirmation */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        title="Delete Blog"
        content={`Are you sure you want to delete the blog titled "${selectedBlog?.title}"?`}
        actions={
          <button
            onClick={handleDeleteBlog}
            className="bg-red-500 text-white rounded px-4 py-2"
          >
            Confirm Delete
          </button>
        }
      />
    </div>
  );
};

export default BlogListingTable;
