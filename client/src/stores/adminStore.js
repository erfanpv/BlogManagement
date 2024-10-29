import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set) => ({
      admin: null,
      isAuthenticated: false,
      setAdmin: (admin) => set({ admin, isAuthenticated: true }),
      logoutAdmin: () => set({ admin: null, isAuthenticated: false }),
    }),
    {
      name: "admin-auth",
      getStorage: () => (typeof window !== "undefined" ? localStorage : null),
    }
  )
);

export default useAdminStore;
