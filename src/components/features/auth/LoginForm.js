'use client';
import { useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

export default function LoginForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onSubmit(formData);
  };
  
  return (
    <Card title="Welcome Back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <Input
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
        
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
            Forgot password?
          </a>
        </div>
        
        <Button type="submit" loading={loading} className="w-full">
          Sign In
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </Card>
  );
}