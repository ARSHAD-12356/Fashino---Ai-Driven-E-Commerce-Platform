import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
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
        <CategoryGrid />
        <FeaturedProducts />
        <WinterCollection />
      </div>
      <CustomerReviews />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
