import { products } from './products'

interface Subcategory {
  name: string
  slug: string
  count: number
}

interface ProductPreview {
  id: number
  name: string
  price: number
  image?: string
  discount: number
}

interface CategoryData {
  subcategories: Subcategory[]
  products: ProductPreview[]
}

export function getCategoryData(categorySlug: string): CategoryData | null {
  const categoryMap: Record<string, string> = {
    'men': 'Men',
    'women': 'Women',
    'kids': 'Kids',
    'winter-wear': 'Winter',
    'footwear': 'Footwear',
    'accessories': 'Accessories',
    'ethnic-wear': 'Ethnic',
    'sportswear': 'Sportswear',
    'beauty-grooming': 'Beauty',
    'home-living': 'Home',
    'electronics': 'Electronics',
  }

  const categoryName = categoryMap[categorySlug]
  if (!categoryName) return null

  // Filter products by category
  let filteredProducts = products
  if (categorySlug === 'winter-wear') {
    filteredProducts = products.filter(p => p.season === 'Winter')
  } else if (categorySlug === 'footwear') {
    filteredProducts = products.filter(p => p.category === 'Footwear')
  } else if (categorySlug === 'electronics') {
    filteredProducts = products.filter(p => p.category === 'Electronics')
  } else if (categorySlug === 'beauty-grooming') {
    filteredProducts = products.filter(p => p.category === 'Beauty')
  } else if (categorySlug === 'home-living') {
    filteredProducts = products.filter(p => p.category === 'Home')
  } else if (categorySlug === 'sportswear') {
    filteredProducts = products.filter(p => p.category === 'Sportswear')
  } else if (categorySlug === 'ethnic-wear') {
    filteredProducts = products.filter(p => p.category === 'Ethnic')
  } else if (categorySlug === 'accessories') {
    filteredProducts = products.filter(p => p.category === 'Accessories')
  } else {
    filteredProducts = products.filter(p => p.category === categoryName)
  }

  // Get subcategories
  const subcategoryMap = new Map<string, number>()
  filteredProducts.forEach(product => {
    const subcat = product.subcategory || 'Other'
    subcategoryMap.set(subcat, (subcategoryMap.get(subcat) || 0) + 1)
  })

  const subcategories: Subcategory[] = Array.from(subcategoryMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)

  // Get featured products
  const featuredProducts: ProductPreview[] = filteredProducts
    .slice(0, 12)
    .map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      discount: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100),
    }))

  return {
    subcategories,
    products: featuredProducts,
  }
}

