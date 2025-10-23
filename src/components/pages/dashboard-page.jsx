"use client"
import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const DashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
    <div className="dashboard-header">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome back! Here's what's happening with your LMS today.</p>
    </div>
    
    <div className="dashboard-grid">
      <div className="stat-card">
        <div className="stat-number">1,234</div>
        <div className="stat-label">Total Students</div>
      </div>
      <div className="stat-card bg-gradient-to-r from-green-500 to-green-600">
        <div className="stat-number">56</div>
        <div className="stat-label">Active Courses</div>
      </div>
      <div className="stat-card bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="stat-number">87%</div>
        <div className="stat-label">Completion Rate</div>
      </div>
      <div className="stat-card bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="stat-number">$12,450</div>
        <div className="stat-label">Revenue</div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-gray-700">15 new student registrations</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-700">8 course completions</span>
          </div>
          <div className="flex items-center p-3 bg-purple-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
            <span className="text-gray-700">3 new course uploads</span>
          </div>
        </div>
      </Card>
      
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-gray-900">System Status</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Server Status</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Online</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Database</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Connected</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Last Backup</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">2 hours ago</span>
          </div>
        </div>
      </Card>
    </div>
  </MainLayout>
);

export default DashboardPage;