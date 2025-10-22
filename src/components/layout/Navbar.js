'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Navbar({ user, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LMS</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">LearnHub</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.name}</span>
                <Button variant="outline" size="sm" onClick={onLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 py-2">
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-600 py-2">
                Courses
              </Link>
              {user ? (
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-700 mb-2">Welcome, {user.name}</p>
                  <Button variant="outline" size="sm" onClick={onLogout} className="w-full">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="pt-2 border-t border-gray-200 space-y-2">
                  <Link href="/login" className="block">
                    <Button variant="ghost" size="sm" className="w-full">Login</Button>
                  </Link>
                  <Link href="/signup" className="block">
                    <Button size="sm" className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}