"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function SportswearPage() {
  return (
    <CategoryPageTemplate
      title="Sportswear"
      subtitle="Engineered for performance with breathable, flexible fabrics"
      categoryName="Sportswear"
      subcategoryFilters={['Tops', 'Bottoms', 'Outerwear', 'Accessories']}
      showSeasonFilter
    />
  )
}














































