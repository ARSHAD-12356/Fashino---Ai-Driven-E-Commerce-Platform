"use client"

import { CategoryPageTemplate } from '@/components/category-page-template'

export default function FeaturedPage() {
    return (
        <CategoryPageTemplate
            title="Featured Collection"
            subtitle="Handpicked items for the season - curated just for you"
            categoryName="Featured"
            showSeasonFilter={false}
            isFeatured={true}
        />
    )
}
