import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LMS</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">LearnHub</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Empowering learners worldwide with comprehensive online education platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-600 hover:text-blue-600">Courses</Link></li>
              <li><Link href="/instructors" className="text-gray-600 hover:text-blue-600">Instructors</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-blue-600">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}