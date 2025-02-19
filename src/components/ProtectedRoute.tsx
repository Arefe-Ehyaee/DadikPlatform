import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from '../Stores/authStore';
import { getTokenFromCookie } from '../utils/cookies';
import { fetchUserProfile } from '../api/Auth';

const ProtectedRoute = () => {
  const { user, setUser, setToken, clearUser, isAuthenticated } = useAuthStore();
  const token = getTokenFromCookie();
  const [isVerifying, setIsVerifying] = useState(false);
  console.log("Retrieved token:", getTokenFromCookie());
  const navigate = useNavigate();

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
          // clearUser();
          console.warn('Token invalid, redirect to login.');
          navigate("/loginWithPassword"); 
        } finally {
          setIsVerifying(false);
        }
      }
    };
    verifyUser();
  }, [user, token, setUser, setToken, clearUser]);

  console.log("Auth Status:", isAuthenticated);

  if (isVerifying) {
    return <div>در حال انتقال به داشبورد ...</div>; // Loading UI
  }

  if (!isAuthenticated) {
    return <Navigate to="/loginWithPassword" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
