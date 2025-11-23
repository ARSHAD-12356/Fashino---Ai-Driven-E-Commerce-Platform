'use client'

import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ShoppingBag, Heart, LogOut, Edit2, UserIcon, Phone, Mail, MapPinIcon, X, Truck, CheckCircle2, MessageCircle, XCircle, MoreVertical, Eye } from 'lucide-react'
import { OrderAssistant } from '@/components/order-assistant'
import { useWishlist } from '@/context/wishlist-context'
import { products } from '@/lib/products'

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
  recipientType: 'self' | 'someoneElse'
  paymentStatus?: string
  paymentMethod?: string
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

const statusBadgeClasses = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'delivered') return 'bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30'
  if (normalized === 'processing') return 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
  if (normalized === 'in transit' || normalized === 'shipped') return 'bg-blue-500/15 text-blue-500 border border-blue-500/30'
  return 'bg-muted text-muted-foreground border border-border'
}

const trackingTemplates = [
  { label: 'Order Placed', description: 'We received your order details.' },
  { label: 'Processing', description: 'Items are being prepared.' },
  { label: 'Shipped', description: 'Package handed over to courier.' },
  { label: 'Out for Delivery', description: 'Courier is on the way to you.' },
  { label: 'Delivered', description: 'Order delivered successfully.' },
]

const getCurrentTrackingStage = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'processing') return 1
  if (normalized === 'shipped' || normalized === 'in transit') return 2
  if (normalized === 'out for delivery') return 3
  if (normalized === 'delivered') return 4
  return 0
}

const formatCurrency = (amount: number) => `₹${amount.toLocaleString('en-IN')}`

