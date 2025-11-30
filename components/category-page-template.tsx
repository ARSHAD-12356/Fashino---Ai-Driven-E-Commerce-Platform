'use client'

import { useMemo, useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating'

interface CategoryPageTemplateProps {
  title: string
  subtitle: string
  categoryName: string
  subcategoryFilters?: string[]
  showSeasonFilter?: boolean
  seasonFilters?: string[]
  isFeatured?: boolean
}

export function CategoryPageTemplate({
  title,
  subtitle,
  categoryName,
  subcategoryFilters = [],
  showSeasonFilter = false,
  seasonFilters = ['All-Season', 'Winter', 'Summer', 'Spring', 'Fall'],
  isFeatured = false,
}: CategoryPageTemplateProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const visibleProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Filter by main category
      const matchesCategory = isFeatured ? true : product.category === categoryName

      // Filter by subcategory if selected
      const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory

      // Filter by season if selected
      const matchesSeason = !selectedSeason || product.season === selectedSeason

      return matchesCategory && matchesSubcategory && matchesSeason
    })

    if (isFeatured) {
      filtered = filtered.slice(0, 8)
    }

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
        // Featured - keep original order or sort by ID
        filtered = [...filtered].sort((a, b) => b.id - a.id)
        break
    }

    return filtered
  }, [categoryName, selectedSubcategory, selectedSeason, sortBy])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="bg-muted/50 px-4 md:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="text-muted-foreground max-w-3xl">{subtitle}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            <div className="flex flex-wrap gap-2">
              {/* Subcategory Filters */}
              {subcategoryFilters.length > 0 && (
                <>
                  <button
                    onClick={() => setSelectedSubcategory(null)}
                    className={`px-4 py-2 rounded-full border smooth-transition ${selectedSubcategory === null
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-foreground hover:border-primary/60'
                      }`}
                  >
                    All
                  </button>
                  {subcategoryFilters.map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => setSelectedSubcategory(subcategory)}
                      className={`px-4 py-2 rounded-full border smooth-transition ${selectedSubcategory === subcategory
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground hover:border-primary/60'
                        }`}
                    >
                      {subcategory}
                    </button>
                  ))}
                </>
              )}

              {/* Season Filters */}
              {showSeasonFilter && seasonFilters && seasonFilters.length > 0 && (
                <>
                  {selectedSubcategory === null && subcategoryFilters.length > 0 && (
                    <div className="w-full lg:w-auto border-l border-border pl-4 ml-4" />
                  )}
                  <button
                    onClick={() => setSelectedSeason(null)}
                    className={`px-4 py-2 rounded-full border smooth-transition ${selectedSeason === null
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border text-foreground hover:border-primary/60'
                      }`}
                  >
                    All Seasons
                  </button>
                  {seasonFilters.map((season) => (
                    <button
                      key={season}
                      onClick={() => setSelectedSeason(season)}
                      className={`px-4 py-2 rounded-full border smooth-transition ${selectedSeason === season
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground hover:border-primary/60'
                        }`}
                    >
                      {season}
                    </button>
                  ))}
                </>
              )}
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
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
              <p className="text-muted-foreground text-sm mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}



