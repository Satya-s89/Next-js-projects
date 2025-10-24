"use client"
import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = ({ children, user = { name: 'Admin', role: 'admin' } }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-brand-icon">🎓</span>
        LMS
      </div>
      
      <div className="navbar-content">
        {children}
        
        <div className="navbar-user" onClick={() => setShowMenu(!showMenu)}>
          <div className="navbar-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <span className="navbar-username">{user.name}</span>
          
          <div className={`navbar-menu ${showMenu ? 'active' : ''}`}>
            <a href="/profile" className="navbar-menu-item">Profile</a>
            <a href="/settings" className="navbar-menu-item">Settings</a>
            <div className="navbar-menu-divider"></div>
            <a href="/logout" className="navbar-menu-item navbar-logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;