import http from "@/lib/axiosIntercepter";
import axiosInstance from "@/lib/axiosIntance";

export const deleteBlog = async (id) => {
  const response = await http.delete(`base/blog/${id}`);
  return response.data;
};

export const editBlog = async ({ id, updatedData }) => {
  const response = await http.patch(`base/blog/${id}`, updatedData);
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axiosInstance.get(`base/blog/${id}`);
  return response.data;
};

export const createBlog = async (blogData) => {
  const id = localStorage.getItem("userId");
  const response = await http.post(`/base/create-blog/${id}`, blogData);
  return response.data;
};

export const fetchAllBlogs = async () => {
  const response = await axiosInstance.get("/base/all-blogs");
  return response.data.data;
};


export const getBlogsByUserId  = async () => {
  const id = localStorage.getItem("userId");
  const response = await http.get(`base/blogs/${id}`);
  return response.data.userBlogs[0].blogs;
};


