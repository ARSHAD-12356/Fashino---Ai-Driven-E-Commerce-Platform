'use client'

import { useState, useEffect } from 'react'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { useWishlist } from '@/context/wishlist-context'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getProductImage, getFallbackImage } from '@/lib/utils'

interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice: number
  image?: string
  rating: number
  reviews: number
  category?: string
  subcategory?: string
  stock?: number
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  subcategory,
  stock,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const { user } = useAuth()
  const { addItem, buyNow } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const isWishlisted = isInWishlist(id)

  const handleWishlistToggle = () => {
    if (!user) {
      router.push('/login')
      return
    }
    if (isWishlisted) {
      removeFromWishlist(id)
    } else {
      addToWishlist(id)
    }
  }

  const imageSrc = getProductImage(image, category, subcategory, name)

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login')
      return
    }
    addItem({
      id,
      name,
      price,
      image: imageSrc,
    })
  }

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!user) {
      router.push('/login')
      return
    }
    // Use buyNow for direct checkout (not added to cart)
    buyNow({
      id,
      name,
      price,
      image: imageSrc,
      quantity: 1,
    })
    router.push('/checkout?mode=buy-now')
  }

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
  const stockCount = stock ?? (35 + ((id % 9) * 5))
  const isInStock = stockCount > 0

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if clicking on the card background, not on buttons
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a')) {
      return
    }
    router.push(`/products/${id}`)
  }

  return (
    <div
      className="group scale-in"
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4 md:cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={imageSrc}
          alt={name}
          onError={(e) => { e.currentTarget.src = getFallbackImage(name, category, subcategory) }}
          className="w-full aspect-square object-cover smooth-transition scale-100"
        />

        {/* Discount Badge */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
          -{discount}%
        </div>

        {/* Wishlist Button - Only show when signed in, hidden on mobile */}
        {user && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleWishlistToggle()
            }}
            className="hidden md:block absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75 z-10"
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 smooth-transition ${isWishlisted
                ? 'fill-primary text-primary'
                : 'text-foreground'
                }`}
            />
          </button>
        )}

        {/* Desktop Hover Buttons - Hidden on mobile (≤768px) */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 smooth-transition flex flex-col gap-5 sm:gap-8">
          {user ? (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleAddToCart()
                }}
                className="w-full bg-primary text-primary-foreground py-3 sm:py-3.5 font-semibold rounded-lg hover:bg-primary/90 smooth-transition flex items-center justify-center gap-2 text-xs sm:text-sm z-10"
              >
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Add to Cart
              </button>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <Link href={`/products/${id}`} onClick={(e) => e.stopPropagation()}>
                  <button className="w-full bg-white/20 text-white py-2.5 sm:py-3 font-semibold rounded-lg hover:bg-white/30 smooth-transition flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm z-10">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Details
                  </button>
                </Link>
                <Link href={`/products/${id}`} onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBuyNow(e)
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black py-2.5 sm:py-3 font-semibold rounded-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 smooth-transition text-xs sm:text-sm shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-105 active:scale-95 font-bold z-10"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Link href={`/products/${id}`} onClick={(e) => e.stopPropagation()}>
                <button className="w-full bg-white/20 text-white py-2.5 sm:py-3 font-semibold rounded-lg hover:bg-white/30 smooth-transition flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm z-10">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Details
                </button>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  router.push('/login')
                }}
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black py-1.5 sm:py-2 font-semibold rounded-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 smooth-transition text-xs sm:text-sm shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 hover:scale-105 active:scale-95 font-bold z-10"
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2 line-clamp-2 hover:text-primary smooth-transition">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs sm:text-sm">
                {'★'}
              </span>
            ))}
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-bold text-foreground">
            ₹{price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground line-through">
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <p
          className={`text-xs sm:text-sm font-medium ${isInStock ? 'text-emerald-500' : 'text-destructive'
            }`}
        >
          {isInStock ? `${stockCount} in stock` : 'Out of stock'}
        </p>
      </div>
    </div>
  )
}
