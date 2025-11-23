'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Package, ShoppingCart, Users, DollarSign, TrendingUp, 
  TrendingDown, AlertTriangle, LogOut, Menu, X, Filter
} from 'lucide-react'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { products } from '@/lib/products'

interface Stats {
  totalProducts: number
  totalOrders: number
  totalUsers: number
  totalRevenue: number
  lowStockProducts: number
}

interface RevenueData {
  month: string
  revenue: number
}

interface OrderStatusData {
  status: string
  count: number
}

interface CategorySalesData {
  category: string
  sales: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<Stats>({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    lowStockProducts: 0,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [revenueData, setRevenueData] = useState<RevenueData[]>([])
  const [orderStatusData, setOrderStatusData] = useState<OrderStatusData[]>([])
  const [categorySalesData, setCategorySalesData] = useState<CategorySalesData[]>([])
  const [categoryFilter, setCategoryFilter] = useState<'day' | 'week' | 'month' | 'year'>('month')

  useEffect(() => {
    // Check admin auth
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    // Fetch stats
    const fetchStats = async () => {
      setIsLoading(true)
      try {
        // Fetch from MongoDB
        const [productsRes, ordersRes, usersRes] = await Promise.all([
          fetch('/api/products/sync').catch(() => null),
          fetch('/api/admin/orders').catch(() => null),
          fetch('/api/admin/users').catch(() => null),
        ])

        let totalProducts = 152
        let totalOrders = 0
        let totalUsers = 0
        let totalRevenue = 0
        let lowStockProducts = 0
        let orders: any[] = []

        if (ordersRes?.ok) {
          const ordersData = await ordersRes.json()
          orders = ordersData.orders || []
          totalOrders = orders.length
          totalRevenue = orders.reduce((sum: number, o: any) => sum + (o.totalAmount || 0), 0)
        }

        if (usersRes?.ok) {
          const usersData = await usersRes.json()
          totalUsers = usersData.users?.length || 0
        }

        // Count low stock products
        const productsList = await import('@/lib/products').then(m => m.products)
        lowStockProducts = productsList.filter((p: any) => (p.stock || 0) < 5).length
        totalProducts = productsList.length

        setStats({
          totalProducts,
          totalOrders,
          totalUsers,
          totalRevenue,
          lowStockProducts,
        })

        // Process revenue data by month
        const revenueMap = new Map<string, number>()
        orders.forEach((order: any) => {
          if (order.createdAt) {
            const date = new Date(order.createdAt)
            const monthKey = date.toLocaleDateString('en-US', { month: 'short' })
            const currentRevenue = revenueMap.get(monthKey) || 0
            revenueMap.set(monthKey, currentRevenue + (order.totalAmount || 0))
          }
        })
        
        // Get last 6 months
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const currentMonth = new Date().getMonth()
        const revenueDataArray: RevenueData[] = []
        for (let i = 5; i >= 0; i--) {
          const monthIndex = (currentMonth - i + 12) % 12
          const monthName = months[monthIndex]
          revenueDataArray.push({
            month: monthName,
            revenue: revenueMap.get(monthName) || 0,
          })
        }
        setRevenueData(revenueDataArray)

        // Process order status data
        const statusMap = new Map<string, number>()
        orders.forEach((order: any) => {
          const status = order.status || 'Pending'
          statusMap.set(status, (statusMap.get(status) || 0) + 1)
        })
        const statusDataArray: OrderStatusData[] = [
          { status: 'Pending', count: statusMap.get('Pending') || 0 },
          { status: 'Processing', count: statusMap.get('Processing') || 0 },
          { status: 'Shipped', count: statusMap.get('Shipped') || 0 },
          { status: 'Delivered', count: statusMap.get('Delivered') || 0 },
          { status: 'Cancelled', count: statusMap.get('Cancelled') || 0 },
        ]
        setOrderStatusData(statusDataArray)

        // Process category sales data
        const categoryMap = new Map<string, number>()
        orders.forEach((order: any) => {
          if (order.items && Array.isArray(order.items)) {
            order.items.forEach((item: any) => {
              const product = productsList.find((p: any) => p.id === item.productId || p.name === item.name)
              if (product && product.category) {
                const category = product.category
                const itemTotal = (item.price || 0) * (item.quantity || 1)
                categoryMap.set(category, (categoryMap.get(category) || 0) + itemTotal)
              }
            })
          }
        })
        const categoryDataArray: CategorySalesData[] = Array.from(categoryMap.entries())
          .map(([category, sales]) => ({ category, sales }))
          .sort((a, b) => b.sales - a.sales)
        setCategorySalesData(categoryDataArray)
      } catch (error) {
        console.error('Failed to fetch stats:', error)
        // Fallback to empty data
        setStats({
          totalProducts: 152,
          totalOrders: 0,
          totalUsers: 0,
          totalRevenue: 0,
          lowStockProducts: 8,
        })
        setRevenueData([])
        setOrderStatusData([])
        setCategorySalesData([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      change: '+12%',
      trend: 'up' as const,
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: 'bg-green-500',
      change: '+8%',
      trend: 'up' as const,
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'bg-purple-500',
      change: '+23%',
      trend: 'up' as const,
    },
    {
      title: 'Total Revenue',
      value: `₹${(stats.totalRevenue / 100000).toFixed(1)}L`,
      icon: DollarSign,
      color: 'bg-yellow-500',
      change: '+15%',
      trend: 'up' as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <header className="bg-black border-b border-gray-700 sticky top-0 z-40">
        <div className="px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg text-white"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Logo showIcon={true} />
            <span className="text-sm text-gray-300 ml-2">Admin Panel</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-900/20 rounded-lg smooth-transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}>
          <nav className="p-4 space-y-2">
            <a
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium"
            >
              <TrendingUp className="w-5 h-5" />
              Dashboard
            </a>
            <a
              href="/admin/products"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition"
            >
              <Package className="w-5 h-5" />
              Products
            </a>
            <a
              href="/admin/orders"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition"
            >
              <ShoppingCart className="w-5 h-5" />
              Orders
            </a>
            <a
              href="/admin/users"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition"
            >
              <Users className="w-5 h-5" />
              Users
            </a>
            <a
              href="/admin/categories"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition"
            >
              <Package className="w-5 h-5" />
              Categories
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening.</p>
            </div>

            {/* Low Stock Alert */}
            {stats.lowStockProducts > 0 && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <p className="font-semibold text-yellow-900 dark:text-yellow-200">
                    Low Stock Alert
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    {stats.lowStockProducts} products are running low on stock
                  </p>
                </div>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Revenue Overview
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData.length > 0 ? revenueData : [{ month: 'No Data', revenue: 0 }]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Order Status
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={orderStatusData.length > 0 ? orderStatusData : [{ status: 'No Data', count: 0 }]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="status" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Category Sales Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Category Sales
                </h3>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as 'day' | 'week' | 'month' | 'year')}
                    className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={categorySalesData.length > 0 ? categorySalesData : [{ category: 'No Data', sales: 0 }]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}







