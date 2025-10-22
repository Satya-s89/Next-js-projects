'use client';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function DashboardLayout({ 
  children, 
  title, 
  breadcrumbs = [], 
  user,
  onLogout 
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />
      
      <div className="flex">
        <Sidebar 
          isCollapsed={sidebarCollapsed} 
          userRole={user?.role || 'student'} 
        />
        
        <main className="flex-1 min-h-screen">
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  {breadcrumbs.length > 0 && (
                    <nav className="text-sm text-gray-500 mb-2">
                      {breadcrumbs.map((crumb, index) => (
                        <span key={index}>
                          {index > 0 && ' / '}
                          {crumb.href ? (
                            <a href={crumb.href} className="hover:text-blue-600">
                              {crumb.label}
                            </a>
                          ) : (
                            crumb.label
                          )}
                        </span>
                      ))}
                    </nav>
                  )}
                  {title && (
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                  )}
                </div>
                
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm min-h-[600px]">
              {children}
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}