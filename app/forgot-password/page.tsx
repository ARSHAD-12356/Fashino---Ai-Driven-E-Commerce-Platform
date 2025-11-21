'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Loader2, Sparkles, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSent(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send reset link. Please try again.')
    } finally {
      setIsLoading(false)
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
            <Link href="/" className="inline-flex flex-col items-center gap-1 text-3xl font-dancing font-bold text-foreground hover:text-primary smooth-hover tracking-tight group">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                <span>Fashino</span>
              </div>
              <p className="text-sm font-normal font-sans text-primary/80 italic tracking-wide">
                Feel The Fashion
              </p>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Reset Password</h1>
            <p className="text-muted-foreground">
              {isSent 
                ? 'Check your email for password reset instructions'
                : 'Enter your email address and we\'ll send you a link to reset your password'}
            </p>
          </div>

          {!isSent ? (
            <>
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm text-destructive font-medium">{error}</p>
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
                      autoFocus
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl smooth-transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Back to Login */}
              <Link
                href="/login"
                className="w-full py-3.5 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-muted/50 smooth-transition text-center block group flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Sign In
              </Link>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-foreground">Email Sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent a password reset link to <span className="font-semibold text-foreground">{email}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Please check your inbox and spam folder. The link will expire in 1 hour.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsSent(false)
                    setEmail('')
                  }}
                  className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl smooth-transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Resend Email
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/login"
                  className="w-full py-3.5 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-muted/50 smooth-transition text-center block group flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Sign In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}



