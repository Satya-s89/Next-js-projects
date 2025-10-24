import './globals.css'
import connectToDatabase from '../../utils/mongodb';

export const metadata = {
  title: 'Learning Management System',
  description: 'A comprehensive platform for online learning and course management',
}

export default function RootLayout({ children }) {
  connectToDatabase()
    .then(() => console.log('✅ MongoDB connection established'))
    .catch((err) => console.error('❌ MongoDB connection failed:', err));

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}