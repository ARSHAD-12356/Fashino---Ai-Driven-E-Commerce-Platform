import { ProductShowcaseSection } from '@/components/product-showcase-section'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <ProductShowcaseSection
      title="Featured Collection"
      link="/featured"
      products={featuredProducts}
      banners={[
        {
          title: "Featured",
          description: "Handpicked items just for you.",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
          link: "/featured",
          color: "bg-purple-500/10"
        },
        {
          title: "New Arrivals",
          description: "Check out the latest trends.",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
          link: "/new-arrivals",
          color: "bg-pink-500/10"
        },
        {
          title: "Best Sellers",
          description: "Our most popular items.",
          image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop",
          link: "/best-sellers",
          color: "bg-blue-500/10"
        }
      ]}
      browseLink="/featured"
    />
  )
}
