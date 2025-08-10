//This manages the state and logic for the View. No UI is handled here.
// viewmodels/LoginViewModel.js
import { useState } from 'react';
import { AuthModel } from '../models/AuthModel';

export const useLoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const login = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await AuthModel.login(email, password);
      console.log("Logged in:", result);
      setResult(result) 
      // Handle success (e.g., navigate, store token)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    login,
    result
  };
};
