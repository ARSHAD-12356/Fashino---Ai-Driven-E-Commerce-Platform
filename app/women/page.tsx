"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function WomenPage() {
  return (
    <CategoryPageTemplate
      title="Women's Collection"
      subtitle="Discover premium womenswear for every style and occasion"
      categoryName="Women"
      subcategoryFilters={['Tops', 'Dresses', 'Pants', 'Blazers']}
      showSeasonFilter
    />
  )
}
