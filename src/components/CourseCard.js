import Link from 'next/link'
import Image from 'next/image'

export default function CourseCard({ course, showProgress = false }) {
  const {
    id,
    title,
    description,
    instructor,
    duration,
    level,
    image,
    price,
    rating,
    studentsCount,
    progress
  } = course

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="card hover:shadow-lg transition-all duration-300 group">
      {/* Course Image */}
      <div className="relative h-48 mb-4 bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {title?.charAt(0) || 'C'}
            </span>
          </div>
        )}
        
        {/* Level Badge */}
        {level && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}>
              {level}
            </span>
          </div>
        )}

        {/* Price Badge */}
        {price && (
          <div className="absolute top-3 right-3">
            <span className="bg-white text-gray-900 px-2 py-1 rounded-full text-sm font-semibold shadow-md">
              {price === 0 ? 'Free' : `$${price}`}
            </span>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Course Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>by {instructor}</span>
          {duration && <span>{duration}</span>}
        </div>

        {/* Rating and Students */}
        {(rating || studentsCount) && (
          <div className="flex items-center justify-between text-sm">
            {rating && (
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">({rating})</span>
              </div>
            )}
            {studentsCount && (
              <span className="text-gray-500">{studentsCount} students</span>
            )}
          </div>
        )}

        {/* Progress Bar (if showing progress) */}
        {showProgress && progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={`/courses/${id}`}
            className="block w-full text-center btn-primary hover:bg-primary-700 transition-colors"
          >
            {showProgress ? 'Continue Learning' : 'View Course'}
          </Link>
        </div>
      </div>
    </div>
  )
}