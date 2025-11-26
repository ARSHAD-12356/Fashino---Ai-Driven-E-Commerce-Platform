'use client'

import { useState, useEffect, Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useCart } from '@/context/cart-context'
import { ChevronRight, Lock, Check } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

declare global {
  interface Window {
    Razorpay: any
  }
}

type CheckoutStep = 'cart' | 'shipping' | 'payment' | 'confirmation'
type PaymentMethod = 'card' | 'upi' | 'cod' | 'netbanking'
type RecipientType = 'self' | 'someoneElse'

interface StoredOrderProduct {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  size?: string
}

interface StoredOrder {
  id: string
  date: string
  status: string
  total: number
  items: number
  recipientType: RecipientType
  paymentStatus?: string
  paymentMethod?: string
  mongoId?: string
  shippingDetails?: {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    address?: string
    city?: string
    state?: string
    zipCode?: string
    country?: string
  }
  products: StoredOrderProduct[]
}

function CheckoutContent() {
  const { items, total, clearCart } = useCart()
  const { user } = useAuth()
  const searchParams = useSearchParams()
  const startOnShipping = searchParams.get('start') === 'shipping' && items.length > 0
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(startOnShipping ? 'shipping' : 'cart')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [recipientType, setRecipientType] = useState<RecipientType>('self')
  const [orderReference, setOrderReference] = useState<string | null>(null)
  const [completedOrderSummary, setCompletedOrderSummary] = useState<{
    subtotal: number
    shipping: number
    tax: number
    total: number
  } | null>(null)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [paymentAlert, setPaymentAlert] = useState<{ type: 'error' | 'success'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
  })

  useEffect(() => {
    if (searchParams.get('start') === 'shipping' && items.length > 0) {
      setCurrentStep('shipping')
    }
  }, [searchParams, items.length])

  useEffect(() => {
    setPaymentAlert(null)
  }, [paymentMethod])

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (typeof window === 'undefined') {
        resolve(false)
        return
      }

      if (window.Razorpay) {
        resolve(true)
        return
      }

      const existingScript = document.getElementById('razorpay-checkout-js')
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(true))
        existingScript.addEventListener('error', () => resolve(false))
        return
      }

      const script = document.createElement('script')
      script.id = 'razorpay-checkout-js'
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const createOrderReference = () => `FAS-${Date.now().toString(36).toUpperCase()}`

  const buildShippingAddress = () => {
    if (recipientType === 'someoneElse') {
      return {
        street: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      }
    }

    if (user?.address) {
      return {
        street: user.address,
        city: 'N/A',
        state: 'N/A',
        zipCode: 'N/A',
        country: 'India',
      }
    }

    return {
      street: 'N/A',
      city: 'N/A',
      state: 'N/A',
      zipCode: 'N/A',
      country: 'India',
    }
  }

  const buildRecipientDetails = () => {
    if (recipientType === 'someoneElse') {
      return {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
      }
    }
    return undefined
  }

  const getStoredProducts = (): StoredOrderProduct[] =>
    items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      size: item.size,
    }))

  const getDbItems = () =>
    items.map((item) => ({
      productId: item.id.toString(),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    }))

  const buildStoredOrder = (orderId: string, paymentStatusValue: string, mongoId?: string): StoredOrder => ({
    id: orderId,
    date: new Date().toISOString(),
    status: 'Processing',
    total: finalTotal,
    items: items.reduce((sum, item) => sum + item.quantity, 0),
    recipientType,
    paymentStatus: paymentStatusValue,
    paymentMethod,
    mongoId,
    shippingDetails: buildRecipientDetails(),
    products: getStoredProducts(),
  })

  const buildDbOrderPayload = () => ({
    userId: user?.id || 'guest',
    userName:
      user?.name ||
      [formData.firstName, formData.lastName].filter(Boolean).join(' ').trim() ||
      'Guest User',
    userEmail: user?.email || formData.email || 'guest@fashino.com',
    items: getDbItems(),
    totalAmount: finalTotal,
    shippingAddress: buildShippingAddress(),
    paymentMethod,
  })

  const getRazorpayDisplayConfig = (method: PaymentMethod) => {
    if (!['card', 'upi', 'netbanking'].includes(method)) {
      return undefined
    }

    const blockName =
      method === 'netbanking'
        ? 'netbankingBlock'
        : method === 'upi'
          ? 'upiBlock'
          : 'cardBlock'

    const displayName =
      method === 'netbanking'
        ? 'Net Banking'
        : method === 'upi'
          ? 'UPI'
          : 'Card'

    const instrumentMethod =
      method === 'netbanking'
        ? { method: 'netbanking' }
        : method === 'upi'
          ? { method: 'upi' }
          : { method: 'card' }

    return {
      display: {
        blocks: {
          [blockName]: {
            name: `Pay using ${displayName}`,
            instruments: [instrumentMethod],
          },
        },
        sequence: [blockName],
        preferences: {
          show_default_blocks: false,
        },
      },
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleContinue = async () => {
    if (currentStep === 'cart') {
      setCurrentStep('shipping')
    } else if (currentStep === 'shipping') {
      setCurrentStep('payment')
    } else if (currentStep === 'payment') {
      if (paymentMethod === 'cod') {
        await finalizeOrder()
      } else {
        await initiateOnlinePayment()
      }
    }
  }

  const handleBack = () => {
    if (currentStep === 'shipping') setCurrentStep('cart')
    else if (currentStep === 'payment') setCurrentStep('shipping')
  }

  const isShippingFormValid = !!(
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.address &&
    formData.city &&
    formData.zipCode
  )

  const isShippingValid = recipientType === 'self' ? true : isShippingFormValid
  const isPaymentValid = paymentMethod === 'card' 
    ? formData.cardName && formData.cardNumber && formData.expiry && formData.cvv
    : paymentMethod === 'upi'
    ? formData.upiId
    : true

  const shippingCost = total > 5000 ? 0 : 500
  const tax = Math.round(total * 0.18)
  const finalTotal = total + shippingCost + tax
  const summaryTotals =
    currentStep === 'confirmation' && completedOrderSummary
      ? completedOrderSummary
      : { subtotal: total, shipping: shippingCost, tax, total: finalTotal }

  const saveOrderToStorage = (order: StoredOrder) => {
    if (typeof window === 'undefined' || !user) return
    // Use user-specific storage key to prevent data leakage between users
    const userOrdersKey = `recentOrders_${user.id}`
    const existing = (() => {
      try {
        return JSON.parse(window.localStorage.getItem(userOrdersKey) || '[]')
      } catch {
        return []
      }
    })()
    const updated = [order, ...existing].slice(0, 10)
    window.localStorage.setItem(userOrdersKey, JSON.stringify(updated))
    window.dispatchEvent(new Event('recentOrdersUpdated'))
  }

  const finalizeOrder = async () => {
    if (isPlacingOrder || items.length === 0 || paymentMethod !== 'cod') return
    setIsPlacingOrder(true)
    setPaymentAlert(null)
    try {
      const orderId = createOrderReference()
      const storedOrder = buildStoredOrder(orderId, 'Pending')
      const dbOrderData = {
        ...buildDbOrderPayload(),
        paymentMethod: 'cod',
        status: 'processing',
        paymentStatus: 'pending',
      }

      try {
        const response = await fetch('/api/orders/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dbOrderData),
        })

        if (response.ok) {
          const data = await response.json()
          storedOrder.mongoId = data.order.id
        } else {
          console.error('Failed to save order to database:', await response.text())
        }
      } catch (error) {
        console.error('Error saving order to database:', error)
      }

      setCompletedOrderSummary({
        subtotal: total,
        shipping: shippingCost,
        tax,
        total: finalTotal,
      })
      setOrderReference(orderId)
      saveOrderToStorage(storedOrder)
      clearCart()
      setCurrentStep('confirmation')
    } finally {
      setIsPlacingOrder(false)
    }
  }

  const initiateOnlinePayment = async () => {
    if (isPlacingOrder || items.length === 0) return
    setIsPlacingOrder(true)
    setPaymentAlert(null)

    try {
      const response = await fetch('/api/razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalTotal }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.warn('Razorpay order error:', errorData?.error || 'Unknown error')
        setPaymentAlert({
          type: 'error',
          text: errorData.error || 'Unable to initialize payment. Please try again.',
        })
        setIsPlacingOrder(false)
        return
      }

      const { order } = await response.json()
      if (!order?.id) {
        setPaymentAlert({
          type: 'error',
          text: 'Invalid payment response. Please try again.',
        })
        setIsPlacingOrder(false)
        return
      }

      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        setPaymentAlert({
          type: 'error',
          text: 'Unable to load the Razorpay checkout. Please check your connection.',
        })
        setIsPlacingOrder(false)
        return
      }

      const storedOrder = buildStoredOrder(order.receipt, 'Paid')
      const orderData = {
        ...buildDbOrderPayload(),
        status: 'processing',
        paymentStatus: 'paid',
      }
      const publicKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

      if (!publicKey) {
        console.warn(
          'Razorpay credentials are not configured. Please set NEXT_PUBLIC_RAZORPAY_KEY_ID.'
        )
        setPaymentAlert({
          type: 'error',
          text: 'Razorpay credentials are not configured',
        })
        setIsPlacingOrder(false)
        return
      }

      setOrderReference(order.receipt)

      const razorpayOptions: any = {
        key: publicKey,
        amount: order.amount,
        currency: order.currency,
        name: 'Fashino – Secure Payment',
        description: `Payment for ${order.receipt}`,
        order_id: order.id,
        prefill: {
          name:
            user?.name ||
            [formData.firstName, formData.lastName].filter(Boolean).join(' ').trim() ||
            'Fashino Customer',
          email: user?.email || formData.email || 'support@fashino.com',
          contact: formData.phone || '',
        },
        theme: {
          color: '#000000',
        },
        retry: {
          enabled: true,
          max_count: 2,
        },
        handler: async (paymentResponse: any) => {
          try {
            const verifyResponse = await fetch('/api/razorpay-verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: paymentResponse.razorpay_payment_id,
                razorpay_order_id: paymentResponse.razorpay_order_id,
                razorpay_signature: paymentResponse.razorpay_signature,
                orderData,
                receipt: order.receipt,
              }),
            })

            const verifyData = await verifyResponse.json()
            if (!verifyResponse.ok || !verifyData.success) {
              setPaymentAlert({
                type: 'error',
                text:
                  verifyData.error ||
                  'Payment verification failed — please contact support if amount was deducted.',
              })
              setIsPlacingOrder(false)
              return
            }

            if (verifyData.order?.id) {
              storedOrder.mongoId = verifyData.order.id
            }

            setCompletedOrderSummary({
              subtotal: total,
              shipping: shippingCost,
              tax,
              total: finalTotal,
            })
            saveOrderToStorage(storedOrder)
            clearCart()
            setPaymentAlert(null)
            setCurrentStep('confirmation')
          } catch (error: any) {
            console.error('Order save error:', error)
            setPaymentAlert({
              type: 'error',
              text: 'Payment captured but order could not be recorded. Please contact support.',
            })
          } finally {
            setIsPlacingOrder(false)
          }
        },
        modal: {
          ondismiss: () => {
            setIsPlacingOrder(false)
            setPaymentAlert({
              type: 'error',
              text: 'Payment cancelled — please try again.',
            })
          },
        },
      }

      const methodConfig = getRazorpayDisplayConfig(paymentMethod)
      if (methodConfig) {
        razorpayOptions.config = methodConfig
      }

      const razorpayInstance = new window.Razorpay(razorpayOptions)
      razorpayInstance.on('payment.failed', () => {
        setIsPlacingOrder(false)
        setPaymentAlert({
          type: 'error',
          text: 'Payment failed — please try again.',
        })
      })
      razorpayInstance.open()
    } catch (error: any) {
      console.error('Payment initialization error:', error)
      setPaymentAlert({
        type: 'error',
        text: error.message || 'Unable to initiate payment. Please try again.',
      })
      setIsPlacingOrder(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Progress Indicator */}
        {currentStep !== 'confirmation' && (
          <div className="bg-muted/50 px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                {(['cart', 'shipping', 'payment'] as const).map((step, index) => (
                  <div key={step} className="flex items-center flex-1 min-w-0">
                    <div
                      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold smooth-transition text-xs sm:text-sm flex-shrink-0 ${
                        step === currentStep
                          ? 'bg-primary text-primary-foreground'
                          : currentStep === 'confirmation' || 
                            (['payment', 'confirmation'].includes(currentStep) && step === 'payment') ||
                            (['shipping', 'payment', 'confirmation'].includes(currentStep) && step === 'shipping')
                          ? 'bg-green-500 text-white'
                          : 'bg-border text-muted-foreground'
                      }`}
                    >
                      {step === 'confirmation' || 
                       (['payment', 'confirmation'].includes(currentStep) && step === 'payment') ||
                       (['shipping', 'payment', 'confirmation'].includes(currentStep) && step === 'shipping') ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase ml-1 sm:ml-2 text-foreground truncate hidden xs:inline">{step}</span>
                    {index < 2 && (
                      <div className="flex-1 h-1 mx-1 sm:mx-2 md:mx-4 bg-border smooth-transition min-w-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* CART STEP */}
              {currentStep === 'cart' && (
                <div className="space-y-4 sm:space-y-6 fade-in">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Review Your Cart</h2>
                  
                  {items.length === 0 ? (
                    <div className="bg-muted/50 p-6 sm:p-8 rounded-lg text-center">
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base">Your cart is empty</p>
                      <Link href="/">
                        <button className="px-4 sm:px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg smooth-transition text-sm sm:text-base">
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/30 rounded-lg scale-in"
                        >
                          <img
                            src={item.image || '/placeholder.svg'}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base truncate">{item.name}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            {item.size && (
                              <p className="text-xs sm:text-sm text-muted-foreground">Size: {item.size}</p>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="font-semibold text-sm sm:text-base">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* SHIPPING STEP */}
              {currentStep === 'shipping' && (
                <div className="space-y-4 sm:space-y-6 fade-in">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        id: 'self',
                        title: 'Ship to Me',
                        description: 'Use your saved profile details for faster checkout.',
                        highlight: user?.name || 'Primary profile',
                      },
                      {
                        id: 'someoneElse',
                        title: 'Ship to Someone Else',
                        description: 'Send this order directly to friends or family.',
                        highlight: 'Enter recipient details below',
                      },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setRecipientType(option.id as RecipientType)}
                        className={`text-left p-3 sm:p-4 rounded-2xl border-2 hover:shadow-lg smooth-transition ${
                          recipientType === option.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border text-foreground hover:border-primary/40'
                        }`}
                      >
                        <p className="text-base sm:text-lg font-semibold mb-1">{option.title}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{option.description}</p>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium">{option.highlight}</p>
                      </button>
                    ))}
                  </div>

                  {recipientType === 'self' && (
                    <div className="bg-muted/40 border border-border rounded-2xl p-4 sm:p-5 space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-foreground">Using saved details</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">
                        {user?.name || 'Your profile name'} • {user?.email || 'your@email.com'}
                      </p>
                      {user?.address ? (
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{user.address}</p>
                      ) : (
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Update your address anytime from the dashboard.
                        </p>
                      )}
                    </div>
                  )}
                  
                  {recipientType === 'someoneElse' && (
                    <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="New Delhi"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Delhi"
                      />
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="110001"
                      />
                    </div>
                  </div>
                    </>
                  )}
                </div>
              )}

              {/* PAYMENT STEP */}
              {currentStep === 'payment' && (
                <div className="space-y-4 sm:space-y-6 fade-in">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Payment Information</h2>
                  
                  <div className="bg-primary/5 border border-primary/20 p-3 sm:p-4 rounded-lg flex items-center gap-2 mb-4 sm:mb-6">
                    <Lock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground">Your payment is secure and encrypted</span>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">Select Payment Method</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                      {[
                        { id: 'card', label: 'Card', icon: '💳' },
                        { id: 'upi', label: 'UPI', icon: '📱' },
                        { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                        { id: 'cod', label: 'COD', icon: '🚚' },
                      ].map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                          className={`p-3 sm:p-4 rounded-lg border-2 smooth-transition text-center font-medium text-xs sm:text-sm ${
                            paymentMethod === method.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border text-foreground hover:border-primary/50'
                          }`}
                        >
                          <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{method.icon}</div>
                          {method.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          maxLength={16}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Expiry Date</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            maxLength={5}
                            placeholder="MM/YY"
                            className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={3}
                            placeholder="123"
                            className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">UPI ID</label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="yourname@upi"
                      />
                      <p className="text-xs text-muted-foreground mt-2">Enter your UPI ID (e.g., name@googleplay)</p>
                    </div>
                  )}

                  {/* Net Banking Payment Form */}
                  {paymentMethod === 'netbanking' && (
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Select Your Bank</label>
                      <select
                          className="w-full px-3 sm:px-4 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option>Select a bank</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>State Bank of India</option>
                        <option>Axis Bank</option>
                        <option>Other Banks</option>
                      </select>
                    </div>
                  )}

                  {/* COD Payment Form */}
                  {paymentMethod === 'cod' && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                        You will pay ₹{finalTotal.toLocaleString('en-IN')} on delivery. Your order will be delivered in 5-7 business days.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* CONFIRMATION STEP */}
              {currentStep === 'confirmation' && (
                <div className="text-center space-y-4 sm:space-y-6 fade-in py-8 sm:py-12">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <Check className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Order Confirmed!</h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto px-4">
                    Thank you for your purchase. Your order has been confirmed and you'll receive an email confirmation shortly.
                  </p>
                  <div className="bg-muted/50 p-4 sm:p-6 rounded-lg text-left max-w-md mx-auto">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">Order Number</p>
                    <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 break-all">
                      #{orderReference ?? 'UPDATING'}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">Estimated Delivery</p>
                    <p className="font-semibold text-sm sm:text-base">5-7 Business Days</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
                    <Link href="/" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg smooth-transition text-sm sm:text-base">
                        Continue Shopping
                      </button>
                    </Link>
                    <Link href="/dashboard" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 smooth-transition text-sm sm:text-base">
                      Track Order
                    </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep !== 'confirmation' && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12">
                  {currentStep !== 'cart' && (
                    <button
                      onClick={handleBack}
                      className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 smooth-transition text-sm sm:text-base"
                    >
                      Back
                    </button>
                  )}
                  <div className="flex-1 sm:flex-initial sm:ml-auto">
                    {currentStep === 'cart' && items.length > 0 && (
                      <button
                        onClick={handleContinue}
                        className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg smooth-transition active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                    {currentStep === 'shipping' && (
                      <button
                        onClick={handleContinue}
                        disabled={!isShippingValid}
                        className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg smooth-transition active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                    {currentStep === 'payment' && (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={handleContinue}
                          disabled={!isPaymentValid || isPlacingOrder}
                          className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg smooth-transition active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                          {isPlacingOrder ? 'Processing...' : 'Complete Order'} <ChevronRight className="w-4 h-4" />
                        </button>
                        {paymentAlert && (
                          <p
                            className={`text-xs sm:text-sm text-center sm:text-left ${
                              paymentAlert.type === 'error'
                                ? 'text-red-600 dark:text-red-400'
                                : 'text-green-600 dark:text-green-400'
                            }`}
                          >
                            {paymentAlert.text}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted/50 rounded-lg p-4 sm:p-6 lg:sticky lg:top-24 scale-in">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Order Summary</h3>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{summaryTotals.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {summaryTotals.shipping === 0 ? 'Free' : `₹${summaryTotals.shipping.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-muted-foreground">Tax (18% GST)</span>
                    <span className="font-medium">₹{summaryTotals.tax.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex justify-between text-base sm:text-lg font-bold mb-4 sm:mb-6">
                  <span>Total</span>
                  <span>₹{summaryTotals.total.toLocaleString('en-IN')}</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-muted-foreground">
                  <p>✓ Free shipping on orders over ₹5000</p>
                  <p>✓ 30-day money-back guarantee</p>
                  <p>✓ Secure checkout with SSL encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  )
}
