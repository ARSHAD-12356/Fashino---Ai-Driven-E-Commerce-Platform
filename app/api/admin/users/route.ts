import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const users = await User.find().select('-password').sort({ createdAt: -1 })

    return NextResponse.json(
      { users: users.map(u => ({
        _id: u._id.toString(),
        email: u.email,
        name: u.name,
        phone: u.phone,
        address: u.address,
        profilePic: u.profilePic,
        createdAt: u.createdAt,
      })) },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Failed to fetch users:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

























