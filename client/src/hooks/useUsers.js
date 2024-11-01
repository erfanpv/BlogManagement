"use client";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { blockOrUnblockUser, fetchAllUsers } from "@/api/usesrApi/userApi";


export const useFetchAllUsers = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["users", page, limit],
    queryFn: fetchAllUsers,
    onError: (error) => {
      console.error(`Failed to fetch users: ${error.message}`);
    },
    keepPreviousData: true,
  });
};

export const useBlockOrUnblockUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockOrUnblockUser,
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
