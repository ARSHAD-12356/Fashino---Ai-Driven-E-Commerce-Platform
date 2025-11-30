import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { CategoryGrid } from '@/components/category-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { WinterCollection } from '@/components/winter-collection'
import { HotDealsSection } from '@/components/hot-deals-section'
import { ProductShowcaseSection } from '@/components/product-showcase-section'
import { WideAdvertisementSection } from '@/components/wide-advertisement-section'
import { CustomerReviews } from '@/components/customer-reviews'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'
import { products } from '@/lib/products'

export default function Home() {
  // Filter products for new sections
  const trendingProducts = products.filter(p => p.category === 'Women').slice(0, 4)
  const mensProducts = products.filter(p => p.category === 'Men').slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Header showCategoryBar />
      <div className="space-y-0">
        <Hero />
        <ScrollReveal width="100%">
          <CategoryGrid />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <FeaturedProducts />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <WinterCollection />
        </ScrollReveal>
        <ScrollReveal width="100%">
          <HotDealsSection />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <ProductShowcaseSection
            title="Trending Now"
            link="/trending"
            products={trendingProducts}
            banners={[
              {
                title: "Trending Styles",
                description: "Discover what's hot this week.",
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
                link: "/trending",
                color: "bg-pink-500/10"
              },
              {
                title: "Viral Hits",
                description: "The styles everyone is talking about.",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
                link: "/trending",
                color: "bg-purple-500/10"
              }
            ]}
            reverse={true}
            browseLink="/trending"
          />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <ProductShowcaseSection
            title="Best of Men"
            link="/men"
            products={mensProducts}
            banners={[
              {
                title: "Men's Collection",
                description: "Elevate your style with our men's range.",
                image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop",
                link: "/men",
                color: "bg-blue-600/10"
              },
              {
                title: "Summer Essentials",
                description: "Stay cool with our summer picks.",
                image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop",
                link: "/men",
                color: "bg-orange-500/10"
              }
            ]}
            browseLink="/men"
          />
        </ScrollReveal>

        <ScrollReveal width="100%">
          <WideAdvertisementSection />
        </ScrollReveal>
      </div>
      <ScrollReveal width="100%">
        <CustomerReviews />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <NewsletterSection />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
