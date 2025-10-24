import Link from 'next/link'
import CourseCard from '../components/CourseCard'
import '../styles/home.css'

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
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to Learning Management System
        </h1>
        <p className="hero-subtitle">
          Discover, learn, and grow with our comprehensive online courses designed by industry experts.
        </p>
        <div className="hero-buttons">
          <Link href="/signin" className="hero-button primary">
            Get Started
          </Link>
          <Link href="/courses" className="hero-button secondary">
            Browse Courses
          </Link>
        </div>
      </section>

      <section className="courses-section">
        <h2 className="section-title">Featured Courses</h2>
        <div className="courses-grid">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🎓</span>
            <h3 className="feature-title">Expert Instructors</h3>
            <p className="feature-description">Learn from industry professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3 className="feature-title">Mobile Learning</h3>
            <p className="feature-description">Access courses anywhere, anytime on any device</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏆</span>
            <h3 className="feature-title">Certificates</h3>
            <p className="feature-description">Earn recognized certificates upon course completion</p>
          </div>
        </div>
      </section>
    </div>
  )
}