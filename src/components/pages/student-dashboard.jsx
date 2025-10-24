import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';
import '../../styles/student-dashboard.css';

const StudentDashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
    <div className="student-dashboard">
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome Back, Student! 👋</h1>
        <p className="welcome-subtitle">Ready to continue your learning journey?</p>
      </div>
      
      <div className="dashboard-grid">
        <div className="courses-section">
          <Card className="h-full">
            <div className="section-header">
              <div className="section-icon" style={{backgroundColor: '#dbeafe', color: '#2563eb'}}>
                <span>📚</span>
              </div>
              <h2 className="section-title">My Courses</h2>
            </div>
            <p className="courses-subtitle">You are enrolled in 3 courses</p>
            <div>
              <div className="course-card react">
                <div className="course-header">
                  <h3 className="course-title">React Fundamentals</h3>
                  <span className="course-percentage">75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="course-card javascript">
                <div className="course-header">
                  <h3 className="course-title">JavaScript Basics</h3>
                  <span className="course-percentage">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="course-card design">
                <div className="course-header">
                  <h3 className="course-title">Web Design</h3>
                  <span className="course-percentage">25%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="sidebar-section">
          <Card className="grades-section">
            <div className="section-header">
              <div className="section-icon" style={{backgroundColor: '#dcfce7', color: '#16a34a'}}>
                <span>🎯</span>
              </div>
              <h2 className="section-title">Recent Grades</h2>
            </div>
            <div>
              <div className="grade-item green">
                <span className="grade-name">JavaScript Quiz</span>
                <span className="grade-badge green">A+</span>
              </div>
              <div className="grade-item blue">
                <span className="grade-name">React Assignment</span>
                <span className="grade-badge blue">B+</span>
              </div>
              <div className="grade-item green">
                <span className="grade-name">CSS Project</span>
                <span className="grade-badge green">A</span>
              </div>
            </div>
          </Card>
          
          <Card className="actions-section">
            <div className="section-header">
              <div className="section-icon" style={{backgroundColor: '#f3e8ff', color: '#7c3aed'}}>
                <span>⚡</span>
              </div>
              <h2 className="section-title">Quick Actions</h2>
            </div>
            <div>
              <button className="action-button blue">
                <span className="action-icon">📖</span> Continue Learning
              </button>
              <button className="action-button green">
                <span className="action-icon">📚</span> View All Courses
              </button>
              <button className="action-button purple">
                <span className="action-icon">📊</span> Check Grades
              </button>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-number">3</div>
          <div className="stat-label">Active Courses</div>
        </div>
        <div className="stat-card green">
          <div className="stat-number">67%</div>
          <div className="stat-label">Average Progress</div>
        </div>
        <div className="stat-card purple">
          <div className="stat-number">A-</div>
          <div className="stat-label">Overall Grade</div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default StudentDashboardPage;