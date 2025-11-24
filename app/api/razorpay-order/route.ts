import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: 'receipt_' + Date.now(),
    })

    return Response.json({ order })
  } catch (error) {
    console.error('Razorpay error:', error)
    return Response.json(
      { error: 'Razorpay credentials not configured or invalid' },
      { status: 500 }
    )
  }
}

