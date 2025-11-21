import { NextRequest, NextResponse } from 'next/server'
import { getProductDataset } from '@/lib/chatbot-data'

// Intent detection
type Intent = 'trending' | 'deals' | 'new-arrivals' | 'best-sellers' | 'price' | 'search' | 'count' | 'similar' | 'non-product'

const detectIntent = (query: string): Intent => {
  const normalized = query.toLowerCase()
  
  // Non-product detection
  const nonProductKeywords = ['hello', 'hi', 'how are you', 'what is', 'who are you', 'tell me about', 'explain', 'help me with', 'weather', 'time', 'date']
  if (nonProductKeywords.some(kw => normalized.includes(kw) && !normalized.includes('product'))) {
    return 'non-product'
  }
  
  // Intent keywords
  if (normalized.includes('trending') || normalized.includes('popular')) return 'trending'
  if (normalized.includes('deal') || normalized.includes('offer') || normalized.includes('discount') || normalized.includes('sale')) return 'deals'
  if (normalized.includes('new arrival') || normalized.includes('new arrivals') || normalized.includes('latest')) return 'new-arrivals'
  if (normalized.includes('best seller') || normalized.includes('bestseller') || normalized.includes('top rated')) return 'best-sellers'
  if (normalized.includes('price') || normalized.includes('cost') || normalized.includes('kitna')) return 'price'
  if (normalized.includes('similar') || normalized.includes('alternatives') || normalized.includes('options')) return 'similar'
  if (normalized.includes('total') || normalized.includes('kitne') || normalized.includes('count')) return 'count'
  
  return 'search'
}

// Fuzzy search helper
const fuzzyMatch = (text: string, query: string): number => {
  const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, '')
  const normalizedQuery = query.toLowerCase().replace(/[^a-z0-9]/g, '')
  
  // Exact match
  if (normalizedText.includes(normalizedQuery)) return 100
  
  // Character-based similarity
  let score = 0
  let textIndex = 0
  for (let i = 0; i < normalizedQuery.length; i++) {
    const char = normalizedQuery[i]
    const foundIndex = normalizedText.indexOf(char, textIndex)
    if (foundIndex !== -1) {
      score += 10
      textIndex = foundIndex + 1
    }
  }
  
  return (score / normalizedQuery.length) * 100
}

// Extract price range from query
const extractPriceRange = (query: string): [number, number] | null => {
  const patterns = [
    /₹?\s*(\d+)\s*[-–—to]+\s*₹?\s*(\d+)/i,
    /(\d+)\s*[-–—to]+\s*(\d+)\s*rupees?/i,
    /under\s*₹?\s*(\d+)/i,
    /upto\s*₹?\s*(\d+)/i,
    /below\s*₹?\s*(\d+)/i,
    /less\s*than\s*₹?\s*(\d+)/i,
    /ke\s*andar\s*₹?\s*(\d+)/i,
    /ke\s*andar\s*(\d+)/i
  ]
  
  for (const pattern of patterns) {
    const match = query.match(pattern)
    if (match) {
      if (match[2]) {
        return [parseInt(match[1]), parseInt(match[2])]
      } else {
        return [0, parseInt(match[1])]
      }
    }
  }
  
  return null
}

// Extract category from query
const extractCategory = (query: string): string | null => {
  const normalized = query.toLowerCase()
  const categoryMap: Record<string, string> = {
    'men': 'Men',
    'mens': 'Men',
    'male': 'Men',
    'women': 'Women',
    'womens': 'Women',
    'female': 'Women',
    'ladies': 'Women',
    'kid': 'Kids',
    'kids': 'Kids',
    'children': 'Kids',
    'child': 'Kids',
    'footwear': 'Footwear',
    'shoe': 'Footwear',
    'shoes': 'Footwear',
    'sneaker': 'Footwear',
    'accessor': 'Accessories',
    'electron': 'Electronics',
    'winter': 'Winter',
    'ethnic': 'Ethnic',
    'sportswear': 'Sportswear',
    'beauty': 'Beauty',
    'home': 'Home'
  }
  
  for (const [key, value] of Object.entries(categoryMap)) {
    if (normalized.includes(key)) return value
  }
  
  return null
}

