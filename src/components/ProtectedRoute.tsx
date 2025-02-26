import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Stores/authStore";

const ProtectedRoute = () => {
  const { user, isAuthenticated, restoreSession } = useAuthStore();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await restoreSession();
      setIsVerifying(false);
    };
    checkAuth();
  }, []);

  if (isVerifying) {
    return <div className="font-myYekanRegular text-lg">در حال انتقال ...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/loginWithPassword" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
