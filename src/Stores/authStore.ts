import { create } from 'zustand';
import { getTokenFromCookie, deleteTokenFromCookie } from "../utils/cookies";
import defaultAvatar from "../assets/icons/defaultAvatar-rounded.svg";
import { fetchUserProfile } from "../api/Auth";

interface UserProfile {
  name: string;
  lastName: string;
  username: string;
  avatar: string;
  token: string;
  subscription: Subscription | null; 
  searchs: number;
  billsNumber: number;
  referral_code: string;
}

interface Subscription {
  plan: "gold" | "silver" | "bronze";
  start_date: string | null;
  end_date: string | null;
  is_active: boolean;
}

export const defaultUserProfile: UserProfile = {
  username: '',
  avatar: defaultAvatar,
  name: 'نام',
  lastName: 'نام خانوادگی',
  token: '',
  subscription: null, 
  searchs: 0,
  billsNumber: 0,
  referral_code: ''
};

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: any, token: string) => void;
  logout: () => void;
  setUser: (user: any) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
  restoreSession: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => {
  const savedToken = getTokenFromCookie(); // Load token from cookies

  return {
    user: null,
    token: savedToken || null,
    isAuthenticated: !!savedToken,

    setUser: (user) => set({ user }),
    setToken: (token) => set({ token, isAuthenticated: !!token }),
    clearUser: () => {
      deleteTokenFromCookie();
      set({ user: null, token: null, isAuthenticated: false });
    },

    login: (user, token) => {
      set({ user, token, isAuthenticated: true });
    },

    logout: () => {
      deleteTokenFromCookie();
      set({ user: null, token: null, isAuthenticated: false });
    },

    restoreSession: async () => {
      const token = getTokenFromCookie();
      if (!token) {
        set({ isAuthenticated: false, user: null });
        return;
      }
      try {
        const userData = await fetchUserProfile(token);
        set({ user: userData, token, isAuthenticated: true });
      } catch (error) {
        console.error("Failed to restore session", error);
        set({ isAuthenticated: false, user: null, token: null });
      }
    },
  };
});

export default useAuthStore;