// Extract product name/keywords from query
const extractProductKeywords = (query: string): string[] => {
  const normalized = query.toLowerCase()
  const commonProducts = [
    'jacket', 'hoodie', 'shirt', 'tee', 'tshirt', 't-shirt', 'pant', 'jeans', 'denim',
    'dress', 'top', 'blazer', 'coat', 'sweater', 'cardigan', 'suit', 'kurta', 'saree',
    'sneaker', 'shoe', 'boot', 'sandal', 'heels', 'flats',
    'watch', 'bag', 'scarf', 'belt', 'sunglass', 'jewelry'
  ]
  
  const found: string[] = []
  for (const product of commonProducts) {
    if (normalized.includes(product)) {
      found.push(product)
    }
  }
  
  return found
}

// Check for exact product name match
const findExactMatch = (dataset: any, query: string): any | null => {
  const normalizedQuery = query.toLowerCase().trim()
  
  // Try exact name match first
  const exactMatch = dataset.products.find((product: any) => 
    product.name.toLowerCase() === normalizedQuery
  )
  if (exactMatch) return exactMatch
  
  // Try partial exact match (query is subset of product name)
  const partialExact = dataset.products.find((product: any) => {
    const productName = product.name.toLowerCase()
    return productName === normalizedQuery || 
           productName.includes(normalizedQuery) ||
           normalizedQuery.includes(productName)
  })
  if (partialExact) return partialExact
  
  return null
}

// Search products with advanced filtering
const searchProducts = (dataset: any, query: string, intent: Intent) => {
  const normalizedQuery = query.toLowerCase()
  const priceRange = extractPriceRange(query)
  const category = extractCategory(query)
  const productKeywords = extractProductKeywords(query)
  
  // Check for exact match first
  const exactMatch = findExactMatch(dataset, query)
  if (exactMatch) {
    // If exact match found and no filters, return only that
    if (!priceRange && !category && productKeywords.length === 0 && intent === 'search') {
      return [exactMatch]
    }
    // If filters match exact product, return it
    if (priceRange && exactMatch.price >= priceRange[0] && exactMatch.price <= priceRange[1]) {
      return [exactMatch]
    }
    if (category && exactMatch.category === category) {
      return [exactMatch]
    }
  }
  
  let results = dataset.products.filter((product: any) => {
    // Intent-based filtering
    if (intent === 'trending' && !product.tags.includes('trending')) return false
    if (intent === 'deals' && (!product.tags.includes('deal') || product.discount < 30)) return false
    if (intent === 'new-arrivals' && !product.tags.includes('new arrival')) return false
    if (intent === 'best-sellers' && !product.tags.includes('best seller')) return false
    
    // Price range filter
    if (priceRange) {
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    }
    
    // Category filter
    if (category) {
      if (category === 'Winter') {
        if (product.season !== 'Winter' && product.season !== 'All-Season') return false
      } else if (product.category !== category) {
        return false
      }
    }
    
    // Product keyword filter
    if (productKeywords.length > 0) {
      const productName = product.name.toLowerCase()
      const productDesc = product.description.toLowerCase()
      const productSubcat = product.subcategory.toLowerCase()
      
      const matchesKeyword = productKeywords.some(keyword => 
        productName.includes(keyword) || 
        productDesc.includes(keyword) ||
        productSubcat.includes(keyword)
      )
      
      if (!matchesKeyword) return false
    }
    
    // Name/description search (if not intent-based)
    if (intent === 'search' && productKeywords.length === 0) {
      const nameMatch = fuzzyMatch(product.name, query) > 50
      const descMatch = product.description.toLowerCase().includes(normalizedQuery)
      const subcatMatch = product.subcategory.toLowerCase().includes(normalizedQuery)
      
      if (!nameMatch && !descMatch && !subcatMatch) return false
    }
    
    return true
  })
  
  // Sort by relevance
  if (intent === 'best-sellers') {
    results.sort((a: any, b: any) => {
      const aScore = (a.rating * 10) + (a.reviews / 10)
      const bScore = (b.rating * 10) + (b.reviews / 10)
      return bScore - aScore
    })
  } else if (intent === 'deals') {
    results.sort((a: any, b: any) => b.discount - a.discount)
  } else if (intent === 'new-arrivals') {
    results.sort((a: any, b: any) => b.id - a.id)
  } else if (intent === 'trending') {
    results.sort((a: any, b: any) => {
      const aScore = (a.rating * 20) + (a.reviews / 5)
      const bScore = (b.rating * 20) + (b.reviews / 5)
      return bScore - aScore
    })
  } else {
    // Relevance scoring
    results = results.map((product: any) => ({
      ...product,
      relevanceScore: fuzzyMatch(product.name, query)
    }))
    results.sort((a: any, b: any) => b.relevanceScore - a.relevanceScore)
  }
  
  return results
}

