"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAdminStore from "@/stores/adminStore";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = useAdminStore();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (isClient && !isAuthenticated) {
        router.replace("/admin/logIn");
      }
    }, [isAuthenticated, router, isClient]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
