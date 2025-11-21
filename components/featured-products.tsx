'use client'

import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8)

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked items for the season - curated just for you
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
