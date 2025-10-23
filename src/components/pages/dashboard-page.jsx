"use client"
import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const DashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome back! Here's what's happening with your LMS today.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold mb-2">1,234</div>
        <div className="text-blue-100 text-sm uppercase tracking-wide">Total Students</div>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold mb-2">56</div>
        <div className="text-green-100 text-sm uppercase tracking-wide">Active Courses</div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold mb-2">87%</div>
        <div className="text-purple-100 text-sm uppercase tracking-wide">Completion Rate</div>
      </div>
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-bold mb-2">$12,450</div>
        <div className="text-orange-100 text-sm uppercase tracking-wide">Revenue</div>
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