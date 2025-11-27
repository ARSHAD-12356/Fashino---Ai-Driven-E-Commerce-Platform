import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

export async function DELETE(request: NextRequest) {
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

    // Get order ID from query parameters
    const searchParams = request.nextUrl.searchParams
    const orderId = searchParams.get('id')

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    // Delete order from database
    const deletedOrder = await Order.findByIdAndDelete(orderId)

    if (!deletedOrder) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Order deleted successfully',
        orderId: deletedOrder._id.toString(),
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Order deletion error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to delete order',
        details: 'An error occurred while deleting the order. Please try again.'
      },
      { status: 500 }
    )
  }
}














