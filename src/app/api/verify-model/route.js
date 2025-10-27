import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../utils/mongodb';
import User from '../../models/User';

export async function GET() {
  try {
    await connectToDatabase();
    
    return NextResponse.json({
      modelExists: !!User,
      message: 'User model verification successful'
    });
  } catch (error) {
    return NextResponse.json({
      modelExists: false,
      error: error.message
    }, { status: 500 });
  }
}