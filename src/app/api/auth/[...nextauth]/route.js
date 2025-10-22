import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          await connectToDatabase()
          
          // Find user in database
          const user = await User.findOne({ email: credentials.email })
          
          if (!user) {
            // For demo purposes, create hardcoded users
            const demoUsers = [
              {
                id: '1',
                email: 'admin@lms.com',
                password: 'admin123',
                name: 'Admin User',
                role: 'admin'
              },
              {
                id: '2',
                email: 'student@lms.com',
                password: 'student123',
                name: 'Student User',
                role: 'student'
              },
              {
                id: '3',
                email: 'instructor@lms.com',
                password: 'instructor123',
                name: 'Instructor User',
                role: 'instructor'
              }
            ]

            const demoUser = demoUsers.find(u => u.email === credentials.email)
            if (demoUser && demoUser.password === credentials.password) {
              return {
                id: demoUser.id,
                email: demoUser.email,
                name: demoUser.name,
                role: demoUser.role
              }
            }
            return null
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
          
          if (!isPasswordValid) {
            return null
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role
          }
        } catch (error) {
          console.error('Authentication error:', error)
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }