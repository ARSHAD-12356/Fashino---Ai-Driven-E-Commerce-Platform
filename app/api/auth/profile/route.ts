import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import User from '@/lib/models/User'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const user = await User.findById(userId).select('-password')
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        user: {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          phone: user.phone,
          address: user.address,
          address: user.address,
          profilePic: user.profilePic,
          gender: user.gender,
        },
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Failed to fetch profile:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch profile' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB()

    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const updates = await request.json()

    // If gender is being updated, check if we need to update profile pic
    if (updates.gender) {
      const currentUser = await User.findById(userId);
      if (currentUser) {
        // Check if current profile pic is a default one or empty
        const isDefaultPic = !currentUser.profilePic ||
          currentUser.profilePic.includes('avatar.iran.liara.run');

        if (isDefaultPic && !updates.profilePic) {
          if (updates.gender === 'male') {
            updates.profilePic = 'https://avatar.iran.liara.run/public/boy';
          } else if (updates.gender === 'female') {
            updates.profilePic = 'https://avatar.iran.liara.run/public/girl';
          } else {
            updates.profilePic = 'https://avatar.iran.liara.run/public';
          }
        }
      }
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password')

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        message: 'Profile updated successfully',
        user: {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          phone: user.phone,
          address: user.address,
          address: user.address,
          profilePic: user.profilePic,
          gender: user.gender,
        },
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Failed to update profile:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to update profile' },
      { status: 500 }
    )
  }
}































