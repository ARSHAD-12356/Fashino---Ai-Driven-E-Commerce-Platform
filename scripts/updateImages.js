const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://arshuarshad1551_db_user:1Q4qtUxiXhuxUWx0@cluster0.iljaupv.mongodb.net/fashino?retryWrites=true&w=majority&appName=Cluster0';

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  subcategory: String,
  price: Number,
  originalPrice: Number,
  image: String,
  rating: Number,
  reviews: Number,
  description: String,
  season: String,
  stock: Number,
  inStock: Boolean,
  sizes: [String],
  colors: [String],
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

async function updateProductImages() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected');

    const updates = [
      {
        name: 'Kids Winter Thermal Tee',
        image: 'https://images.unsplash.com/photo-1519238263670-626bb11cd28d?w=800&q=80'
      },
      {
        name: 'Kids Long Sleeve Thermal',
        image: 'https://images.unsplash.com/photo-1622799099507-c0bf696402f8?w=800&q=80'
      },
      {
        name: 'Henley Kids Thermal',
        image: 'https://images.unsplash.com/photo-1503381671519-99d5f2fda3e6?w=800&q=80'
      }
    ];

    for (const update of updates) {
      const result = await Product.updateOne(
        { name: update.name },
        { $set: { image: update.image } }
      );
      console.log(`✅ Updated "${update.name}" - Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);
    }

    console.log('\n✅ All product images updated successfully!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating images:', error);
    process.exit(1);
  }
}

updateProductImages();
