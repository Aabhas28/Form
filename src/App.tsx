// src/App.tsx
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">React Formik App</h1>
      <div className="mb-4 flex gap-4">
        <button
          onClick={() => setShowSignUp(true)}
          className={`px-4 py-2 rounded-md ${
            showSignUp ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setShowSignUp(false)}
          className={`px-4 py-2 rounded-md ${
            !showSignUp ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          Login
        </button>
      </div>
      {showSignUp ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default App;
