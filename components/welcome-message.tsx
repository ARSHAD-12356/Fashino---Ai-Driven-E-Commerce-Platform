'use client'

import { useAuth } from '@/context/auth-context'

export function WelcomeMessage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="bg-primary/10 border-b border-primary/20 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-foreground font-medium">
          Welcome back, {user.name}! 😊 We're excited to have you here.
        </p>
      </div>
    </div>
  )
}


































