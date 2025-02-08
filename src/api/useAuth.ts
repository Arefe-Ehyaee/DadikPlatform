// hooks/useAuth.js
// import { useMutation } from '@tanstack/react-query';
// import { PassLogin, logout, Initialsignup, fetchUserProfile } from "./Auth";
import useAuthStore from "../Stores/authStore";
import { useNavigate } from "react-router-dom";
import {
  saveTokenToCookie,
  deleteTokenFromCookie,
  getTokenFromCookie,
} from "../utils/cookies";
import { fetchUserProfile, Initialsignup, postLoginPassAPI } from "../api/Auth";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";

export const usePassLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: postLoginPassAPI,
    onMutate: () => {
      // loading state or do side effects before the mutation runs
    },
    onSuccess: async (data) => { //data from mutationFn
      setToken(data.token);
      saveTokenToCookie(data.token);

      try {
        const userData = await fetchUserProfile(data.token);
        setUser(userData);

        toast.success('ورود موفق', {
          className: 'toast',
          progressClassName: 'fancy-progress-bar',
        });
        navigate('/dashboard');
      } catch (error) {
        toast.error('خطا در دریافت اطلاعات کاربر');
      }
    },
    onError: (error) => {
      toast.error('نام کاربری یا رمز عبور اشتباه است', {
        className: 'toast',
        progressClassName: 'fancy-progress-bar',
      });
    },
  });

  return {
    login: loginMutation.mutate,        
    isPending: loginMutation.isPending, 
    error: loginMutation.error,        
  };
};



export function useInitialSignup() {
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: Initialsignup,
    onMutate: () => {
      // a loading state 
    },
    onSuccess: async (data) => {
      setToken(data.token);
      saveTokenToCookie(data.token);

      try {
        const userData = await fetchUserProfile(data.token);
        setUser(userData); 

        toast.success('ثبت نام موفق', {
          className: 'toast',
          progressClassName: 'fancy-progress-bar',
        });

        navigate('/dashboard');
      } catch (error) {
        toast.error('خطا در دریافت اطلاعات کاربر', {
          className: 'toast',
          progressClassName: 'fancy-progress-bar',
        });
      }
    },
    onError: (error) => {
      toast.error('ثبت نام با خطا مواجه شد', {
        className: 'toast',
        progressClassName: 'fancy-progress-bar',
      });
    },
  });

  return {
    signUp: signupMutation.mutate,
    isPending: signupMutation.isPending,
    error: signupMutation.error,
  };
}



export const useLogout = () => {
  const clearUser = useAuthStore((state) => state.clearUser);
  const navigate = useNavigate();


  const logout = async () => {
    clearUser();
    deleteTokenFromCookie();

    toast.success("خروج موفق", {
      className: "toast",
      progressClassName: "fancy-progress-bar",
    });
    navigate("/login");
  };
  return { logout };
};
