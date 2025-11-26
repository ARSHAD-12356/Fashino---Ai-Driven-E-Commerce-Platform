'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface WishlistContextType {
  items: number[]
  addToWishlist: (productId: number) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (error) {
        console.error('Error parsing wishlist from localStorage:', error)
        localStorage.removeItem('wishlist')
      }
    }
  }, [])

  const addToWishlist = (productId: number) => {
    setItems(prev => {
      if (!prev.includes(productId)) {
        const updated = [...prev, productId]
        localStorage.setItem('wishlist', JSON.stringify(updated))
        return updated
      }
      return prev
    })
  }

  const removeFromWishlist = (productId: number) => {
    setItems(prev => {
      const updated = prev.filter(id => id !== productId)
      localStorage.setItem('wishlist', JSON.stringify(updated))
      return updated
    })
  }

  const isInWishlist = (productId: number) => {
    return items.includes(productId)
  }

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used within WishlistProvider')
  return context
}
































