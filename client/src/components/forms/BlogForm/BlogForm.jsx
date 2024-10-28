"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, ChevronDown, Upload } from "lucide-react";
import Button from "@/components/shadcn/Button/Button";
import Input from "@/components/shadcn/Input/Input";
import blogSchema from "@/schemas/blogSchema";

const BlogForm = () => {
  const [image, setImage] = useState(null);
  const [paragraphs, setParagraphs] = useState([
    { title: "", description: "" },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogSchema),
  });

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    const blogData = {
      ...data,
      paragraphs,
    };
    console.log(blogData);
  };

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, { title: "", description: "" }]);
  };

  const handleParagraphChange = (index, field, value) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index][field] = value;
    setParagraphs(updatedParagraphs);
  };

  const categories = [
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
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
        {/* Top Section Grid */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Blog Image Upload - Takes up left portion */}
          <div className="col-span-4">
            <label className="block text-sm mb-2">Blog Image</label>
            <div
              className="border-2 border-dashed border-yellow-500 rounded-lg p-6 cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleImageDrop}
              onClick={() => document.getElementById("imageUpload").click()}
            >
              <div className="flex flex-col items-center justify-center text-gray-400">
                <Upload className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="text-sm text-center">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs">SVG, PNG, JPG or GIF</p>
              </div>
              <input
                id="imageUpload"
                type="file"
                className="hidden"
                onChange={handleImageDrop}
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Right side form fields */}
        <div className="col-span-8 space-y-6">
          {/* Blog Title and Publishing Date on same line */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Blog Title</label>
              <Input
                type="text"
                className={"w-full"}
                placeholder="The Best Kept Secrets"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Publishing Date</label>
              <div className="relative">
                <Input
                  className={"w-full"}
                  type="text"
                  placeholder="Pick Date"
                  {...register("date")}
                />
                <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Category and Author Name*/}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Category</label>
              <div className="relative">
                <select
                  className="w-full bg-[#2a2a2a] text-white border border-gray-700 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  {...register("category")}
                >
                  <option value="">Choose Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-2">Author Name</label>
              <Input
                type="text"
                className={"w-full mb-6"}
                placeholder="Germany"
                {...register("author")}
              />
              {errors.author && (
                <p className="text-red-500">{errors.author.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Paragraph Fields */}
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-6">
            <label className="block text-sm mb-2">Paragraph Title</label>
            <Input
              type="text"
              placeholder="Enter paragraph title"
              value={paragraph.title}
              onChange={(e) =>
                handleParagraphChange(index, "title", e.target.value)
              }
              className={"w-full"}
            />
            <label className="block text-sm mb-2 mt-4">Description</label>
            <textarea
              className="w-full h-32 bg-[#2a2a2a] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter paragraph description"
              value={paragraph.description}
              onChange={(e) =>
                handleParagraphChange(index, "description", e.target.value)
              }
            />
            {errors.paragraphs?.[index]?.description && (
              <p className="text-red-500">
                {errors.paragraphs[index].description.message}
              </p>
            )}
          </div>
        ))}

        {/* Add New Paragraph Button */}
        <div className="mb-6">
          <Button
            type="button"
            onClick={handleAddParagraph}
            className={" px-6 py-2 rounded-lg text-sm font-medium  "}
          >
            ADD NEW PARAGRAPH AND DESCRIPTION
          </Button>
        </div>

        {/* Create Blog Button */}
        <div className="flex justify-end ">
          <Button type="submit" className={"px-12 py-4"}>
            Create Blog
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
