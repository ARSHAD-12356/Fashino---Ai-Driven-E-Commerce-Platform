"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function Page() {
  return (
    <CategoryPageTemplate
      title="Ethnic Wear Collection"
      subtitle="Discover traditional and elegant ethnic wear for every occasion"
      categoryName="Ethnic"
      subcategoryFilters={['Kurtas', 'Sarees', 'Sherwanis', 'Lehengas', 'Salwar Suits', 'Anarkalis', 'Dhotis', 'Pathanis', 'Waistcoats', 'Dupattas']}
      showSeasonFilter
    />
  )
}

