import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: '',
  },
  season: {
    type: String,
    default: 'All-Season',
  },
  stock: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  sizes: {
    type: [String],
    default: [],
  },
  colors: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)


























