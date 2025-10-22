'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import CourseCard from '@/components/CourseCard'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/login')
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const userCourses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Master the basics of JavaScript programming",
      instructor: "Sarah Wilson",
      progress: 75,
      duration: "6 weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "React Development",
      description: "Build modern web applications with React",
      instructor: "David Chen",
      progress: 45,
      duration: "10 weeks",
      level: "Intermediate"
    }
  ]

  const stats = [
    { label: 'Enrolled Courses', value: '12', icon: '📚' },
    { label: 'Completed Courses', value: '8', icon: '✅' },
    { label: 'Certificates Earned', value: '5', icon: '🏆' },
    { label: 'Study Hours', value: '156', icon: '⏰' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {session.user?.name || 'Student'}!
        </h1>
        <p className="text-primary-100">
          Continue your learning journey and achieve your goals.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Current Courses */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Continue Learning</h2>
          <button className="btn-primary">View All Courses</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userCourses.map(course => (
            <div key={course.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                  <p className="text-sm text-gray-500">by {course.instructor}</p>
                </div>
                <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-medium">
                  {course.level}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="btn-primary w-full">Continue Learning</button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="card hover:shadow-lg transition-shadow text-left">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold mb-1">Browse Courses</h3>
            <p className="text-gray-600 text-sm">Discover new courses to expand your skills</p>
          </button>
          
          <button className="card hover:shadow-lg transition-shadow text-left">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">View Progress</h3>
            <p className="text-gray-600 text-sm">Track your learning progress and achievements</p>
          </button>
          
          <button className="card hover:shadow-lg transition-shadow text-left">
            <div className="text-2xl mb-2">👤</div>
            <h3 className="font-semibold mb-1">Update Profile</h3>
            <p className="text-gray-600 text-sm">Manage your account settings and preferences</p>
          </button>
        </div>
      </section>
    </div>
  )
}