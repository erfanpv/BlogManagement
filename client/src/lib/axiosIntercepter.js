import Cookies from "js-cookie";
import htpp  from "./axiosIntance";

htpp.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

htpp.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      Cookies.remove("token");
      window.location.href = "/auth/login";
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

export default htpp;
