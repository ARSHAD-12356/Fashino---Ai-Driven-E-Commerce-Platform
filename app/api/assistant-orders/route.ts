import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Order from '@/lib/models/Order'

// Get user orders from MongoDB or return empty (client will use localStorage)
const getUserOrders = async (userId: string) => {
  try {
    await connectDB()
    const orders = await Order.find({ userId }).sort({ createdAt: -1 }).limit(20)
    return orders.map(order => ({
      orderId: order._id.toString(),
      id: order.id || `FAS-${order._id.toString().slice(-8).toUpperCase()}`,
      orderDate: order.createdAt,
      deliveryDate: order.status === 'delivered' ? order.updatedAt : null,
      items: order.items || [],
      paymentStatus: order.paymentStatus || 'pending',
      orderStatus: order.status || 'processing',
      trackingId: order.trackingId || `TRK-${order._id.toString().slice(-8).toUpperCase()}`,
      trackingUrl: order.trackingUrl || `https://track.fashino.com/${order._id}`,
      totalAmount: order.totalAmount,
      shippingAddress: order.shippingAddress,
      refundStatus: order.refundStatus || null,
      returnStatus: order.returnStatus || null
    }))
  } catch (error) {
    console.error('Error fetching orders from DB:', error)
    // Return empty - client will use localStorage
    return []
  }
}

// Detect intent from query
type OrderIntent = 'track' | 'status' | 'delivery' | 'refund' | 'return' | 'cancel' | 'list' | 'item-search' | 'support' | 'non-order'

