import { products } from './products'
import { transformProduct } from './product-utils'
import fs from 'fs'
import path from 'path'

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



