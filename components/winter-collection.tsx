'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export function WinterCollection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const winterProducts = products.filter(p => p.season === 'Winter')
  
  // Get unique categories from winter products
  const categories = Array.from(new Set(winterProducts.map(p => p.category)))
  
  // Filter by selected category
  const filteredProducts = selectedCategory 
    ? winterProducts.filter(p => p.category === selectedCategory)
    : winterProducts

  // Group by subcategory for display
  const groupedBySubcategory = filteredProducts.reduce((acc, product) => {
    const subcat = product.subcategory || 'Other'
    if (!acc[subcat]) {
      acc[subcat] = []
    }
    acc[subcat].push(product)
    return acc
  }, {} as Record<string, typeof winterProducts>)

  if (winterProducts.length === 0) {
    return null
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Winter Collection
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay warm and stylish with our premium winter essentials
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full smooth-transition ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80 text-foreground'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full smooth-transition ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products by Subcategory */}
        {Object.entries(groupedBySubcategory).map(([subcategory, subcategoryProducts]) => (
          <div key={subcategory} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{subcategory}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {subcategoryProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



