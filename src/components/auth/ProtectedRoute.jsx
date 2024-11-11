import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children}) => {
  const { isAuthenticated ,logData } = useAuth();
  console.log( children)
  // return isAuthenticated || logData ? children : <Navigate to="/signin" />;
  return  isAuthenticated || logData ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
