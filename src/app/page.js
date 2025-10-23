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
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Learning Management System
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover, learn, and grow with our comprehensive online courses designed by industry experts.
        </p>
        <div className="space-x-4">
          <Link href="/login" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Started
          </Link>
          <Link href="/courses" className="btn-secondary bg-primary-500 hover:bg-primary-400 text-white">
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals with years of experience</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Mobile Learning</h3>
            <p className="text-gray-600">Access courses anywhere, anytime on any device</p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Certificates</h3>
            <p className="text-gray-600">Earn recognized certificates upon course completion</p>
          </div>
        </div>
      </section>
    </div>
  )
}