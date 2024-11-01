import axiosInstance from "@/lib/axiosIntance";
import { setCookie } from "cookies-next";

export const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  setCookie("user_token", response.data.data.accessToken);
  return response.data;
};

export const loginAdmin = async (credentials) => {
  const response = await axiosInstance.post("/auth/admin/login", credentials);
  setCookie("auth_token", response.data.data.accessToken);
  return response.data;
};