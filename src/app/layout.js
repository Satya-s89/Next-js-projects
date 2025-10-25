import './globals.css'
import connectToDatabase from '../../utils/mongodb';
import User from './models/User';

export const metadata = {
  title: 'Learning Management System',
  description: 'A comprehensive platform for online learning and course management',
}

// Test MongoDB connection and User model
console.log('Testing MongoDB connection...');
connectToDatabase()
  .then(() => {
    console.log('✅ MongoDB connection established');
    console.log('User model loaded successfully:', !!User);
  })
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

export default function RootLayout({ children }) {
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