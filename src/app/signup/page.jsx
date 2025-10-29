'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import InputField from '../../components/global/input-field';
import Button from '../../components/global/button';
import '../../styles/signin.css';

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.email || !form.password || !form.name || !form.role) {
      toast.error('All fields are required.');
      return;
    }
    
    setIsLoading(true);
  
    const loadingToast = toast.loading('Creating your account...', {
      duration: Infinity,
    });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.dismiss(loadingToast);
        toast.error(data.error || 'Registration failed. Please try again.');
        return;
      }

      toast.dismiss(loadingToast);
      const loginToast = toast.loading('Registration successful! Logging you in...', {
        duration: Infinity,
      });

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        toast.dismiss(loginToast);
        toast.success(`Welcome ${form.name}! Redirecting to your dashboard...`);
        setTimeout(() => {
          if (form.role === 'admin') {
            router.push('/admin-dashboard');
          } else {
            router.push('/student-dashboard');
          }
        }, 1000);
      } else {
        toast.dismiss(loginToast);
        toast.error('Registration succeeded, but automatic login failed. Please sign in manually.');
        setTimeout(() => {
          router.push('/signin');
        }, 2000);
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-title">Sign Up</h2>
          
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={isLoading}
              required
              className="form-input"
            />
          </div>
          
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
              placeholder="Enter your password (min 6 characters)"
              disabled={isLoading}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              disabled={isLoading}
              className="form-input"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" disabled={isLoading} className="signin-button">
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
          
          <div className="signin-footer">
            Already have an account?{' '}
            <span
              onClick={() => router.push('/signin')}
              className="signin-link"
            >
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}