import { create } from 'zustand';
import defaultAvatar from "../assets/icons/defaultAvatar-rounded.svg";

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


// "2025-01-20T18:52:07.569331Z"

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
}

const useAuthStore = create<AuthState>((set, get) => ({
  user: defaultUserProfile,
  isAuthenticated: false,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token, isAuthenticated: !!token }),
  clearUser: () => set({ user: null, token: null, isAuthenticated: false }),
  login: (user, token) => set({ user, token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null,  isAuthenticated: false }),
}));

export default useAuthStore;