// Find similar products
const findSimilarProducts = (product: any, dataset: any, limit: number = 4) => {
  return dataset.products
    .filter((p: any) => 
      p.id !== product.id &&
      (p.category === product.category || 
       p.subcategory === product.subcategory ||
       Math.abs(p.price - product.price) < product.price * 0.3)
    )
    .sort((a: any, b: any) => {
      const aScore = (a.category === product.category ? 10 : 0) +
                    (a.subcategory === product.subcategory ? 5 : 0) +
                    (Math.abs(a.price - product.price) < product.price * 0.2 ? 3 : 0)
      const bScore = (b.category === product.category ? 10 : 0) +
                    (b.subcategory === product.subcategory ? 5 : 0) +
                    (Math.abs(b.price - product.price) < product.price * 0.2 ? 3 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}

// Generate redirect URL based on intent/query
const getRedirectUrl = (intent: Intent, query: string, category?: string | null): string => {
  if (intent === 'trending') return '/trending'
  if (intent === 'deals') return '/deals'
  if (intent === 'new-arrivals') return '/new-arrivals'
  if (category === 'Winter' || query.toLowerCase().includes('winter')) return '/winter-collection'
  if (category === 'Men') return '/men'
  if (category === 'Women') return '/women'
  if (category === 'Kids') return '/kids'
  if (category === 'Footwear') return '/footwear'
  if (category === 'Accessories') return '/accessories'
  if (category === 'Electronics') return '/electronics'
  return '/shop'
}

// Generate response
const generateResponse = (query: string, results: any[], dataset: any, intent: Intent): any => {
  const category = extractCategory(query)
  
  // Non-product query
  if (intent === 'non-product') {
    return {
      text: "I'm here only to assist with Fashino products, prices, and offers. Please ask me about products available in our store!",
      products: [],
      redirectUrl: null,
      showSimilar: false
    }
  }
  
  // Count query
  if (intent === 'count') {
    if (category) {
      const count = dataset.products.filter((p: any) => p.category === category).length
      return {
        text: `✅ ${category} category me total ${count} products available hai.`,
        products: [],
        redirectUrl: getRedirectUrl(intent, query, category),
        showSimilar: false
      }
    }
    return {
      text: `✅ Total ${dataset.totalProducts} products available hai Fashino store me.`,
      products: [],
      redirectUrl: '/shop',
      showSimilar: false
    }
  }
  
  // No results
  if (results.length === 0) {
    // Try to find similar
    const allProducts = dataset.products
    const productKeywords = extractProductKeywords(query)
    
    let similar: any[] = []
    if (productKeywords.length > 0) {
      similar = allProducts
        .filter((p: any) => {
          const name = p.name.toLowerCase()
          return productKeywords.some(kw => name.includes(kw))
        })
        .slice(0, 4)
    } else if (category) {
      similar = allProducts
        .filter((p: any) => p.category === category)
        .slice(0, 4)
    }
    
    if (similar.length > 0) {
      return {
        text: "❌ Sorry, aapke search ke according exact product nahi mila.\n\n✔ Similar options:\n\n",
        products: similar.map((p: any, i: number) => ({
          ...p,
          displayText: `${i + 1}) ${p.name} – ₹${p.price.toLocaleString('en-IN')}${p.discount > 0 ? ` (${p.discount}% off)` : ''}`
        })),
        redirectUrl: getRedirectUrl(intent, query, category),
        showSimilar: true
      }
    }
    
    return {
      text: "❌ Sorry, aapke search ke according koi product nahi mila. Kripya different keywords try karein ya category name mention karein.",
      products: [],
      redirectUrl: getRedirectUrl(intent, query, category),
      showSimilar: false
    }
  }
  
  // Check if this is an exact product name match
  const exactMatch = findExactMatch(dataset, query)
  if (exactMatch && intent === 'search') {
    const p = exactMatch
    const discountText = p.discount > 0 
      ? `₹${p.price.toLocaleString('en-IN')} (${p.discount}% off, was ₹${p.originalPrice.toLocaleString('en-IN')})`
      : `₹${p.price.toLocaleString('en-IN')}`
    
    let responseText = `✔ Product Details:\n\nProduct: ${p.name}\nPrice: ${discountText}\nSizes: ${p.sizes.join(' / ')}\nRating: ${p.rating} ⭐ (${p.reviews} reviews)\nCategory: ${p.category} → ${p.subcategory}\nStock: ${p.stock > 0 ? 'In Stock' : 'Out of Stock'}`
    
    if (p.description) {
      responseText += `\nDescription: ${p.description}`
    }
    
    if (p.tags && p.tags.length > 0 && !p.tags.includes('regular')) {
      responseText += `\nTags: ${p.tags.join(', ')}`
    }
    
    return {
      text: responseText,
      products: [p],
      redirectUrl: `/products/${p.id}`,
      showSimilar: false,
      isExactMatch: true
    }
  }
  
  // Single product response
  if (results.length === 1) {
    const p = results[0]
    const discountText = p.discount > 0 
      ? `₹${p.price.toLocaleString('en-IN')} (${p.discount}% off, was ₹${p.originalPrice.toLocaleString('en-IN')})`
      : `₹${p.price.toLocaleString('en-IN')}`
    
    const similar = findSimilarProducts(p, dataset)
    
    let responseText = `✔ Available:\n\nProduct: ${p.name}\nPrice: ${discountText}\nSizes: ${p.sizes.join(' / ')}\nRating: ${p.rating} ⭐ (${p.reviews} reviews)\nCategory: ${p.category} → ${p.subcategory}\nStock: ${p.stock > 0 ? 'In Stock' : 'Out of Stock'}`
    
    if (p.description) {
      responseText += `\nDescription: ${p.description}`
    }
    
    if (similar.length > 0 && intent === 'similar') {
      responseText += `\n\n✔ Similar options:\n\n`
      similar.forEach((sp: any, i: number) => {
        responseText += `${i + 1}) ${sp.name} – ₹${sp.price.toLocaleString('en-IN')}${sp.discount > 0 ? ` (${sp.discount}% off)` : ''}\n`
      })
    }
    
    return {
      text: responseText,
      products: [p],
      redirectUrl: `/products/${p.id}`,
      showSimilar: similar.length > 0
    }
  }
  
  // Multiple products
  const intentTexts: Record<string, string> = {
    'trending': 'Trending products',
    'deals': 'Deals & Offers',
    'new-arrivals': 'New Arrivals',
    'best-sellers': 'Best Sellers',
    'search': 'Search results'
  }
  
  const headerText = intentTexts[intent] || 'Products found'
  let responseText = `✅ ${results.length} ${headerText}:\n\n`
  
  results.slice(0, 10).forEach((p: any, i: number) => {
    const discountText = p.discount > 0 ? ` (${p.discount}% off)` : ''
    responseText += `${i + 1}) ${p.name} – ₹${p.price.toLocaleString('en-IN')}${discountText}\n`
    responseText += `   ${p.category} → ${p.subcategory} | Rating: ${p.rating}⭐ (${p.reviews} reviews)\n\n`
  })
  
  if (results.length > 10) {
    responseText += `... aur ${results.length - 10} products available hain.`
  }
  
  return {
    text: responseText,
    products: results.slice(0, 10),
    redirectUrl: getRedirectUrl(intent, query, category),
    showSimilar: false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      )
    }
    
    const dataset = getProductDataset()
    const intent = detectIntent(query)
    const results = searchProducts(dataset, query, intent)
    const response = generateResponse(query, results, dataset, intent)
    
    return NextResponse.json({
      success: true,
      query,
      intent,
      response: response.text,
      products: response.products,
      redirectUrl: response.redirectUrl,
      showSimilar: response.showSimilar,
      resultsCount: results.length
    })
  } catch (error: any) {
    console.error('Chatbot error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to process query' },
      { status: 500 }
    )
  }
}


