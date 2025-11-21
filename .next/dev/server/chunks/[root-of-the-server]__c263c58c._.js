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
"[project]/lib/models/Order.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const orderSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    userId: {
        type: String,
        required: true
    },
    items: [
        {
            productId: String,
            name: String,
            price: Number,
            quantity: Number,
            image: String
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [
            'pending',
            'processing',
            'shipped',
            'delivered',
            'cancelled'
        ],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: [
            'pending',
            'paid',
            'failed',
            'refunded'
        ],
        default: 'pending'
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    paymentMethod: {
        type: String,
        default: 'card'
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Order || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Order', orderSchema);
}),
"[project]/app/api/assistant-orders/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Order$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Order.ts [app-route] (ecmascript)");
;
;
;
// Get user orders from MongoDB or return empty (client will use localStorage)
const getUserOrders = async (userId)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const orders = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Order$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            userId
        }).sort({
            createdAt: -1
        }).limit(20);
        return orders.map((order)=>({
                orderId: order._id.toString(),
                id: order.id || `FAS-${order._id.toString().slice(-8).toUpperCase()}`,
                orderDate: order.createdAt,
                deliveryDate: order.status === 'delivered' ? order.updatedAt : null,
                items: order.items || [],
                paymentStatus: order.paymentStatus || 'pending',
                orderStatus: order.status || 'processing',
                trackingId: order.trackingId || `TRK-${order._id.toString().slice(-8).toUpperCase()}`,
                trackingUrl: order.trackingUrl || `https://track.fashino.com/${order._id}`,
                totalAmount: order.totalAmount,
                shippingAddress: order.shippingAddress,
                refundStatus: order.refundStatus || null,
                returnStatus: order.returnStatus || null
            }));
    } catch (error) {
        console.error('Error fetching orders from DB:', error);
        // Return empty - client will use localStorage
        return [];
    }
};
const detectIntent = (query)=>{
    const normalized = query.toLowerCase();
    if (normalized.includes('product') && !normalized.includes('order')) {
        return 'non-order';
    }
    if (normalized.includes('track') || normalized.includes('tracking')) return 'track';
    if (normalized.includes('status') || normalized.includes('kya hai')) return 'status';
    if (normalized.includes('deliver') || normalized.includes('kab aayega') || normalized.includes('eta')) return 'delivery';
    if (normalized.includes('refund') || normalized.includes('paisa')) return 'refund';
    if (normalized.includes('return')) return 'return';
    if (normalized.includes('cancel')) return 'cancel';
    if (normalized.includes('recent') || normalized.includes('list') || normalized.includes('dikhao') || normalized.includes('sab')) return 'list';
    if (normalized.includes('support') || normalized.includes('help') || normalized.includes('contact') || normalized.includes('number')) return 'support';
    if (normalized.match(/order\s*#?[a-z0-9-]+/i)) return 'status';
    return 'item-search';
};
// Extract order ID from query
const extractOrderId = (query)=>{
    const match = query.match(/order\s*#?([a-z0-9-]+)/i);
    return match ? match[1] : null;
};
// Extract item name from query
const extractItemName = (query)=>{
    const normalized = query.toLowerCase();
    const itemKeywords = [
        'tee',
        'shirt',
        'jacket',
        'hoodie',
        'pant',
        'dress',
        'shoe',
        'item'
    ];
    for (const keyword of itemKeywords){
        if (normalized.includes(keyword)) {
            // Try to extract the full item name
            const words = query.split(/\s+/);
            const keywordIndex = words.findIndex((w)=>w.toLowerCase().includes(keyword));
            if (keywordIndex !== -1) {
                return words.slice(Math.max(0, keywordIndex - 2), keywordIndex + 3).join(' ');
            }
        }
    }
    return null;
};
// Calculate delivery ETA
const getDeliveryETA = (orderDate, status)=>{
    const daysSinceOrder = Math.floor((Date.now() - new Date(orderDate).getTime()) / (1000 * 60 * 60 * 24));
    if (status === 'delivered') {
        return 'Delivered';
    }
    if (status === 'shipped') {
        return `${3 - daysSinceOrder} days`;
    }
    if (status === 'processing') {
        return `${5 - daysSinceOrder} days`;
    }
    return '5-7 business days';
};
// Generate response
const generateResponse = (query, orders, intent, userName)=>{
    const normalizedQuery = query.toLowerCase();
    // Non-order query
    if (intent === 'non-order') {
        return {
            text: "This bot is only for order and customer support queries. For product information please ask the shopping assistant.",
            orders: [],
            actions: []
        };
    }
    // Support query
    if (intent === 'support') {
        return {
            text: `Customer Support Options:\n\n📧 Email: support@fashino.com\n📞 Phone: +91-1800-XXX-XXXX\n💬 Live Chat: Available 24/7\n🕐 Hours: Mon-Sun, 9 AM - 9 PM\n\nFor order-specific queries, I can help you right here!`,
            orders: [],
            actions: []
        };
    }
    // List orders
    if (intent === 'list' || orders.length === 0) {
        if (orders.length === 0) {
            return {
                text: `Hello ${userName}! 👋\n\nYou don't have any orders yet. Once you place an order, I'll be able to help you track it!`,
                orders: [],
                actions: []
            };
        }
        let responseText = `Hello ${userName}! 👋\n\nHere are your recent orders:\n\n`;
        orders.slice(0, 5).forEach((order, i)=>{
            responseText += `${i + 1}) Order #${order.id}\n`;
            responseText += `   Date: ${new Date(order.orderDate).toLocaleDateString('en-IN')}\n`;
            responseText += `   Items: ${order.items.length}\n`;
            responseText += `   Status: ${order.orderStatus}\n`;
            responseText += `   Total: ₹${order.totalAmount.toLocaleString('en-IN')}\n\n`;
        });
        if (orders.length > 5) {
            responseText += `... and ${orders.length - 5} more orders.`;
        }
        return {
            text: responseText,
            orders: orders.slice(0, 5),
            actions: [
                'view_all'
            ]
        };
    }
    // Find order by ID
    const orderId = extractOrderId(query);
    let targetOrder = orderId ? orders.find((o)=>o.id === orderId || o.orderId === orderId) : null;
    // Find order by item name
    if (!targetOrder) {
        const itemName = extractItemName(query);
        if (itemName) {
            targetOrder = orders.find((order)=>order.items.some((item)=>item.name.toLowerCase().includes(itemName.toLowerCase())));
        }
    }
    // If no specific order, use latest
    if (!targetOrder && orders.length > 0) {
        targetOrder = orders[0];
    }
    if (!targetOrder) {
        return {
            text: `I couldn't find that order. Please check your order ID or ask me to show your recent orders.`,
            orders: [],
            actions: []
        };
    }
    const order = targetOrder;
    const deliveryETA = getDeliveryETA(order.orderDate, order.orderStatus);
    // Track order
    if (intent === 'track') {
        return {
            text: `📦 Order Tracking:\n\nOrder ID: #${order.id}\nTracking ID: ${order.trackingId}\nStatus: ${order.orderStatus}\n\nTracking Link: ${order.trackingUrl}\n\nExpected Delivery: ${deliveryETA}`,
            orders: [
                order
            ],
            actions: [
                'track',
                'view_order'
            ]
        };
    }
    // Delivery ETA
    if (intent === 'delivery') {
        return {
            text: `📅 Delivery Information:\n\nOrder #${order.id}\nExpected Delivery: ${deliveryETA}\nCurrent Status: ${order.orderStatus}\n\nYour order is ${order.orderStatus === 'processing' ? 'being prepared' : order.orderStatus === 'shipped' ? 'on the way' : 'delivered'}!`,
            orders: [
                order
            ],
            actions: [
                'track',
                'view_order'
            ]
        };
    }
    // Refund status
    if (intent === 'refund') {
        if (order.refundStatus) {
            return {
                text: `💰 Refund Status:\n\nOrder #${order.id}\nRefund Status: ${order.refundStatus}\n\nYour refund is ${order.refundStatus === 'processed' ? 'completed' : 'being processed'}. It will reflect in your account within 5-7 business days.`,
                orders: [
                    order
                ],
                actions: [
                    'view_order',
                    'need_help'
                ]
            };
        }
        return {
            text: `No refund has been requested for Order #${order.id}. If you'd like to request a refund, please contact customer support or use the return feature.`,
            orders: [
                order
            ],
            actions: [
                'view_order',
                'need_help'
            ]
        };
    }
    // Return status
    if (intent === 'return') {
        if (order.returnStatus) {
            return {
                text: `🔄 Return Status:\n\nOrder #${order.id}\nReturn Status: ${order.returnStatus}\n\nYour return is ${order.returnStatus === 'approved' ? 'approved' : order.returnStatus === 'processed' ? 'processed' : 'under review'}.`,
                orders: [
                    order
                ],
                actions: [
                    'view_order',
                    'need_help'
                ]
            };
        }
        return {
            text: `No return has been requested for Order #${order.id}. To initiate a return, please contact customer support.`,
            orders: [
                order
            ],
            actions: [
                'view_order',
                'need_help'
            ]
        };
    }
    // Cancel order
    if (intent === 'cancel') {
        if (order.orderStatus === 'delivered' || order.orderStatus === 'cancelled') {
            return {
                text: `This order cannot be cancelled as it is already ${order.orderStatus}.`,
                orders: [
                    order
                ],
                actions: [
                    'view_order'
                ]
            };
        }
        return {
            text: `Order #${order.id} can be cancelled. Would you like me to help you cancel it?`,
            orders: [
                order
            ],
            actions: [
                'cancel',
                'view_order'
            ]
        };
    }
    // Default status response
    let responseText = `📋 Order Details:\n\nOrder ID: #${order.id}\nOrder Date: ${new Date(order.orderDate).toLocaleDateString('en-IN')}\nStatus: ${order.orderStatus}\nPayment: ${order.paymentStatus}\nExpected Delivery: ${deliveryETA}\n\nItems:\n`;
    order.items.forEach((item, i)=>{
        responseText += `${i + 1}) ${item.name} - Qty: ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    responseText += `\nTotal: ₹${order.totalAmount.toLocaleString('en-IN')}`;
    if (order.refundStatus) {
        responseText += `\nRefund Status: ${order.refundStatus}`;
    }
    if (order.returnStatus) {
        responseText += `\nReturn Status: ${order.returnStatus}`;
    }
    return {
        text: responseText,
        orders: [
            order
        ],
        actions: [
            'view_order',
            'track',
            'need_help'
        ]
    };
};
async function POST(request) {
    try {
        const { query, userId, localOrders } = await request.json();
        if (!query || typeof query !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Query is required'
            }, {
                status: 400
            });
        }
        if (!userId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'User ID is required'
            }, {
                status: 401
            });
        }
        // Try MongoDB first, fallback to localStorage orders
        let orders = await getUserOrders(userId);
        if (orders.length === 0 && localOrders && localOrders.length > 0) {
            orders = localOrders;
        }
        const intent = detectIntent(query);
        // Get user name from request or use default
        const userName = request.headers.get('x-user-name') || 'User';
        const response = generateResponse(query, orders, intent, userName);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            query,
            intent,
            response: response.text,
            orders: response.orders,
            actions: response.actions
        });
    } catch (error) {
        console.error('Order assistant error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Failed to process query'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c263c58c._.js.map