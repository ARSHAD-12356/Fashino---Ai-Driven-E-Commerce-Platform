'use client'

import { useMemo, useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating'

export default function WinterCollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const categoryFilters = [
    { label: 'All', value: null },
    { label: 'Men', value: 'Men' },
    { label: 'Women', value: 'Women' },
    { label: 'Kids', value: 'Kids' },
  ]

  const visibleProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Filter by winter season
      const isWinter = product.season === 'Winter' || product.season === 'All-Season'
      
      // Filter by category if selected
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      
      return isWinter && matchesCategory
    })

    // Apply sorting
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
        filtered = [...filtered].sort((a, b) => b.id - a.id)
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-2">Winter Collection</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Stay Warm, Stay Stylish</h1>
            <p className="text-muted-foreground max-w-3xl">
              Discover our premium winter collection featuring cozy jackets, warm sweaters, and essential cold-weather accessories.
              Perfect for staying comfortable and fashionable during the colder months.
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
            Showing {visibleProducts.length} {visibleProducts.length === 1 ? 'product' : 'products'}
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found in this collection.</p>
              <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}