const formatDisplayDate = (dateString: string) => {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Ensure order ID is in the correct format (FAS-XXXXX)
const formatOrderId = (orderId: string | undefined, mongoId?: string): string => {
  if (!orderId && !mongoId) return 'FAS-UNKNOWN'
  
  // If it's already in FAS- format, return as is
  if (orderId && orderId.startsWith('FAS-')) {
    return orderId
  }
  
  // If we have a formatted ID, use it
  if (orderId) {
    return orderId
  }
  
  // If only MongoDB ID exists, generate formatted ID from it
  if (mongoId) {
    return `FAS-${mongoId.toString().slice(-8).toUpperCase()}`
  }
  
  return 'FAS-UNKNOWN'
}

const fallbackOrders: StoredOrder[] = [
  {
    id: 'FAS-1001',
    date: '2025-01-15T10:00:00.000Z',
    status: 'Delivered',
    total: 12499,
    items: 2,
    recipientType: 'self',
    products: [
      { id: 1, name: 'Premium Leather Jacket', price: 9999, quantity: 1, image: '/mens-sports-jacket.jpg' },
      { id: 2, name: 'Classic Denim', price: 2500, quantity: 1, image: '/mens-denim-shirt.jpg' },
    ],
  },
  {
    id: 'FAS-1002',
    date: '2025-01-10T12:00:00.000Z',
    status: 'Delivered',
    total: 9475,
    items: 1,
    recipientType: 'self',
    products: [
      { id: 3, name: 'Silk Evening Dress', price: 9475, quantity: 1, image: '/womens-silk-evening-dress.jpg' },
    ],
  },
  {
    id: 'FAS-1003',
    date: '2025-01-05T08:30:00.000Z',
    status: 'In Transit',
    total: 22800,
    items: 3,
    recipientType: 'someoneElse',
    shippingDetails: {
      firstName: 'Aisha',
      lastName: 'Khan',
      address: '22 Residency Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      zipCode: '560025',
      country: 'India',
    },
    products: [
      { id: 4, name: 'Winter Checkered Coat', price: 12999, quantity: 1, image: '/mens-checkered-winter-shirt.jpg' },
      { id: 5, name: 'Cashmere Scarf', price: 4500, quantity: 1, image: '/silk-scarf.jpg' },
      { id: 6, name: 'Thermal Set', price: 5301, quantity: 1, image: '/mens-winter-thermal-shirt.jpg' },
    ],
  },
]

export default function DashboardPage() {
  const { user, logout, updateProfile, isLoading } = useAuth()
  const router = useRouter()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profilePic: '',
  })
  const [recentOrders, setRecentOrders] = useState<StoredOrder[]>([])
  const [selectedOrder, setSelectedOrder] = useState<StoredOrder | null>(null)
  const [trackingOrder, setTrackingOrder] = useState<StoredOrder | null>(null)
  const [cancelOrderId, setCancelOrderId] = useState<string | null>(null)
  const [cancelReason, setCancelReason] = useState('')
  const [otherReasonText, setOtherReasonText] = useState('')
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState<{ orderId: string; productId: number } | null>(null)
  const { items: wishlistIds } = useWishlist()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    } else if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        profilePic: user.profilePic || '',
      })
      
      // Clean up old generic orders storage to prevent data leakage
      // New users should start with empty orders - don't migrate old data
      if (typeof window !== 'undefined') {
        const userOrdersKey = `recentOrders_${user.id}`
        const existingUserOrders = window.localStorage.getItem(userOrdersKey)
        
        // Only remove old generic key if user already has their own orders
        // This ensures new users start fresh without any default/demo data
        if (existingUserOrders) {
          // User has their own orders, safe to remove old generic key
          window.localStorage.removeItem('recentOrders')
        } else {
          // New user - ensure they start with empty orders
          // Remove any old generic orders to prevent data leakage
          window.localStorage.removeItem('recentOrders')
          // Initialize empty array for new user
          window.localStorage.setItem(userOrdersKey, '[]')
        }
      }
    }
  }, [user, router, isLoading])

  // Update form data when user changes from auth context
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
        address: user.address || prev.address,
        profilePic: user.profilePic || prev.profilePic,
      }))
    }
  }, [user])

  useEffect(() => {
    const loadOrders = () => {
      if (typeof window === 'undefined' || !user) return
      try {
        // Load orders from localStorage with user-specific key
        const userOrdersKey = `recentOrders_${user.id}`
        const stored = JSON.parse(window.localStorage.getItem(userOrdersKey) || '[]')
        
        // Only show actual orders, no fallback demo data
        // Filter out orders that don't have payment completed
        const validOrders = stored.filter((order: StoredOrder) => {
          // Only show orders where payment is completed (Paid) or COD (which is valid after order placement)
          // For online payments, only show if paymentStatus is 'Paid'
          // For COD, show if paymentMethod is 'cod' (payment happens on delivery)
          if (order.paymentMethod === 'cod') {
            return true // COD orders are valid
          }
          // For other payment methods, only show if payment is completed
          return order.paymentStatus === 'Paid'
        })
        setRecentOrders(validOrders)
      } catch {
        setRecentOrders([])
      }
    }

    loadOrders()

    const handleStorage = (event: StorageEvent) => {
      if (event.key && event.key.startsWith('recentOrders_')) {
        loadOrders()
      }
    }

    const handleCustomUpdate = () => loadOrders()

    window.addEventListener('storage', handleStorage)
    window.addEventListener('recentOrdersUpdated', handleCustomUpdate)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('recentOrdersUpdated', handleCustomUpdate)
    }
  }, [user])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productMenuOpen && !(event.target as Element).closest('.product-menu-container')) {
        setProductMenuOpen(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [productMenuOpen])

  // Redirect to login if not authenticated (must be before any conditional returns)
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  const wishlistItems = wishlistIds.length > 0
    ? wishlistIds
        .map((id) => {
          const product = products.find((p: any) => p.id === id)
          return product
            ? {
                id: product.id,
                name: product.name,
                price: `₹${product.price.toLocaleString('en-IN')}`,
                status: product.inStock === false ? 'Out of Stock' : 'In Stock',
              }
            : null
        })
        .filter(Boolean)
    : []

  const totalOrders = recentOrders.length
  const totalSpent = recentOrders
    .filter(order => order.status.toLowerCase() === 'delivered')
    .reduce((sum, order) => sum + order.total, 0)

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateProfile(formData)
      setIsEditModalOpen(false)
      // Update local state to reflect changes immediately
      // The auth context will update, and useEffect will sync
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePic: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAISend = () => {
    if (!aiInput.trim()) return

    const userMessageText = aiInput
    const userMessage = { text: userMessageText, sender: 'user' as const }
    setAiMessages(prev => [...prev, userMessage])
    setAiInput('')

    // Generate bot response
    setTimeout(() => {
      const lowerInput = userMessageText.toLowerCase()
      let botResponse = ''

      if (lowerInput.includes('order') || lowerInput.includes('track')) {
        botResponse = `You have ${recentOrders.length} order(s). I can help you track your orders. Would you like to know the status of a specific order?`
      } else if (lowerInput.includes('cancel') || lowerInput.includes('return')) {
        botResponse = 'To cancel an order, click the "Cancel Order" button on the order card. For returns, please contact our customer support team.'
      } else if (lowerInput.includes('product') || lowerInput.includes('item')) {
        botResponse = 'I can help you find products! Visit our shop page or use the search bar to browse our catalog.'
      } else if (lowerInput.includes('support') || lowerInput.includes('help') || lowerInput.includes('contact')) {
        botResponse = 'For customer support, you can:\n• Email us at support@fashino.com\n• Call us at +91-1800-XXX-XXXX\n• Use the "Cancel Order" feature for order-related issues'
      } else {
        botResponse = 'I\'m here to help! You can ask me about:\n• Order tracking\n• Product information\n• Returns & cancellations\n• Customer support\n\nHow else can I assist you?'
      }

      setAiMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
    }, 500)
  }

  // Show loading or redirect if user is not available
  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Header Section - Enhanced UI with modern styling */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-border">
          <div className="flex items-center gap-6">
            <div className="relative group">
              {user?.profilePic ? (
                <img
                  src={user.profilePic || "/placeholder.svg"}
                  alt={user?.name || "User"}
                  className="w-24 h-24 rounded-full border-4 border-primary object-cover shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-primary bg-muted flex items-center justify-center shadow-lg">
                  <UserIcon className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{user?.name || "User"}</h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4" /> {user?.email || ""}
              </p>
              {user?.phone && (
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Phone className="w-4 h-4" /> {user.phone}
                </p>
              )}
              {user?.address && (
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPinIcon className="w-4 h-4" /> {user.address}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition hover:scale-105 flex-1 md:flex-none"
            >
              <Edit2 className="w-5 h-5" />
              Edit Profile
            </button>
            <button
              onClick={() => {
                logout()
                router.push('/')
              }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-destructive text-destructive rounded-lg font-semibold hover:bg-destructive/5 smooth-transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Total Orders</p>
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">{totalOrders}</p>
            <p className="text-sm text-muted-foreground">Lifetime purchases</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Total Spent</p>
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">{formatCurrency(totalSpent)}</p>
            <p className="text-sm text-muted-foreground">Across all purchases</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">Wishlist Items</p>
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground">{wishlistItems.length}</p>
            <p className="text-sm text-muted-foreground">Saved for later</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Recent Orders</h2>

              {recentOrders.length > 0 ? (
                <div className="space-y-5">
                  {recentOrders.map(order => (
                    <div
                      key={order.id}
                      className="p-5 rounded-2xl border border-border bg-muted/20 hover:border-primary/40 hover:shadow-lg smooth-transition"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                          <p className="text-sm text-muted-foreground">
                            {formatDisplayDate(order.date)} • {order.items} items
                          </p>
                          <p className="text-xl font-semibold text-foreground flex items-center gap-2 mt-1">
                            <Truck className="w-5 h-5 text-primary" />
                            Order #{formatOrderId(order.id, (order as any).mongoId)}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">{formatCurrency(order.total)}</p>
                            <p className="text-xs text-muted-foreground">
                              {order.paymentStatus === 'Paid' 
                                ? 'Paid online' 
                                : order.paymentMethod === 'cod'
                                ? 'Cash on delivery'
                                : 'Payment pending'}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusBadgeClasses(order.status)}`}>
                            {/* Only show "Delivered" if payment is actually paid, otherwise show Processing */}
                            {order.paymentStatus === 'Paid' && order.status === 'Delivered' 
                              ? 'Delivered' 
                              : order.paymentStatus === 'Paid' 
                              ? order.status 
                              : 'Processing'}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        {order.products.map((product) => (
                          <div
                            key={`${order.id}-${product.id}`}
                            className="p-3 rounded-xl bg-background border border-border"
                          >
                            <div className="flex items-center gap-4 mb-3">
                              <img
                                src={product.image || '/placeholder.svg'}
                                alt={product.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-foreground">{product.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Qty {product.quantity}
                                  {product.size && ` • Size ${product.size}`}
                                </p>
                              </div>
                              <p className="font-semibold text-foreground">
                                {formatCurrency(product.price * product.quantity)}
                              </p>
                              <div className="relative product-menu-container">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setProductMenuOpen(
                                      productMenuOpen?.orderId === order.id && productMenuOpen?.productId === product.id
                                        ? null
                                        : { orderId: order.id, productId: product.id }
                                    )
                                  }}
                                  className="p-2 hover:bg-muted rounded-lg smooth-transition"
                                >
                                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                                </button>
                                {productMenuOpen?.orderId === order.id && productMenuOpen?.productId === product.id && (
                                  <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-10">
                                    {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setCancelOrderId(order.id)
                                          setProductMenuOpen(null)
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-muted smooth-transition flex items-center gap-2 text-sm"
                                      >
                                        <XCircle className="w-4 h-4 text-destructive" />
                                        Cancel Order
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <Link
                                href={`/products/${product.id}`}
                                className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg smooth-transition text-center text-sm flex items-center justify-center gap-2"
                              >
                                <Eye className="w-4 h-4" />
                                View Details
                              </Link>
                              <button
                                onClick={() => setTrackingOrder(order)}
                                className="flex-1 px-3 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 smooth-transition text-sm flex items-center justify-center gap-2"
                              >
                                <Truck className="w-4 h-4" />
                                Track Order
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No orders yet</p>
              )}

              {/* Ask AI Button */}
              <button
                onClick={() => setIsAIChatOpen(true)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg smooth-transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Ask AI Assistant
              </button>

              <Link
                href="/"
                className="mt-4 block w-full py-3 text-center bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition hover:scale-105 active:scale-95"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wishlist */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {wishlistItems.length > 0 ? (
                  wishlistItems.map(item => (
                  <div key={item.id} className="text-sm">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-muted-foreground">{item.price}</p>
                  </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No items in wishlist</p>
                )}
              </div>
              <Link
                href="/wishlist"
                className="mt-4 block w-full py-2 text-center text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 smooth-transition"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal - Added modern profile edit modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Edit Profile</h2>
            
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              {/* Profile Picture Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Profile Picture</label>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full border-4 border-primary bg-muted flex items-center justify-center overflow-hidden">
                    {formData.profilePic ? (
                      <img src={formData.profilePic || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-12 h-12 text-muted-foreground" />
                    )}
                  </div>
                  <label className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium cursor-pointer hover:shadow-lg smooth-transition">
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your address"
                  rows={3}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted smooth-transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Order #{formatOrderId(selectedOrder.id, (selectedOrder as any).mongoId)}</p>
                <h3 className="text-2xl font-bold text-foreground">Order Details</h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 rounded-full hover:bg-muted smooth-transition"
                aria-label="Close order details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <p className="text-xs text-muted-foreground">Placed On</p>
                  <p className="font-semibold text-foreground">{formatDisplayDate(selectedOrder.date)}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="font-semibold text-foreground">{selectedOrder.status}</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border">
                  <p className="text-xs text-muted-foreground">Total Paid</p>
                  <p className="font-semibold text-foreground">{formatCurrency(selectedOrder.total)}</p>
                </div>
              </div>

              {selectedOrder.shippingDetails && (
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Shipping To</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedOrder.shippingDetails.firstName} {selectedOrder.shippingDetails.lastName}
                  </p>
                  {selectedOrder.shippingDetails.phone && (
                    <p className="text-sm text-muted-foreground">{selectedOrder.shippingDetails.phone}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {selectedOrder.shippingDetails.address}, {selectedOrder.shippingDetails.city},{' '}
                    {selectedOrder.shippingDetails.state} {selectedOrder.shippingDetails.zipCode}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {selectedOrder.products.map((product) => (
                  <div
                    key={`${selectedOrder.id}-detail-${product.id}`}
                    className="flex items-center gap-4 p-3 rounded-xl border border-border"
                  >
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty {product.quantity}
                        {product.size && ` • Size ${product.size}`}
                      </p>
                    </div>
                    <p className="font-semibold text-foreground">
                      {formatCurrency(product.price * product.quantity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tracking Modal */}
      {trackingOrder && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Tracking Order #{formatOrderId(trackingOrder.id, (trackingOrder as any).mongoId)}</p>
                <h3 className="text-2xl font-bold text-foreground">Track Shipment</h3>
              </div>
              <button
                onClick={() => setTrackingOrder(null)}
                className="p-2 rounded-full hover:bg-muted smooth-transition"
                aria-label="Close tracking"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              {trackingTemplates.map((step, index) => {
                const currentStage = getCurrentTrackingStage(trackingOrder.status)
                const completed = index <= currentStage
                return (
                  <div key={step.label} className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                        completed
                          ? 'bg-green-500 text-white border-green-500'
                          : 'bg-muted text-muted-foreground border-border'
                      }`}
                    >
                      {completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Cancel Order Modal */}
      {cancelOrderId && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Cancel Order</h3>
              <button
                onClick={() => {
                  setCancelOrderId(null)
                  setCancelReason('')
                  setOtherReasonText('')
                }}
                className="p-2 rounded-full hover:bg-muted smooth-transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Please select a reason for cancellation:
            </p>

            <div className="space-y-3 mb-6">
              {[
                'Changed my mind',
                'Found better price elsewhere',
                'Item no longer needed',
                'Shipping address issue',
                'Payment issue',
                'Other reason',
              ].map((reason) => (
                <button
                  key={reason}
                  onClick={() => setCancelReason(reason)}
                  className={`w-full text-left px-4 py-3 rounded-lg border smooth-transition ${
                    cancelReason === reason
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-foreground hover:border-primary/50'
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>

            {cancelReason === 'Other reason' && (
              <textarea
                value={otherReasonText}
                onChange={(e) => setOtherReasonText(e.target.value)}
                placeholder="Please specify your reason..."
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                rows={3}
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={async () => {
                  if (cancelReason && (cancelReason !== 'Other reason' || otherReasonText.trim())) {
                    // Find the order to get MongoDB ID if it exists
                    const orderToCancel = recentOrders.find(o => o.id === cancelOrderId)
                    
                    // Delete from MongoDB if order has MongoDB ID
                    if (orderToCancel && (orderToCancel as any).mongoId) {
                      try {
                        const response = await fetch(`/api/orders/delete?id=${(orderToCancel as any).mongoId}`, {
                          method: 'DELETE',
                        })
                        if (!response.ok) {
                          const errorText = await response.text()
                          // If order not found in MongoDB, it's okay - might be localStorage only
                          if (!errorText.includes('Order not found')) {
                            console.error('Failed to delete order from MongoDB:', errorText)
                          }
                          // Continue with local deletion even if MongoDB deletion fails
                        }
                      } catch (error) {
                        // Continue with local deletion even if MongoDB deletion fails
                        console.error('Failed to delete order from MongoDB:', error)
                      }
                    }
                    
                    // Remove from local state
                    setRecentOrders(prev => prev.filter(order => order.id !== cancelOrderId))
                    if (typeof window !== 'undefined' && user) {
                      const userOrdersKey = `recentOrders_${user.id}`
                      const stored = JSON.parse(window.localStorage.getItem(userOrdersKey) || '[]')
                      const updated = stored.filter((o: StoredOrder) => o.id !== cancelOrderId)
                      window.localStorage.setItem(userOrdersKey, JSON.stringify(updated))
                    }
                    setCancelOrderId(null)
                    setCancelReason('')
                    setOtherReasonText('')
                  }
                }}
                disabled={!cancelReason || (cancelReason === 'Other reason' && !otherReasonText.trim())}
                className="flex-1 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Cancellation
              </button>
              <button
                onClick={() => {
                  setCancelOrderId(null)
                  setCancelReason('')
                  setOtherReasonText('')
                }}
                className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted smooth-transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Assistant - Replaces old AI Chat */}
      <OrderAssistant initialOpen={isAIChatOpen} onOpenChange={setIsAIChatOpen} />

      <Footer />
    </main>
  )
}
