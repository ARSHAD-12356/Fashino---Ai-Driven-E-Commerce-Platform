import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

export async function POST(request: NextRequest) {
  try {
    // Connect to database first
    let dbConnected = false
    let dbError: any = null
    
    try {
      await connectDB()
      dbConnected = true
    } catch (error: any) {
      dbError = error
      console.error('Database connection error:', error.message)
      
      // Return error if database connection fails
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

    // Parse request body
    const orderData = await request.json()

    // Validate required fields
    if (!orderData.userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    if (!orderData.userName) {
      return NextResponse.json(
        { error: 'User name is required' },
        { status: 400 }
      )
    }

    if (!orderData.userEmail) {
      return NextResponse.json(
        { error: 'User email is required' },
        { status: 400 }
      )
    }

    if (!orderData.items || !Array.isArray(orderData.items) || orderData.items.length === 0) {
      return NextResponse.json(
        { error: 'Order items are required' },
        { status: 400 }
      )
    }

    if (!orderData.totalAmount || orderData.totalAmount <= 0) {
      return NextResponse.json(
        { error: 'Valid total amount is required' },
        { status: 400 }
      )
    }

    // Create order in database
    const order = await Order.create({
      userId: orderData.userId,
      userName: orderData.userName,
      userEmail: orderData.userEmail,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      shippingAddress: orderData.shippingAddress || {},
      paymentMethod: orderData.paymentMethod || 'card',
      status: orderData.status || 'pending',
      paymentStatus: orderData.paymentStatus || 'pending',
      receipt: orderData.receipt,
      razorpayOrderId: orderData.razorpayOrderId,
      razorpayPaymentId: orderData.razorpayPaymentId,
      razorpaySignature: orderData.razorpaySignature,
    })

    // Return created order
    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        order: {
          id: order._id.toString(),
          userId: order.userId,
          userName: order.userName,
          userEmail: order.userEmail,
          items: order.items,
          totalAmount: order.totalAmount,
          status: order.status,
          paymentStatus: order.paymentStatus,
          paymentMethod: order.paymentMethod,
          shippingAddress: order.shippingAddress,
          createdAt: order.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Order creation error:', error)
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { 
          error: 'Validation error',
          details: Object.values(error.errors).map((e: any) => e.message).join(', ')
        },
        { status: 400 }
      )
    }
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Order already exists' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to create order',
        details: 'An error occurred while creating the order. Please try again.'
      },
      { status: 500 }
    )
  }
}

