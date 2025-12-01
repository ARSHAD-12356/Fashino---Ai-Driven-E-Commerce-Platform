'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { PasswordInput } from '@/components/ui/password-input'

export default function ResetPasswordPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const storedEmail = localStorage.getItem('resetEmail')
        const verifiedOtp = localStorage.getItem('verifiedOtp')

        if (!storedEmail || !verifiedOtp) {
            router.push('/forgot-password')
        } else {
            setEmail(storedEmail)
        }
    }, [router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to reset password')
            }

            // Clear localStorage
            localStorage.removeItem('resetEmail')
            localStorage.removeItem('verifiedOtp')

            setIsSuccess(true)
            setTimeout(() => {
                router.push('/login')
            }, 3000)
        } catch (err: any) {
            setError(err.message || 'Failed to reset password')
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
                        <h1 className="text-3xl font-bold text-foreground">Set New Password</h1>
                        <p className="text-muted-foreground">
                            Create a new password for your account
                        </p>
                    </div>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg animate-in fade-in slide-in-from-top-2">
                                    <p className="text-sm text-destructive font-medium">{error}</p>
                                </div>
                            )}

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">New Password</label>
                                <PasswordInput
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    autoFocus
                                />
                            </div>

                            {/* Confirm Password Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">Confirm Password</label>
                                <PasswordInput
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
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
                                        Resetting...
                                    </>
                                ) : (
                                    <>
                                        Reset Password
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="p-6 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2">
                            <div className="flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-bold text-foreground">Password Reset!</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your password has been successfully reset. Redirecting to login...
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
