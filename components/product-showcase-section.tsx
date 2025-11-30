'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Product {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    [key: string]: any
}

interface Banner {
    image: string
    title: string
    description: string
    link: string
    color: string
}

interface ProductShowcaseSectionProps {
    title: string
    link: string
    products: Product[]
    banners: Banner[]
    reverse?: boolean
    browseLink?: string
}

export function ProductShowcaseSection({ title, link, products, banners, reverse = false, browseLink }: ProductShowcaseSectionProps) {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

    useEffect(() => {
        if (banners.length <= 1) return

        const timer = setInterval(() => {
            setCurrentBannerIndex((prev) => (prev + 1) % banners.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [banners.length])

    const currentBanner = banners[currentBannerIndex]

    return (
        <section className="py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 bg-background border border-border rounded-xl overflow-hidden shadow-sm`}>

                    {/* Side Banner Carousel */}
                    <div className={`w-full md:w-1/4 lg:w-1/5 ${currentBanner.color} relative overflow-hidden min-h-[300px] md:min-h-auto transition-colors duration-500`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentBannerIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 p-6 flex flex-col justify-between z-10"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{currentBanner.title}</h3>
                                    <p className="text-muted-foreground mb-4">{currentBanner.description}</p>
                                    <Link href={currentBanner.link}>
                                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg transition-all">
                                            View All
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute top-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

                        {/* Decorative Image */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentBannerIndex}
                                src={currentBanner.image}
                                alt={currentBanner.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 0.8, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute bottom-0 right-0 w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            />
                        </AnimatePresence>

                        {/* Indicators */}
                        {banners.length > 1 && (
                            <div className="absolute bottom-4 left-6 flex gap-1 z-20">
                                {banners.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentBannerIndex ? 'w-6 bg-primary' : 'w-2 bg-primary/30'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1 p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <Link href={link} className="flex items-center text-primary hover:text-primary/80 transition-colors">
                                <div className="bg-primary text-primary-foreground rounded-full p-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`} className="group">
                                    <div className="border border-border rounded-lg p-3 hover:shadow-md transition-all h-full flex flex-col bg-card">
                                        <div className="relative aspect-[4/5] mb-3 overflow-hidden rounded-md bg-muted">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                                Min. 50% Off
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <h3 className="font-medium text-sm truncate mb-1 group-hover:text-primary transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-green-600 font-medium mb-1">Special Offer</p>
                                            <div className="mt-auto flex items-baseline gap-2">
                                                <span className="font-bold text-sm">₹{product.price.toLocaleString('en-IN')}</span>
                                                {product.originalPrice && (
                                                    <span className="text-xs text-muted-foreground line-through">
                                                        ₹{product.originalPrice.toLocaleString('en-IN')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {browseLink && (
                    <div className="mt-8 text-center">
                        <Link href={browseLink}>
                            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                                Browse More <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
