import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const orderData = await request.json()
    const { userId, items, totalAmount, shippingAddress, paymentMethod } = orderData

    if (!userId || !items || !totalAmount || !shippingAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const order = await Order.create({
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod: paymentMethod || 'card',
      status: 'pending',
      paymentStatus: 'pending',
    })

    return NextResponse.json(
      {
        message: 'Order created successfully',
        order: {
          id: order._id.toString(),
          userId: order.userId,
          items: order.items,
          totalAmount: order.totalAmount,
          status: order.status,
          paymentStatus: order.paymentStatus || 'pending',
          createdAt: order.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}





