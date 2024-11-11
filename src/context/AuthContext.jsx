import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logData, setLogData] = useState(null); // To store decoded user data like profile image

  const saveLoginData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const userResponse = await axios.get('https://upskilling-egypt.com:3006/api/v1/Users/currentUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLogData(userResponse.data); // Set user data in logData
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveLoginData();
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    saveLoginData();
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setLogData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, logData }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
