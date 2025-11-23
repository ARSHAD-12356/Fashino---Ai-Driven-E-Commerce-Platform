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
  if (cached.conn && mongoose.connection.readyState === 1) {
    console.log('📦 Using existing MongoDB connection')
    return cached.conn
  }

  // Reset if connection is dead
  if (cached.conn && mongoose.connection.readyState === 0) {
    cached.conn = null
    cached.promise = null
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout
      socketTimeoutMS: 30000, // 30 seconds socket timeout
      maxPoolSize: 10,
      minPoolSize: 1,
      retryWrites: true,
      retryReads: true,
    }

    console.log('🔄 Attempting to connect to MongoDB Atlas...')
    
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB Connected Successfully!')
      console.log(`📊 Database: ${mongoose.connection.db?.databaseName || 'fashino'}`)
      return mongoose
    }).catch((error) => {
      console.error('❌ MongoDB Connection Error:', error.message)
      console.error('Full error:', error)
      
      // Clear the promise so we can retry
      cached.promise = null
      
      // Provide helpful error messages
      if (error.message.includes('IP') || error.message.includes('whitelist') || error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED') || error.message.includes('querySrv') || error.message.includes('MongoNetworkError')) {
        throw new Error(
          'Database connection failed. Your IP address may not be whitelisted in MongoDB Atlas.\n\n' +
          'Quick Fix:\n' +
          '1. Go to MongoDB Atlas → Security → Network Access\n' +
          '2. Click "Add IP Address" → "Add Current IP Address" (or use 0.0.0.0/0 for all IPs in development)\n' +
          '3. Wait 1-2 minutes for changes to propagate\n' +
          '4. Try again\n\n' +
          'Make sure your IP address is whitelisted in MongoDB Atlas Network Access settings.'
        )
      }
      
      if (error.message.includes('authentication') || error.message.includes('bad auth')) {
        throw new Error(
          'MongoDB authentication failed. Please check your username and password in the connection string.'
        )
      }
      
      if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        throw new Error(
          'Connection timeout. Please check your internet connection and MongoDB Atlas status. ' +
          'If the issue persists, verify your IP is whitelisted in MongoDB Atlas Network Access.'
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
