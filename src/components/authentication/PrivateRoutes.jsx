import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function PrivateRoutes() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;
