export function transformProduct(product: any, index?: number, totalProducts?: number) {
  // Calculate discount percentage if originalPrice exists
  const discount = product.originalPrice && product.price < product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  // Determine inStock status
  const inStock = product.stock !== undefined 
    ? product.stock > 0 
    : (product.inStock !== undefined ? product.inStock : true)

  // Generate tags based on product properties
  const tags: string[] = []
  
  if (product.category) {
    tags.push(product.category)
  }
  
  if (product.subcategory) {
    tags.push(product.subcategory)
  }
  
  if (product.season) {
    tags.push(product.season)
  }
  
  if (discount > 0) {
    tags.push('On Sale')
  }
  
  if (product.rating >= 4.7) {
    tags.push('Highly Rated')
  }
  
  if (product.reviews && product.reviews >= 100) {
    tags.push('Popular')
  }

  // Return normalized product object with required fields and preserve all original fields
  return {
    ...product,
    id: product.id ?? 0,
    name: product.name ?? '',
    price: product.price ?? 0,
    category: product.category ?? '',
    rating: product.rating ?? 0,
    inStock: inStock,
    description: product.description ?? '',
    image: product.image ?? '/placeholder.svg',
    discount: discount,
    tags: tags
  }
}

