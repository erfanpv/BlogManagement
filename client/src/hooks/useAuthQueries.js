import { useMutation } from "@tanstack/react-query";
import useAdminStore from "@/stores/adminStore";
import useUserStore from "@/stores/userStore";
import axiosInstance from "@/lib/axiosIntance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

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
  setCookie("user_token", response.data.data.accessToken);
  return response.data;
};

export const useUserLogin = () => {
  const router = useRouter();

  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("Login successful! Redirecting...");
      setUser(data);
      router.push("/");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Login failed");
      if (error.response.status == 404) {
        router.push("/user/signup");
      }
    },
  });
};

//admin

const loginAdmin = async (credentials) => {
  const response = await axiosInstance.post("/auth/admin/login", credentials);
  setCookie("user_token", response.data.data.accessToken);
  return response.data;
};

export const useAdminLogin = () => {
  const router = useRouter();
  const { setAdmin } = useAdminStore();

  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      toast.success("Login successful! Redirecting...");
      setAdmin(data);
      router.push("/admin/create-blog");
    },
    onError: (error) => {
      toast.error("You are not admin");
    },
  });
};
