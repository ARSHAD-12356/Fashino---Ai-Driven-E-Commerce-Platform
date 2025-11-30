'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Apply theme immediately from localStorage without delay
    const saved = localStorage.getItem('theme') as Theme | null
    const initial = saved || 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'

    // Disable transitions
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(document.createTextNode(`* {
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -o-transition: none !important;
      -ms-transition: none !important;
      transition: none !important;
    }`))
    document.head.appendChild(css)

    // Update DOM immediately (0ms delay) - synchronous
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)

    // Force reflow
    const _ = window.getComputedStyle(document.body)

    // Wait for next tick to re-enable transitions
    setTimeout(() => {
      document.head.removeChild(css)
    }, 1)

    // Update React state after DOM is updated
    setTheme(next)
  }

  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    return {
      theme: 'light' as Theme,
      toggleTheme: () => { },
    }
  }
  return context
}
