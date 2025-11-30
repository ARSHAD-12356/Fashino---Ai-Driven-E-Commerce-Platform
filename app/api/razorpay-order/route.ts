import Razorpay from 'razorpay'

export async function POST(req: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      console.warn('Razorpay credentials are not configured on the server')
      return Response.json(
        { error: 'Razorpay credentials are not configured' },
        { status: 500 }
      )
    }

    const { amount } = await req.json()
    if (!amount || amount <= 0) {
      return Response.json({ error: 'Invalid amount' }, { status: 400 })
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    })

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

