'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  product: string
  date: string
  verified: boolean
  profilePic?: string
}

// Generate profile picture URLs using UI Avatars API
const getProfilePic = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random&color=fff&size=128&bold=true`
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love my purchase! The quality is exceptional and the fit is perfect. Fast shipping too!',
    product: 'Premium Essentials Tee',
    date: '2 days ago',
    verified: true,
    profilePic: getProfilePic('Sarah Johnson'),
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best jacket I\'ve ever owned. Great for winter and looks stylish. Highly recommend!',
    product: 'Sports Performance Jacket',
    date: '5 days ago',
    verified: true,
    profilePic: getProfilePic('Michael Chen'),
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'The dress exceeded my expectations. Perfect for special occasions. Will definitely shop here again!',
    product: 'Silk Evening Dress',
    date: '1 week ago',
    verified: true,
    profilePic: getProfilePic('Emily Rodriguez'),
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    comment: 'Comfortable, stylish, and durable. Exactly what I was looking for. Great value for money!',
    product: 'Comfort Fit Jeans',
    date: '1 week ago',
    verified: true,
    profilePic: getProfilePic('David Thompson'),
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    rating: 5,
    comment: 'Amazing quality! The material feels premium and the design is on point. Very satisfied!',
    product: 'Elegant Blazer',
    date: '2 weeks ago',
    verified: true,
    profilePic: getProfilePic('Lisa Anderson'),
  },
  {
    id: 6,
    name: 'James Wilson',
    rating: 5,
    comment: 'Fast delivery and excellent customer service. The product quality is outstanding. 10/10!',
    product: 'Classic White Tee',
    date: '2 weeks ago',
    verified: true,
    profilePic: getProfilePic('James Wilson'),
  },
]

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
        setIsTransitioning(false)
      }, 350)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes slideOut {
        from {
          opacity: 1;
          transform: translateX(0);
        }
        to {
          opacity: 0;
          transform: translateX(-30px);
        }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const goToPrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
      setIsTransitioning(false)
    }, 350)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
      setIsTransitioning(false)
    }, 350)
  }

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsTransitioning(false)
      }, 350)
    }
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers have to say about their shopping experience.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="flex items-center justify-center min-h-[400px] overflow-hidden">
              <div 
                key={currentIndex}
                className="w-full text-center space-y-6"
                style={{
                  animation: 'slideIn 0.7s ease-in-out',
                }}
              >
                {/* Review Content */}
                <div className="flex items-start gap-6 justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-primary/20">
                    {currentReview.profilePic ? (
                      <img
                        src={currentReview.profilePic}
                        alt={currentReview.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                        }}
                      />
                    ) : null}
                    <span className={`text-primary font-bold text-2xl ${currentReview.profilePic ? 'hidden' : ''}`}>
                      {currentReview.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 text-left max-w-md">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-xl text-foreground">{currentReview.name}</h4>
                      {currentReview.verified && (
                        <span className="text-xs bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full font-medium">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{currentReview.product}</p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < currentReview.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative max-w-2xl mx-auto">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10" />
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10 italic">
                    "{currentReview.comment}"
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">{currentReview.date}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary smooth-transition flex items-center justify-center shadow-lg z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary smooth-transition flex items-center justify-center shadow-lg z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full smooth-transition ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Rating Summary */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-base">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-foreground text-xl">4.9/5</span>
            <span className="text-muted-foreground">Average Rating</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">10,000+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}



















