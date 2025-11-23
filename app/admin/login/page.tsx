'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Loader2, Shield, ArrowRight } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setIsLoading(true)
    try {
      // Normalize email (lowercase and trim)
      const normalizedEmail = email.toLowerCase().trim()
      const normalizedPassword = password.trim()
      
      // Simulate admin login - accept admin@fashino.com / admin123
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (normalizedEmail === 'admin@fashino.com' && normalizedPassword === 'admin123') {
        localStorage.setItem('adminToken', 'demo-admin-token')
        router.push('/admin/dashboard')
      } else {
        setError('Invalid admin credentials. Use: admin@fashino.com / admin123')
      }
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span 
                className="tracking-tight brand-logo-fashino text-white"
                style={{ 
                  fontFamily: "var(--font-great-vibes), cursive",
                  color: '#ffffff',
                }}
              >
                Fashino
              </span>
              <p className="text-sm font-normal font-sans text-primary/80 italic tracking-wide mt-1">
                Feel The Fashion
              </p>
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
            <p className="text-slate-400 text-sm">Secure access to admin dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-destructive font-medium">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Admin Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@fashino.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border-2 border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border-2 border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl smooth-transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Back to User Login */}
          <div className="text-center">
            <Link
              href="/login"
              className="text-sm text-slate-400 hover:text-primary smooth-hover"
            >
              ← Back to User Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}





