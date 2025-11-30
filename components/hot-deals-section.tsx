'use client'

import { products } from '@/lib/products'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ads = [
    {
        id: 1,
        title: "Hot Deals",
        description: "Grab the best offers on premium fashion.",
        image: "/fashion-accessories.jpg",
        link: "/deals",
        color: "bg-primary/10"
    },
    {
        id: 2,
        title: "New Arrivals",
        description: "Check out the latest trends for this season.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        link: "/new-arrivals",
        color: "bg-blue-500/10"
    },
    {
        id: 3,
        title: "Clearance Sale",
        description: "Up to 70% off on selected items.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        link: "/sale",
        color: "bg-red-500/10"
    }
]

export function HotDealsSection() {
    const [currentAdIndex, setCurrentAdIndex] = useState(0)

    // Select some products for the deals section
    const dealProducts = products.slice(10, 14)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentAdIndex((prev) => (prev + 1) % ads.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const currentAd = ads[currentAdIndex]

    return (
        <section className="py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-4 bg-background border border-border rounded-xl overflow-hidden shadow-sm">

                    {/* Side Banner Carousel */}
                    <div className={`w-full md:w-1/4 lg:w-1/5 ${currentAd.color} relative overflow-hidden min-h-[300px] md:min-h-auto transition-colors duration-500`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentAd.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 p-6 flex flex-col justify-between z-10"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{currentAd.title}</h3>
                                    <p className="text-muted-foreground mb-4">{currentAd.description}</p>
                                    <Link href={currentAd.link}>
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
                                key={currentAd.id}
                                src={currentAd.image}
                                alt={currentAd.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 0.8, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute bottom-0 right-0 w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            />
                        </AnimatePresence>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-6 flex gap-1 z-20">
                            {ads.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentAdIndex ? 'w-6 bg-primary' : 'w-2 bg-primary/30'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1 p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">Shop Your Favorites</h2>
                            <Link href="/deals" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                                <div className="bg-primary text-primary-foreground rounded-full p-1">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {dealProducts.map((product) => (
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

                <div className="mt-8 text-center">
                    <Link href="/deals">
                        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
                            Browse More <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div >
        </section >
    )
}
