'use client'

import { X, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import Link from 'next/link'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 fade-in"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-[90vw] max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl smooth-transition transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border flex-shrink-0">
          <h2 className="text-lg sm:text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full smooth-hover"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">Your cart is empty</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg smooth-transition text-sm sm:text-base"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-border last:border-b-0 scale-in"
                >
                  {/* Image */}
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xs sm:text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-muted rounded smooth-hover"
                      >
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        className="w-10 sm:w-12 text-center border border-border rounded px-1 sm:px-2 py-1 text-xs sm:text-sm"
                        min="1"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-muted rounded smooth-hover"
                      >
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-destructive/10 rounded smooth-hover"
                      >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 sm:p-6 space-y-3 sm:space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between text-base sm:text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout" onClick={onClose}>
              <button className="w-full bg-primary text-primary-foreground py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-lg smooth-transition active:scale-95 text-sm sm:text-base">
                Proceed to Checkout
              </button>
            </Link>
            <button
              onClick={onClose}
              className="w-full border-2 border-primary text-primary py-2.5 sm:py-3 rounded-full font-semibold hover:bg-primary/5 smooth-transition text-sm sm:text-base"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
