'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const carouselSlides = [
  {
    id: 1,
    title: 'Winter Collection',
    subtitle: 'Season 2024-2025',
    description: 'Discover our premium winter collection with exclusive designs and cozy fabrics.',
    image: '/modern-fashion-clothing-hero-1.jpg',
    cta: 'Shop Now'
  },
  {
    id: 2,
    title: 'Warm & Stylish',
    subtitle: 'Winter Essentials',
    description: 'Stay warm and fashionable with our curated winter wardrobe collection.',
    image: '/trendy-fashion-style-lookbook-3.jpg',
    cta: 'Explore Collection'
  },
  {
    id: 3,
    title: 'Luxury Winter Wear',
    subtitle: 'Premium Quality',
    description: 'Experience ultimate comfort with our luxury winter wear made from finest materials.',
    image: '/modern-womens-fashion-clothing.jpg',
    cta: 'View Now'
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % carouselSlides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length)
    setIsAutoPlay(false)
  }

  const slide = carouselSlides[currentSlide]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {carouselSlides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={s.image || "/placeholder.svg"}
              alt={s.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg"
              }}
            />
            <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="space-y-6 slide-up">
              <div className="inline-block">
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  {slide.subtitle}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight text-balance">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-lg smooth-transition hover:scale-105 active:scale-95">
                  {slide.cta}
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 smooth-transition hover:scale-105 active:scale-95">
                  Browse More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white smooth-transition backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white smooth-transition backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`smooth-transition h-2 rounded-full ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 md:block hidden">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/70">Scroll to explore</span>
          <svg
            className="w-4 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
