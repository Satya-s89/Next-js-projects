'use client';
import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import CourseCard from '../../components/features/courses/CourseCard';
import StatsCard from '../../components/features/dashboard/StatsCard';
import SearchBar from '../../components/common/SearchBar';
import EmptyState from '../../components/common/EmptyState';
import LoginForm from '../../components/features/auth/LoginForm';

export default function DemoPage() {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mockUser = {
    name: 'John Doe',
    role: 'student'
  };
  
  const mockCourses = [
    {
      id: '1',
      title: 'React Fundamentals',
      description: 'Learn the basics of React including components, props, and state management.',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      level: 'Beginner',
      enrolled: 245,
      rating: 4.8,
      price: 79
    },
    {
      id: '2',
      title: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts and modern ES6+ features.',
      instructor: 'Mike Johnson',
      duration: '8 weeks',
      level: 'Advanced',
      enrolled: 189,
      rating: 4.6,
      price: 129
    }
  ];
  
  const handleLogin = (formData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Login form submitted!');
    }, 2000);
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    alert(`Searching for: ${query}`);
  };
  
  return (
    <DashboardLayout
      title="UI Components Demo"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Demo' }
      ]}
      user={mockUser}
      onLogout={() => alert('Logout clicked')}
    >
      <div className="p-6 space-y-8">
        
        {/* Buttons Section */}
        <Card title="Button Components" subtitle="Different button variants and states">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button loading={true}>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Card>
        
        {/* Input Components */}
        <Card title="Input Components" subtitle="Form inputs with validation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input 
              label="Email" 
              type="email" 
              placeholder="Enter your email"
              required
            />
            <Input 
              label="Password" 
              type="password" 
              placeholder="Enter password"
              error="Password is too short"
            />
            <Input 
              label="Description" 
              type="textarea" 
              placeholder="Enter description"
            />
            <div className="flex items-center space-x-2">
              <LoadingSpinner size="sm" />
              <LoadingSpinner size="md" />
              <LoadingSpinner size="lg" />
            </div>
          </div>
        </Card>
        
        {/* Badges */}
        <Card title="Badge Components" subtitle="Status indicators and labels">
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge size="sm">Small</Badge>
          </div>
        </Card>
        
        {/* Stats Cards */}
        <Card title="Dashboard Stats" subtitle="Metric display cards">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard 
              title="Total Students" 
              value="1,234" 
              change="+12%" 
              trend="up"
              icon="👥"
            />
            <StatsCard 
              title="Active Courses" 
              value="56" 
              change="+3%" 
              trend="up"
              icon="📚"
            />
            <StatsCard 
              title="Completion Rate" 
              value="87%" 
              change="-2%" 
              trend="down"
              icon="📈"
            />
            <StatsCard 
              title="Revenue" 
              value="$12,450" 
              change="+8%" 
              trend="up"
              icon="💰"
            />
          </div>
        </Card>
        
        {/* Search Bar */}
        <Card title="Search Component" subtitle="Search with suggestions">
          <SearchBar 
            placeholder="Search courses, instructors, or topics..."
            onSearch={handleSearch}
            suggestions={['React', 'JavaScript', 'Python', 'Web Development']}
          />
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-600">
              Last search: <strong>{searchQuery}</strong>
            </p>
          )}
        </Card>
        
        {/* Course Cards */}
        <Card title="Course Cards" subtitle="Course display components">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Card>
        
        {/* Login Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <LoginForm onSubmit={handleLogin} loading={loading} />
          </div>
          
          <div>
            <Card title="Empty State" subtitle="When no content is available">
              <EmptyState 
                title="No courses found"
                description="You haven't enrolled in any courses yet. Browse our catalog to get started."
                action={{
                  label: "Browse Courses",
                  onClick: () => alert('Browse courses clicked')
                }}
                icon="📚"
              />
            </Card>
          </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
}