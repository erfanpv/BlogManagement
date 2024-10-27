import { create } from "zustand";

const useAdminStore = create((set) => ({
  admin: null,
  isAuthenticated: false,
  setAdmin: (admin) => set({ admin, isAuthenticated: true }),
  logoutAdmin: () => set({ admin: null, isAuthenticated: false }),
}));

export default useAdminStore;
