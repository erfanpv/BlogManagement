"use client";
import React from "react";
import BlogForm from "@/components/forms/BlogForm/BlogForm";
import useBlog from "@/hooks/useBlog";

const CreateBlog = () => {
  const { mutate, isLoading, error } = useBlog();

  const handleCreateBlog = (data) => {
    mutate(data);
  }

  return (
    <div className="max-w-6xl mx-auto">
      {isLoading ? (
        <p className="text-center text-gray-500">Creating blog...</p>
      ) : (
        <BlogForm onSubmit={handleCreateBlog} />
      )}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default CreateBlog;
