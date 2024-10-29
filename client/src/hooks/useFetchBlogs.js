"use client";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosIntance";

const fetchBlogs = async () => {
  const response = await axiosInstance.get("/admin/all-blogs");
  return response.data.data;
};

const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    onError: (error) => {
      console.error(`Failed to fetch blogs: ${error.message}`);
    },
  });
};

export default useFetchBlogs;
