'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getProductImage } from '@/lib/utils'

interface Subcategory {
  name: string
  slug: string
  count: number
}

interface ProductPreview {
  id: number
  name: string
  price: number
  image?: string
  discount: number
}

interface CategoryData {
  subcategories: Subcategory[]
  products: ProductPreview[]
}

interface CategoryDropdownProps {
  category: { name: string; slug: string }
  data: CategoryData
  onClose: () => void
  isLeftSide?: boolean
}

export function CategoryDropdown({ category, data, onClose, isLeftSide = false }: CategoryDropdownProps) {
  // Show only featured products (no subcategories)
  const displayProducts = data.products.slice(0, 4)

  // Position classes based on whether it's left-side, center, or right-side
  // For right-side categories (like Electronics), align to the right
  const isRightSide = category.slug === 'electronics' || category.slug === 'home-living' || category.slug === 'beauty-grooming'
  
  const positionClasses = isLeftSide
    ? 'left-0 xl:left-0' // Left align for first 2 categories
    : isRightSide
    ? 'right-0 xl:right-0' // Right align for last categories to prevent overflow
    : 'left-1/2 -translate-x-1/2' // Center for others

  return (
    <div className={`absolute top-full ${positionClasses} mt-2 w-[90vw] max-w-[500px] xl:max-w-[600px] bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border border-white/20 dark:border-border rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200 ease-out`}>
      <div className="p-6">
        {/* Product Thumbnails Only */}
        {displayProducts.length > 0 && (
          <div className="mb-6">
            <h4 className="text-base font-bold text-foreground mb-4">Featured Products</h4>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {displayProducts.map((product) => {
                const imageSrc = getProductImage(product.image, category.name, undefined, product.name)
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="group"
                  >
                    <div className="relative bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 border border-transparent hover:border-primary/20">
                      <div className="aspect-square relative">
                        <img
                          src={imageSrc}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {product.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold shadow-lg">
                            -{product.discount}%
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-1">
                          {product.name}
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          ₹{product.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* View All CTA */}
        <Link
          href={`/${category.slug}`}
          onClick={onClose}
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 group shadow-lg"
        >
          View all {category.name}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  )
}

