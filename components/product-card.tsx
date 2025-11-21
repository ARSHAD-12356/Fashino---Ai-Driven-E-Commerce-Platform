'use client'

import { useState, useEffect } from 'react'
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { useWishlist } from '@/context/wishlist-context'
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
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const isWishlisted = isInWishlist(id)

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(id)
    } else {
      addToWishlist(id)
    }
  }

  const imageSrc = getProductImage(image, category, subcategory, name)

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image: imageSrc,
    })
  }

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
  const stockCount = stock ?? (35 + ((id % 9) * 5))
  const isInStock = stockCount > 0

  return (
    <div
      className="group scale-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4">
        <img
          src={imageSrc}
          alt={name}
          onError={(e) => { e.currentTarget.src = getFallbackImage(name, category, subcategory) }}
          className={`w-full aspect-square object-cover smooth-transition ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          -{discount}%
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75"
        >
          <Heart
            className={`w-5 h-5 smooth-transition ${
              isWishlisted
                ? 'fill-primary text-primary'
                : 'text-foreground'
            }`}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 smooth-transition flex flex-col gap-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-primary-foreground py-2 font-semibold rounded-lg hover:bg-primary/90 smooth-transition flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <div className="grid grid-cols-2 gap-2">
            <Link href={`/products/${id}`}>
              <button className="w-full bg-white/20 text-white py-2 font-semibold rounded-lg hover:bg-white/30 smooth-transition flex items-center justify-center gap-2 text-sm">
                <Eye className="w-4 h-4" />
                Details
              </button>
            </Link>
            <Link href={`/products/${id}`}>
              <button className="w-full bg-primary/70 text-white py-2 font-semibold rounded-lg hover:bg-primary smooth-transition text-sm">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                {'★'}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            ₹{price.toLocaleString('en-IN')}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ₹{originalPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <p
          className={`text-sm font-medium ${
            isInStock ? 'text-emerald-500' : 'text-destructive'
          }`}
        >
          {isInStock ? `${stockCount} in stock` : 'Out of stock'}
        </p>
      </div>
    </div>
  )
}
