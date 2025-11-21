"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function AccessoriesPage() {
  return (
    <CategoryPageTemplate
      title="Accessories"
      subtitle="Complete your look with our premium accessories collection"
      categoryName="Accessories"
      subcategoryFilters={['Bags', 'Eyewear', 'Scarves & Belts']}
    />
  )
}
