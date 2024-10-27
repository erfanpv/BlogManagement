import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logoutUser: () => set({ user: null, isAuthenticated: false }),
}));

export default useUserStore;
