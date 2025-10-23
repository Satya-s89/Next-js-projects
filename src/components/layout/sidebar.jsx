import React from 'react';

const Sidebar = ({ role, children }) => {
  let links;
  if (role === 'admin') {
    links = (
      <>
        <a href="/admin-dashboard" className="sidebar-link active">📊 Admin Dashboard</a>
        <a href="/edit_lesson" className="sidebar-link">📝 Edit Lessons</a>
        <a href="/manage_students" className="sidebar-link">👥 Manage Users</a>
        <a href="/analytics" className="sidebar-link">📈 Analytics</a>
        <a href="/settings" className="sidebar-link">⚙️ Settings</a>
        <a href="/logout" className="sidebar-link text-red-600 hover:bg-red-50">🚪 Logout</a>
      </>
    );
  } else if (role === 'student') {
    links = (
      <>
        <a href="/student_dashboard" className="sidebar-link active">📊 Student Dashboard</a>
        <a href="/courses" className="sidebar-link">📚 My Courses</a>
        <a href="/grades" className="sidebar-link">🎯 Grades</a>
        <a href="/profile" className="sidebar-link">👤 Profile</a>
        <a href="/logout" className="sidebar-link text-red-600 hover:bg-red-50">🚪 Logout</a>
      </>
    );
  } else {
    links = null;
  }

  if (!links) return null;

  return (
    <aside className="sidebar w-64 p-4 hidden md:block">
      <nav className="flex flex-col space-y-1">
        {links}
      </nav>
      {children}
    </aside>
  );
};

export default Sidebar;