'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

export interface BuyNowItem extends CartItem {
  color?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  updateItem: (id: number, updates: Partial<CartItem>) => void
  clearCart: () => void
  checkoutSingleItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  buyNowItem: BuyNowItem | null
  buyNow: (item: Omit<BuyNowItem, 'quantity'> & { quantity?: number }) => void
  clearBuyNowItem: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [buyNowItem, setBuyNowItem] = useState<BuyNowItem | null>(null)

  const addItem = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const quantityToAdd = item.quantity || 1
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantityToAdd } : i
        )
      }
      const { quantity: _, ...itemWithoutQuantity } = item
      return [...prevItems, { ...itemWithoutQuantity, quantity: quantityToAdd }]
    })
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const updateItem = (id: number, updates: Partial<CartItem>) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    )
    if (buyNowItem && buyNowItem.id === id) {
      setBuyNowItem({ ...buyNowItem, ...updates })
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const checkoutSingleItem = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const quantityToAdd = item.quantity || 1
    const { quantity: _, ...itemWithoutQuantity } = item
    // Clear cart and add only this item
    setItems([{ ...itemWithoutQuantity, quantity: quantityToAdd }])
  }

  const buyNow = (item: Omit<BuyNowItem, 'quantity'> & { quantity?: number }) => {
    const quantityToAdd = item.quantity || 1
    const { quantity: _, ...itemWithoutQuantity } = item
    // Store item for buy now checkout (not added to cart)
    setBuyNowItem({ ...itemWithoutQuantity, quantity: quantityToAdd })
  }

  const clearBuyNowItem = () => {
    setBuyNowItem(null)
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, updateItem, clearCart, checkoutSingleItem, buyNowItem, buyNow, clearBuyNowItem, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
