'use client'

import Link from 'next/link'
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 py-16 px-4 md:px-6 smooth-transition relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-white" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Fashino */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-white brand-logo-fashino text-[32px] md:text-[40px] lg:text-[50px]">
              About Fashino
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium fashion for the modern individual. Discover curated collections that define your style. 
              We bring you the latest trends and timeless classics, all in one place.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white smooth-transition" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white smooth-transition" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white smooth-transition" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white smooth-transition" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/men" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/footwear" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center space-y-4">
          <p className="text-sm text-gray-500">
            Copyright © <span className="inline-block brand-logo-fashino">
              Fashino
            </span> 2025. All rights reserved.
          </p>
          {/* Developer Credit */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <p className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
              <span className="text-gray-600">Developed by</span>
              <span className="text-primary font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                ArshXCoder
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
