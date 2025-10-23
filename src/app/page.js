import Link from 'next/link'
import CourseCard from '../components/CourseCard'

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript",
      instructor: "John Doe",
      duration: "8 weeks",
      level: "Beginner",
      image: "/course-1.jpg"
    },
    {
      id: 2,
      title: "Advanced React Development",
      description: "Master React hooks, context, and advanced patterns",
      instructor: "Jane Smith",
      duration: "12 weeks",
      level: "Advanced",
      image: "/course-2.jpg"
    },
    {
      id: 3,
      title: "Database Design with MongoDB",
      description: "Learn NoSQL database design and optimization",
      instructor: "Mike Johnson",
      duration: "6 weeks",
      level: "Intermediate",
      image: "/course-3.jpg"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to Learning Management System
        </h1>
        <p className="hero-subtitle">
          Discover, learn, and grow with our comprehensive online courses designed by industry experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signin" className="btn-primary text-center">
            Get Started
          </Link>
          <Link href="/courses" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100 text-center">
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3 className="feature-title">Expert Instructors</h3>
            <p className="feature-description">Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">Mobile Learning</h3>
            <p className="feature-description">Access courses anywhere, anytime on any device</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 className="feature-title">Certificates</h3>
            <p className="feature-description">Earn recognized certificates upon course completion</p>
          </div>
        </div>
      </section>
    </div>
  )
}