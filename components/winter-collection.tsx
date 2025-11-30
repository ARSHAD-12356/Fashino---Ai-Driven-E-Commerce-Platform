'use client'


import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function WinterCollection() {
  // Get top 8 winter products
  const winterProducts = products
    .filter(p => p.season === 'Winter')
    .slice(0, 8)

  if (winterProducts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Seasonal Essentials</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Winter Collection
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            Discover our curated selection of premium winter wear designed to keep you warm without compromising on style.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {winterProducts.map((product) => (
              <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-start">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Fade effect on right */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none md:block hidden"></div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/winter-collection">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
              Browse More <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}



