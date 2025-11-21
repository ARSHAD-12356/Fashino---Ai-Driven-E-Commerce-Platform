import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Product from '@/lib/models/Product'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const products = await Product.find().sort({ createdAt: -1 })

    return NextResponse.json(
      { products: products.map(p => ({
        _id: p._id.toString(),
        name: p.name,
        category: p.category,
        subcategory: p.subcategory,
        price: p.price,
        originalPrice: p.originalPrice,
        image: p.image,
        rating: p.rating,
        reviews: p.reviews,
        description: p.description,
        season: p.season,
        stock: p.stock,
        inStock: p.inStock,
        sizes: p.sizes,
        colors: p.colors,
        createdAt: p.createdAt,
      })) },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Failed to fetch products:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const productData = await request.json()
    const {
      name,
      category,
      subcategory,
      price,
      originalPrice,
      image,
      description,
      season,
      stock,
      inStock,
      sizes,
      colors,
      rating,
      reviews,
    } = productData

    if (!name || !category || !price) {
      return NextResponse.json(
        { error: 'Name, category, and price are required' },
        { status: 400 }
      )
    }

    const product = await Product.create({
      name,
      category,
      subcategory: subcategory || '',
      price: Number(price),
      originalPrice: Number(originalPrice) || Number(price),
      image: image || '',
      description: description || '',
      season: season || 'All-Season',
      stock: Number(stock) || 0,
      inStock: inStock !== undefined ? inStock : true,
      sizes: sizes || [],
      colors: colors || [],
      rating: Number(rating) || 0,
      reviews: Number(reviews) || 0,
    })

    return NextResponse.json(
      {
        message: 'Product created successfully',
        product: {
          _id: product._id.toString(),
          name: product.name,
          category: product.category,
          subcategory: product.subcategory,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          rating: product.rating,
          reviews: product.reviews,
          description: product.description,
          season: product.season,
          stock: product.stock,
          inStock: product.inStock,
          sizes: product.sizes,
          colors: product.colors,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Product creation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create product' },
      { status: 500 }
    )
  }
}


