'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
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
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

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
        setError(data.error || 'Registration failed');
        return;
      }

      setSuccess(data.message || 'Registration successful! Logging you in...');

      // Wait for user to see the message
      await new Promise((res) => setTimeout(res, 2000));

      // Automatically sign in the user after registration
      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        if (form.role === 'admin') {
          router.push('/admin-dashboard');
        } else {
          router.push('/student-dashboard');
        }
      } else {
        setError('Registration succeeded, but automatic login failed. Please sign in manually.');
        setTimeout(() => {
          router.push('/signin');
        }, 2000);
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-title">Create Account</h2>
          
          {error && (
            <div className="signin-error" role="alert">
              {error}
            </div>
          )}
          
          {success && (
            <div className="signin-error" style={{background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0'}} role="alert">
              {success}
            </div>
          )}
          
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