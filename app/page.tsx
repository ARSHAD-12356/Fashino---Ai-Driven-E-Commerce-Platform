import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { CategoryGrid } from '@/components/category-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { WinterCollection } from '@/components/winter-collection'
import { CustomerReviews } from '@/components/customer-reviews'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function Home() {
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
