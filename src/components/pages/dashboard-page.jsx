"use client"
import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';
import '../../styles/admin-dashboard.css';

const DashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your LMS today.</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-number">1,234</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card green">
          <div className="stat-number">56</div>
          <div className="stat-label">Active Courses</div>
        </div>
        <div className="stat-card purple">
          <div className="stat-number">87%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
        <div className="stat-card orange">
          <div className="stat-number">$12,450</div>
          <div className="stat-label">Revenue</div>
        </div>
      </div>
      
      <div className="content-grid">
        <Card>
          <div className="activity-section">
            <h2 className="activity-title">Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item blue">
                <div className="activity-dot blue"></div>
                <span className="activity-text">15 new student registrations</span>
              </div>
              <div className="activity-item green">
                <div className="activity-dot green"></div>
                <span className="activity-text">8 course completions</span>
              </div>
              <div className="activity-item purple">
                <div className="activity-dot purple"></div>
                <span className="activity-text">3 new course uploads</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="status-section">
            <h2 className="status-title">System Status</h2>
            <div className="status-list">
              <div className="status-item">
                <span className="status-name">Server Status</span>
                <span className="status-badge green">Online</span>
              </div>
              <div className="status-item">
                <span className="status-name">Database</span>
                <span className="status-badge green">Connected</span>
              </div>
              <div className="status-item">
                <span className="status-name">Last Backup</span>
                <span className="status-badge blue">2 hours ago</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </MainLayout>
);

export default DashboardPage;