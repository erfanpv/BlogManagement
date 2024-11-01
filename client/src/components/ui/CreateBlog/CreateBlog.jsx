"use client";
import React, { useState } from "react";
import BlogForm from "@/components/forms/BlogForm/BlogForm";
import { useCreateBlog } from "@/hooks/useBlog";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const { mutate, isLoading, error } = useCreateBlog();
  const [image, setImage] = useState(null);

  const handleCreateBlog = (data, resetForm) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Blog created successfully!");
        resetForm();
        setImage(null);
      },
      onError: () => {
        setImage(null);
      },
    });
  };

  const resetImage = () => {
    setImage(null); // Reset the image state
  };

  return (
    <div className="max-w-6xl mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="loader">
            <div className="spinner" />
          </div>
          <p className="text-center text-gray-500">Creating blog...</p>
        </div>
      ) : (
        <BlogForm
          onSubmit={handleCreateBlog}
          initialImage={image}
          resetImage={resetImage}
        />
      )}
      {error && <p className="text-red-500 text-center">{error.message}</p>}
    </div>
  );
};

export default CreateBlog;
