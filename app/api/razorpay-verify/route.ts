import crypto from 'crypto'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

const keySecret = process.env.RAZORPAY_KEY_SECRET

export async function POST(req: Request) {
  if (!keySecret) {
    return Response.json(
      { error: 'Razorpay secret not configured' },
      { status: 500 }
    )
  }

  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      orderData,
      receipt,
    } = await req.json()

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return Response.json(
        { error: 'Incomplete payment details' },
        { status: 400 }
      )
    }

    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return Response.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

    await connectDB()

    const createdOrder = await Order.create({
      ...orderData,
      status: 'processing',
      paymentStatus: 'paid',
      receipt,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
    })

    return Response.json({
      success: true,
      order: {
        id: createdOrder._id.toString(),
        receipt,
      },
    })
  } catch (error: any) {
    console.error('Razorpay verify error:', error)
    return Response.json(
      { error: error.message || 'Unable to verify payment' },
      { status: 500 }
    )
  }
}

