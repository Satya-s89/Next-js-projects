"use client"
import React from 'react';

const Navbar = ({ children }) => (
  <nav className="navbar w-full px-6 py-4 flex items-center justify-between">
    <div className="navbar-brand">🎓 LMS</div>
    <div className="flex items-center space-x-4">
      {children}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">A</span>
        </div>
        <span className="text-gray-700 font-medium">Admin</span>
      </div>
    </div>
  </nav>
);

export default Navbar;