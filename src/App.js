import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/authentication/SignupForm';
import LoginForm from './components/authentication/LoginForm';
import Dashboard from './components/movie/Dashboard';
import PrivateRoutes from './components/authentication/PrivateRoutes';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          
          <Route path="/user" element={<PrivateRoutes />} > 
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
