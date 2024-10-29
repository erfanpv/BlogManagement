import { getCookie } from "cookies-next";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = "http://localhost:4000/api";

const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});


http.interceptors.request.use(
  (config) => {
    const token = getCookie("auth_token") ||getCookie("user_token")
    
    if (token) {
      config.headers["authorization"] = `${token }`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      document.cookie =
        "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else if (status === 403) {
      console.error(
        "Access forbidden: You don’t have the necessary permissions"
      );
    } else if (status === 500) {
      console.error("Server error: Something went wrong");
    }
    return Promise.reject(error);
  }
);

export default http;
