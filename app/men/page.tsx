"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function MenPage() {
  return (
    <CategoryPageTemplate
      title="Men's Collection"
      subtitle="Discover premium menswear for every style and occasion"
      categoryName="Men"
      subcategoryFilters={['T-Shirts', 'Shirts', 'Pants', 'Jackets']}
      showSeasonFilter
    />
  )
}
