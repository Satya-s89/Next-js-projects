import './globals.css'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'Learning Management System',
  description: 'A comprehensive platform for online learning and course management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}