// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/authentication/SignupForm';
import LoginForm from './components/authentication/LoginForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;
