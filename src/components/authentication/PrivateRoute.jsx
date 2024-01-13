// components/authentication/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { state } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a check for user authentication status (replace with actual logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Loading spinner or other loading indicator
  }

  return (
    <Routes> {/* Wrap Route in Routes */}
      <Route
        {...rest}
        element={state.isAuthenticated ? <Element /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default PrivateRoute;