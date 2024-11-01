"use client";
import React from "react";
import BlogForm from "@/components/forms/BlogForm/BlogForm";
import { useEditBlog, useGetBlogById } from "@/hooks/useBlog";

const EditBlog = ({ id,isNavigate }) => {
  const { data: blogData, isLoading: isFetching, error: fetchError } = useGetBlogById(id);
  const { mutate, isLoading: isMutating, error: editError } = useEditBlog(isNavigate);

  const handleEditBlog = (updatedData) => {
    mutate({ id, updatedData }); 
  };

  if (isFetching) return <p>Loading blog data...</p>;
  if (fetchError) return <p className="text-red-500">Error fetching blog data: {fetchError.message}</p>;

  return (
    <>
      {isMutating && <p>Saving changes...</p>}
      <BlogForm onSubmit={handleEditBlog} initialData={blogData?.data} isEdit={true}/>
      {editError && <p className="text-red-500">Error editing blog: {editError.message}</p>}
    </>
  );
};

export default EditBlog;
