import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Stores/authStore";
import { getTokenFromCookie } from "../utils/cookies";
import { fetchUserProfile } from "../api/Auth";

const ProtectedRoute = () => {
  const { user, setUser, setToken, isAuthenticated } = useAuthStore();
  const token = getTokenFromCookie();
  const [isVerifying, setIsVerifying] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);

  useEffect(() => {
    console.log("token in protected route", token)
    const verifyUser = async () => {
      if (!token || isAuthenticated || user) return; // Skip if no token or already authenticated
      console.log("in protected route code")

      setIsVerifying(true);
      try {
        const userData = await fetchUserProfile(token);
        setUser(userData);
        setToken(token); // Ensure token is in store
      } catch (error) {
        console.error("Token verification failed", error);
        setAuthFailed(true); // Trigger redirect
      } finally {
        setIsVerifying(false);
      }
    };

    verifyUser();
  }, [token, user, isAuthenticated, setUser, setToken]);

  if (isVerifying) {
    return <div>در حال بررسی اعتبار...</div>; // Better UX message
  }

  if (authFailed || !isAuthenticated) {
    return <Navigate to="/loginWithPassword" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
