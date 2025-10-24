import { NextResponse } from 'next/server';

// Mock user storage
let users = [];

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();
    
    // Validation
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Password validation
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }
    
    // Role validation
    if (role !== 'student' && role !== 'admin') {
      return NextResponse.json(
        { error: 'Role must be student or admin' },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    if (users.find(user => user.email === email)) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }
    
    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // In real app, hash this
      role,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    // Log to terminal
    console.log('New user registered:', {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt
    });
    
    return NextResponse.json(
      { message: 'User registered successfully', userId: newUser.id },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}