import { products } from './products'
import { transformProduct } from './product-utils'

export function generateDataset() {
  // Generate enhanced products dataset
  const enhancedProducts = products.map((p, i) => transformProduct(p, i, products.length))
  
  const dataset = {
    totalProducts: enhancedProducts.length,
    lastUpdated: new Date().toISOString(),
    products: enhancedProducts
  }

  return dataset
}

