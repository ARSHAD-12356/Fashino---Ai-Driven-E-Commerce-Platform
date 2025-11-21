(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/cart-drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CartDrawer({ isOpen, onClose }) {
    _s();
    const { items, removeItem, updateQuantity, total } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-40 fade-in",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/cart-drawer.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl smooth-transition transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                children: "Shopping Cart"
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-muted rounded-full smooth-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground mb-4",
                                    children: "Your cart is empty"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg smooth-transition",
                                    children: "Continue Shopping"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 pb-4 border-b border-border last:border-b-0 scale-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.image || '/placeholder.svg',
                                            alt: item.name,
                                            className: "w-24 h-24 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-sm mb-1",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-3",
                                                    children: [
                                                        "$",
                                                        item.price.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateQuantity(item.id, item.quantity - 1),
                                                            className: "p-1 hover:bg-muted rounded smooth-hover",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: item.quantity,
                                                            onChange: (e)=>updateQuantity(item.id, parseInt(e.target.value) || 1),
                                                            className: "w-12 text-center border border-border rounded px-2 py-1",
                                                            min: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateQuantity(item.id, item.quantity + 1),
                                                            className: "p-1 hover:bg-muted rounded smooth-hover",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeItem(item.id),
                                                            className: "ml-auto p-1 hover:bg-destructive/10 rounded smooth-hover",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4 text-destructive"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/cart-drawer.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/cart-drawer.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/cart-drawer.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cart-drawer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/cart-drawer.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-lg font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "$",
                                            total.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cart-drawer.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/checkout",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:shadow-lg smooth-transition active:scale-95",
                                    children: "Proceed to Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/components/cart-drawer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full border-2 border-primary text-primary py-3 rounded-full font-semibold hover:bg-primary/5 smooth-transition",
                                children: "Continue Shopping"
                            }, void 0, false, {
                                fileName: "[project]/components/cart-drawer.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cart-drawer.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cart-drawer.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CartDrawer, "m1Zk/lK+1SQWPnGIBWSZzAkSBF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "getFallbackImage",
    ()=>getFallbackImage,
    "getProductImage",
    ()=>getProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
// Create a deterministic hash from a string
function hashString(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}
function detectGarmentKey(title, subcategory, category) {
    const t = title.toLowerCase();
    const s = (subcategory || '').toLowerCase();
    const combined = `${t} ${s}`;
    const has = (word)=>combined.includes(word);
    if (has('jeans') || has('denim')) return 'jeans';
    if (has('trouser') || has('chino') || has('pants') || has('cargo')) return 'pants';
    if (has('t-shirt') || has('tee')) return 'tshirt';
    if (has('shirt') || has('oxford') || has('flannel')) return 'shirt';
    if (has('hoodie') || has('sweatshirt')) return 'hoodie';
    if (has('jacket') || has('coat') || has('outerwear') || has('blazer')) return 'jacket';
    if (has('sweater') || has('knit') || has('cardigan')) return 'sweater';
    if (has('dress') || has('gown')) return 'dress';
    if (has('top') || has('camisole') || has('cami') || has('blouse')) return 'top';
    if (has('skirt')) return 'skirt';
    if (has('legging') || has('yoga')) return 'leggings';
    if (has('bag') || has('backpack') || has('handbag') || has('tote') || has('sling')) return 'bag';
    if (has('sunglasses') || has('glasses') || has('eyewear')) return 'eyewear';
    if (has('scarf') || has('shawl') || has('belt')) return 'scarf';
    if ((category || '').toLowerCase() === 'kids') return 'kids';
    return 'generic';
}
const GRADIENT_PALETTES = [
    [
        '#280a2c',
        '#632357'
    ],
    [
        '#291a5d',
        '#5236b3'
    ],
    [
        '#691719',
        '#c7263a'
    ],
    [
        '#084045',
        '#0fb6a0'
    ],
    [
        '#1b2a49',
        '#305c8c'
    ],
    [
        '#45330a',
        '#d4a017'
    ],
    [
        '#102a43',
        '#0b6ba8'
    ],
    [
        '#3a0b2e',
        '#a31545'
    ],
    [
        '#19332a',
        '#1f8058'
    ],
    [
        '#2b1a1d',
        '#a84e45'
    ]
];
const ACCENT_COLORS = [
    '#ffd166',
    '#f8f9fa',
    '#9bafd9',
    '#ff9f1c',
    '#2ec4b6',
    '#f25f5c',
    '#e0c3fc',
    '#c2f970'
];
const GARMENT_LABELS = {
    jeans: 'DENIM',
    pants: 'BOTTOMS',
    tshirt: 'T-SHIRT',
    shirt: 'SHIRT',
    hoodie: 'HOODIE',
    jacket: 'OUTERWEAR',
    sweater: 'KNITWEAR',
    dress: 'DRESS',
    top: 'TOPS',
    skirt: 'SKIRT',
    leggings: 'ATHLEISURE',
    bag: 'ACCESSORY',
    eyewear: 'EYEWEAR',
    scarf: 'ACCESSORY',
    kids: 'KIDS',
    generic: 'FASHION'
};
const GARMENT_BADGES = {
    jeans: 'JN',
    pants: 'BT',
    tshirt: 'TS',
    shirt: 'SH',
    hoodie: 'HD',
    jacket: 'JK',
    sweater: 'SW',
    dress: 'DR',
    top: 'TP',
    skirt: 'SK',
    leggings: 'LG',
    bag: 'BG',
    eyewear: 'EY',
    scarf: 'AC',
    kids: 'KD',
    generic: 'FX'
};
function escapeXml(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getInitials(value) {
    const cleaned = value.replace(/[^A-Za-z0-9\s]/g, '').trim();
    const words = cleaned.split(/\s+/).filter(Boolean);
    if (words.length === 0) return 'FX';
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase().padEnd(2, 'X');
    return (words[0][0] + words[1][0]).toUpperCase();
}
// Deterministic SVG generator so every product always maps to the same visual
function generateProductImageUrl(productName, category, subcategory) {
    const seed = hashString(`${productName}-${category || ''}-${subcategory || ''}`);
    const [gradientStart, gradientEnd] = GRADIENT_PALETTES[seed % GRADIENT_PALETTES.length];
    const accent = ACCENT_COLORS[seed % ACCENT_COLORS.length];
    const garmentKey = detectGarmentKey(productName, subcategory, category);
    const badge = GARMENT_BADGES[garmentKey];
    const label = GARMENT_LABELS[garmentKey];
    const shortName = productName.length > 28 ? `${productName.slice(0, 25)}...` : productName;
    const safeName = escapeXml(shortName);
    const initials = getInitials(productName);
    const safeCategory = escapeXml((category || 'Fashino').toUpperCase());
    const rotation = seed % 360;
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${gradientStart}"/>
      <stop offset="100%" stop-color="${gradientEnd}"/>
    </linearGradient>
    <pattern id="texture" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(${rotation})">
      <circle cx="2" cy="2" r="2" fill="${accent}" opacity="0.15"/>
    </pattern>
  </defs>
  <rect width="800" height="800" fill="url(#bg)"/>
  <rect width="800" height="800" fill="url(#texture)"/>
  <circle cx="560" cy="520" r="180" fill="${accent}" opacity="0.12"/>
  <text x="60" y="120" fill="${accent}" font-size="34" font-family="Poppins, Arial, sans-serif" letter-spacing="6" font-weight="600">${label}</text>
  <text x="60" y="270" fill="#ffffff" font-size="200" font-family="Poppins, Arial, sans-serif" font-weight="800">${badge}</text>
  <text x="60" y="340" fill="#ffffff" font-size="54" font-family="Poppins, Arial, sans-serif" font-weight="600">${initials}</text>
  <text x="60" y="420" fill="#f4f4f4" font-size="44" font-family="Poppins, Arial, sans-serif" font-weight="500">${safeName}</text>
  <text x="60" y="480" fill="#f4f4f4" font-size="28" font-family="Poppins, Arial, sans-serif" opacity="0.7">${safeCategory}</text>
</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
function getProductImage(image, category, subcategory, title) {
    const cleaned = image?.split('?')[0]?.trim();
    if (cleaned && cleaned !== '/placeholder.svg') {
        if (cleaned.startsWith('/') || cleaned.startsWith('data:image')) {
            return cleaned;
        }
    }
    // Generate deterministic product-specific image based on product name
    if (title) {
        return generateProductImageUrl(title, category, subcategory);
    }
    // Fallback for products without title
    return getFallbackImage(title, category, subcategory);
}
function getFallbackImage(title, category, subcategory) {
    const productName = title || 'Product';
    return generateProductImageUrl(productName, category, subcategory);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/category-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryDropdown",
    ()=>CategoryDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function CategoryDropdown({ category, data, onClose, isLeftSide = false }) {
    // Show only featured products (no subcategories)
    const displayProducts = data.products.slice(0, 4);
    // Position classes based on whether it's left-side or center
    const positionClasses = isLeftSide ? 'left-0 xl:left-0' // Left align for first 2 categories
     : 'left-1/2 -translate-x-1/2' // Center for others
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute top-full ${positionClasses} mt-2 w-[90vw] max-w-[500px] xl:max-w-[600px] bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border border-white/20 dark:border-border rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200 ease-out`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                displayProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-base font-bold text-foreground mb-4",
                            children: "Featured Products"
                        }, void 0, false, {
                            fileName: "[project]/components/category-dropdown.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 xl:grid-cols-4 gap-4",
                            children: displayProducts.map((product)=>{
                                const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(product.image, category.name, undefined, product.name);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/products/${product.id}`,
                                    onClick: onClose,
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 border border-transparent hover:border-primary/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imageSrc,
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/category-dropdown.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 25
                                                    }, this),
                                                    product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold shadow-lg",
                                                        children: [
                                                            "-",
                                                            product.discount,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/category-dropdown.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/category-dropdown.tsx",
                                                lineNumber: 60,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-1",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/category-dropdown.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-foreground",
                                                        children: [
                                                            "₹",
                                                            product.price.toLocaleString('en-IN')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/category-dropdown.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/category-dropdown.tsx",
                                                lineNumber: 72,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/category-dropdown.tsx",
                                        lineNumber: 59,
                                        columnNumber: 21
                                    }, this)
                                }, product.id, false, {
                                    fileName: "[project]/components/category-dropdown.tsx",
                                    lineNumber: 53,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/category-dropdown.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/category-dropdown.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${category.slug}`,
                    onClick: onClose,
                    className: "flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 group shadow-lg",
                    children: [
                        "View all ",
                        category.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                        }, void 0, false, {
                            fileName: "[project]/components/category-dropdown.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/category-dropdown.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/category-dropdown.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category-dropdown.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = CategoryDropdown;
var _c;
__turbopack_context__.k.register(_c, "CategoryDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/category-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCategoryData",
    ()=>getCategoryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
;
function getCategoryData(categorySlug) {
    const categoryMap = {
        'men': 'Men',
        'women': 'Women',
        'kids': 'Kids',
        'winter-wear': 'Winter',
        'footwear': 'Footwear',
        'accessories': 'Accessories',
        'ethnic-wear': 'Ethnic',
        'sportswear': 'Sportswear',
        'beauty-grooming': 'Beauty',
        'home-living': 'Home',
        'electronics': 'Electronics'
    };
    const categoryName = categoryMap[categorySlug];
    if (!categoryName) return null;
    // Filter products by category
    let filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"];
    if (categorySlug === 'winter-wear') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.season === 'Winter');
    } else if (categorySlug === 'footwear') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Footwear');
    } else if (categorySlug === 'electronics') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Electronics');
    } else if (categorySlug === 'beauty-grooming') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Beauty');
    } else if (categorySlug === 'home-living') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Home');
    } else if (categorySlug === 'sportswear') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Sportswear');
    } else if (categorySlug === 'ethnic-wear') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Ethnic');
    } else if (categorySlug === 'accessories') {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === 'Accessories');
    } else {
        filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === categoryName);
    }
    // Get subcategories
    const subcategoryMap = new Map();
    filteredProducts.forEach((product)=>{
        const subcat = product.subcategory || 'Other';
        subcategoryMap.set(subcat, (subcategoryMap.get(subcat) || 0) + 1);
    });
    const subcategories = Array.from(subcategoryMap.entries()).map(([name, count])=>({
            name,
            slug: name.toLowerCase().replace(/\s+/g, '-'),
            count
        })).sort((a, b)=>b.count - a.count).slice(0, 20);
    // Get featured products
    const featuredProducts = filteredProducts.slice(0, 12).map((product)=>({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            discount: Math.round((product.originalPrice - product.price) / product.originalPrice * 100)
        }));
    return {
        subcategories,
        products: featuredProducts
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dual-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DualNavbar",
    ()=>DualNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/wishlist-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart-drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/category-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function DualNavbar({ showCategoryBar = false }) {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchFocused, setIsSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { items: wishlistItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const userMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DualNavbar.useEffect": ()=>{
            const handleScroll = {
                "DualNavbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["DualNavbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "DualNavbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["DualNavbar.useEffect"];
        }
    }["DualNavbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DualNavbar.useEffect": ()=>{
            const handleClickOutside = {
                "DualNavbar.useEffect.handleClickOutside": (event)=>{
                    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                        setIsUserMenuOpen(false);
                    }
                    if (!Object.values(categoryRefs.current).some({
                        "DualNavbar.useEffect.handleClickOutside": (ref)=>ref?.contains(event.target)
                    }["DualNavbar.useEffect.handleClickOutside"])) {
                        setActiveCategory(null);
                    }
                }
            }["DualNavbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "DualNavbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["DualNavbar.useEffect"];
        }
    }["DualNavbar.useEffect"], []);
    const mainCategories = [
        {
            name: 'New Arrivals',
            slug: 'new-arrivals'
        },
        {
            name: 'Winter Collection',
            slug: 'winter-collection'
        },
        {
            name: 'Deals & Offers',
            slug: 'deals'
        }
    ];
    const bottomCategories = [
        {
            name: 'Men',
            slug: 'men'
        },
        {
            name: 'Women',
            slug: 'women'
        },
        {
            name: 'Kids',
            slug: 'kids'
        },
        {
            name: 'Footwear',
            slug: 'footwear'
        },
        {
            name: 'Accessories',
            slug: 'accessories'
        },
        {
            name: 'Ethnic Wear',
            slug: 'ethnic-wear'
        },
        {
            name: 'Sportswear',
            slug: 'sportswear'
        },
        {
            name: 'Beauty & Grooming',
            slug: 'beauty-grooming'
        },
        {
            name: 'Home & Living',
            slug: 'home-living'
        },
        {
            name: 'Electronics',
            slug: 'electronics'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-black'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2 group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl md:text-3xl font-bold tracking-tight group-hover:opacity-80 transition-opacity duration-200",
                                    children: "Fashino"
                                }, void 0, false, {
                                    fileName: "[project]/components/dual-navbar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-8",
                                children: mainCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${category.slug}`,
                                        className: "text-sm font-semibold hover:opacity-80 transition-opacity duration-200 relative group",
                                        children: [
                                            category.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, category.slug, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 transition-all duration-300 ${isSearchFocused ? 'bg-white/20 ring-2 ring-white/30' : 'hover:bg-white/15'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4 text-white/80"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search for products...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                onFocus: ()=>setIsSearchFocused(true),
                                                onBlur: ()=>setIsSearchFocused(false),
                                                className: "bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-48 lg:w-64"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    isSearchFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden absolute top-full left-0 right-0 bg-black p-4 border-t border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-white/10 rounded-full px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 text-white/80"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search for products...",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    className: "bg-transparent outline-none text-sm text-white placeholder:text-white/60 flex-1",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsSearchFocused(false),
                                                    className: "p-1 hover:bg-white/10 rounded",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    !isSearchFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-200",
                                        onClick: ()=>setIsSearchFocused(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: "p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Toggle theme",
                                        children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wishlist",
                                        className: "relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Wishlist",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold",
                                                children: wishlistItems.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsCartOpen(true),
                                        className: "relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Shopping Cart",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold",
                                                children: items.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: userMenuRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                                className: "flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-full transition-all duration-200",
                                                children: [
                                                    user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: user.profilePic,
                                                        alt: user.name,
                                                        className: "w-8 h-8 rounded-full object-cover ring-2 ring-white/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dual-navbar.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:block text-sm font-semibold",
                                                        children: user.name || 'User'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            isUserMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border-b border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-foreground",
                                                                children: user.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/dashboard",
                                                                className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground",
                                                                onClick: ()=>setIsUserMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 240,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "My Account"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/wishlist",
                                                                className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground",
                                                                onClick: ()=>setIsUserMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Wishlist"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    logout();
                                                                    setIsUserMenuOpen(false);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-left text-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Logout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dual-navbar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dual-navbar.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            showCategoryBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-20 z-40 shadow-[0_12px_35px_rgba(139,15,29,0.35)]",
                "aria-label": "Category navigation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-[#7a0d1c] via-[#8f101f] to-[#b71c27]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between lg:justify-center h-16 gap-4 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:flex items-center gap-6 md:gap-8",
                                    children: bottomCategories.map((category, index)=>{
                                        const categoryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryData"])(category.slug);
                                        // Determine if this is a left-side category (first 2)
                                        const isLeftSide = index < 2;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: (el)=>{
                                                categoryRefs.current[category.slug] = el;
                                            },
                                            onMouseEnter: ()=>{
                                                if (categoryData) {
                                                    setActiveCategory(category.slug);
                                                }
                                            },
                                            onMouseLeave: ()=>setActiveCategory(null),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${category.slug}`,
                                                    className: "group text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white transition-colors duration-200 relative py-2",
                                                    children: [
                                                        category.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeCategory === category.slug ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dual-navbar.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this),
                                                activeCategory === category.slug && categoryData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryDropdown"], {
                                                    category: category,
                                                    data: categoryData,
                                                    onClose: ()=>setActiveCategory(null),
                                                    isLeftSide: isLeftSide
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, category.slug, true, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 293,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/dual-navbar.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors duration-[220ms] ease-out border border-white/30",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dual-navbar.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dual-navbar.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden py-4 px-4 animate-in fade-in slide-in-from-top-1 duration-[220ms] ease-out bg-[#6c0a18]/90 backdrop-blur",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: bottomCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${category.slug}`,
                                        className: "block px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-[220ms] ease-out font-medium text-sm uppercase tracking-wide",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: category.name
                                    }, category.slug, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 346,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dual-navbar.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dual-navbar.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 280,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DualNavbar, "YB6grYB6jtSlN3pOL0TM8Bn/L5Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DualNavbar;
var _c;
__turbopack_context__.k.register(_c, "DualNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dual$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dual-navbar.tsx [app-client] (ecmascript)");
'use client';
;
;
function Header({ showCategoryBar = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dual$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DualNavbar"], {
        showCategoryBar: showCategoryBar
    }, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
'use client';
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-b from-charcoal-950 via-gray-900 to-black text-gray-300 py-16 px-4 md:px-6 smooth-transition relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5 bg-white",
                style: {
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4 text-white",
                                        children: "About Fashino"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400 leading-relaxed mb-4",
                                        children: "Premium fashion for the modern individual. Discover curated collections that define your style. We bring you the latest trends and timeless classics, all in one place."
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group",
                                                "aria-label": "Instagram",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    className: "w-5 h-5 text-gray-400 group-hover:text-white smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group",
                                                "aria-label": "YouTube",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                    className: "w-5 h-5 text-gray-400 group-hover:text-white smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 33,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                    className: "w-5 h-5 text-gray-400 group-hover:text-white smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 hover:bg-primary smooth-transition flex items-center justify-center group",
                                                "aria-label": "LinkedIn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    className: "w-5 h-5 text-gray-400 group-hover:text-white smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold mb-4 text-lg text-white",
                                        children: "Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/men",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Men"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/women",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Women"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/kids",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Kids"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/footwear",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Footwear"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/accessories",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Accessories"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold mb-4 text-lg text-white",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Contact Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Order Tracking"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Shipping Info"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Returns"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "FAQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold mb-4 text-lg text-white",
                                        children: "Legal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Terms of Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Returns Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "text-gray-400 hover:text-primary smooth-hover inline-block hover:translate-x-1 transition-transform",
                                                    children: "Cookie Policy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: "Copyright © Fashino 2025. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/wishlist-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProductCard({ id, name, price, originalPrice, image, rating, reviews, category, subcategory, stock }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { addToWishlist, removeFromWishlist, isInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const isWishlisted = isInWishlist(id);
    const handleWishlistToggle = ()=>{
        if (isWishlisted) {
            removeFromWishlist(id);
        } else {
            addToWishlist(id);
        }
    };
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(image, category, subcategory, name);
    const handleAddToCart = ()=>{
        addItem({
            id,
            name,
            price,
            image: imageSrc
        });
    };
    const discount = Math.round((originalPrice - price) / originalPrice * 100);
    const stockCount = stock ?? 35 + id % 9 * 5;
    const isInStock = stockCount > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group scale-in",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc,
                        alt: name,
                        onError: (e)=>{
                            e.currentTarget.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFallbackImage"])(name, category, subcategory);
                        },
                        className: `w-full aspect-square object-cover smooth-transition ${isHovered ? 'scale-110' : 'scale-100'}`
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold",
                        children: [
                            "-",
                            discount,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleWishlistToggle,
                        className: "absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: `w-5 h-5 smooth-transition ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 smooth-transition flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddToCart,
                                className: "w-full bg-primary text-primary-foreground py-2 font-semibold rounded-lg hover:bg-primary/90 smooth-transition flex items-center justify-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    "Add to Cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/products/${id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-white/20 text-white py-2 font-semibold rounded-lg hover:bg-white/30 smooth-transition flex items-center justify-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/product-card.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                "Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/products/${id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-primary/70 text-white py-2 font-semibold rounded-lg hover:bg-primary smooth-transition text-sm",
                                            children: "Buy Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: '★'
                                    }, i, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    rating,
                                    " (",
                                    reviews,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold text-foreground",
                                children: [
                                    "₹",
                                    price.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-muted-foreground line-through",
                                children: [
                                    "₹",
                                    originalPrice.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm font-medium ${isInStock ? 'text-emerald-500' : 'text-destructive'}`,
                        children: isInStock ? `${stockCount} in stock` : 'Out of stock'
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product-card.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "ApYq/hqHGkJdlHCjcOpW7o2W3yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/category-page-template.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryPageTemplate",
    ()=>CategoryPageTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const defaultSeasonFilters = [
    'All-Season',
    'Winter'
];
const slugify = (value)=>value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
function CategoryPageTemplate({ title, subtitle, categoryName, filterBy, subcategoryFilters, showSeasonFilter = false, seasonFilters = defaultSeasonFilters }) {
    _s();
    const [selectedSubcategory, setSelectedSubcategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [season, setSeason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seasonFilters[0] || 'All-Season');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('featured');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryPageTemplate.useEffect": ()=>{
            const querySubcategory = searchParams.get('subcategory');
            if (!querySubcategory) {
                setSelectedSubcategory(null);
                return;
            }
            const matched = subcategoryFilters.find({
                "CategoryPageTemplate.useEffect.matched": (label)=>slugify(label) === querySubcategory
            }["CategoryPageTemplate.useEffect.matched"]);
            setSelectedSubcategory(matched || null);
        }
    }["CategoryPageTemplate.useEffect"], [
        searchParams,
        subcategoryFilters
    ]);
    const handleSubcategoryChange = (label)=>{
        setSelectedSubcategory(label);
        const params = new URLSearchParams(searchParams.toString());
        if (label) {
            params.set('subcategory', slugify(label));
        } else {
            params.delete('subcategory');
        }
        const queryString = params.toString();
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
            scroll: false
        });
    };
    const matchingProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoryPageTemplate.useMemo[matchingProducts]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "CategoryPageTemplate.useMemo[matchingProducts]": (product)=>{
                    if (filterBy) {
                        return filterBy(product);
                    }
                    if (categoryName) {
                        return product.category === categoryName;
                    }
                    return true;
                }
            }["CategoryPageTemplate.useMemo[matchingProducts]"]);
        }
    }["CategoryPageTemplate.useMemo[matchingProducts]"], [
        categoryName,
        filterBy,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"]
    ]);
    const filteredAndSortedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": ()=>{
            let filtered = matchingProducts;
            if (selectedSubcategory) {
                filtered = filtered.filter({
                    "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (product)=>(product.subcategory || '').toLowerCase() === selectedSubcategory.toLowerCase()
                }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
            }
            if (showSeasonFilter && season && season !== 'All-Season') {
                filtered = filtered.filter({
                    "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (product)=>{
                        const productSeason = product.season || 'All-Season';
                        if (productSeason === season) {
                            return true;
                        }
                        if (season === 'Winter') {
                            return productSeason === 'All-Season';
                        }
                        if (season === 'Festive') {
                            return productSeason === 'Festive';
                        }
                        return false;
                    }
                }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
            }
            switch(sortBy){
                case 'price-low':
                    filtered = [
                        ...filtered
                    ].sort({
                        "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (a, b)=>a.price - b.price
                    }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'price-high':
                    filtered = [
                        ...filtered
                    ].sort({
                        "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (a, b)=>b.price - a.price
                    }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'rating':
                    filtered = [
                        ...filtered
                    ].sort({
                        "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (a, b)=>b.rating - a.rating
                    }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'newest':
                    filtered = [
                        ...filtered
                    ].sort({
                        "CategoryPageTemplate.useMemo[filteredAndSortedProducts]": (a, b)=>b.id - a.id
                    }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"]);
                    break;
                default:
                    filtered = [
                        ...filtered
                    ];
            }
            return filtered;
        }
    }["CategoryPageTemplate.useMemo[filteredAndSortedProducts]"], [
        matchingProducts,
        season,
        selectedSubcategory,
        showSeasonFilter,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/components/category-page-template.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted/50 px-4 md:px-6 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-4xl font-bold mb-2",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/category-page-template.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/category-page-template.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/category-page-template.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/category-page-template.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 md:px-6 py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleSubcategoryChange(null),
                                                        className: `px-4 py-2 rounded-full smooth-transition ${selectedSubcategory === null ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`,
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/category-page-template.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this),
                                                    subcategoryFilters.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleSubcategoryChange(cat),
                                                            className: `px-4 py-2 rounded-full smooth-transition ${selectedSubcategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`,
                                                            children: cat
                                                        }, cat, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/category-page-template.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            showSeasonFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: seasonFilters.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSeason(label),
                                                        className: `px-4 py-2 rounded-full smooth-transition ${season === label ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`,
                                                        children: label === 'All-Season' ? 'All Season' : label
                                                    }, label, false, {
                                                        fileName: "[project]/components/category-page-template.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/category-page-template.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:ml-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: sortBy,
                                                    onChange: (e)=>setSortBy(e.target.value),
                                                    className: "px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "featured",
                                                            children: "Featured"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "newest",
                                                            children: "Newest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "price-low",
                                                            children: "Price: Low to High"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "price-high",
                                                            children: "Price: High to Low"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "rating",
                                                            children: "Top Rated"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/category-page-template.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/category-page-template.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/category-page-template.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/category-page-template.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            "Showing ",
                                            filteredAndSortedProducts.length,
                                            " products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/category-page-template.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/category-page-template.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            filteredAndSortedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: "No products found"
                                }, void 0, false, {
                                    fileName: "[project]/components/category-page-template.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/category-page-template.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                                children: filteredAndSortedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                        ...product
                                    }, product.id, false, {
                                        fileName: "[project]/components/category-page-template.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/category-page-template.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/category-page-template.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/category-page-template.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/components/category-page-template.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CategoryPageTemplate, "tLMguwJXMScTaOV4y18ZLDksW5c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CategoryPageTemplate;
var _c;
__turbopack_context__.k.register(_c, "CategoryPageTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/home-living/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeLivingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$page$2d$template$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/category-page-template.tsx [app-client] (ecmascript)");
"use client";
;
;
function HomeLivingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$category$2d$page$2d$template$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryPageTemplate"], {
        title: "Home & Living",
        subtitle: "Elevate every corner with decor, bedding, and cozy essentials",
        categoryName: "Home",
        subcategoryFilters: [
            'Bedding',
            'Decor',
            'Lighting',
            'Furnishing'
        ]
    }, void 0, false, {
        fileName: "[project]/app/home-living/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = HomeLivingPage;
var _c;
__turbopack_context__.k.register(_c, "HomeLivingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_07810aed._.js.map