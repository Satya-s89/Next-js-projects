import React from 'react';
import '../../styles/sidebar.css';

const Sidebar = ({ role, children }) => {
  let links;
  if (role === 'admin') {
    links = (
      <>
        <a href="/admin-dashboard" className="sidebar-link admin active">
          <span className="sidebar-icon">📊</span>
          <span className="sidebar-text">Admin Dashboard</span>
        </a>
        <a href="/edit_lesson" className="sidebar-link admin">
          <span className="sidebar-icon">📝</span>
          <span className="sidebar-text">Edit Lessons</span>
        </a>
        <a href="/manage_students" className="sidebar-link admin">
          <span className="sidebar-icon">👥</span>
          <span className="sidebar-text">Manage Users</span>
        </a>
        <a href="/analytics" className="sidebar-link admin">
          <span className="sidebar-icon">📈</span>
          <span className="sidebar-text">Analytics</span>
        </a>
        <a href="/settings" className="sidebar-link admin">
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Settings</span>
        </a>
        <a href="/logout" className="sidebar-link logout">
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-text">Logout</span>
        </a>
      </>
    );
  } else if (role === 'student') {
    links = (
      <>
        <a href="/student-dashboard" className="sidebar-link student active">
          <span className="sidebar-icon">📊</span>
          <span className="sidebar-text">Student Dashboard</span>
        </a>
        <a href="/courses" className="sidebar-link student">
          <span className="sidebar-icon">📚</span>
          <span className="sidebar-text">My Courses</span>
        </a>
        <a href="/grades" className="sidebar-link student">
          <span className="sidebar-icon">🎯</span>
          <span className="sidebar-text">Grades</span>
        </a>
        <a href="/profile" className="sidebar-link student">
          <span className="sidebar-icon">👤</span>
          <span className="sidebar-text">Profile</span>
        </a>
        <a href="/logout" className="sidebar-link logout">
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-text">Logout</span>
        </a>
      </>
    );
  } else {
    links = null;
  }

  if (!links) return null;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links}
      </nav>
      {children}
    </aside>
  );
};

export default Sidebar;