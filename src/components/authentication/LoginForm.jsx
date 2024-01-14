// components/authentication/LoginForm.js
import React, { useState } from 'react';
import { login } from '../services/AuthService';
import { useAuth } from '../../AuthContext';

const LoginForm = () => {
  const { login: authenticate } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      authenticate(); 
      console.log('Login Successful:', result);
      // Handle successful login (redirect, update state, etc.)
    } catch (error) {
      console.error('Login Failed:', error);
      // Handle login failure (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
