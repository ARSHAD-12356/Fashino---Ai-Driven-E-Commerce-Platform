"use client"

import { useMemo, useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating'

const categoryFilters = [
  { label: 'All', value: null },
  { label: 'Menswear', value: 'Men' },
  { label: 'Womenswear', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
  { label: 'Accessories', value: 'Accessories' },
  { label: 'Footwear', value: 'Footwear' },
  { label: 'Electronics', value: 'Electronics' },
]

export default function NewArrivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const visibleProducts = useMemo(() => {
    // First, filter by category if one is selected
    let filtered = [...products]
    
    if (selectedCategory !== null && selectedCategory !== undefined) {
      filtered = filtered.filter((product) => {
        return product.category === selectedCategory
      })
    }

    // Then sort by newest (highest ID) to get new arrivals
    filtered = [...filtered].sort((a, b) => b.id - a.id)
    
    // Limit to 30 products for "new arrivals"
    if (selectedCategory === null) {
      filtered = filtered.slice(0, 30)
    }

    // Apply additional sorting based on user selection
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered = [...filtered].sort((a, b) => b.id - a.id)
        break
      default:
        // Keep the newest sort
        break
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-muted/50 px-4 md:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">Now Dropping</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">New Arrivals</h1>
            <p className="text-muted-foreground max-w-3xl">
              Fresh silhouettes curated every week across apparel, footwear, tech-enabled accessories, and more.
              Every product is matched with high-fidelity visuals and real-time stock to mirror a premium launchpad experience.
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
            Showing {visibleProducts.length} exclusive arrivals
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}











