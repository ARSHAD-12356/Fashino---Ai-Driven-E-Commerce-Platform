import { NextResponse } from 'next/server'
import { generateDataset } from '@/lib/generate-dataset'

export async function GET() {
  try {
    const dataset = generateDataset()
    return NextResponse.json({
      success: true,
      message: `Generated dataset with ${dataset.totalProducts} products`,
      dataset
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

