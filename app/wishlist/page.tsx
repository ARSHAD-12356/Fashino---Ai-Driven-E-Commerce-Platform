'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { Heart, X } from 'lucide-react'
import { useWishlist } from '@/context/wishlist-context'
import { getProductImage, getFallbackImage } from '@/lib/utils'
import Link from 'next/link'
import { useCart } from '@/context/cart-context'

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist()
  const { addItem } = useCart()
  const wishlistProducts = products.filter(p => items.includes(p.id))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="bg-muted/50 px-4 md:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">My Wishlist</h1>
            </div>
            <p className="text-muted-foreground">
              Your saved items for later
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Start adding items you love to your wishlist
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-muted-foreground">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} in your wishlist
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {wishlistProducts.map((product) => {
                  const imageSrc = getProductImage(product.image, product.category, product.subcategory, product.name)
                  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                  
                  return (
                    <div key={product.id} className="group relative">
                      <div className="relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4">
                        <img
                          src={imageSrc}
                          alt={product.name}
                          onError={(e) => { e.currentTarget.src = getFallbackImage(product.name, product.category, product.subcategory) }}
                          className="w-full aspect-square object-cover smooth-transition"
                        />
                        
                        {/* Discount Badge */}
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          -{discount}%
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition hover:bg-destructive hover:text-destructive-foreground"
                          title="Remove from wishlist"
                        >
                          <X className="w-5 h-5" />
                        </button>

                        {/* Product Info */}
                        <div className="p-4">
                          <Link href={`/products/${product.id}`}>
                            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition">
                              {product.name}
                            </h3>
                          </Link>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-sm">★</span>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-bold text-foreground">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: imageSrc,
                              })}
                              className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 smooth-transition text-sm"
                            >
                              Add to Cart
                            </button>
                            <Link href={`/products/${product.id}`}>
                              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted smooth-transition text-sm">
                                View
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

