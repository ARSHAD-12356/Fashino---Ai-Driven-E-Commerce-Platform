'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'
import { Mail, Lock, Loader2, Sparkles, ArrowRight, KeyRound, Shield } from 'lucide-react'
import { PasswordInput } from '@/components/ui/password-input'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      await login(email, password)
      router.push('/')
    } catch (err: any) {
      let errorMessage = err.message || 'Login failed. Please try again.'

      // If user doesn't exist, provide helpful message
      if (errorMessage.includes('Invalid email or password')) {
        errorMessage = 'Invalid email or password. Please check your credentials or sign up if you don\'t have an account.'
      }

      // Handle MongoDB connection errors
      if (errorMessage.includes('Database connection') || errorMessage.includes('whitelist') || errorMessage.includes('IP') || errorMessage.includes('ECONNREFUSED') || errorMessage.includes('querySrv')) {
        // Error message already contains helpful instructions from auth-context
        // Just ensure it's displayed properly
      }

      setError(errorMessage)

      // Auto-clear error after 10 seconds for database errors (longer for user to read instructions)
      const clearTimeout = errorMessage.includes('Database connection') || errorMessage.includes('whitelist') ? 10000 : 5000
      setTimeout(() => {
        setError('')
      }, clearTimeout)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-10 space-y-6 shadow-2xl shadow-primary/5">
          {/* Header */}
          <div className="text-center space-y-3">
            <Link href="/" className="auth-brand inline-flex flex-col items-center gap-1 group">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform max-[400px]:opacity-0 max-[400px]:w-0 max-[400px]:overflow-hidden transition-all duration-300 ease-in-out" />
                <span className="brand-logo-fashino tracking-tight text-[32px] md:text-[40px] lg:text-[50px]">
                  Fashino
                </span>
              </div>
              <p className="text-sm font-normal font-sans text-primary/80 italic tracking-wide">
                Feel The Fashion
              </p>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue shopping</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-destructive font-medium whitespace-pre-line">{error}</p>
                {(error.includes('whitelist') || error.includes('Database connection') || error.includes('ECONNREFUSED') || error.includes('querySrv')) ? (
                  <div className="mt-3 pt-3 border-t border-destructive/20">
                    <p className="text-xs text-destructive/80 mb-2 font-semibold">⚠️ Database Connection Issue</p>
                    <p className="text-xs text-destructive/80 mb-2">The error message above contains step-by-step instructions to fix this issue.</p>
                    <p className="text-xs text-destructive/60 mt-2">Common causes: IP not whitelisted, network issues, or MongoDB Atlas service interruption.</p>
                  </div>
                ) : error.includes('Invalid email or password') ? (
                  <div className="mt-3 pt-3 border-t border-destructive/20">
                    <p className="text-xs text-destructive/80 mb-2">Don't have an account?</p>
                    <Link href="/signup" className="text-xs text-primary hover:underline font-medium">
                      Sign up here →
                    </Link>
                  </div>
                ) : null}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors z-10" />
                <PasswordInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-10 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition h-auto"
                />
              </div>
              <button
                type="button"
                onClick={() => router.push('/forgot-password')}
                className="text-xs text-primary hover:underline smooth-hover text-left"
              >
                Forgot Password?
              </button>
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


            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.location.href = '/api/auth/google'}
              className="w-full py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-base hover:shadow-md smooth-transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">Don't have an account?</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link
            href="/signup"
            className="w-full py-3.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 smooth-transition text-center block group flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Admin Login Section */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">Admin Access</span>
            </div>
          </div>

          <Link
            href="/admin/login"
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold smooth-transition text-center block group flex items-center justify-center gap-2 border border-slate-700"
          >
            <Shield className="w-4 h-4" />
            Sign in as Admin
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main >
  )
}
