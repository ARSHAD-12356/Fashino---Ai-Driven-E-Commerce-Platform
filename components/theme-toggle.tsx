'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/theme-context'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 hover:bg-muted rounded-full smooth-hover transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="w-5 h-5 text-foreground" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-muted rounded-full smooth-hover transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-foreground" />
      )}
    </button>
  )
}
