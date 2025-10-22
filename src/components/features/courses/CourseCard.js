import Link from 'next/link';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

export default function CourseCard({ 
  course = {
    id: '1',
    title: 'Sample Course',
    description: 'This is a sample course description',
    instructor: 'John Doe',
    duration: '8 weeks',
    level: 'Beginner',
    enrolled: 150,
    rating: 4.5,
    price: 99,
    image: '/placeholder-course.jpg'
  }
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNDQgNzJIMTc2VjEwOEgxNDRWNzJaIiBmaWxsPSIjOUI5QkEwIi8+Cjwvc3ZnPgo=';
          }}
        />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
            {course.title}
          </h3>
          <Badge variant="info">{course.level}</Badge>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span>👨‍🏫 {course.instructor}</span>
          <span>⏱️ {course.duration}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({course.enrolled} students)</span>
          </div>
          <span className="font-bold text-lg text-gray-900">${course.price}</span>
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Link href={`/courses/${course.id}`} className="flex-1">
            <Button className="w-full">View Course</Button>
          </Link>
          <Button variant="outline" size="md">♡</Button>
        </div>
      </div>
    </Card>
  );
}