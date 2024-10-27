import { useMutation } from "@tanstack/react-query";
import useAdminStore from "@/stores/adminStore";
import useUserStore from "@/stores/userStore";  
import axiosInstance from "@/lib/axiosIntance";

//signup
const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export const useSignup = (onSuccess, onError) => {
  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error) => {
      if (onError) {
        onError(error);
      }
    },
  });
};                                                                              

//user
const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  return response.data;
};

export const useUserLogin = () => {
  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};


//admin
const loginAdmin = async (credentials) => {
  const response = await axiosInstance.post("/admin/login", credentials);
  return response.data;
};


export const useAdminLogin = () => {
  const { setAdmin } = useAdminStore();
  return useMutation(loginAdmin, {
    onSuccess: (data) => setAdmin(data),
  });
};
