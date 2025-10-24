"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputField from '../global/input-field';
import Button from '../global/button';
import '../../styles/signin.css';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!form.email || !form.password) {
      setError('Email and password are required.');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Login attempt:', form);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-title">Welcome Back</h2>
          
          {error && (
            <div className="signin-error" role="alert">
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              required
              className={`form-input ${error && !form.email ? 'error' : ''}`}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={isLoading}
              required
              className={`form-input ${error && !form.password ? 'error' : ''}`}
            />
          </div>
          
          <button type="submit" disabled={isLoading} className="signin-button">
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
          
          <div className="signin-footer">
            Don't have an account?{' '}
            <span
              onClick={() => router.push('/signup')}
              className="signin-link"
            >
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;