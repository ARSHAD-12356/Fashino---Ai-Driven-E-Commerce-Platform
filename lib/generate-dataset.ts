import { products } from './products'
import fs from 'fs'
import path from 'path'

// Common sizes for different categories
const getSizes = (category: string, subcategory?: string): string[] => {
  if (category === 'Footwear') {
    return ['6', '7', '8', '9', '10', '11']
  }
  if (category === 'Kids') {
    return ['XS', 'S', 'M', 'L']
  }
  return ['S', 'M', 'L', 'XL', 'XXL']
}

// Generate tags based on product properties
const getTags = (product: any, index: number, totalProducts: number): string[] => {
  const tags: string[] = []
  
  // New arrivals (latest 50 products)
  if (index >= totalProducts - 50) {
    tags.push('new arrival')
  }
  
  // Trending (high rating + many reviews)
  if (product.rating >= 4.7 && product.reviews >= 100) {
    tags.push('trending')
  }
  
  // Best seller (high reviews)
  if (product.reviews >= 200) {
    tags.push('best seller')
  }
  
  // Deals (has discount)
  if (product.originalPrice && product.originalPrice > product.price) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    if (discountPercent >= 30) {
      tags.push('deal')
    }
  }
  
  return tags.length > 0 ? tags : ['regular']
}

// Transform product to enhanced format
export const transformProduct = (product: any, index: number, totalProducts: number) => {
  const discount = product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0
  
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    subcategory: product.subcategory || 'Other',
    price: product.price,
    originalPrice: product.originalPrice || product.price,
    discount: discount,
    rating: product.rating || 0,
    reviews: product.reviews || 0,
    stock: product.stock || (40 + (index % 12) * 5),
    sizes: product.sizes && product.sizes.length > 0 
      ? product.sizes 
      : getSizes(product.category, product.subcategory),
    description: product.description || '',
    image: product.image || '/placeholder.svg',
    season: product.season || 'All-Season',
    tags: getTags(product, index, totalProducts),
    inStock: product.inStock !== undefined ? product.inStock : true,
    colors: product.colors || []
  }
}

// Generate and save dataset
export const generateDataset = () => {
  try {
    const enhancedProducts = products.map((product, index) => 
      transformProduct(product, index, products.length)
    )
    
    const dataset = {
      totalProducts: enhancedProducts.length,
      lastUpdated: new Date().toISOString(),
      products: enhancedProducts
    }
    
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    // Write to JSON file
    const filePath = path.join(dataDir, 'products.json')
    fs.writeFileSync(filePath, JSON.stringify(dataset, null, 2), 'utf8')
    
    console.log(`✅ Generated dataset with ${enhancedProducts.length} products`)
    console.log(`📁 Saved to: ${filePath}`)
    
    return dataset
  } catch (error) {
    console.error('❌ Error generating dataset:', error)
    throw error
  }
}

