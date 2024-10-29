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

export const getBlogById = async ( id ) => {
  const response = await axiosInstance.get(`base/blog/${id}`);
  return response.data;
};

