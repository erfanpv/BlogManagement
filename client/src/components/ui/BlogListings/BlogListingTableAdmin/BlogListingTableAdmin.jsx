"use client";
import React, { useState } from "react";
import { useDeleteBlog, useFetchAllBlogs } from "@/hooks/useBlog";
import { useRouter } from "next/navigation";
import Modal from "../../Modal/Modal";
import TableWithActions from "../../Table/TableWithActions";

const BlogListingTableAdmin = () => {
  const { data: blogs, isLoading, isError } = useFetchAllBlogs();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const deleteMutation = useDeleteBlog();
  const router = useRouter();

  // Open modal with selected blog
  const openDeleteModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Close modal
  const closeDeleteModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  // Handle delete action
  const handleDeleteBlog = async () => {
    if (!selectedBlog) return;

    await deleteMutation.mutateAsync(selectedBlog._id);
    closeDeleteModal();
  };

  const handleEditBlog = (blog) => {
    router.push(`edit-blog/${blog._id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blogs.</div>;
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
    <div>
      <div className="min-h-screen bg-[#121212] p-6">
        <TableWithActions
          columns={columns}
          data={blogs}
          onEdit={handleEditBlog}
          onDelete={openDeleteModal}
        />
      </div>
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

export default BlogListingTableAdmin;
