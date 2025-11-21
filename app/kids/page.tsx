"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function KidsPage() {
  return (
    <CategoryPageTemplate
      title="Kids' Collection"
      subtitle="Comfortable and stylish clothing for your little ones"
      categoryName="Kids"
      subcategoryFilters={['T-Shirts', 'Shorts & Pants', 'Hoodies & Jackets']}
      showSeasonFilter
      seasonFilters={['All-Season', 'Winter']}
    />
  )
}
