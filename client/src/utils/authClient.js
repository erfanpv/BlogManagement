import Cookies from "js-cookie";

export const checkAuthenticationCleint = () => {
  const token = Cookies.get("user_token");
  return !!token;
};