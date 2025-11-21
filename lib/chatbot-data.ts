import { products } from './products'
import fs from 'fs'
import path from 'path'

// Common sizes for different categories
const getSizes = (category: string): string[] => {
  if (category === 'Footwear') return ['6', '7', '8', '9', '10', '11']
  if (category === 'Kids') return ['XS', 'S', 'M', 'L']
  return ['S', 'M', 'L', 'XL', 'XXL']
}

// Generate tags
const getTags = (product: any, index: number, total: number): string[] => {
  const tags: string[] = []
  if (index >= total - 50) tags.push('new arrival')
  if (product.rating >= 4.7 && product.reviews >= 100) tags.push('trending')
  if (product.reviews >= 200) tags.push('best seller')
  if (product.originalPrice && product.originalPrice > product.price) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    if (discount >= 30) tags.push('deal')
  }
  return tags.length > 0 ? tags : ['regular']
}

// Transform product
export const transformProduct = (product: any, index: number, total: number) => {
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
    discount,
    rating: product.rating || 0,
    reviews: product.reviews || 0,
    stock: product.stock || (40 + (index % 12) * 5),
    sizes: product.sizes?.length > 0 ? product.sizes : getSizes(product.category),
    description: product.description || '',
    image: product.image || '/placeholder.svg',
    season: product.season || 'All-Season',
    tags: getTags(product, index, total),
    inStock: product.inStock !== undefined ? product.inStock : true,
    colors: product.colors || []
  }
}

// Load or generate dataset
let cachedDataset: any = null

export const getProductDataset = () => {
  if (cachedDataset) return cachedDataset

  const filePath = path.join(process.cwd(), 'data', 'products.json')
  
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      cachedDataset = JSON.parse(fileContent)
      return cachedDataset
    }
  } catch (error) {
    console.error('Error loading dataset:', error)
  }

  // Generate if not exists
  const enhancedProducts = products.map((p, i) => transformProduct(p, i, products.length))
  cachedDataset = {
    totalProducts: enhancedProducts.length,
    lastUpdated: new Date().toISOString(),
    products: enhancedProducts
  }

  // Save to file
  try {
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    fs.writeFileSync(filePath, JSON.stringify(cachedDataset, null, 2), 'utf8')
    console.log('✅ Generated product dataset:', filePath)
  } catch (error) {
    console.error('Error saving dataset:', error)
  }

  return cachedDataset
}

