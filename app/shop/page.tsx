'use client'

import { useState, useMemo } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Search, Sliders } from 'lucide-react'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'rating'

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, priceRange, sortBy])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="bg-muted/50 px-4 md:px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop</h1>
            <p className="text-muted-foreground">
              Discover our curated collection of premium garments
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div
              className={`md:block space-y-6 ${
                isMobileFilterOpen ? 'block' : 'hidden'
              } md:col-span-1`}
            >
              <div className="bg-muted/50 p-4 rounded-lg md:bg-transparent md:p-0">
                <div className="flex items-center justify-between md:hidden mb-4">
                  <h3 className="font-bold">Filters</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-sm underline"
                  >
                    Close
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Category</h4>
                  <div className="space-y-2">
                    {['Men', 'Women', 'Kids', 'Accessories'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() =>
                          setSelectedCategory(selectedCategory === cat ? null : cat)
                        }
                        className={`w-full text-left px-3 py-2 rounded-lg smooth-transition ${
                          selectedCategory === cat
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Price Range (₹)</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">₹</span>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                        }
                        className="w-16 px-2 py-1 border border-border rounded"
                        min="0"
                      />
                      <span className="text-muted-foreground">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])
                        }
                        className="w-16 px-2 py-1 border border-border rounded"
                        max="50000"
                      />
                      <span className="text-muted-foreground">₹</span>
                    </div>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {/* Mobile Filter Button */}
              <div className="flex items-center gap-2 mb-6 md:hidden">
                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted smooth-transition"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} items
                </span>
              </div>

              {/* Results Count */}
              <div className="hidden md:block mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredAndSortedProducts.length} products
                </p>
              </div>

              {/* Products */}
              {filteredAndSortedProducts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No products found matching your filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory(null)
                      setPriceRange([0, 50000])
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
