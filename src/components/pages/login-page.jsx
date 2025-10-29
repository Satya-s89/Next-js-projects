"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import InputField from '../global/input-field';
import Button from '../global/button';
import '../../styles/signin.css';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email || !form.password) {
      toast.error('Email and password are required.');
      return;
    }
    
    setIsLoading(true);
    
    const loadingToast = toast.loading('Signing you in...', {
      duration: Infinity,
    });
    
    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        email: form.email,
        password: form.password
      });
      
      if (res?.error) {
        toast.dismiss(loadingToast);
        toast.error("Invalid credentials. Please check your email and password.");
        setIsLoading(false);
        return;
      }
      
      if (res?.ok) {
        toast.dismiss(loadingToast);
        toast.success('Login successful! Redirecting...');
        setTimeout(async () => {
          const sessionRes = await fetch('/api/auth/session');
          const session = await sessionRes.json();
          const role = session?.user?.role;
          
          if (role === 'admin') {
            router.push('/admin-dashboard');
          } else if (role === 'student') {
            router.push('/student-dashboard');
          }
        }, 1000);
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-title">Sign In</h2>
          
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
              className="form-input"
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
              className="form-input"
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