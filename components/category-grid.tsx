'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = [
  { id: 1, name: 'Men', image: '/modern-mens-fashion-clothing.jpg', href: '/men' },
  { id: 2, name: 'Women', image: '/modern-womens-fashion-clothing.jpg', href: '/women' },
  { id: 3, name: 'Kids', image: '/kids-fashion-clothing-collection.jpg', href: '/kids' },
  { id: 4, name: 'Accessories', image: '/designer-fashion-accessories.jpg', href: '/accessories' },
]

export function CategoryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer block"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className={`w-full h-full object-cover smooth-transition ${
                  hoveredId === category.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 smooth-transition flex items-end p-6">
                <div className="transform transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <span className="text-sm font-semibold text-white opacity-0 group-hover:opacity-100 smooth-transition transform group-hover:translate-y-0 translate-y-2 inline-block">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