const detectIntent = (query: string): OrderIntent => {
  const normalized = query.toLowerCase()
  
  if (normalized.includes('product') && !normalized.includes('order')) {
    return 'non-order'
  }
  
  if (normalized.includes('track') || normalized.includes('tracking')) return 'track'
  if (normalized.includes('status') || normalized.includes('kya hai')) return 'status'
  if (normalized.includes('deliver') || normalized.includes('kab aayega') || normalized.includes('eta')) return 'delivery'
  if (normalized.includes('refund') || normalized.includes('paisa')) return 'refund'
  if (normalized.includes('return')) return 'return'
  if (normalized.includes('cancel')) return 'cancel'
  if (normalized.includes('recent') || normalized.includes('list') || normalized.includes('dikhao') || normalized.includes('sab')) return 'list'
  if (normalized.includes('support') || normalized.includes('help') || normalized.includes('contact') || normalized.includes('number')) return 'support'
  if (normalized.match(/order\s*#?[a-z0-9-]+/i)) return 'status'
  
  return 'item-search'
}

// Extract order ID from query
const extractOrderId = (query: string): string | null => {
  const match = query.match(/order\s*#?([a-z0-9-]+)/i)
  return match ? match[1] : null
}

// Extract item name from query
const extractItemName = (query: string): string | null => {
  const normalized = query.toLowerCase()
  const itemKeywords = ['tee', 'shirt', 'jacket', 'hoodie', 'pant', 'dress', 'shoe', 'item']
  
  for (const keyword of itemKeywords) {
    if (normalized.includes(keyword)) {
      // Try to extract the full item name
      const words = query.split(/\s+/)
      const keywordIndex = words.findIndex(w => w.toLowerCase().includes(keyword))
      if (keywordIndex !== -1) {
        return words.slice(Math.max(0, keywordIndex - 2), keywordIndex + 3).join(' ')
      }
    }
  }
  
  return null
}

// Calculate delivery ETA
const getDeliveryETA = (orderDate: Date, status: string): string => {
  const daysSinceOrder = Math.floor((Date.now() - new Date(orderDate).getTime()) / (1000 * 60 * 60 * 24))
  
  if (status === 'delivered') {
    return 'Delivered'
  }
  
  if (status === 'shipped') {
    return `${3 - daysSinceOrder} days`
  }
  
  if (status === 'processing') {
    return `${5 - daysSinceOrder} days`
  }
  
  return '5-7 business days'
}

// Generate response
const generateResponse = (query: string, orders: any[], intent: OrderIntent, userName: string): any => {
  const normalizedQuery = query.toLowerCase()
  
  // Non-order query
  if (intent === 'non-order') {
    return {
      text: "This bot is only for order and customer support queries. For product information please ask the shopping assistant.",
      orders: [],
      actions: []
    }
  }
  
  // Support query
  if (intent === 'support') {
    return {
      text: `Customer Support Options:\n\n📧 Email: support@fashino.com\n📞 Phone: +91-1800-XXX-XXXX\n💬 Live Chat: Available 24/7\n🕐 Hours: Mon-Sun, 9 AM - 9 PM\n\nFor order-specific queries, I can help you right here!`,
      orders: [],
      actions: []
    }
  }
  
  // List orders
  if (intent === 'list' || orders.length === 0) {
    if (orders.length === 0) {
      return {
        text: `Hello ${userName}! 👋\n\nYou don't have any orders yet. Once you place an order, I'll be able to help you track it!`,
        orders: [],
        actions: []
      }
    }
    
    let responseText = `Hello ${userName}! 👋\n\nHere are your recent orders:\n\n`
    orders.slice(0, 5).forEach((order: any, i: number) => {
      // Use formatted order ID (id field) or fallback to orderId if id doesn't exist
      const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
      responseText += `${i + 1}) Order #${displayOrderId}\n`
      responseText += `   Date: ${new Date(order.orderDate).toLocaleDateString('en-IN')}\n`
      responseText += `   Items: ${order.items.length}\n`
      
      // Add product names and categories
      if (order.items && order.items.length > 0) {
        responseText += `   Products:\n`
        order.items.slice(0, 3).forEach((item: any, idx: number) => {
          const productName = item.name || item.productName || 'Product'
          const category = item.category || item.productCategory || 'General'
          responseText += `      • ${productName} (${category})`
          if (item.quantity) {
            responseText += ` - Qty: ${item.quantity}`
          }
          responseText += `\n`
        })
        if (order.items.length > 3) {
          responseText += `      ... and ${order.items.length - 3} more item(s)\n`
        }
      }
      
      responseText += `   Status: ${order.orderStatus}\n`
      responseText += `   Total: ₹${order.totalAmount.toLocaleString('en-IN')}\n\n`
    })
    
    if (orders.length > 5) {
      responseText += `... and ${orders.length - 5} more orders.`
    }
    
    return {
      text: responseText,
      orders: orders.slice(0, 5),
      actions: ['view_all']
    }
  }
  
  // Find order by ID
  const orderId = extractOrderId(query)
  let targetOrder = orderId 
    ? orders.find(o => o.id === orderId || o.orderId === orderId)
    : null
  
  // Find order by item name
  if (!targetOrder) {
    const itemName = extractItemName(query)
    if (itemName) {
      targetOrder = orders.find(order => 
        order.items.some((item: any) => 
          item.name.toLowerCase().includes(itemName.toLowerCase())
        )
      )
    }
  }
  
  // If no specific order, use latest
  if (!targetOrder && orders.length > 0) {
    targetOrder = orders[0]
  }
  
  if (!targetOrder) {
    return {
      text: `I couldn't find that order. Please check your order ID or ask me to show your recent orders.`,
      orders: [],
      actions: []
    }
  }
  
  const order = targetOrder
  const deliveryETA = getDeliveryETA(order.orderDate, order.orderStatus)
  
  // Track order
  if (intent === 'track') {
    const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
    let trackText = `📦 Order Tracking:\n\nOrder ID: #${displayOrderId}\nTracking ID: ${order.trackingId}\nStatus: ${order.orderStatus}\n\n`
    
    // Add product names and categories
    if (order.items && order.items.length > 0) {
      trackText += `Products:\n`
      order.items.forEach((item: any) => {
        const productName = item.name || item.productName || 'Product'
        const category = item.category || item.productCategory || 'General'
        trackText += `• ${productName} (${category})\n`
      })
      trackText += `\n`
    }
    
    trackText += `Tracking Link: ${order.trackingUrl}\n\nExpected Delivery: ${deliveryETA}`
    
    return {
      text: trackText,
      orders: [order],
      actions: ['track', 'view_order']
    }
  }
  
  // Delivery ETA
  if (intent === 'delivery') {
    const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
    let deliveryText = `📅 Delivery Information:\n\nOrder #${displayOrderId}\nExpected Delivery: ${deliveryETA}\nCurrent Status: ${order.orderStatus}\n\n`
    
    // Add product names and categories
    if (order.items && order.items.length > 0) {
      deliveryText += `Products:\n`
      order.items.forEach((item: any) => {
        const productName = item.name || item.productName || 'Product'
        const category = item.category || item.productCategory || 'General'
        deliveryText += `• ${productName} (${category})\n`
      })
      deliveryText += `\n`
    }
    
    deliveryText += `Your order is ${order.orderStatus === 'processing' ? 'being prepared' : order.orderStatus === 'shipped' ? 'on the way' : 'delivered'}!`
    
    return {
      text: deliveryText,
      orders: [order],
      actions: ['track', 'view_order']
    }
  }
  
  // Refund status
  if (intent === 'refund') {
    const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
    if (order.refundStatus) {
      return {
        text: `💰 Refund Status:\n\nOrder #${displayOrderId}\nRefund Status: ${order.refundStatus}\n\nYour refund is ${order.refundStatus === 'processed' ? 'completed' : 'being processed'}. It will reflect in your account within 5-7 business days.`,
        orders: [order],
        actions: ['view_order', 'need_help']
      }
    }
    return {
      text: `No refund has been requested for Order #${displayOrderId}. If you'd like to request a refund, please contact customer support or use the return feature.`,
      orders: [order],
      actions: ['view_order', 'need_help']
    }
  }
  
  // Return status
  if (intent === 'return') {
    const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
    if (order.returnStatus) {
      return {
        text: `🔄 Return Status:\n\nOrder #${displayOrderId}\nReturn Status: ${order.returnStatus}\n\nYour return is ${order.returnStatus === 'approved' ? 'approved' : order.returnStatus === 'processed' ? 'processed' : 'under review'}.`,
        orders: [order],
        actions: ['view_order', 'need_help']
      }
    }
    return {
      text: `No return has been requested for Order #${displayOrderId}. To initiate a return, please contact customer support.`,
      orders: [order],
      actions: ['view_order', 'need_help']
    }
  }
  
  // Cancel order
  if (intent === 'cancel') {
    const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
    if (order.orderStatus === 'delivered' || order.orderStatus === 'cancelled') {
      return {
        text: `This order cannot be cancelled as it is already ${order.orderStatus}.`,
        orders: [order],
        actions: ['view_order']
      }
    }
    return {
      text: `Order #${displayOrderId} can be cancelled. Would you like me to help you cancel it?`,
      orders: [order],
      actions: ['cancel', 'view_order']
    }
  }
  
  // Default status response
  const displayOrderId = order.id || order.orderId || `FAS-${(order.orderId || order._id || '').toString().slice(-8).toUpperCase()}`
  let responseText = `📋 Order Details:\n\nOrder ID: #${displayOrderId}\nOrder Date: ${new Date(order.orderDate).toLocaleDateString('en-IN')}\nStatus: ${order.orderStatus}\nPayment: ${order.paymentStatus}\nExpected Delivery: ${deliveryETA}\n\nItems:\n`
  
  order.items.forEach((item: any, i: number) => {
    const productName = item.name || item.productName || 'Product'
    const category = item.category || item.productCategory || 'General'
    const quantity = item.quantity || 1
    const price = item.price || 0
    responseText += `${i + 1}) ${productName} (${category}) - Qty: ${quantity} - ₹${(price * quantity).toLocaleString('en-IN')}\n`
  })
  
  responseText += `\nTotal: ₹${order.totalAmount.toLocaleString('en-IN')}`
  
  if (order.refundStatus) {
    responseText += `\nRefund Status: ${order.refundStatus}`
  }
  if (order.returnStatus) {
    responseText += `\nReturn Status: ${order.returnStatus}`
  }
  
  return {
    text: responseText,
    orders: [order],
    actions: ['view_order', 'track', 'need_help']
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query, userId, localOrders } = await request.json()
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 401 }
      )
    }
    
    // Try MongoDB first, fallback to localStorage orders
    let orders = await getUserOrders(userId)
    if (orders.length === 0 && localOrders && localOrders.length > 0) {
      orders = localOrders
    }
    
    const intent = detectIntent(query)
    
    // Get user name from request or use default
    const userName = request.headers.get('x-user-name') || 'User'
    
    const response = generateResponse(query, orders, intent, userName)
    
    return NextResponse.json({
      success: true,
      query,
      intent,
      response: response.text,
      orders: response.orders,
      actions: response.actions
    })
  } catch (error: any) {
    console.error('Order assistant error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process query' },
      { status: 500 }
    )
  }
}



