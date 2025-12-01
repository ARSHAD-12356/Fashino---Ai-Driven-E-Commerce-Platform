'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2, Sparkles, ArrowLeft, ArrowRight, KeyRound } from 'lucide-react'

export default function VerifyOtpPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        // Get email from localStorage
        const storedEmail = localStorage.getItem('resetEmail')
        if (!storedEmail) {
            router.push('/forgot-password')
        } else {
            setEmail(storedEmail)
        }
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!otp || otp.length !== 6) {
            setError('Please enter a valid 6-digit OTP')
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Invalid OTP')
            }

            // Store OTP in localStorage to use in reset-password page (as proof of verification)
            // In a more secure app, we might use a temporary token returned by the backend
            // But for this flow, we'll verify OTP again on reset or trust the flow
            // Actually, the backend reset-password route doesn't check OTP again, it just checks email.
            // Wait, the backend reset-password route DOES NOT check OTP. It just updates password for the email.
            // This is a security flaw if someone knows the email and hits the endpoint directly.
            // I should probably pass the OTP to the reset-password endpoint too to verify it one last time before reset.
            // Or better, the verify-otp endpoint should return a temporary reset token.
            // For now, to stick to the plan, I'll pass the OTP to the reset page and send it again.

            localStorage.setItem('verifiedOtp', otp)
            router.push('/reset-password')
        } catch (err: any) {
            setError(err.message || 'Verification failed')
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
                        <Link href="/" className="inline-flex flex-col items-center gap-1 group">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                                <span className="brand-logo-fashino tracking-tight text-[32px] md:text-[40px] lg:text-[50px]">
                                    Fashino
                                </span>
                            </div>
                        </Link>
                        <h1 className="text-3xl font-bold text-foreground">Verify OTP</h1>
                        <p className="text-muted-foreground">
                            Enter the 6-digit code sent to <span className="font-semibold text-foreground">{email}</span>
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                                <p className="text-sm text-destructive font-medium">{error}</p>
                            </div>
                        )}

                        {/* OTP Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">One-Time Password</label>
                            <div className="relative group">
                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '').slice(0, 6)
                                        setOtp(val)
                                    }}
                                    placeholder="123456"
                                    className="w-full pl-12 pr-4 py-3 bg-input/50 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary smooth-transition tracking-widest text-lg font-mono"
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading || otp.length !== 6}
                            className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl smooth-transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    Verify Code
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Back Link */}
                    <Link
                        href="/forgot-password"
                        className="w-full py-3.5 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-muted/50 smooth-transition text-center block group flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Email
                    </Link>
                </div>
            </div>
        </main>
    )
}
