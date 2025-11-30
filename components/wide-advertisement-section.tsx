'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function WideAdvertisementSection() {
    return (
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4 border border-white/20">
                                Limited Time Offer
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                Upgrade Your Wardrobe With Premium Styles
                            </h2>
                            <p className="text-lg text-gray-200 mb-8 max-w-lg">
                                Discover our exclusive collection of designer wear at unbeatable prices.
                                Get flat 30% off on your first order.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                                <Link href="/shop">
                                    <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                                        Shop Now <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                                <Link href="/new-arrivals">
                                    <button className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                                        View Collection
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:block relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <img
                                src="/fashion-accessories.jpg"
                                alt="Premium Collection"
                                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
