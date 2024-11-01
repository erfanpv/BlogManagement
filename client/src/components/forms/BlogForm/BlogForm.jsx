"use client";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/shadcn/Button/Button";
import Input from "@/components/shadcn/Input/Input";
import blogSchema from "@/schemas/blogSchema";
import { useCreateBlog } from "@/hooks/useBlog";

const BlogForm = ({ initialData, initialImage, onSubmit, resetImage, isEdit = false }) => {
  const [image, setImage] = useState(initialImage || null);
  const [imageError, setImageError] = useState("");
  const { mutate: createBlog, isLoading, error } = useCreateBlog();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      date: "",
      category: "",
      author: "",
      paragraphs: [{ title: "", description: "" }],
      ...initialData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "paragraphs",
  });

  useEffect(() => {
    if (initialData) {
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandler = (data) => {
    if (!image) {
      setImageError("Blog image is required");
      return;
    }
    const blogData = { ...data, image };
    onSubmit(blogData, () => {
      reset(); 
      setImage(null); 
      resetImage(); 
    });
  };

  const handleAddParagraph = () => {
    append({ title: "", description: "" });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="max-w-6xl mx-auto"
      >
        {/* Blog Image Upload */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-4">
            <label className="block text-sm mb-2">Blog Image</label>
            <div
              className={`border-2 h-28 w-60 ${
                image
                  ? "border-green-500 bg-gray-100"
                  : "border-dashed border-yellow-500"
              } rounded-lg p-6 cursor-pointer`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleImageDrop}
              onClick={() => document.getElementById("imageUpload").click()}
            >
              {image ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-center text-gray-700">Image Uploaded</p>
                  <button
                    onClick={() => setImage(null)} 
                    className="mt-2 px-2 py-1 text-sm text-white bg-red-500 rounded"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <p className="text-sm text-center">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs">SVG, PNG, JPG or GIF</p>
                </div>
              )}
              <input
                id="imageUpload"
                type="file"
                className="hidden"
                onChange={handleImageDrop}
                accept="image/*"
              />
            </div>
            {imageError && <p className="text-red-500">{imageError}</p>}
          </div>
        </div>
        {/* Form Fields */}
        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Blog Title</label>
              <Input
                type="text"
                className="w-full"
                placeholder="The Best Kept Secrets"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Publishing Date</label>
              <Input
                type="date"
                className={`w-full ${
                  isEdit ? "text-gray-500 cursor-not-allowed" : ""
                }`}
                placeholder="Pick Date"
                {...register("date")}
                disabled={isEdit}
                onFocus={(e) => isEdit && e.target.blur()}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Category</label>
              <select
                className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                {...register("category")}
              >
                <option value="">Choose Category</option>
                {[
                  "Technology",
                  "Health & Fitness",
                  "Lifestyle",
                  "Business & Finance",
                  "Travel",
                  "Food & Recipes",
                  "Entertainment",
                  "Education",
                  "Fashion & Beauty",
                  "Sports",
                  "Politics",
                  "Automobile",
                  "Finance",
                  "Wellness",
                  "Environment",
                ].map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Author Name</label>
              <Input
                type="text"
                className="w-full mb-6"
                placeholder="Author Name"
                {...register("author")}
              />
              {errors.author && (
                <p className="text-red-500">{errors.author.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* Paragraphs Section */}
        {fields.map((paragraph, index) => (
          <div key={paragraph.id} className="mb-6">
            <label className="block text-sm mb-2">Paragraph Title</label>
            <Input
              type="text"
              placeholder="Enter paragraph title"
              {...register(`paragraphs.${index}.title`)}
              className="w-full"
            />
            {errors.paragraphs?.[index]?.title && (
              <p className="text-red-500">
                {errors.paragraphs[index].title.message}
              </p>
            )}
            <label className="block text-sm mb-2 mt-4">Description</label>
            <textarea
              className="w-full h-32 bg-[#2a2a2a] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter paragraph description"
              {...register(`paragraphs.${index}.description`)}
            />
            {errors.paragraphs?.[index]?.description && (
              <p className="text-red-500">
                {errors.paragraphs[index].description.message}
              </p>
            )}
            {fields.length > 1 && (
              <Button
                type="button"
                onClick={() => remove(index)}
                className="px-6 py-2 rounded-lg text-sm font-medium"
              >
                Remove Paragraph
              </Button>
            )}
          </div>
        ))}
        <Button
          onClick={handleAddParagraph}
          type="button"
          className="px-6 py-2 rounded-lg text-sm font-medium"
        >
          ADD NEW PARAGRAPH AND DESCRIPTION
        </Button>
        <div className="flex justify-end">
          <Button type="submit" className="px-12 py-4" disabled={isLoading}>
            {isEdit
              ? isLoading
                ? "Editing Blog..."
                : "Edit Blog"
              : isLoading
              ? "Creating Blog..."
              : "Create Blog"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
