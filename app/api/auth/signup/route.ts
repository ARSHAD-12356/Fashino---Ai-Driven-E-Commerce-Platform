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

    const { email, name, password } = await request.json()

    if (!email || !name || !password) {
      return NextResponse.json(
        { error: 'Email, name, and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase().trim() })
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await User.create({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      password: hashedPassword,
    })

    const userResponse = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      phone: user.phone,
      address: user.address,
      profilePic: user.profilePic,
    }

    return NextResponse.json(
      { message: 'User created successfully', user: userResponse },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create user' },
      { status: 500 }
    )
  }
}

