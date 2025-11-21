"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function BeautyGroomingPage() {
  return (
    <CategoryPageTemplate
      title="Beauty & Grooming"
      subtitle="Curated skincare, haircare, grooming, and fragrance essentials"
      categoryName="Beauty"
      subcategoryFilters={['Grooming', 'Skincare', 'Hair Care', 'Fragrance']}
    />
  )
}













