import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBlog, deleteBlog, editBlog, getBlogById, fetchAllBlogs, getBlogsByUserId } from "@/api/blogApi/blogApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


export const useCreateBlog = () => {

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: (data) => {
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to create blog";
      toast.error(`Error: ${errorMessage}`);
      console.log(error)
    },
  });

  return mutation;
};

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

export const useEditBlog = (isNavigate=false) => {
  const router = useRouter();

  return useMutation({
    mutationFn: editBlog,
    onSuccess: (data) => {
      if (data) {
        toast.success("Successfully edited blog");
        if (isNavigate) {
          router.push("/my-blogs");
        }else {
          router.push("/admin/blog-list");
        }
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

export const useFetchAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchAllBlogs,
    onError: (error) => {
      console.error(`Failed to fetch blogs: ${error.message}`);
    },
  });
};

export const useGetBlogsByUserId  = () => {
  return useQuery({
    queryKey: ["userBlogs"],
    queryFn:getBlogsByUserId,
    onError: (error) => {
      console.error(`Failed to fetch blogs: ${error.message}`);
    },
  });
};

