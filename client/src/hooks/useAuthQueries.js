import { useMutation } from "@tanstack/react-query";
import useAdminStore from "@/stores/adminStore";
import useUserStore from "@/stores/userStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginAdmin, loginUser, signupUser } from "@/api/authApi/authApi";

//signup
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
export const useUserLogin = () => {
  const router = useRouter();

  const { setUser } = useUserStore();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("Login successful! Redirecting...");
      localStorage.setItem("userId", data.data.user._id);
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
export const useAdminLogin = () => {
  const router = useRouter();
  const { setAdmin } = useAdminStore();

  return useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      toast.success("Login successful! Redirecting...");
      setAdmin(data);
      localStorage.setItem("userId", data.data.admin._id);
      router.push("/admin/create-blog");
    },
    onError: (error) => {
      console.log(error);
      toast.error("You are not admin");
    },
  });
};
