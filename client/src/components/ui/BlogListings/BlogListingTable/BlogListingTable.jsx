"use client";
import React, { useState } from "react";
import { useDeleteBlog, useGetBlogsByUserId } from "@/hooks/useBlog";
import { useRouter } from "next/navigation";
import Modal from "../../Modal/Modal";
import TableWithActions from "../../Table/TableWithActions";
import Link from "next/link";

const BlogListingTableUser = () => {
  const { data: blogs, isLoading, isError } = useGetBlogsByUserId();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const deleteMutation = useDeleteBlog();
  const router = useRouter();

  const openDeleteModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  const handleDeleteBlog = async () => {
    if (!selectedBlog) return;
    await deleteMutation.mutateAsync(selectedBlog._id);
    closeDeleteModal();
  };

  const handleEditBlog = (blog) => {
    router.push(`edit-blog/${blog._id}`);
  };

  if (isLoading) {
    return <div className="bg-black text-white p-20 text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error fetching blogs.</div>;
  }

  const columns = [
    { key: "author", label: "Author" },
    { key: "category", label: "Category" },
    { key: "title", label: "Title" },
    {
      key: "date",
      label: "Date Published",
      render: (date) =>
        new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Blogs</h2>
          <Link
            href="/create-blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Create Blog
          </Link>
        </div>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center">
            <h2 className="text-2xl font-semibold mb-4">You don’t have any blogs yet.</h2>
            <p className="text-gray-400 mb-6">Start sharing your insights with others!</p>
          </div>
        ) : (
          <TableWithActions
            columns={columns}
            data={blogs}
            onEdit={handleEditBlog}
            onDelete={openDeleteModal}
          />
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        title="Delete Blog"
        content={`Are you sure you want to delete the blog titled "${selectedBlog?.title}"?`}
        actions={
          <div className="flex justify-end space-x-4">
            <button
              onClick={closeDeleteModal}
              className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteBlog}
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600"
            >
              Confirm Delete
            </button>
          </div>
        }
      />
    </div>
  );
};

export default BlogListingTableUser;
