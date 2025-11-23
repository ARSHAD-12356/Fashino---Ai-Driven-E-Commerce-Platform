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
import { MegaDropdown } from '@/components/mega-dropdown'
import { getCategoryData } from '@/lib/category-data'
import { products } from '@/lib/products'

export function PremiumNavbar() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  
  const dropdownRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter products based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase().trim()
    const matched = products.filter((product) => 
      product.name.toLowerCase().includes(query)
    )
    
    return matched.slice(0, 8) // Limit to 8 results for display
  }, [searchQuery])

  const handleProductClick = (productId: number) => {
    setSearchQuery('')
    setIsSearchFocused(false)
    router.push(`/products/${productId}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveCategory(null)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setTimeout(() => setIsSearchFocused(false), 200)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const categories = [
    { name: 'Men', slug: 'men', isHero: false },
    { name: 'Women', slug: 'women', isHero: false },
    { name: 'Kids', slug: 'kids', isHero: false },
    { name: 'Winter Wear', slug: 'winter-wear', isHero: true, icon: '❄' },
    { name: 'Footwear', slug: 'footwear', isHero: false },
    { name: 'Accessories', slug: 'accessories', isHero: false },
    { name: 'Ethnic Wear', slug: 'ethnic-wear', isHero: false },
    { name: 'Sportswear', slug: 'sportswear', isHero: false },
    { name: 'Beauty & Grooming', slug: 'beauty-grooming', isHero: false },
    { name: 'Home & Living', slug: 'home-living', isHero: false },
    { name: 'Electronics', slug: 'electronics', isHero: false },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          theme === 'light'
            ? 'bg-[#ffffff] border-b border-gray-200 shadow-lg shadow-black/5'
            : isScrolled
              ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
              : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group px-[12px] md:px-[18px] lg:px-[28px]"
            >
              <span 
                className={`brand-logo-fashino tracking-tight ${
                  theme === 'light' ? 'text-[#000000]' : 'text-white'
                }`}
              >
                Fashino
              </span>
            </Link>

            {/* Desktop: Center Categories */}
            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((category) => {
                const categoryData = getCategoryData(category.slug)
                return (
                  <div
                    key={category.slug}
                    className="relative"
                    ref={category.slug === activeCategory ? dropdownRef : null}
                    onMouseEnter={() => {
                      if (categoryData) {
                        setActiveCategory(category.slug)
                      }
                    }}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <Link
                      href={`/${category.slug}`}
                      className={`relative px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 group ${
                        category.isHero
                          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                          : theme === 'light' ? 'text-[#000000] hover:text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {category.name}
                        {category.icon && <span>{category.icon}</span>}
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            activeCategory === category.slug ? 'rotate-180' : ''
                          } ${category.isHero ? '' : theme === 'light' ? 'text-[#000000]' : 'text-white'}`}
                        />
                      </span>
                      {/* Underline Animation */}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        activeCategory === category.slug || category.isHero
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>

                    {/* Mega Dropdown */}
                    {activeCategory === category.slug && categoryData && (
                      <MegaDropdown
                        category={category}
                        data={categoryData}
                        onClose={() => setActiveCategory(null)}
                      />
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Search Bar */}
              <div ref={searchRef} className="hidden md:block relative">
                <div
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 ${
                    theme === 'light' 
                      ? `bg-gray-100 ${isSearchFocused ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-[#ffffff]' : 'hover:bg-gray-200'}`
                      : `bg-muted/50 ${isSearchFocused ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-background' : 'hover:bg-muted'}`
                  }`}
                >
                  <Search 
                    className={`w-4 h-4 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`}
                  />
                  <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className={`bg-transparent outline-none text-sm w-64 ${
                      theme === 'light' ? 'text-[#000000] placeholder:text-[#000000]' : 'text-foreground placeholder:text-muted-foreground'
                    }`}
                  />
                </div>
                
                {/* Search Results Dropdown */}
                {isSearchFocused && searchQuery.trim() && (
                  <div className={`absolute top-full left-0 right-0 mt-2 border rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50 ${
                    theme === 'light' 
                      ? 'bg-white border-gray-200' 
                      : 'bg-background border-border'
                  }`}>
                    {searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                              theme === 'light' 
                                ? 'hover:bg-gray-100' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            <img
                              src={product.image || '/placeholder.svg'}
                              alt={product.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${
                                theme === 'light' ? 'text-black' : 'text-foreground'
                              }`}>{product.name}</p>
                              <p className={`text-xs ${
                                theme === 'light' ? 'text-black/60' : 'text-muted-foreground'
                              }`}>₹{product.price.toLocaleString('en-IN')}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <p className={`text-sm font-medium ${
                          theme === 'light' ? 'text-black/80' : 'text-foreground/80'
                        }`}>Sorry not found</p>
                        <p className={`text-xs mt-1 ${
                          theme === 'light' ? 'text-black/60' : 'text-muted-foreground'
                        }`}>Try searching with different keywords</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-muted'
                }`}
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                )}
              </button>

              {/* Wishlist - Only show when signed in */}
              {user && (
                <Link
                  href="/wishlist"
                  className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 group ${
                    theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-muted'
                  }`}
                  title="Wishlist"
                >
                  <Heart 
                    className={`w-5 h-5 group-hover:text-primary transition-colors duration-300 ${
                      theme === 'light' ? 'text-[#000000]' : 'text-white'
                    }`}
                  />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
              )}

              {/* Cart - Only show when signed in */}
              {user && (
                <button
                  onClick={() => setIsCartOpen(true)}
                  className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-110 group ${
                    theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-muted'
                  }`}
                  title="Shopping Cart"
                >
                  <ShoppingCart 
                    className={`w-5 h-5 group-hover:text-primary transition-colors duration-300 ${
                      theme === 'light' ? 'text-[#000000]' : 'text-white'
                    }`}
                  />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                      {items.length}
                    </span>
                  )}
                </button>
              )}

              {/* User Menu */}
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group ${
                      theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-muted'
                    }`}
                  >
                    {user.profilePic ? (
                      <img
                        src={user.profilePic}
                        alt={user.name}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <span 
                      className={`hidden md:block text-sm font-semibold ${
                        theme === 'light' ? 'text-[#000000]' : 'text-white'
                      }`}
                    >
                      {user.name || 'User'}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isUserMenuOpen ? 'rotate-180' : ''
                      } ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`}
                    />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="p-4 border-b border-border">
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">My Account</span>
                        </Link>
                        <Link
                          href="/wishlist"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">Wishlist</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout()
                            setIsUserMenuOpen(false)
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-left"
                        >
                          <LogOut className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    theme === 'light' 
                      ? 'bg-primary text-primary-foreground hover:shadow-primary/30' 
                      : 'bg-primary text-primary-foreground hover:shadow-primary/30'
                  }`}
                >
                  Sign In
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                  theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-muted'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${theme === 'light' ? 'text-[#000000]' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden py-4 border-t animate-in slide-in-from-top duration-300 ${
              theme === 'light' ? 'border-gray-200' : 'border-border'
            }`}>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${category.slug}`}
                    className={`block px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
                      theme === 'light' 
                        ? 'hover:bg-gray-100 text-[#000000]' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name} {category.icon}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

