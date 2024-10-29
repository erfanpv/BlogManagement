import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBlog, editBlog, getBlogById } from "@/api/blogApi/blogApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import http from "@/lib/axiosIntercepter";

const useBlog = () => {
  const mutation = useMutation({
    mutationFn: async (blogData) => {
      const response = await http.post("/base/create-blog", blogData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Blog created successfully!");
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to create blog";
      toast.error(`Error: ${errorMessage}`);
    },
  });

  return mutation;
};

export default useBlog;

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries("blogs");
    },
    onError: (error) => {
      console.error("Error deleting blog:", error);
    },
  });
};

export const useEditBlog = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: editBlog,
    onSuccess: (data) => {
      if (data) {
        toast.success("Successfully edited blog");
        router.push("/admin/blog-list");
      } else {
        toast.error("No changes were made.");
      }
    },
    onError: (error) => {
      console.error("Error editing blog:", error);
      toast.error("Error editing blog: " + error.message);
    },
  });
};

export const useGetBlogById = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};
