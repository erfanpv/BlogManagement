"use client";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import http from "@/lib/axiosIntercepter";

// Function to fetch users from the API
const fetchUsers = async ({ queryKey }) => {
  const [, page, limit] = queryKey; // 
  const response = await http.get("/admin/all-users", {
    params: { page, limit }, 
  });
  return response.data.data;  
};

// Custom hook to fetch users
export const useUsers = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["users", page, limit],
    queryFn: fetchUsers,
    onError: (error) => {
      console.error(`Failed to fetch users: ${error.message}`);
    },
    keepPreviousData: true,
  });
};

export const useToggleBlockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId) => {
      const response = await http.patch(`/admin/user/${userId}`);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success(data.message);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "Failed to update user status";
      toast.error(`Error: ${errorMessage}`);
    },
  });
};
