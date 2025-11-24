import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'

export async function GET(request: NextRequest) {
  try {
    // Test database connection
    await connectDB()
    
    // Test query
    const userCount = await User.countDocuments()
    
    return NextResponse.json(
      { 
        success: true,
        message: '✅ MongoDB connection successful!',
        userCount,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Database test error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Database connection failed',
        details: error.toString()
      },
      { status: 500 }
    )
  }
}

















