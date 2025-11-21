'use client'

import { useState, use, useEffect } from 'react'
import { Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useCart } from '@/context/cart-context'
import { products } from '@/lib/products'
import Link from 'next/link'
import { getProductImage, getFallbackImage } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const FALLBACK_SIZES = ['XS', 'S', 'M', 'L', 'XL']
const FALLBACK_COLORS = ['Classic Black', 'Soft Beige', 'Slate Grey']

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = use(params)
  const productId = parseInt(resolved.id, 10)
  const product = products.find(p => p.id === productId)
  const router = useRouter()

  const availableSizes = product?.sizes?.length ? product.sizes : FALLBACK_SIZES
  const availableColors = product?.colors?.length ? product.colors : FALLBACK_COLORS
  const initialColor = availableColors[0] || ''
  const productImage = getProductImage(
    product?.image,
    product?.category,
    product?.subcategory,
    product?.name
  )

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(initialColor)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedSize('')
    setSelectedColor(initialColor)
    setQuantity(1)
    setIsWishlisted(false)
    setActiveTab('description')
  }, [productId, initialColor])

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product not found</h1>
            <Link href="/">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: productImage,
        size: selectedSize,
      })
    }
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    handleAddToCart()
    router.push('/checkout?start=shipping')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/50 px-4 md:px-6 py-3">
          <div className="max-w-7xl mx-auto text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary smooth-hover">Home</Link>
            {' / '}
            <Link href={`/shop?category=${product.category}`} className="hover:text-primary smooth-hover">{product.category}</Link>
            {' / '}
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Image */}
            <div className="flex flex-col gap-4">
              <div className="relative bg-muted rounded-lg overflow-hidden aspect-square fade-in">
                <img
                  src={productImage}
                  alt={product.name}
                  onError={(e) => { e.currentTarget.src = getFallbackImage(product.name, product.category, product.subcategory) }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 slide-up">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 text-3xl font-bold mb-6">
                  <span className="text-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Color: {selectedColor}</label>
                <div className="flex gap-3">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 font-medium smooth-transition ${
                        selectedColor === color
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Size {availableSizes[0]?.length === 1 ? '(US)' : ''}: {selectedSize || 'Select'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 border-2 rounded-lg font-medium smooth-transition ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-3">Quantity</label>
                <div className="flex items-center gap-3 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-border rounded hover:bg-muted smooth-hover"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border border-border rounded px-2 py-2"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-border rounded hover:bg-muted smooth-hover"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              {(product?.inStock ?? true) ? (
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  In Stock
                </div>
              ) : (
                <div className="flex items-center gap-2 text-destructive font-medium">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Out of Stock
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product?.inStock === false}
                  className="flex-1 bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:shadow-lg smooth-transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={product?.inStock === false}
                    className="flex-1 border-2 border-primary text-primary py-4 rounded-full font-bold text-lg hover:bg-primary/10 smooth-transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Now
                  </button>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-4 rounded-full border-2 font-semibold smooth-transition hover:scale-105 ${
                    isWishlisted
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-foreground hover:border-primary'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <RotateCcw className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-border pt-12">
            <div className="flex gap-8 mb-8">
              {['description', 'details'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-semibold text-sm uppercase tracking-wider pb-4 border-b-2 smooth-transition ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-3xl">
              {activeTab === 'description' && (
                <div className="space-y-6 fade-in">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Product Overview</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {product.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Detailed Description</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Experience the perfect blend of style and comfort with our {product.name}. 
                      This premium {product.subcategory?.toLowerCase() || 'product'} is carefully crafted 
                      using the finest materials to ensure durability and exceptional quality. 
                      Designed for the modern {product.category?.toLowerCase() || 'individual'}, 
                      this piece seamlessly transitions from casual daywear to sophisticated evening attire.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The {product.name} features a contemporary design that combines timeless elegance 
                      with modern aesthetics. Made from high-quality fabrics, it offers superior comfort 
                      and breathability, making it ideal for {product.season === 'Winter' ? 'cold weather' : 'all-season wear'}. 
                      The attention to detail in the stitching and finishing ensures this piece will 
                      remain a staple in your wardrobe for years to come.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Whether you're dressing for a casual outing, a business meeting, or a special occasion, 
                      the {product.name} provides the versatility you need. Its premium construction and 
                      thoughtful design elements make it a standout choice for those who value both style 
                      and substance in their clothing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Premium quality materials for lasting durability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Comfortable fit designed for all-day wear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Versatile styling options for various occasions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Easy care and maintenance instructions included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Available in multiple sizes and colors</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Care Instructions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To maintain the quality and appearance of your {product.name}, we recommend 
                      following the care instructions on the label. Generally, machine wash in cold 
                      water with similar colors, tumble dry on low heat, and iron on medium temperature 
                      if needed. Avoid using bleach or harsh detergents to preserve the fabric's 
                      integrity and color vibrancy.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="space-y-4 fade-in">
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Category:</span>
                    <span className="text-muted-foreground">{product.category} - {product.subcategory}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Subcategory:</span>
                    <span className="text-muted-foreground">{product.subcategory}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Price:</span>
                    <span className="text-muted-foreground">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Original Price:</span>
                    <span className="text-muted-foreground line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Discount:</span>
                    <span className="text-muted-foreground">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Rating:</span>
                    <span className="text-muted-foreground">{product.rating} / 5.0 ({product.reviews} reviews)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Season:</span>
                    <span className="text-muted-foreground">{product.season || 'All-Season'}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-semibold text-foreground min-w-24">Availability:</span>
                    <span className="text-muted-foreground">{(product?.inStock ?? true) ? 'In Stock' : 'Out of Stock'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
