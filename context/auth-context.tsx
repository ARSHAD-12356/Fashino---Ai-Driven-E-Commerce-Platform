'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: string
  profilePic?: string
  gender?: 'male' | 'female' | 'other'
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, name: string, password: string, gender: string) => Promise<void>
  logout: () => void
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      let currentUser: User | null = null;

      // 1. Try to get user from localStorage first (fastest)
      const saved = localStorage.getItem('user')
      if (saved) {
        try {
          currentUser = JSON.parse(saved)
          setUser(currentUser)
        } catch (error) {
          console.log('[v0] Error parsing user from localStorage:', error)
          localStorage.removeItem('user')
        }
      }

      // 2. Verify with server
      try {
        const token = localStorage.getItem('token')
        const headers: HeadersInit = {}

        if (token) {
          headers['Authorization'] = `Bearer ${token}`
        }

        if (currentUser) {
          headers['x-user-id'] = currentUser.id
        }

        const response = await fetch('/api/auth/me', {
          headers,
        })

        if (response.ok) {
          const data = await response.json()
          if (data.user) {
            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
          } else if (!currentUser) {
            // If server says no user and we didn't have one locally, ensure we're clear
            setUser(null)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
          }
        }
      } catch (error) {
        console.log('Session check failed:', error)
      }

      setIsLoading(false)
    }
    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        let errorMessage = 'Login failed'
        let errorDetails = ''
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
          errorDetails = errorData.details || ''
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage
        }

        // If it's a database connection error (503 status), provide helpful message
        if (response.status === 503 || errorMessage.includes('Database connection') || errorMessage.includes('whitelist') || errorMessage.includes('IP') || errorMessage.includes('ECONNREFUSED') || errorMessage.includes('querySrv')) {
          errorMessage = 'Database connection failed. Your IP address may not be whitelisted in MongoDB Atlas.\n\nQuick Fix:\n1. Go to MongoDB Atlas → Security → Network Access\n2. Click "Add IP Address" → "Add Current IP Address"\n3. Wait 1-2 minutes, then try again'
          if (errorDetails) {
            errorMessage += `\n\n${errorDetails}`
          }
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      if (!data.user) {
        throw new Error('Invalid response from server')
      }

      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
    } catch (error: any) {
      console.error('Login error:', error)
      // Re-throw with a more user-friendly message if it's a network error
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Network error. Please check your internet connection and try again.')
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, name: string, password: string, gender: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password, gender }),
      })

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        let errorMessage = 'Signup failed'
        let errorDetails = ''
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
          errorDetails = errorData.details || ''
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || errorMessage
        }

        // If it's a database connection error (503 status), provide helpful message
        if (response.status === 503 || errorMessage.includes('Database connection') || errorMessage.includes('whitelist') || errorMessage.includes('IP') || errorMessage.includes('ECONNREFUSED') || errorMessage.includes('querySrv')) {
          errorMessage = 'Database connection failed. Your IP address may not be whitelisted in MongoDB Atlas.\n\nQuick Fix:\n1. Go to MongoDB Atlas → Security → Network Access\n2. Click "Add IP Address" → "Add Current IP Address"\n3. Wait 1-2 minutes, then try again'
          if (errorDetails) {
            errorMessage += `\n\n${errorDetails}`
          }
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      if (!data.user) {
        throw new Error('Invalid response from server')
      }

      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
    } catch (error: any) {
      console.error('Signup error:', error)
      // Re-throw with a more user-friendly message if it's a network error
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Network error. Please check your internet connection and try again.')
      }
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (user) {
      try {
        const response = await fetch('/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': user.id,
          },
          body: JSON.stringify(updates),
        })

        if (response.ok) {
          const data = await response.json()
          if (data.user) {
            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
          }
        } else {
          // Fallback to local update if API fails
          const updatedUser = { ...user, ...updates }
          setUser(updatedUser)
          localStorage.setItem('user', JSON.stringify(updatedUser))
        }
      } catch (error) {
        // Fallback to local update if API fails
        const updatedUser = { ...user, ...updates }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch (error) {
      console.error('Logout error:', error)
    }
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
