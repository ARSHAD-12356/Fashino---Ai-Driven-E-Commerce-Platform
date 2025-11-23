import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    // Connect to database first with retry logic
    let dbConnected = false
    let dbError: any = null
    
    try {
      await connectDB()
      dbConnected = true
    } catch (error: any) {
      dbError = error
      console.error('Database connection error:', error.message)
      
      // Check if it's a connection error (not authentication)
      if (error.message.includes('whitelist') || error.message.includes('IP') || error.message.includes('ECONNREFUSED') || error.message.includes('querySrv') || error.message.includes('timeout')) {
        return NextResponse.json(
          { 
            error: error.message || 'Database connection failed. Please check MongoDB Atlas IP whitelist settings.',
            details: 'Make sure your IP address is whitelisted in MongoDB Atlas Network Access settings.'
          },
          { status: 503 }
        )
      }
      
      // For other errors, still return 503 but with the error message
      return NextResponse.json(
        { 
          error: error.message || 'Database connection failed.',
          details: 'Please check your MongoDB Atlas configuration and network settings.'
        },
        { status: 503 }
      )
    }
    
    if (!dbConnected) {
      return NextResponse.json(
        { 
          error: dbError?.message || 'Database connection failed.',
          details: 'Please check your MongoDB Atlas configuration.'
        },
        { status: 503 }
      )
    }

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() })
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const userResponse = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      profilePic: user.profilePic,
    }

    return NextResponse.json(
      { message: 'Login successful', user: userResponse },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to login' },
      { status: 500 }
    )
  }
}

