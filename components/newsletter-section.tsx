'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle2, Heart } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubscribed(true)
    setEmail('')
    setIsSubmitting(false)

    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Join the Fashino Family <Heart className="inline-block w-8 h-8 md:w-10 md:h-10 text-red-400 animate-pulse" />
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Exclusive offers, early access, and style tips delivered directly to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-white transition-colors z-10" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder:text-blue-200 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/20 smooth-transition text-base"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || subscribed}
              className="w-full py-4 bg-white text-blue-900 rounded-2xl font-bold text-lg hover:bg-blue-50 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group"
            >
              {subscribed ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Subscribed!
                </>
              ) : isSubmitting ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe Now
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-sm text-blue-200/80 max-w-md mx-auto">
            We respect your privacy. You can unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}





