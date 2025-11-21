import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { WinterCollection } from '@/components/winter-collection'
import { CustomerReviews } from '@/components/customer-reviews'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header showCategoryBar />
      <div>
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <WinterCollection />
      </div>
      <CustomerReviews />
      <NewsletterSection />
      <Footer />
      <AIChatbot />
    </main>
  )
}
