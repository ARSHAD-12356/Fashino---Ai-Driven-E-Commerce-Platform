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

interface MegaDropdownProps {
  category: { name: string; slug: string; isHero: boolean; icon?: string }
  data: CategoryData
  onClose: () => void
}

export function MegaDropdown({ category, data, onClose }: MegaDropdownProps) {
  const columns = Math.min(5, Math.ceil(data.subcategories.length / 4))
  const subcategoriesPerColumn = Math.ceil(data.subcategories.length / columns)

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-6xl bg-background/98 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-50">
      <div className="flex">
        {/* Subcategories Section */}
        <div className={`p-8 ${data.products.length > 0 ? 'flex-[2]' : 'flex-1'}`}>
          <div className="grid grid-cols-5 gap-8">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-1">
                {data.subcategories
                  .slice(colIndex * subcategoriesPerColumn, (colIndex + 1) * subcategoriesPerColumn)
                  .map((subcategory) => (
                    <Link
                      key={subcategory.slug}
                      href={`/${category.slug}?subcategory=${subcategory.slug}`}
                      onClick={onClose}
                      className="block py-2 px-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {subcategory.name}
                        </span>
                        <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {subcategory.count}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-6 pt-6 border-t border-border">
            <Link
              href={`/${category.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Product Previews Section */}
        {data.products.length > 0 && (
          <div className="flex-1 bg-gradient-to-br from-muted/30 to-muted/10 p-6 border-l border-border/50">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Featured Products
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {data.products.slice(0, 6).map((product) => {
                const imageSrc = getProductImage(product.image, category.name, undefined, product.name)
                return (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={onClose}
                    className="group"
                  >
                    <div className="relative bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="aspect-square relative">
                        <img
                          src={imageSrc}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                            -{product.discount}%
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors duration-200">
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
      </div>
    </div>
  )
}

