module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://arshuarshad1551_db_user:1Q4qtUxiXhuxUWx0@cluster0.iljaupv.mongodb.net/fashino?retryWrites=true&w=majority&appName=Cluster0';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
let cached = global.mongoose || {
    conn: null,
    promise: null
};
if (!global.mongoose) {
    global.mongoose = cached;
}
async function connectDB() {
    if (cached.conn) {
        console.log('📦 Using existing MongoDB connection');
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
            minPoolSize: 1
        };
        console.log('🔄 Attempting to connect to MongoDB Atlas...');
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log('✅ MongoDB Connected Successfully!');
            console.log(`📊 Database: ${mongoose.connection.db?.databaseName || 'fashino'}`);
            return mongoose;
        }).catch((error)=>{
            console.error('❌ MongoDB Connection Error:', error.message);
            console.error('Full error:', error);
            // Provide helpful error messages
            if (error.message.includes('IP') || error.message.includes('whitelist') || error.message.includes('ENOTFOUND')) {
                throw new Error('Could not connect to MongoDB Atlas. Your IP address may not be whitelisted. ' + 'Please add your IP address (or 0.0.0.0/0 for development) to MongoDB Atlas Network Access list. ' + 'See MONGODB_SETUP_GUIDE.md for instructions.');
            }
            if (error.message.includes('authentication') || error.message.includes('bad auth')) {
                throw new Error('MongoDB authentication failed. Please check your username and password in the connection string.');
            }
            if (error.message.includes('timeout')) {
                throw new Error('Connection timeout. Please check your internet connection and MongoDB Atlas status.');
            }
            throw error;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('❌ Failed to establish MongoDB connection:', e.message);
        // Re-throw with better error message
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectDB;
}),
"[project]/lib/models/Product.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const productSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    season: {
        type: String,
        default: 'All-Season'
    },
    stock: {
        type: Number,
        default: 0
    },
    inStock: {
        type: Boolean,
        default: true
    },
    sizes: {
        type: [
            String
        ],
        default: []
    },
    colors: {
        type: [
            String
        ],
        default: []
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Product || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Product', productSchema);
}),
"[project]/lib/products.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const allProducts = [
    // Men's T-Shirts
    {
        id: 1,
        name: 'Premium Essentials Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 2499,
        originalPrice: 3999,
        image: '/mens-premium-t-shirt.jpg',
        rating: 4.8,
        reviews: 124,
        description: 'Premium quality cotton t-shirt perfect for everyday wear',
        season: 'All-Season'
    },
    {
        id: 2,
        name: 'Classic White Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 1999,
        originalPrice: 3499,
        image: '/mens-white-tshirt.jpg',
        rating: 4.7,
        reviews: 98,
        description: 'Timeless white t-shirt for any occasion',
        season: 'All-Season'
    },
    {
        id: 3,
        name: 'Graphic Print Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 2799,
        originalPrice: 4499,
        image: '/mens-graphic-tshirt.jpg',
        rating: 4.6,
        reviews: 156,
        description: 'Stylish graphic printed t-shirt with modern design',
        season: 'All-Season'
    },
    {
        id: 4,
        name: 'Winter Thermal Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 3499,
        originalPrice: 5499,
        image: '/mens-winter-thermal-shirt.jpg',
        rating: 4.9,
        reviews: 203,
        description: 'Warm thermal t-shirt perfect for winter season',
        season: 'Winter'
    },
    {
        id: 5,
        name: 'Polo Neck Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 3199,
        originalPrice: 5199,
        image: '/mens-polo-tshirt.jpg',
        rating: 4.8,
        reviews: 167,
        description: 'Classic polo neck t-shirt in multiple colors',
        season: 'All-Season'
    },
    {
        id: 6,
        name: 'Striped Cotton Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 2299,
        originalPrice: 3999,
        image: '/mens-striped-tshirt.jpg',
        rating: 4.7,
        reviews: 134,
        description: 'Premium striped cotton t-shirt for casual wear',
        season: 'All-Season'
    },
    {
        id: 7,
        name: 'V-Neck Sports Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 2599,
        originalPrice: 4299,
        image: '/mens-vneck-sports-shirt.jpg',
        rating: 4.6,
        reviews: 89,
        description: 'Breathable v-neck sports t-shirt for fitness',
        season: 'All-Season'
    },
    {
        id: 8,
        name: 'Henley Thermal Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 3799,
        originalPrice: 5999,
        image: '/mens-henley-thermal-shirt.jpg',
        rating: 4.8,
        reviews: 176,
        description: 'Warm henley thermal shirt for winter',
        season: 'Winter'
    },
    {
        id: 9,
        name: 'Crew Neck Basics Tee',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 1799,
        originalPrice: 3199,
        image: '/mens-crew-neck-tshirt.jpg',
        rating: 4.7,
        reviews: 145,
        description: 'Simple and versatile crew neck t-shirt',
        season: 'All-Season'
    },
    {
        id: 10,
        name: 'Long Sleeve Thermal',
        category: 'Men',
        subcategory: 'T-Shirts',
        price: 3999,
        originalPrice: 6499,
        image: '/mens-long-sleeve-thermal.jpg',
        rating: 4.9,
        reviews: 198,
        description: 'Premium long sleeve thermal shirt for winter',
        season: 'Winter'
    },
    // Men's Shirts
    {
        id: 11,
        name: 'Casual Oxford Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 3499,
        originalPrice: 5999,
        image: '/mens-casual-oxford-shirt.jpg',
        rating: 4.6,
        reviews: 89,
        description: 'Classic oxford shirt for professional and casual settings',
        season: 'All-Season'
    },
    {
        id: 12,
        name: 'Formal White Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 4499,
        originalPrice: 7499,
        image: '/mens-formal-white-shirt.jpg',
        rating: 4.8,
        reviews: 134,
        description: 'Premium formal white shirt for business occasions',
        season: 'All-Season'
    },
    {
        id: 13,
        name: 'Linen Summer Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 3799,
        originalPrice: 6299,
        image: '/mens-linen-summer-shirt.jpg',
        rating: 4.7,
        reviews: 156,
        description: 'Lightweight linen shirt perfect for summer',
        season: 'All-Season'
    },
    {
        id: 14,
        name: 'Denim Casual Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 3299,
        originalPrice: 5799,
        image: '/mens-denim-shirt.jpg',
        rating: 4.7,
        reviews: 123,
        description: 'Stylish denim shirt for casual wear',
        season: 'All-Season'
    },
    {
        id: 15,
        name: 'Checkered Winter Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 4199,
        originalPrice: 6999,
        image: '/mens-checkered-winter-shirt.jpg',
        rating: 4.8,
        reviews: 167,
        description: 'Warm checkered shirt for winter season',
        season: 'Winter'
    },
    {
        id: 16,
        name: 'Solid Color Dress Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 3999,
        originalPrice: 6499,
        image: '/mens-dress-shirt.jpg',
        rating: 4.7,
        reviews: 145,
        description: 'Premium dress shirt in various colors',
        season: 'All-Season'
    },
    {
        id: 17,
        name: 'Flannel Winter Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 4599,
        originalPrice: 7499,
        image: '/mens-flannel-winter-shirt.jpg',
        rating: 4.9,
        reviews: 189,
        description: 'Cozy flannel shirt for cold weather',
        season: 'Winter'
    },
    {
        id: 18,
        name: 'Striped Business Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 4299,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Professional striped shirt for business',
        season: 'All-Season'
    },
    {
        id: 19,
        name: 'Corduroy Winter Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 4899,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 134,
        description: 'Textured corduroy shirt for winter wear',
        season: 'Winter'
    },
    {
        id: 20,
        name: 'Slim Fit Casual Shirt',
        category: 'Men',
        subcategory: 'Shirts',
        price: 3599,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 167,
        description: 'Modern slim fit casual shirt',
        season: 'All-Season'
    },
    // Men's Pants
    {
        id: 21,
        name: 'Comfort Fit Jeans',
        category: 'Men',
        subcategory: 'Pants',
        price: 3999,
        originalPrice: 6499,
        image: '/mens-comfort-fit-jeans.jpg',
        rating: 4.7,
        reviews: 156,
        description: 'Comfortable and stylish jeans for casual and formal occasions',
        season: 'All-Season'
    },
    {
        id: 22,
        name: 'Black Slim Fit Jeans',
        category: 'Men',
        subcategory: 'Pants',
        price: 3799,
        originalPrice: 6299,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 189,
        description: 'Sleek black slim fit jeans',
        season: 'All-Season'
    },
    {
        id: 23,
        name: 'Cargo Winter Pants',
        category: 'Men',
        subcategory: 'Pants',
        price: 4799,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Warm cargo pants for winter',
        season: 'Winter'
    },
    {
        id: 24,
        name: 'Navy Chino Pants',
        category: 'Men',
        subcategory: 'Pants',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 123,
        description: 'Classic navy chino pants for any occasion',
        season: 'All-Season'
    },
    {
        id: 25,
        name: 'Formal Black Trousers',
        category: 'Men',
        subcategory: 'Pants',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 178,
        description: 'Premium formal black trousers',
        season: 'All-Season'
    },
    {
        id: 26,
        name: 'Casual Grey Pants',
        category: 'Men',
        subcategory: 'Pants',
        price: 3299,
        originalPrice: 5799,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 156,
        description: 'Comfortable grey casual pants',
        season: 'All-Season'
    },
    {
        id: 27,
        name: 'Thermal Winter Trousers',
        category: 'Men',
        subcategory: 'Pants',
        price: 5299,
        originalPrice: 8499,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 167,
        description: 'Insulated thermal trousers for winter',
        season: 'Winter'
    },
    {
        id: 28,
        name: 'Light Blue Denim Jeans',
        category: 'Men',
        subcategory: 'Pants',
        price: 3599,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Classic light blue denim jeans',
        season: 'All-Season'
    },
    {
        id: 29,
        name: 'Woolen Winter Pants',
        category: 'Men',
        subcategory: 'Pants',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Premium woolen pants for cold weather',
        season: 'Winter'
    },
    {
        id: 30,
        name: 'Beige Chino Pants',
        category: 'Men',
        subcategory: 'Pants',
        price: 3699,
        originalPrice: 6199,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Versatile beige chino pants',
        season: 'All-Season'
    },
    // Men's Jackets
    {
        id: 31,
        name: 'Sports Performance Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 7999,
        originalPrice: 12999,
        image: '/mens-sports-jacket.jpg',
        rating: 4.9,
        reviews: 102,
        description: 'Lightweight and breathable sports jacket',
        season: 'All-Season'
    },
    {
        id: 32,
        name: 'Winter Puffer Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 9999,
        originalPrice: 15999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 187,
        description: 'Warm puffer jacket for extreme winter',
        season: 'Winter'
    },
    {
        id: 33,
        name: 'Denim Casual Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 5999,
        originalPrice: 9999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Classic denim jacket for everyday wear',
        season: 'All-Season'
    },
    {
        id: 34,
        name: 'Leather Biker Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 12999,
        originalPrice: 19999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 156,
        description: 'Premium leather biker jacket',
        season: 'All-Season'
    },
    {
        id: 35,
        name: 'Wool Winter Blazer',
        category: 'Men',
        subcategory: 'Jackets',
        price: 8999,
        originalPrice: 13999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Elegant wool blazer for winter',
        season: 'Winter'
    },
    {
        id: 36,
        name: 'Bomber Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 6999,
        originalPrice: 11999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Trendy bomber jacket for casual style',
        season: 'All-Season'
    },
    {
        id: 37,
        name: 'Quilted Winter Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 8499,
        originalPrice: 13499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Stylish quilted jacket for winter',
        season: 'Winter'
    },
    {
        id: 38,
        name: 'Windbreaker Jacket',
        category: 'Men',
        subcategory: 'Jackets',
        price: 5499,
        originalPrice: 8999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Lightweight windbreaker for outdoor activities',
        season: 'All-Season'
    },
    {
        id: 39,
        name: 'Formal Black Blazer',
        category: 'Men',
        subcategory: 'Jackets',
        price: 7499,
        originalPrice: 12499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Professional formal black blazer',
        season: 'All-Season'
    },
    {
        id: 40,
        name: 'Down Filled Winter Coat',
        category: 'Men',
        subcategory: 'Jackets',
        price: 11999,
        originalPrice: 18999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 178,
        description: 'Premium down-filled winter coat',
        season: 'Winter'
    },
    // Women's T-Shirts & Tops
    {
        id: 41,
        name: 'Floral Summer Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 2499,
        originalPrice: 4499,
        image: '/womens-floral-summer-top.jpg',
        rating: 4.7,
        reviews: 95,
        description: 'Beautiful floral printed top for summer',
        season: 'All-Season'
    },
    {
        id: 42,
        name: 'Winter Thermal Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 3699,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 134,
        description: 'Warm thermal top for winter',
        season: 'Winter'
    },
    {
        id: 43,
        name: 'Casual Tank Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 1799,
        originalPrice: 3199,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 89,
        description: 'Simple and versatile tank top',
        season: 'All-Season'
    },
    {
        id: 44,
        name: 'Silk Camisole',
        category: 'Women',
        subcategory: 'Tops',
        price: 3199,
        originalPrice: 5499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 123,
        description: 'Luxurious silk camisole',
        season: 'All-Season'
    },
    {
        id: 45,
        name: 'Striped Casual Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 2199,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 112,
        description: 'Classic striped casual top',
        season: 'All-Season'
    },
    {
        id: 46,
        name: 'Sweater Winter Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 4299,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Cozy sweater for winter',
        season: 'Winter'
    },
    {
        id: 47,
        name: 'Crop Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Trendy crop top for casual wear',
        season: 'All-Season'
    },
    {
        id: 48,
        name: 'Long Sleeve Thermal',
        category: 'Women',
        subcategory: 'Tops',
        price: 3999,
        originalPrice: 6499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Premium long sleeve thermal',
        season: 'Winter'
    },
    {
        id: 49,
        name: 'Lace Top',
        category: 'Women',
        subcategory: 'Tops',
        price: 2899,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Elegant lace top',
        season: 'All-Season'
    },
    {
        id: 50,
        name: 'Knit Winter Sweater',
        category: 'Women',
        subcategory: 'Tops',
        price: 4799,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 178,
        description: 'Warm knit sweater for winter',
        season: 'Winter'
    },
    // Women's Dresses
    {
        id: 51,
        name: 'Silk Evening Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 14999,
        originalPrice: 22499,
        image: '/womens-silk-evening-dress.jpg',
        rating: 5.0,
        reviews: 64,
        description: 'Luxurious silk dress for special occasions',
        season: 'All-Season'
    },
    {
        id: 52,
        name: 'Maxi Winter Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 7999,
        originalPrice: 12999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Elegant maxi dress for winter',
        season: 'Winter'
    },
    {
        id: 53,
        name: 'Casual Summer Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Light and breezy summer dress',
        season: 'All-Season'
    },
    {
        id: 54,
        name: 'Party Sequin Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 9999,
        originalPrice: 14999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 156,
        description: 'Glamorous sequin dress for parties',
        season: 'All-Season'
    },
    {
        id: 55,
        name: 'Formal Gown',
        category: 'Women',
        subcategory: 'Dresses',
        price: 16999,
        originalPrice: 24999,
        image: '/placeholder.svg',
        rating: 5.0,
        reviews: 89,
        description: 'Premium formal gown for special events',
        season: 'All-Season'
    },
    {
        id: 56,
        name: 'A-Line Winter Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 6999,
        originalPrice: 11499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 134,
        description: 'Stylish A-line dress for winter',
        season: 'Winter'
    },
    {
        id: 57,
        name: 'Shift Casual Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 3999,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Comfortable shift dress for casual occasions',
        season: 'All-Season'
    },
    {
        id: 58,
        name: 'Bodycon Winter Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 5999,
        originalPrice: 9999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Sexy bodycon dress for winter parties',
        season: 'Winter'
    },
    {
        id: 59,
        name: 'Wrap Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 5499,
        originalPrice: 8999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 128,
        description: 'Classic wrap dress for any occasion',
        season: 'All-Season'
    },
    {
        id: 60,
        name: 'Pleated Winter Dress',
        category: 'Women',
        subcategory: 'Dresses',
        price: 7499,
        originalPrice: 11999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Elegant pleated dress for winter',
        season: 'Winter'
    },
    // Women's Pants
    {
        id: 61,
        name: 'Fit Yoga Pants',
        category: 'Women',
        subcategory: 'Pants',
        price: 3999,
        originalPrice: 6499,
        image: '/womens-yoga-pants.jpg',
        rating: 4.8,
        reviews: 143,
        description: 'Comfortable and flexible yoga pants for fitness',
        season: 'All-Season'
    },
    {
        id: 62,
        name: 'Black Leggings',
        category: 'Women',
        subcategory: 'Pants',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 189,
        description: 'Versatile black leggings',
        season: 'All-Season'
    },
    {
        id: 63,
        name: 'Winter Thermal Leggings',
        category: 'Women',
        subcategory: 'Pants',
        price: 3699,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 156,
        description: 'Warm thermal leggings for winter',
        season: 'Winter'
    },
    {
        id: 64,
        name: 'Formal Black Trousers',
        category: 'Women',
        subcategory: 'Pants',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Professional formal trousers',
        season: 'All-Season'
    },
    {
        id: 65,
        name: 'Denim Jeans',
        category: 'Women',
        subcategory: 'Pants',
        price: 3899,
        originalPrice: 6499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 167,
        description: 'Stylish denim jeans for casual wear',
        season: 'All-Season'
    },
    {
        id: 66,
        name: 'Woolen Winter Pants',
        category: 'Women',
        subcategory: 'Pants',
        price: 4799,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Premium woolen pants for winter',
        season: 'Winter'
    },
    {
        id: 67,
        name: 'High Waist Pants',
        category: 'Women',
        subcategory: 'Pants',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Flattering high waist pants',
        season: 'All-Season'
    },
    {
        id: 68,
        name: 'Slim Fit Winter Trousers',
        category: 'Women',
        subcategory: 'Pants',
        price: 4599,
        originalPrice: 7499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 134,
        description: 'Elegant slim fit trousers for winter',
        season: 'Winter'
    },
    {
        id: 69,
        name: 'Khaki Chino Pants',
        category: 'Women',
        subcategory: 'Pants',
        price: 3299,
        originalPrice: 5799,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Classic khaki chino pants',
        season: 'All-Season'
    },
    {
        id: 70,
        name: 'Corduroy Winter Pants',
        category: 'Women',
        subcategory: 'Pants',
        price: 4399,
        originalPrice: 7199,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Textured corduroy pants for winter',
        season: 'Winter'
    },
    // Women's Blazers & Jackets
    {
        id: 71,
        name: 'Elegant Blazer',
        category: 'Women',
        subcategory: 'Blazers',
        price: 9499,
        originalPrice: 12499,
        image: '/womens-elegant-blazer.jpg',
        rating: 4.9,
        reviews: 87,
        description: 'Professional and elegant blazer for office and events',
        season: 'All-Season'
    },
    {
        id: 72,
        name: 'Winter Wool Blazer',
        category: 'Women',
        subcategory: 'Blazers',
        price: 10999,
        originalPrice: 14999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 134,
        description: 'Warm wool blazer for winter',
        season: 'Winter'
    },
    {
        id: 73,
        name: 'Casual Blazer',
        category: 'Women',
        subcategory: 'Blazers',
        price: 7999,
        originalPrice: 11999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 112,
        description: 'Casual blazer for everyday wear',
        season: 'All-Season'
    },
    {
        id: 74,
        name: 'Formal Black Blazer',
        category: 'Women',
        subcategory: 'Blazers',
        price: 11999,
        originalPrice: 16999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 145,
        description: 'Premium formal black blazer',
        season: 'All-Season'
    },
    {
        id: 75,
        name: 'Quilted Winter Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 8999,
        originalPrice: 13999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Stylish quilted jacket for winter',
        season: 'Winter'
    },
    {
        id: 76,
        name: 'Leather Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 14999,
        originalPrice: 21999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 189,
        description: 'Premium leather jacket',
        season: 'All-Season'
    },
    {
        id: 77,
        name: 'Denim Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 6999,
        originalPrice: 10999,
        image: '/womens-denim-jacket.jpg',
        rating: 4.8,
        reviews: 112,
        description: 'Classic and timeless denim jacket',
        season: 'All-Season'
    },
    {
        id: 78,
        name: 'Puffer Winter Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 10999,
        originalPrice: 16999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 178,
        description: 'Warm puffer jacket for extreme winter',
        season: 'Winter'
    },
    {
        id: 79,
        name: 'Bomber Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 7499,
        originalPrice: 12499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Trendy bomber jacket',
        season: 'All-Season'
    },
    {
        id: 80,
        name: 'Cardigan Winter Coat',
        category: 'Women',
        subcategory: 'Blazers',
        price: 6499,
        originalPrice: 10499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Cozy cardigan for winter',
        season: 'Winter'
    },
    // Kids T-Shirts
    {
        id: 81,
        name: 'Kids Colorful T-Shirt',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1499,
        originalPrice: 2499,
        image: '/kids-colorful-t-shirt.jpg',
        rating: 4.6,
        reviews: 78,
        description: 'Bright and colorful t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 82,
        name: 'Kids Winter Thermal Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 2299,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 123,
        description: 'Warm thermal t-shirt for kids in winter',
        season: 'Winter'
    },
    {
        id: 83,
        name: 'Cartoon Print Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1799,
        originalPrice: 3199,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 156,
        description: 'Fun cartoon printed t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 84,
        name: 'Solid Color Kids Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1299,
        originalPrice: 2299,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 89,
        description: 'Simple solid color t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 85,
        name: 'Striped Kids Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1599,
        originalPrice: 2899,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 112,
        description: 'Striped t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 86,
        name: 'Kids Long Sleeve Thermal',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 2499,
        originalPrice: 4299,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 134,
        description: 'Warm long sleeve thermal for kids',
        season: 'Winter'
    },
    {
        id: 87,
        name: 'V-Neck Kids Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1699,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Stylish v-neck t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 88,
        name: 'Henley Kids Thermal',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 2599,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Cozy henley thermal for kids in winter',
        season: 'Winter'
    },
    {
        id: 89,
        name: 'Graphic Kids Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1899,
        originalPrice: 3299,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 167,
        description: 'Cool graphic printed t-shirt for kids',
        season: 'All-Season'
    },
    {
        id: 90,
        name: 'Kids Crew Neck Tee',
        category: 'Kids',
        subcategory: 'T-Shirts',
        price: 1399,
        originalPrice: 2599,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Classic crew neck t-shirt for kids',
        season: 'All-Season'
    },
    // Kids Shorts & Pants
    {
        id: 91,
        name: 'Kids Comfort Shorts',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1299,
        originalPrice: 2299,
        image: '/kids-comfort-shorts.jpg',
        rating: 4.5,
        reviews: 63,
        description: 'Comfortable shorts with elastic waist',
        season: 'All-Season'
    },
    {
        id: 92,
        name: 'Kids Winter Thermal Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 2199,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Warm thermal pants for kids in winter',
        season: 'Winter'
    },
    {
        id: 93,
        name: 'Kids Denim Shorts',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1599,
        originalPrice: 2899,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Stylish denim shorts for kids',
        season: 'All-Season'
    },
    {
        id: 94,
        name: 'Kids Cotton Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1799,
        originalPrice: 3199,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 112,
        description: 'Comfortable cotton pants for kids',
        season: 'All-Season'
    },
    {
        id: 95,
        name: 'Kids Woolen Winter Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 2599,
        originalPrice: 4299,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Premium woolen pants for kids in winter',
        season: 'Winter'
    },
    {
        id: 96,
        name: 'Kids Cargo Shorts',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1699,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 89,
        description: 'Durable cargo shorts for kids',
        season: 'All-Season'
    },
    {
        id: 97,
        name: 'Kids Chino Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1899,
        originalPrice: 3399,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Smart chino pants for kids',
        season: 'All-Season'
    },
    {
        id: 98,
        name: 'Kids Fleece Winter Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 2299,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 156,
        description: 'Soft fleece pants for kids in winter',
        season: 'Winter'
    },
    {
        id: 99,
        name: 'Kids Sporty Shorts',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1499,
        originalPrice: 2699,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 101,
        description: 'Comfortable sporty shorts for active kids',
        season: 'All-Season'
    },
    {
        id: 100,
        name: 'Kids Jogger Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 1999,
        originalPrice: 3599,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Trendy jogger pants for kids',
        season: 'All-Season'
    },
    // Kids Hoodies & Jackets
    {
        id: 101,
        name: 'Kids Sports Jersey',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 1999,
        originalPrice: 3499,
        image: '/kids-sports-jersey.jpg',
        rating: 4.7,
        reviews: 91,
        description: 'Breathable sports jersey for active kids',
        season: 'All-Season'
    },
    {
        id: 102,
        name: 'Kids Casual Hoodie',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 2499,
        originalPrice: 4499,
        image: '/kids-casual-hoodie.jpg',
        rating: 4.8,
        reviews: 74,
        description: 'Warm and cozy hoodie for kids',
        season: 'All-Season'
    },
    {
        id: 103,
        name: 'Kids Winter Puffer Jacket',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Warm puffer jacket for kids in winter',
        season: 'Winter'
    },
    {
        id: 104,
        name: 'Kids Denim Jacket',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Classic denim jacket for kids',
        season: 'All-Season'
    },
    {
        id: 105,
        name: 'Kids Fleece Hoodie',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 2799,
        originalPrice: 4699,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Soft fleece hoodie for kids',
        season: 'All-Season'
    },
    {
        id: 106,
        name: 'Kids Winter Coat',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 5499,
        originalPrice: 8999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Stylish winter coat for kids',
        season: 'Winter'
    },
    {
        id: 107,
        name: 'Kids Windbreaker Jacket',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Lightweight windbreaker for kids',
        season: 'All-Season'
    },
    {
        id: 108,
        name: 'Kids Wool Winter Sweater',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 3699,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Warm wool sweater for kids in winter',
        season: 'Winter'
    },
    {
        id: 109,
        name: 'Kids Bomber Jacket',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 3199,
        originalPrice: 5499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Trendy bomber jacket for kids',
        season: 'All-Season'
    },
    {
        id: 110,
        name: 'Kids Quilted Vest',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 2699,
        originalPrice: 4399,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 89,
        description: 'Stylish quilted vest for kids',
        season: 'Winter'
    },
    // Accessories - Bags
    {
        id: 111,
        name: 'Leather Crossbody Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 5999,
        originalPrice: 8999,
        image: '/leather-crossbody-bag.jpg',
        rating: 4.8,
        reviews: 156,
        description: 'Premium leather crossbody bag with adjustable strap',
        season: 'All-Season'
    },
    {
        id: 112,
        name: 'Shoulder Tote Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Spacious shoulder tote bag',
        season: 'All-Season'
    },
    {
        id: 113,
        name: 'Backpack Winter',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 4499,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Durable backpack for winter travels',
        season: 'Winter'
    },
    {
        id: 114,
        name: 'Clutch Purse',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Elegant clutch purse',
        season: 'All-Season'
    },
    {
        id: 115,
        name: 'Messenger Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 5499,
        originalPrice: 8499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Professional messenger bag',
        season: 'All-Season'
    },
    {
        id: 116,
        name: 'Weekend Travel Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 6999,
        originalPrice: 10999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Spacious travel bag for weekends',
        season: 'All-Season'
    },
    {
        id: 117,
        name: 'Laptop Backpack',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 5999,
        originalPrice: 8999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 156,
        description: 'Protective laptop backpack',
        season: 'All-Season'
    },
    {
        id: 118,
        name: 'Hobo Shoulder Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 4699,
        originalPrice: 7299,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Trendy hobo style shoulder bag',
        season: 'All-Season'
    },
    {
        id: 119,
        name: 'Sling Bag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 3499,
        originalPrice: 5499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Compact sling bag for daily use',
        season: 'All-Season'
    },
    {
        id: 120,
        name: 'Winter Leather Handbag',
        category: 'Accessories',
        subcategory: 'Bags',
        price: 8999,
        originalPrice: 12999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Luxurious leather handbag',
        season: 'Winter'
    },
    // Accessories - Eyewear
    {
        id: 121,
        name: 'Classic Sunglasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 2999,
        originalPrice: 4999,
        image: '/classic-sunglasses.jpg',
        rating: 4.7,
        reviews: 203,
        description: 'UV protective classic sunglasses',
        season: 'All-Season'
    },
    {
        id: 122,
        name: 'Aviator Sunglasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Stylish aviator sunglasses',
        season: 'All-Season'
    },
    {
        id: 123,
        name: 'Winter Reading Glasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 2199,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 89,
        description: 'Comfortable reading glasses',
        season: 'All-Season'
    },
    {
        id: 124,
        name: 'Cat Eye Sunglasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 3299,
        originalPrice: 5599,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Trendy cat eye sunglasses',
        season: 'All-Season'
    },
    {
        id: 125,
        name: 'Wayfarer Style Glasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 3199,
        originalPrice: 5399,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 156,
        description: 'Classic wayfarer style glasses',
        season: 'All-Season'
    },
    {
        id: 126,
        name: 'Oversized Sunglasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 3799,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Chic oversized sunglasses',
        season: 'All-Season'
    },
    {
        id: 127,
        name: 'Blue Light Glasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 2799,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Blue light protection glasses',
        season: 'All-Season'
    },
    {
        id: 128,
        name: 'Polarized Sunglasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 4299,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Polarized sunglasses for outdoor',
        season: 'All-Season'
    },
    {
        id: 129,
        name: 'Sporty Glasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 3599,
        originalPrice: 5799,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Sporty style glasses',
        season: 'All-Season'
    },
    {
        id: 130,
        name: 'Retro Round Glasses',
        category: 'Accessories',
        subcategory: 'Eyewear',
        price: 2899,
        originalPrice: 4799,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Vintage retro round glasses',
        season: 'All-Season'
    },
    // Accessories - Scarves & Belts
    {
        id: 131,
        name: 'Silk Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1999,
        originalPrice: 3499,
        image: '/silk-scarf.jpg',
        rating: 4.6,
        reviews: 87,
        description: 'Luxurious silk scarf in multiple colors',
        season: 'All-Season'
    },
    {
        id: 132,
        name: 'Winter Wool Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 2499,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Warm wool scarf for winter',
        season: 'Winter'
    },
    {
        id: 133,
        name: 'Premium Leather Belt',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 2499,
        originalPrice: 4499,
        image: '/premium-leather-belt.jpg',
        rating: 4.8,
        reviews: 134,
        description: 'Durable leather belt suitable for any occasion',
        season: 'All-Season'
    },
    {
        id: 134,
        name: 'Cashmere Winter Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 167,
        description: 'Premium cashmere scarf for winter',
        season: 'Winter'
    },
    {
        id: 135,
        name: 'Fabric Canvas Belt',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Casual fabric canvas belt',
        season: 'All-Season'
    },
    {
        id: 136,
        name: 'Cotton Printed Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1699,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Colorful cotton printed scarf',
        season: 'All-Season'
    },
    {
        id: 137,
        name: 'Metal Buckle Belt',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Stylish metal buckle belt',
        season: 'All-Season'
    },
    {
        id: 138,
        name: 'Pashmina Winter Shawl',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 3999,
        originalPrice: 6499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 156,
        description: 'Luxurious pashmina shawl for winter',
        season: 'Winter'
    },
    {
        id: 139,
        name: 'Linen Summer Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1499,
        originalPrice: 2699,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Light linen scarf for summer',
        season: 'All-Season'
    },
    {
        id: 140,
        name: 'Designer Leather Belt',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Premium designer leather belt',
        season: 'All-Season'
    },
    // Women's Extended Collections
    {
        id: 141,
        name: 'Alpine Wool Overcoat',
        category: 'Women',
        subcategory: 'Outerwear',
        price: 12999,
        originalPrice: 18999,
        image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 132,
        description: 'Longline double-breasted coat with cashmere blend lining',
        season: 'Winter'
    },
    {
        id: 142,
        name: 'City Trench Coat',
        category: 'Women',
        subcategory: 'Outerwear',
        price: 9999,
        originalPrice: 14999,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 118,
        description: 'Water-repellent trench with storm flap and belt detail',
        season: 'All-Season'
    },
    {
        id: 143,
        name: 'Pleated Midi Skirt',
        category: 'Women',
        subcategory: 'Skirts',
        price: 4599,
        originalPrice: 7299,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 164,
        description: 'Sunray pleated satin midi with elastic waist',
        season: 'All-Season'
    },
    {
        id: 144,
        name: 'Textured Knit Skirt',
        category: 'Women',
        subcategory: 'Skirts',
        price: 3899,
        originalPrice: 6299,
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        reviews: 121,
        description: 'Figure-hugging knit skirt with ribbed hem',
        season: 'Winter'
    },
    {
        id: 145,
        name: 'Embroidered Anarkali Set',
        category: 'Women',
        subcategory: 'Ethnic Wear',
        price: 16999,
        originalPrice: 24999,
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
        rating: 5.0,
        reviews: 77,
        description: 'Hand-embroidered floor-length anarkali with dupatta',
        season: 'Festive'
    },
    {
        id: 146,
        name: 'Silk Kurta Ensemble',
        category: 'Women',
        subcategory: 'Ethnic Wear',
        price: 11999,
        originalPrice: 17999,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 93,
        description: 'Pure silk kurta set with zari highlights',
        season: 'Festive'
    },
    {
        id: 147,
        name: 'Seamless Yoga Set',
        category: 'Women',
        subcategory: 'Activewear',
        price: 4999,
        originalPrice: 7999,
        image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 208,
        description: 'Second-skin seamless top and leggings set',
        season: 'All-Season'
    },
    {
        id: 148,
        name: 'Performance Running Jacket',
        category: 'Women',
        subcategory: 'Activewear',
        price: 6499,
        originalPrice: 9999,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 131,
        description: 'Lightweight reflective shell with breathable mesh panels',
        season: 'All-Season'
    },
    {
        id: 149,
        name: 'Cashmere Lounge Set',
        category: 'Women',
        subcategory: 'Loungewear',
        price: 8999,
        originalPrice: 13999,
        image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 142,
        description: 'Relaxed-fit cashmere hoodie and jogger pairing',
        season: 'Winter'
    },
    {
        id: 150,
        name: 'Ribbed Lounge Dress',
        category: 'Women',
        subcategory: 'Loungewear',
        price: 5299,
        originalPrice: 8499,
        image: 'https://images.unsplash.com/photo-1500631195312-e3a9a5819f60?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 109,
        description: 'Ankle-length ribbed lounge dress with side slits',
        season: 'All-Season'
    },
    {
        id: 151,
        name: 'Monochrome Co-ord Suit',
        category: 'Women',
        subcategory: 'Co-ords',
        price: 10499,
        originalPrice: 15999,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 126,
        description: 'Structured blazer and tailored trouser co-ord',
        season: 'All-Season'
    },
    {
        id: 152,
        name: 'Tailored Knit Co-ord',
        category: 'Women',
        subcategory: 'Co-ords',
        price: 7499,
        originalPrice: 11499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 138,
        description: 'Soft knit polo and midi skirt pairing with contrast trims',
        season: 'All-Season'
    },
    // Additional Winter Products - Women
    {
        id: 153,
        name: 'Women Winter Wool Coat',
        category: 'Women',
        subcategory: 'Outerwear',
        price: 12999,
        originalPrice: 18999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 145,
        description: 'Luxurious wool coat for winter elegance',
        season: 'Winter'
    },
    {
        id: 154,
        name: 'Women Thermal Leggings',
        category: 'Women',
        subcategory: 'Pants',
        price: 3699,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Warm thermal leggings for winter',
        season: 'Winter'
    },
    {
        id: 155,
        name: 'Women Winter Sweater',
        category: 'Women',
        subcategory: 'Tops',
        price: 4799,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 178,
        description: 'Cozy winter sweater for women',
        season: 'Winter'
    },
    {
        id: 156,
        name: 'Women Puffer Jacket',
        category: 'Women',
        subcategory: 'Blazers',
        price: 10999,
        originalPrice: 16999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 198,
        description: 'Warm puffer jacket for extreme winter',
        season: 'Winter'
    },
    // Additional Winter Products - Kids
    {
        id: 157,
        name: 'Kids Winter Puffer Jacket',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Warm puffer jacket for kids in winter',
        season: 'Winter'
    },
    {
        id: 158,
        name: 'Kids Winter Thermal Pants',
        category: 'Kids',
        subcategory: 'Shorts & Pants',
        price: 2199,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Warm thermal pants for kids in winter',
        season: 'Winter'
    },
    {
        id: 159,
        name: 'Kids Wool Winter Sweater',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 3699,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Warm wool sweater for kids in winter',
        season: 'Winter'
    },
    {
        id: 160,
        name: 'Kids Winter Coat',
        category: 'Kids',
        subcategory: 'Hoodies & Jackets',
        price: 5499,
        originalPrice: 8999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Stylish winter coat for kids',
        season: 'Winter'
    },
    // Additional Winter Products - Accessories
    {
        id: 161,
        name: 'Winter Wool Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 2499,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 145,
        description: 'Warm wool scarf for winter',
        season: 'Winter'
    },
    {
        id: 162,
        name: 'Cashmere Winter Scarf',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 167,
        description: 'Premium cashmere scarf for winter',
        season: 'Winter'
    },
    {
        id: 163,
        name: 'Winter Leather Gloves',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 123,
        description: 'Warm leather gloves for winter',
        season: 'Winter'
    },
    {
        id: 164,
        name: 'Winter Beanie Hat',
        category: 'Accessories',
        subcategory: 'Scarves & Belts',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 98,
        description: 'Warm beanie hat for winter',
        season: 'Winter'
    },
    // Footwear
    {
        id: 201,
        name: 'Men Casual Sneakers',
        category: 'Footwear',
        subcategory: 'Sneakers',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 234,
        description: 'Comfortable casual sneakers for everyday wear',
        season: 'All-Season'
    },
    {
        id: 202,
        name: 'Women Running Shoes',
        category: 'Footwear',
        subcategory: 'Sports Shoes',
        price: 4499,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 189,
        description: 'Premium running shoes with cushioning',
        season: 'All-Season'
    },
    {
        id: 203,
        name: 'Men Formal Leather Shoes',
        category: 'Footwear',
        subcategory: 'Formal Shoes',
        price: 5999,
        originalPrice: 9999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 156,
        description: 'Classic leather formal shoes',
        season: 'All-Season'
    },
    {
        id: 204,
        name: 'Women High Heels',
        category: 'Footwear',
        subcategory: 'Heels',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 198,
        description: 'Elegant high heels for special occasions',
        season: 'All-Season'
    },
    {
        id: 205,
        name: 'Kids Sports Shoes',
        category: 'Footwear',
        subcategory: 'Kids Shoes',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Durable sports shoes for kids',
        season: 'All-Season'
    },
    {
        id: 206,
        name: 'Men Winter Boots',
        category: 'Footwear',
        subcategory: 'Boots',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 167,
        description: 'Warm winter boots with insulation',
        season: 'Winter'
    },
    {
        id: 207,
        name: 'Women Sandals',
        category: 'Footwear',
        subcategory: 'Sandals',
        price: 2499,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 123,
        description: 'Comfortable summer sandals',
        season: 'All-Season'
    },
    {
        id: 208,
        name: 'Men Canvas Shoes',
        category: 'Footwear',
        subcategory: 'Casual Shoes',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 178,
        description: 'Lightweight canvas shoes',
        season: 'All-Season'
    },
    {
        id: 209,
        name: 'Women Ballet Flats',
        category: 'Footwear',
        subcategory: 'Flats',
        price: 2199,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 134,
        description: 'Classic ballet flats for comfort',
        season: 'All-Season'
    },
    {
        id: 210,
        name: 'Kids School Shoes',
        category: 'Footwear',
        subcategory: 'Kids Shoes',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 112,
        description: 'Durable school shoes for kids',
        season: 'All-Season'
    },
    // Electronics
    {
        id: 301,
        name: 'Smart Watch Pro',
        category: 'Electronics',
        subcategory: 'Smart Watches',
        price: 12999,
        originalPrice: 19999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 456,
        description: 'Advanced smartwatch with health tracking',
        season: 'All-Season'
    },
    {
        id: 302,
        name: 'Wireless Earbuds',
        category: 'Electronics',
        subcategory: 'Audio',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 678,
        description: 'Premium wireless earbuds with noise cancellation',
        season: 'All-Season'
    },
    {
        id: 303,
        name: 'Fitness Tracker',
        category: 'Electronics',
        subcategory: 'Wearables',
        price: 3999,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 345,
        description: 'Advanced fitness tracking device',
        season: 'All-Season'
    },
    {
        id: 304,
        name: 'Smart Band',
        category: 'Electronics',
        subcategory: 'Wearables',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 567,
        description: 'Affordable smart band with essential features',
        season: 'All-Season'
    },
    {
        id: 305,
        name: 'Bluetooth Headphones',
        category: 'Electronics',
        subcategory: 'Audio',
        price: 4499,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 234,
        description: 'Over-ear Bluetooth headphones',
        season: 'All-Season'
    },
    {
        id: 306,
        name: 'Smart Ring',
        category: 'Electronics',
        subcategory: 'Wearables',
        price: 8999,
        originalPrice: 14999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 189,
        description: 'Fashionable smart ring with health tracking',
        season: 'All-Season'
    },
    {
        id: 307,
        name: 'Wireless Speaker',
        category: 'Electronics',
        subcategory: 'Audio',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 278,
        description: 'Portable wireless speaker',
        season: 'All-Season'
    },
    {
        id: 308,
        name: 'Smart Watch Classic',
        category: 'Electronics',
        subcategory: 'Smart Watches',
        price: 8999,
        originalPrice: 14999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 312,
        description: 'Classic design smartwatch',
        season: 'All-Season'
    },
    {
        id: 309,
        name: 'Gaming Earbuds',
        category: 'Electronics',
        subcategory: 'Audio',
        price: 2499,
        originalPrice: 4499,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 145,
        description: 'Low latency gaming earbuds',
        season: 'All-Season'
    },
    {
        id: 310,
        name: 'Smart Watch Sport',
        category: 'Electronics',
        subcategory: 'Smart Watches',
        price: 10999,
        originalPrice: 17999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 423,
        description: 'Sports-focused smartwatch',
        season: 'All-Season'
    },
    // Beauty & Grooming
    {
        id: 401,
        name: 'Men Grooming Kit',
        category: 'Beauty',
        subcategory: 'Grooming',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 234,
        description: 'Complete grooming kit for men',
        season: 'All-Season'
    },
    {
        id: 402,
        name: 'Face Moisturizer',
        category: 'Beauty',
        subcategory: 'Skincare',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 456,
        description: 'Hydrating face moisturizer',
        season: 'All-Season'
    },
    {
        id: 403,
        name: 'Hair Styling Gel',
        category: 'Beauty',
        subcategory: 'Hair Care',
        price: 599,
        originalPrice: 999,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 567,
        description: 'Strong hold hair styling gel',
        season: 'All-Season'
    },
    {
        id: 404,
        name: 'Perfume Set',
        category: 'Beauty',
        subcategory: 'Fragrance',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 345,
        description: 'Premium perfume collection',
        season: 'All-Season'
    },
    {
        id: 405,
        name: 'Shaving Kit',
        category: 'Beauty',
        subcategory: 'Grooming',
        price: 2499,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 278,
        description: 'Complete shaving kit',
        season: 'All-Season'
    },
    {
        id: 406,
        name: 'Face Cleanser',
        category: 'Beauty',
        subcategory: 'Skincare',
        price: 899,
        originalPrice: 1499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 412,
        description: 'Gentle face cleanser',
        season: 'All-Season'
    },
    {
        id: 407,
        name: 'Hair Shampoo',
        category: 'Beauty',
        subcategory: 'Hair Care',
        price: 799,
        originalPrice: 1299,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 389,
        description: 'Nourishing hair shampoo',
        season: 'All-Season'
    },
    {
        id: 408,
        name: 'Body Lotion',
        category: 'Beauty',
        subcategory: 'Skincare',
        price: 699,
        originalPrice: 1199,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 523,
        description: 'Moisturizing body lotion',
        season: 'All-Season'
    },
    {
        id: 409,
        name: 'Cologne Spray',
        category: 'Beauty',
        subcategory: 'Fragrance',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 267,
        description: 'Long-lasting cologne spray',
        season: 'All-Season'
    },
    {
        id: 410,
        name: 'Beard Oil',
        category: 'Beauty',
        subcategory: 'Grooming',
        price: 999,
        originalPrice: 1799,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 189,
        description: 'Nourishing beard oil',
        season: 'All-Season'
    },
    // Home & Living
    {
        id: 501,
        name: 'Cotton Bed Sheets',
        category: 'Home',
        subcategory: 'Bedding',
        price: 2499,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 234,
        description: 'Premium cotton bed sheets set',
        season: 'All-Season'
    },
    {
        id: 502,
        name: 'Decorative Cushions',
        category: 'Home',
        subcategory: 'Decor',
        price: 899,
        originalPrice: 1499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 456,
        description: 'Set of decorative cushions',
        season: 'All-Season'
    },
    {
        id: 503,
        name: 'Table Lamp',
        category: 'Home',
        subcategory: 'Lighting',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 189,
        description: 'Modern table lamp',
        season: 'All-Season'
    },
    {
        id: 504,
        name: 'Wall Clock',
        category: 'Home',
        subcategory: 'Decor',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 278,
        description: 'Elegant wall clock',
        season: 'All-Season'
    },
    {
        id: 505,
        name: 'Curtains Set',
        category: 'Home',
        subcategory: 'Furnishing',
        price: 3999,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Premium curtains set',
        season: 'All-Season'
    },
    {
        id: 506,
        name: 'Throw Blanket',
        category: 'Home',
        subcategory: 'Bedding',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 312,
        description: 'Cozy throw blanket',
        season: 'Winter'
    },
    {
        id: 507,
        name: 'Photo Frame Set',
        category: 'Home',
        subcategory: 'Decor',
        price: 1299,
        originalPrice: 2199,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 167,
        description: 'Set of decorative photo frames',
        season: 'All-Season'
    },
    {
        id: 508,
        name: 'Rug Carpet',
        category: 'Home',
        subcategory: 'Furnishing',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 234,
        description: 'Premium area rug',
        season: 'All-Season'
    },
    {
        id: 509,
        name: 'Pillow Set',
        category: 'Home',
        subcategory: 'Bedding',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 289,
        description: 'Comfortable pillow set',
        season: 'All-Season'
    },
    {
        id: 510,
        name: 'Vase Set',
        category: 'Home',
        subcategory: 'Decor',
        price: 999,
        originalPrice: 1799,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 156,
        description: 'Decorative vase set',
        season: 'All-Season'
    },
    // Sportswear
    {
        id: 601,
        name: 'Men Sports T-Shirt',
        category: 'Sportswear',
        subcategory: 'Tops',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 345,
        description: 'Breathable sports t-shirt',
        season: 'All-Season'
    },
    {
        id: 602,
        name: 'Women Yoga Pants',
        category: 'Sportswear',
        subcategory: 'Bottoms',
        price: 1999,
        originalPrice: 3499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 456,
        description: 'Flexible yoga pants',
        season: 'All-Season'
    },
    {
        id: 603,
        name: 'Men Track Pants',
        category: 'Sportswear',
        subcategory: 'Bottoms',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 234,
        description: 'Comfortable track pants',
        season: 'All-Season'
    },
    {
        id: 604,
        name: 'Sports Jacket',
        category: 'Sportswear',
        subcategory: 'Outerwear',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 189,
        description: 'Lightweight sports jacket',
        season: 'All-Season'
    },
    {
        id: 605,
        name: 'Women Sports Bra',
        category: 'Sportswear',
        subcategory: 'Tops',
        price: 1299,
        originalPrice: 2199,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 567,
        description: 'Supportive sports bra',
        season: 'All-Season'
    },
    {
        id: 606,
        name: 'Men Gym Shorts',
        category: 'Sportswear',
        subcategory: 'Bottoms',
        price: 999,
        originalPrice: 1799,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 278,
        description: 'Comfortable gym shorts',
        season: 'All-Season'
    },
    {
        id: 607,
        name: 'Sports Hoodie',
        category: 'Sportswear',
        subcategory: 'Outerwear',
        price: 2499,
        originalPrice: 3999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 312,
        description: 'Warm sports hoodie',
        season: 'Winter'
    },
    {
        id: 608,
        name: 'Women Running Shorts',
        category: 'Sportswear',
        subcategory: 'Bottoms',
        price: 1199,
        originalPrice: 1999,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 145,
        description: 'Lightweight running shorts',
        season: 'All-Season'
    },
    {
        id: 609,
        name: 'Men Compression Shirt',
        category: 'Sportswear',
        subcategory: 'Tops',
        price: 1799,
        originalPrice: 2999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 423,
        description: 'Performance compression shirt',
        season: 'All-Season'
    },
    {
        id: 610,
        name: 'Sports Cap',
        category: 'Sportswear',
        subcategory: 'Accessories',
        price: 699,
        originalPrice: 1199,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 267,
        description: 'UV protection sports cap',
        season: 'All-Season'
    },
    // Ethnic Wear
    {
        id: 701,
        name: 'Men Kurta',
        category: 'Ethnic',
        subcategory: 'Kurtas',
        price: 2999,
        originalPrice: 4999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 234,
        description: 'Traditional men kurta',
        season: 'All-Season'
    },
    {
        id: 702,
        name: 'Women Saree',
        category: 'Ethnic',
        subcategory: 'Sarees',
        price: 4999,
        originalPrice: 7999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 456,
        description: 'Elegant silk saree',
        season: 'All-Season'
    },
    {
        id: 703,
        name: 'Men Sherwani',
        category: 'Ethnic',
        subcategory: 'Sherwanis',
        price: 8999,
        originalPrice: 14999,
        image: '/placeholder.svg',
        rating: 4.9,
        reviews: 189,
        description: 'Premium sherwani for special occasions',
        season: 'All-Season'
    },
    {
        id: 704,
        name: 'Women Lehenga',
        category: 'Ethnic',
        subcategory: 'Lehengas',
        price: 7999,
        originalPrice: 12999,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 345,
        description: 'Beautiful lehenga choli',
        season: 'All-Season'
    },
    {
        id: 705,
        name: 'Men Dhoti',
        category: 'Ethnic',
        subcategory: 'Dhotis',
        price: 1499,
        originalPrice: 2499,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 167,
        description: 'Traditional dhoti',
        season: 'All-Season'
    },
    {
        id: 706,
        name: 'Women Salwar Kameez',
        category: 'Ethnic',
        subcategory: 'Salwar Suits',
        price: 3499,
        originalPrice: 5999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 278,
        description: 'Elegant salwar kameez',
        season: 'All-Season'
    },
    {
        id: 707,
        name: 'Men Pathani Suit',
        category: 'Ethnic',
        subcategory: 'Pathanis',
        price: 3999,
        originalPrice: 6999,
        image: '/placeholder.svg',
        rating: 4.7,
        reviews: 145,
        description: 'Stylish pathani suit',
        season: 'All-Season'
    },
    {
        id: 708,
        name: 'Women Anarkali',
        category: 'Ethnic',
        subcategory: 'Anarkalis',
        price: 4499,
        originalPrice: 7499,
        image: '/placeholder.svg',
        rating: 4.8,
        reviews: 312,
        description: 'Beautiful anarkali suit',
        season: 'All-Season'
    },
    {
        id: 709,
        name: 'Men Waistcoat',
        category: 'Ethnic',
        subcategory: 'Waistcoats',
        price: 2499,
        originalPrice: 4299,
        image: '/placeholder.svg',
        rating: 4.6,
        reviews: 189,
        description: 'Traditional waistcoat',
        season: 'All-Season'
    },
    {
        id: 710,
        name: 'Women Dupatta',
        category: 'Ethnic',
        subcategory: 'Dupattas',
        price: 999,
        originalPrice: 1799,
        image: '/placeholder.svg',
        rating: 4.5,
        reviews: 234,
        description: 'Elegant dupatta',
        season: 'All-Season'
    }
];
const products = allProducts.map((product, index)=>({
        ...product,
        stock: product.stock ?? 40 + index % 12 * 5
    }));
}),
"[project]/app/api/products/sync/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Product.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        let created = 0;
        let updated = 0;
        let errors = 0;
        const errorsList = [];
        for (const product of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"]){
            try {
                // Find existing product by name and category
                const existingProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    name: product.name,
                    category: product.category
                });
                if (existingProduct) {
                    // Update existing product
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(existingProduct._id, {
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
                        stock: product.stock || 40 + product.id % 12 * 5,
                        inStock: product.inStock !== undefined ? product.inStock : true,
                        sizes: product.sizes || [],
                        colors: product.colors || []
                    });
                    updated++;
                } else {
                    // Create new product
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
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
                        stock: product.stock || 40 + product.id % 12 * 5,
                        inStock: product.inStock !== undefined ? product.inStock : true,
                        sizes: product.sizes || [],
                        colors: product.colors || []
                    });
                    created++;
                }
            } catch (error) {
                console.error(`Error syncing product ${product.name}:`, error);
                errors++;
                errorsList.push(`${product.name}: ${error.message}`);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Products synced successfully',
            created,
            updated,
            errors,
            total: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"].length,
            errorsList: errorsList.slice(0, 10)
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Sync error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Failed to sync products'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const productCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Product sync status',
            totalInDB: productCount,
            totalInLocal: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"].length,
            needsSync: productCount !== __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["products"].length
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Sync status error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Failed to get sync status'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c86d5f6._.js.map