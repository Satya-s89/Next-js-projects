import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import AuthProvider from '../lib/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learning Management System',
  description: 'A comprehensive platform for online learning and course management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}