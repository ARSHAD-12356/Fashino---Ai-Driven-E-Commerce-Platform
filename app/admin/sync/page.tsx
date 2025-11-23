'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { RefreshCw, ArrowLeft, LogOut, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

export default function Page() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }
  }, [router])

  const handleSync = async () => {
    setIsSyncing(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/products/sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await response.json()
      
      if (response.ok) {
        const successMsg = `✅ Synced successfully! Created: ${data.created}, Updated: ${data.updated}${data.errors > 0 ? `, Errors: ${data.errors}` : ''}`
        setMessage(successMsg)
        alert(successMsg)
      } else {
        const errorMsg = `❌ Sync failed: ${data.error || 'Unknown error'}`
        setMessage(errorMsg)
        alert(errorMsg)
      }
    } catch (error: any) {
      const errorMsg = `❌ Sync failed: ${error.message || 'Unknown error'}`
      setMessage(errorMsg)
      alert(errorMsg)
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Logo showIcon={true} />
            <span className="text-sm text-muted-foreground ml-2">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={() => {
                localStorage.removeItem('adminToken')
                router.push('/admin/login')
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg smooth-transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}>
          <nav className="p-4 space-y-2">
            <a href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition">
              <RefreshCw className="w-5 h-5" />
              Dashboard
            </a>
            <a href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition">
              <RefreshCw className="w-5 h-5" />
              Products
            </a>
            <a href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition">
              <RefreshCw className="w-5 h-5" />
              Orders
            </a>
            <a href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition">
              <RefreshCw className="w-5 h-5" />
              Users
            </a>
            <a href="/admin/categories" className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg smooth-transition">
              <RefreshCw className="w-5 h-5" />
              Categories
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Admin Sync
              </h1>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Click the button below to sync products from the local product list to the database. This will create or update products in MongoDB.
              </p>

              <button
                onClick={handleSync}
                disabled={isSyncing}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                {isSyncing ? 'Syncing...' : 'Run Sync'}
              </button>

              {message && (
                <div className={`mt-4 p-4 rounded-lg ${message.includes('✅') ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'}`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

