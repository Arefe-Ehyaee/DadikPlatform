import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../Stores/authStore';
import { getTokenFromCookie } from '../utils/cookies';
import { fetchUserProfile } from '../api/Auth';

const ProtectedRoute = () => {
  const { user, setUser, setToken, clearUser, isAuthenticated } = useAuthStore();
  const token = getTokenFromCookie();
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      if (!user && token) {
        setIsVerifying(true);
        try {
          const userData = await fetchUserProfile(token);
          setUser(userData);
          setToken(token);
        } catch (error) {
          console.error('Token verification failed', error);
          clearUser();
        } finally {
          setIsVerifying(false);
        }
      }
    };
    verifyUser();
  }, [user, token, setUser, setToken, clearUser]);

  if (isVerifying) {
    return <div>در حال انتقال به داشبورد ...</div>; // Loading UI
  }

  if (!isAuthenticated) {
    return <Navigate to="/loginWithPassword" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
