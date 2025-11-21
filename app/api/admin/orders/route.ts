import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const orders = await Order.find().sort({ createdAt: -1 }).limit(100)

    return NextResponse.json(
      { orders: orders.map(o => ({
        _id: o._id.toString(),
        userId: o.userId,
        items: o.items,
        totalAmount: o.totalAmount,
        status: o.status,
        paymentStatus: o.paymentStatus || 'pending',
        shippingAddress: o.shippingAddress,
        createdAt: o.createdAt,
      })) },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Failed to fetch orders:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}





