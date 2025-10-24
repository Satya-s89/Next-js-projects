import React from 'react';
import MainLayout from '../layout/main-layout';
import Sidebar from '../layout/sidebar';
import Navbar from '../layout/navbar';
import Card from '../global/card';

const StudentDashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
    <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
        <p className='text-black'>This is your student dashboard. Here you can find your enrolled courses, grades, and profile information.</p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">My Courses</h2>
        <p className='text-black'>You are enrolled in 3 courses</p>
        <div className="mt-3 space-y-2">
          <div className="bg-blue-50 p-2 rounded text-black">React Fundamentals - 75% Complete</div>
          <div className="bg-green-50 p-2 rounded text-black">JavaScript Basics - 100% Complete</div>
          <div className="bg-yellow-50 p-2 rounded text-black">Web Design - 25% Complete</div>
        </div>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Recent Grades</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-black">
            <span>JavaScript Quiz</span>
            <span className="font-bold text-green-600">A+</span>
          </div>
          <div className="flex justify-between text-black">
            <span>React Assignment</span>
            <span className="font-bold text-blue-600">B+</span>
          </div>
          <div className="flex justify-between text-black">
            <span>CSS Project</span>
            <span className="font-bold text-green-600">A</span>
          </div>
        </div>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Quick Actions</h2>
        <div className="space-y-2">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Continue Learning
          </button>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            View All Courses
          </button>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Check Grades
          </button>
        </div>
      </Card>
    </div>
  </MainLayout>
);

export default StudentDashboardPage;