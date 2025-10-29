import './globals.css'
import SessionWrapper from '../components/SessionWrapper'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Learning Management System',
  description: 'A comprehensive platform for online learning and course management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </SessionWrapper>
      </body>
    </html>
  )
}