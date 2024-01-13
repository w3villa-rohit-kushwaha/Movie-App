// components/authentication/SignupForm.js
import React, { useState } from 'react';
import { signup } from '../services/AuthService';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(formData);
      console.log('Signup Successful:', result);
      // Handle successful signup (redirect, show success message, etc.)
    } catch (error) {
      console.error('Signup Failed:', error);
      // Handle signup failure (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;