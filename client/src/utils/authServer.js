import { cookies } from "next/headers"; 

export const checkAuthentication = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("user_token");
  const isAuthenticated = !!token;
  return isAuthenticated;
};



