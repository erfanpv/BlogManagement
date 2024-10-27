import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = "http://localhost:4000/api";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance
