'use client'

import { useMemo, useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { transformProduct } from '@/lib/chatbot-data'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating'

export default function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [enhancedProducts, setEnhancedProducts] = useState<any[]>([])

  useEffect(() => {
    // Transform products to include tags
    const transformed = products.map((p, i) => transformProduct(p, i, products.length))
    setEnhancedProducts(transformed)
  }, [])
  
  const visibleProducts = useMemo(() => {
    // Filter trending products (rating >= 4.7 and reviews >= 100)
    let filtered = enhancedProducts.filter((product: any) => 
      product.rating >= 4.7 && product.reviews >= 100
    )
    
    // Filter by category if selected
    if (selectedCategory) {
      filtered = filtered.filter((product: any) => product.category === selectedCategory)
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a: any, b: any) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a: any, b: any) => b.price - a.price)
        break
      case 'rating':
        filtered = [...filtered].sort((a: any, b: any) => b.rating - a.rating)
        break
      case 'newest':
        filtered = [...filtered].sort((a: any, b: any) => b.id - a.id)
        break
      default:
        // Sort by trending score (rating + reviews)
        filtered = [...filtered].sort((a: any, b: any) => {
          const aScore = (a.rating * 20) + (a.reviews / 5)
          const bScore = (b.rating * 20) + (b.reviews / 5)
          return bScore - aScore
        })
        break
    }

    return filtered
  }, [selectedCategory, sortBy, enhancedProducts])

  const categoryFilters = [
    { label: 'All', value: null },
    { label: 'Men', value: 'Men' },
    { label: 'Women', value: 'Women' },
    { label: 'Kids', value: 'Kids' },
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Footwear', value: 'Footwear' },
    { label: 'Electronics', value: 'Electronics' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-muted/50 px-4 md:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">Trending Now</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Trending Products</h1>
            <p className="text-muted-foreground max-w-3xl">
              Discover the most popular and trending products that everyone is talking about. 
              These are our best-rated items with the highest customer satisfaction.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setSelectedCategory(filter.value)}
                  className={`px-4 py-2 rounded-full border smooth-transition ${
                    selectedCategory === filter.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-foreground hover:border-primary/60'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="lg:ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Showing {visibleProducts.length} trending {visibleProducts.length === 1 ? 'product' : 'products'}
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {visibleProducts.map((product: any) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No trending products found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

