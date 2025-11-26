'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Heart, ShoppingCart, User, LogOut, Moon, Sun, ChevronDown, Menu, X } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { useAuth } from '@/context/auth-context'
import { useWishlist } from '@/context/wishlist-context'
import { useTheme } from '@/context/theme-context'
import { CartDrawer } from '@/components/cart-drawer'
import { CategoryDropdown } from '@/components/category-dropdown'
import { getCategoryData } from '@/lib/category-data'
import { Logo } from '@/components/logo'
import { products } from '@/lib/products'

export function DualNavbar({ showCategoryBar = false }: { showCategoryBar?: boolean }) {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  
  const userMenuRef = useRef<HTMLDivElement>(null)
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Filter products based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase().trim()
    const matched = products.filter((product) => 
      product.name.toLowerCase().includes(query)
    )
    
    return matched.slice(0, 8) // Limit to 8 results for display
  }, [searchQuery])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (!Object.values(categoryRefs.current).some(ref => ref?.contains(event.target as Node))) {
        setActiveCategory(null)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        // Don't close search on blur, only on outside click
        setTimeout(() => setIsSearchFocused(false), 200)
      }
      // Close mobile sidebar when clicking outside on mobile
      if (window.innerWidth <= 768 && isMobileMenuOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('[data-mobile-sidebar]') && !target.closest('button[aria-label="Toggle menu"]')) {
          setIsMobileMenuOpen(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const handleProductClick = (productId: number) => {
    setSearchQuery('')
    setIsSearchFocused(false)
    router.push(`/products/${productId}`)
  }

  const mainCategories = [
    { name: 'New Arrivals', slug: 'new-arrivals' },
    { name: 'Winter Collection', slug: 'winter-collection' },
    { name: 'Deals & Offers', slug: 'deals' },
  ]

  const bottomCategories = [
    { name: 'Men', slug: 'men' },
    { name: 'Women', slug: 'women' },
    { name: 'Kids', slug: 'kids' },
    { name: 'Footwear', slug: 'footwear' },
    { name: 'Accessories', slug: 'accessories' },
    { name: 'Ethnic Wear', slug: 'ethnic-wear' },
    { name: 'Sportswear', slug: 'sportswear' },
    { name: 'Beauty & Grooming', slug: 'beauty-grooming' },
    { name: 'Home & Living', slug: 'home-living' },
    { name: 'Electronics', slug: 'electronics' },
  ]

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 max-[400px]:gap-2">
            {/* Logo */}
            <Logo showIcon={true} />

            {/* Center: Main Categories */}
            <div className="hidden lg:flex items-center gap-8">
              {mainCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="text-sm font-semibold hover:opacity-80 transition-opacity duration-200 relative group"
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 max-[404px]:gap-1.5 md:gap-4">
              {/* Search Bar */}
              <div ref={searchRef} className="hidden md:block relative">
                <div
                  className={`flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 transition-all duration-300 ${
                    isSearchFocused
                      ? 'bg-white/20 ring-2 ring-white/30'
                      : 'hover:bg-white/15'
                  }`}
                >
                  <Search className="w-4 h-4 text-white/80" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-48 lg:w-64"
                  />
                </div>
                
                {/* Search Results Dropdown */}
                {isSearchFocused && searchQuery.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-left"
                          >
                            <img
                              src={product.image || '/placeholder.svg'}
                              alt={product.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate">{product.name}</p>
                              <p className="text-xs text-white/60">₹{product.price.toLocaleString('en-IN')}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <p className="text-white/80 text-sm font-medium">Sorry not found</p>
                        <p className="text-white/60 text-xs mt-1">Try searching with different keywords</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Mobile Search - Expandable */}
              {isSearchFocused && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black p-4 border-t border-white/10">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                    <Search className="w-4 h-4 text-white/80" />
                    <input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none text-sm text-white placeholder:text-white/60 flex-1"
                      autoFocus
                    />
                    <button
                      onClick={() => setIsSearchFocused(false)}
                      className="p-1 hover:bg-white/10 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              {!isSearchFocused && (
                <button
                  className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                  onClick={() => setIsSearchFocused(true)}
                >
                  <Search className="w-5 h-5" />
                </button>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Wishlist - Only show when signed in */}
              {user && (
                <Link
                  href="/wishlist"
                  className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110 max-[404px]:hidden"
                  title="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
              )}

              {/* Cart - Only show when signed in */}
              {user && (
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
                  title="Shopping Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {items.length}
                    </span>
                  )}
                </button>
              )}

              {/* User Menu */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(!isUserMenuOpen)
                      // Close mobile sidebar when opening user menu on mobile
                      if (!isUserMenuOpen && window.innerWidth <= 768) {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-full transition-all duration-200"
                  >
                    {user.profilePic ? (
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-white/20"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <span className="hidden md:block text-sm font-semibold">
                      {user.name || 'User'}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      isUserMenuOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-900 border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                      <div className="p-4 border-b border-border">
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">My Account</span>
                        </Link>
                        <Link
                          href="/wishlist"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Wishlist</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout()
                            setIsUserMenuOpen(false)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-left text-foreground"
                        >
                          <LogOut className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105"
                >
                  Sign In
                </Link>
              )}

              {/* Mobile Hamburger Menu Button - Always visible on ≤768px */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 bg-transparent hover:bg-transparent transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar - For ≤768px with smooth slide-in animation */}
      <>
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
        
        {/* Sidebar */}
        <div 
          data-mobile-sidebar
          className={`md:hidden fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-r border-border/50 shadow-2xl z-50 transform transition-all duration-300 ease-in-out rounded-r-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <span className={`brand-logo-fashino text-2xl ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`}>
                Fashino
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  theme === 'light' ? 'hover:bg-gray-100 text-[#000000]' : 'hover:bg-muted text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Content */}
            <nav className="p-4 space-y-1">
              {bottomCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-base ${
                    theme === 'light' 
                      ? 'text-[#000000] hover:underline hover:scale-[1.03]' 
                      : 'text-white hover:underline hover:scale-[1.03]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </>

      {/* Bottom Navbar (Home only) - Hidden on mobile (≤768px) */}
      {showCategoryBar && (
        <nav
          className="sticky top-20 z-40 shadow-[0_12px_35px_rgba(139,15,29,0.35)] hidden md:block"
          aria-label="Category navigation"
        >
        <div className="bg-gradient-to-r from-[#7a0d1c] via-[#8f101f] to-[#b71c27]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between lg:justify-center h-16 gap-4 text-white">
            {/* Desktop: All Categories */}
            <div className="hidden lg:flex items-center gap-6 md:gap-8">
              {bottomCategories.map((category, index) => {
                const categoryData = getCategoryData(category.slug)
                // Determine if this is a left-side category (first 2)
                const isLeftSide = index < 2
                return (
                  <div
                    key={category.slug}
                    className="relative"
                    ref={(el) => {
                      categoryRefs.current[category.slug] = el
                    }}
                    onMouseEnter={() => {
                      if (categoryData) {
                        setActiveCategory(category.slug)
                      }
                    }}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <Link
                      href={`/${category.slug}`}
                      className="group text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white transition-colors duration-200 relative py-2"
                    >
                      {category.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                        activeCategory === category.slug ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>

                    {/* Small Dropdown */}
                    {activeCategory === category.slug && categoryData && (
                      <CategoryDropdown
                        category={category}
                        data={categoryData}
                        onClose={() => setActiveCategory(null)}
                        isLeftSide={isLeftSide}
                      />
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </nav>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

