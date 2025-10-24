export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Learning Management System
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Welcome to your learning platform
        </p>
        <div className="text-center">
          <a href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}