import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://arshuarshad1551_db_user:1Q4qtUxiXhuxUWx0@cluster0.iljaupv.mongodb.net/fashino?retryWrites=true&w=majority&appName=Cluster0'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongoose: MongooseCache | undefined
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!global.mongoose) {
  global.mongoose = cached
}

async function connectDB() {
  if (cached.conn) {
    console.log('📦 Using existing MongoDB connection')
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 15000, // 15 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
      maxPoolSize: 10,
      minPoolSize: 1,
    }

    console.log('🔄 Attempting to connect to MongoDB Atlas...')
    
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB Connected Successfully!')
      console.log(`📊 Database: ${mongoose.connection.db?.databaseName || 'fashino'}`)
      return mongoose
    }).catch((error) => {
      console.error('❌ MongoDB Connection Error:', error.message)
      console.error('Full error:', error)
      
      // Provide helpful error messages
      if (error.message.includes('IP') || error.message.includes('whitelist') || error.message.includes('ENOTFOUND')) {
        throw new Error(
          'Could not connect to MongoDB Atlas. Your IP address may not be whitelisted. ' +
          'Please add your IP address (or 0.0.0.0/0 for development) to MongoDB Atlas Network Access list. ' +
          'See MONGODB_SETUP_GUIDE.md for instructions.'
        )
      }
      
      if (error.message.includes('authentication') || error.message.includes('bad auth')) {
        throw new Error(
          'MongoDB authentication failed. Please check your username and password in the connection string.'
        )
      }
      
      if (error.message.includes('timeout')) {
        throw new Error(
          'Connection timeout. Please check your internet connection and MongoDB Atlas status.'
        )
      }
      
      throw error
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e: any) {
    cached.promise = null
    console.error('❌ Failed to establish MongoDB connection:', e.message)
    // Re-throw with better error message
    throw e
  }

  return cached.conn
}

export default connectDB

