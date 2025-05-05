import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import { useAuth } from '../context/AuthContext';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  
  // If user is already logged in, redirect to home page
  if (currentUser) {
    return <Navigate to="/" />;
  }
  
  // Determine which component to render based on the path
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {isLoginPage ? <Login /> : <Signup />}
    </div>
  );
};

export default AuthPage;