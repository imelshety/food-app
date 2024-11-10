import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const { logData } = useAuth();

  return isAuthenticated && logData ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
