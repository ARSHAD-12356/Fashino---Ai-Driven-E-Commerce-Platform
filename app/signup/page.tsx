'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/auth-context'
import { Mail, Lock, User, Loader2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !name || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    try {
      await signup(email, name, password)
      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.')
    }
  }

  const passwordStrength = password.length >= 6 && password.length < 10 ? 'weak' : password.length >= 10 ? 'strong' : 'none'

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
            <h1 className="text-3xl font-bold text-foreground">Create Account</h1>
            <p className="text-muted-foreground">Join us to start shopping premium fashion</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                <p className="text-sm text-destructive font-medium whitespace-pre-line">{error}</p>
                {error.includes('whitelist') || error.includes('Database connection') ? (
                  <div className="mt-3 pt-3 border-t border-destructive/20">
                    <p className="text-xs text-destructive/80 mb-2">Quick Fix:</p>
                    <ol className="text-xs text-destructive/80 list-decimal list-inside space-y-1">
                      <li>Go to MongoDB Atlas → Security → Network Access</li>
                      <li>Click "Add IP Address" → "Add Current IP Address"</li>
                      <li>Wait 1-2 minutes, then refresh this page</li>
                    </ol>
                  </div>
                ) : null}
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                />
              </div>
            </div>

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
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                />
              </div>
              {password && (
                <div className="flex items-center gap-2 text-xs">
                  {password.length >= 6 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                  )}
                  <span className={password.length >= 6 ? 'text-emerald-500' : 'text-muted-foreground'}>
                    At least 6 characters
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Confirm Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition"
                />
              </div>
              {confirmPassword && password === confirmPassword && (
                <div className="flex items-center gap-2 text-xs text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Passwords match</span>
                </div>
              )}
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
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">Already have an account?</span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link
            href="/login"
            className="w-full py-3.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary/5 smooth-transition text-center block group flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  )
}
