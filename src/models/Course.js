import mongoose from 'mongoose'

const LessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  videoUrl: String,
  duration: Number, // in minutes
  order: {
    type: Number,
    required: true
  },
  isPreview: {
    type: Boolean,
    default: false
  }
})

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a course title'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a course description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  shortDescription: {
    type: String,
    maxlength: [200, 'Short description cannot be more than 200 characters']
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'Design', 'Business', 'Marketing', 'Other']
  },
  level: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  thumbnail: {
    type: String,
    default: null
  },
  lessons: [LessonSchema],
  duration: {
    type: Number, // total duration in minutes
    default: 0
  },
  requirements: [String],
  whatYouWillLearn: [String],
  tags: [String],
  isPublished: {
    type: Boolean,
    default: false
  },
  enrollmentCount: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

// Indexes for better query performance
CourseSchema.index({ title: 'text', description: 'text' })
CourseSchema.index({ category: 1 })
CourseSchema.index({ level: 1 })
CourseSchema.index({ price: 1 })
CourseSchema.index({ 'rating.average': -1 })
CourseSchema.index({ enrollmentCount: -1 })

// Calculate total duration when lessons are updated
CourseSchema.pre('save', function(next) {
  if (this.lessons && this.lessons.length > 0) {
    this.duration = this.lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0)
  }
  next()
})

export default mongoose.models.Course || mongoose.model('Course', CourseSchema)