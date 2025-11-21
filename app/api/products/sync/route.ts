import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Product from '@/lib/models/Product'
import { products as localProducts } from '@/lib/products'

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    let created = 0
    let updated = 0
    let errors = 0
    const errorsList: string[] = []

    for (const product of localProducts) {
      try {
        // Find existing product by name and category
        const existingProduct = await Product.findOne({ 
          name: product.name,
          category: product.category 
        })

        if (existingProduct) {
          // Update existing product
          await Product.findByIdAndUpdate(existingProduct._id, {
            name: product.name,
            category: product.category,
            subcategory: product.subcategory || '',
            price: product.price,
            originalPrice: product.originalPrice || product.price,
            image: product.image || '',
            rating: product.rating || 0,
            reviews: product.reviews || 0,
            description: product.description || '',
            season: product.season || 'All-Season',
            stock: product.stock || (40 + (product.id % 12) * 5),
            inStock: product.inStock !== undefined ? product.inStock : true,
            sizes: product.sizes || [],
            colors: product.colors || [],
          })
          updated++
        } else {
          // Create new product
          await Product.create({
            name: product.name,
            category: product.category,
            subcategory: product.subcategory || '',
            price: product.price,
            originalPrice: product.originalPrice || product.price,
            image: product.image || '',
            rating: product.rating || 0,
            reviews: product.reviews || 0,
            description: product.description || '',
            season: product.season || 'All-Season',
            stock: product.stock || (40 + (product.id % 12) * 5),
            inStock: product.inStock !== undefined ? product.inStock : true,
            sizes: product.sizes || [],
            colors: product.colors || [],
          })
          created++
        }
      } catch (error: any) {
        console.error(`Error syncing product ${product.name}:`, error)
        errors++
        errorsList.push(`${product.name}: ${error.message}`)
      }
    }

    return NextResponse.json(
      {
        message: 'Products synced successfully',
        created,
        updated,
        errors,
        total: localProducts.length,
        errorsList: errorsList.slice(0, 10), // Return first 10 errors if any
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Sync error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to sync products' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const productCount = await Product.countDocuments()
    
    return NextResponse.json(
      {
        message: 'Product sync status',
        totalInDB: productCount,
        totalInLocal: localProducts.length,
        needsSync: productCount !== localProducts.length,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Sync status error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to get sync status' },
      { status: 500 }
    )
  }
}





