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
function extractGarment(title, subcategory) {
    const key = detectGarmentKey(title, subcategory);
    switch(key){
        case 'jeans':
            return 'jeans denim';
        case 'pants':
            return 'trousers pants chinos cargo';
        case 'tshirt':
            return 't-shirt tee';
        case 'shirt':
            return 'shirt oxford flannel';
        case 'hoodie':
            return 'hoodie sweatshirt';
        case 'sweater':
            return 'sweater knit';
        case 'jacket':
            return 'jacket coat outerwear blazer';
        case 'dress':
            return 'dress gown';
        case 'skirt':
            return 'skirt';
        case 'leggings':
            return 'leggings yoga pants';
        case 'top':
            return 'top camisole blouse';
        case 'bag':
            return 'bag handbag backpack tote sling';
        case 'eyewear':
            return 'sunglasses glasses eyewear';
        case 'scarf':
            return 'scarf belt shawl';
        default:
            return 'clothing apparel fashion';
    }
}
function extractColor(title) {
    const t = title.toLowerCase();
    const colors = [
        'black',
        'white',
        'blue',
        'navy',
        'grey',
        'gray',
        'beige',
        'green',
        'red',
        'pink',
        'purple',
        'brown',
        'khaki'
    ];
    for (const c of colors)if (t.includes(c)) return c;
    return undefined;
}
const CURATED_QUERIES = {
    'black slim fit jeans': 'black slim fit jeans, jeans, denim, black, men fashion, studio, product photo, isolated white background',
    'cargo winter pants': 'cargo pants winter, cargo trousers, men fashion, khaki, studio, product photo, isolated white background',
    'navy chino pants': 'navy chino pants, trousers, men fashion, navy blue, studio, product photo, isolated white background',
    'formal black trousers': 'formal black trousers, dress pants, men fashion, black, studio, product photo, isolated white background',
    'casual grey pants': 'casual grey pants, trousers, men fashion, grey, studio, product photo, isolated white background',
    'thermal winter trousers': 'thermal trousers winter, insulated pants, men fashion, studio, product photo, isolated white background',
    'light blue denim jeans': 'light blue denim jeans, jeans, men fashion, light blue, studio, product photo, isolated white background'
};
// Product image generator using deterministic hashing
// This ensures the same product name always gets the same image
// Uses a product image service that generates images based on product type and name
function generateProductImageUrl(productName, category, subcategory) {
    // Create a deterministic seed from product name
    const seed = hashString(`${productName}-${category || ''}-${subcategory || ''}`);
    // Extract main product type from name for better image matching
    const nameLower = productName.toLowerCase();
    let productType = 'clothing';
    let imageKeyword = 'fashion';
    if (nameLower.includes('jeans') || nameLower.includes('denim')) {
        productType = 'jeans';
        imageKeyword = 'jeans';
    } else if (nameLower.includes('pants') || nameLower.includes('trouser') || nameLower.includes('chino') || nameLower.includes('cargo')) {
        productType = 'pants';
        imageKeyword = 'pants';
    } else if (nameLower.includes('t-shirt') || nameLower.includes('tee') || nameLower.includes('tshirt')) {
        productType = 'tshirt';
        imageKeyword = 't-shirt';
    } else if (nameLower.includes('shirt') && !nameLower.includes('t-shirt')) {
        productType = 'shirt';
        imageKeyword = 'shirt';
    } else if (nameLower.includes('hoodie') || nameLower.includes('sweatshirt')) {
        productType = 'hoodie';
        imageKeyword = 'hoodie';
    } else if (nameLower.includes('jacket') || nameLower.includes('coat') || nameLower.includes('blazer')) {
        productType = 'jacket';
        imageKeyword = 'jacket';
    } else if (nameLower.includes('sweater') || nameLower.includes('knit') || nameLower.includes('cardigan')) {
        productType = 'sweater';
        imageKeyword = 'sweater';
    } else if (nameLower.includes('dress') || nameLower.includes('gown')) {
        productType = 'dress';
        imageKeyword = 'dress';
    } else if (nameLower.includes('top') || nameLower.includes('blouse')) {
        productType = 'top';
        imageKeyword = 'top';
    } else if (nameLower.includes('skirt')) {
        productType = 'skirt';
        imageKeyword = 'skirt';
    } else if (nameLower.includes('legging') || nameLower.includes('yoga')) {
        productType = 'leggings';
        imageKeyword = 'leggings';
    } else if (nameLower.includes('bag') || nameLower.includes('backpack') || nameLower.includes('handbag')) {
        productType = 'bag';
        imageKeyword = 'bag';
    } else if (nameLower.includes('sunglasses') || nameLower.includes('glasses') || nameLower.includes('eyewear')) {
        productType = 'eyewear';
        imageKeyword = 'sunglasses';
    } else if (nameLower.includes('scarf') || nameLower.includes('belt')) {
        productType = 'scarf';
        imageKeyword = 'scarf';
    }
    // Use a deterministic image service based on product name and type
    // This ensures same product = same image every time
    const width = 800;
    const height = 800;
    // Use placeholder.com with product name and type for better identification
    // Format: background color based on seed, white text, product name displayed
    const colors = [
        '4A90E2',
        'E94B3C',
        '50C878',
        'FFB347',
        '9B59B6',
        '34495E',
        'E67E22',
        '1ABC9C',
        'E74C3C',
        '3498DB'
    ];
    const colorIndex = seed % colors.length;
    const bgColor = colors[colorIndex];
    // Shorten product name for better display in placeholder
    const shortName = productName.length > 20 ? productName.substring(0, 17) + '...' : productName;
    const encodedName = encodeURIComponent(shortName);
    // Generate image URL with product name - deterministic based on product name
    return `https://via.placeholder.com/${width}x${height}/${bgColor}/FFFFFF?text=${encodedName}`;
}
function generateKeywords(title, category, subcategory) {
    const gender = (category || '').toLowerCase() === 'men' ? 'men' : (category || '').toLowerCase() === 'women' ? 'women' : (category || '').toLowerCase() === 'kids' ? 'kids' : '';
    const garment = extractGarment(title, subcategory);
    const color = extractColor(title);
    const normalized = title.toLowerCase().trim();
    const curated = CURATED_QUERIES[normalized];
    if (curated) return curated;
    const keywords = [
        normalized,
        garment,
        gender ? `${gender} fashion` : '',
        color || '',
        'clothing',
        'apparel',
        'product photo',
        'ecommerce',
        'studio',
        'isolated',
        'white background'
    ].filter(Boolean);
    return [
        ...new Set(keywords)
    ].join(',');
}
function getProductImage(image, category, subcategory, title) {
    const cleaned = image?.split('?')[0]?.trim();
    // Allow absolute paths (local images)
    if (cleaned && cleaned !== '/placeholder.svg') {
        if (cleaned.startsWith('/')) {
            return cleaned;
        }
        // Only allow local images, reject external URLs (including Unsplash)
        if (/^https?:\/\//i.test(cleaned) && !cleaned.includes('images.unsplash.com')) {
            // Allow other external URLs that are not Unsplash
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
"[project]/components/mega-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaDropdown",
    ()=>MegaDropdown
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
function MegaDropdown({ category, data, onClose }) {
    const columns = Math.min(5, Math.ceil(data.subcategories.length / 4));
    const subcategoriesPerColumn = Math.ceil(data.subcategories.length / columns);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-full left-0 mt-2 w-[95vw] max-w-6xl bg-background/98 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-12 gap-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `col-span-${12 - (data.products.length > 0 ? 4 : 0)} p-8`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-8",
                            children: Array.from({
                                length: columns
                            }).map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: data.subcategories.slice(colIndex * subcategoriesPerColumn, (colIndex + 1) * subcategoriesPerColumn).map((subcategory)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${category.slug}?subcategory=${subcategory.slug}`,
                                            onClick: onClose,
                                            className: "block py-2 px-3 rounded-lg hover:bg-muted/50 transition-all duration-200 group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200",
                                                        children: subcategory.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                                                        children: subcategory.count
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/mega-dropdown.tsx",
                                                lineNumber: 53,
                                                columnNumber: 23
                                            }, this)
                                        }, subcategory.slug, false, {
                                            fileName: "[project]/components/mega-dropdown.tsx",
                                            lineNumber: 47,
                                            columnNumber: 21
                                        }, this))
                                }, colIndex, false, {
                                    fileName: "[project]/components/mega-dropdown.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/mega-dropdown.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-6 border-t border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${category.slug}`,
                                onClick: onClose,
                                className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group",
                                children: [
                                    "View All Products",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/mega-dropdown.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/mega-dropdown.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/mega-dropdown.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/mega-dropdown.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                data.products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-4 bg-gradient-to-br from-muted/30 to-muted/10 p-6 border-l border-border/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold text-foreground mb-4 uppercase tracking-wider",
                            children: "Featured Products"
                        }, void 0, false, {
                            fileName: "[project]/components/mega-dropdown.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: data.products.slice(0, 6).map((product)=>{
                                const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(product.image, category.name, undefined, product.name);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/products/${product.id}`,
                                    onClick: onClose,
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imageSrc,
                                                        alt: product.name,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 25
                                                    }, this),
                                                    product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold",
                                                        children: [
                                                            "-",
                                                            product.discount,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/mega-dropdown.tsx",
                                                lineNumber: 97,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors duration-200",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-foreground",
                                                        children: [
                                                            "₹",
                                                            product.price.toLocaleString('en-IN')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/mega-dropdown.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/mega-dropdown.tsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/mega-dropdown.tsx",
                                        lineNumber: 96,
                                        columnNumber: 21
                                    }, this)
                                }, product.id, false, {
                                    fileName: "[project]/components/mega-dropdown.tsx",
                                    lineNumber: 90,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/mega-dropdown.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/mega-dropdown.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/mega-dropdown.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/mega-dropdown.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = MegaDropdown;
var _c;
__turbopack_context__.k.register(_c, "MegaDropdown");
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
    }
];
function hasDedicatedImage(product) {
    const src = product.image?.trim();
    if (!src) return false;
    if (src === '/placeholder.svg') return false;
    const isUnsplash = /^https?:\/\//i.test(src) && src.includes('images.unsplash.com');
    return !isUnsplash;
}
const products = allProducts.filter(hasDedicatedImage);
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
    } else if (categorySlug !== 'electronics' && categorySlug !== 'beauty-grooming' && categorySlug !== 'home-living') {
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
"[project]/components/premium-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumNavbar",
    ()=>PremiumNavbar
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mega$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mega-dropdown.tsx [app-client] (ecmascript)");
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
function PremiumNavbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSearchFocused, setIsSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { items: wishlistItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumNavbar.useEffect": ()=>{
            const handleScroll = {
                "PremiumNavbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["PremiumNavbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "PremiumNavbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["PremiumNavbar.useEffect"];
        }
    }["PremiumNavbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumNavbar.useEffect": ()=>{
            const handleClickOutside = {
                "PremiumNavbar.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setActiveCategory(null);
                    }
                    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                        setIsUserMenuOpen(false);
                    }
                }
            }["PremiumNavbar.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "PremiumNavbar.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["PremiumNavbar.useEffect"];
        }
    }["PremiumNavbar.useEffect"], []);
    const categories = [
        {
            name: 'Men',
            slug: 'men',
            isHero: false
        },
        {
            name: 'Women',
            slug: 'women',
            isHero: false
        },
        {
            name: 'Kids',
            slug: 'kids',
            isHero: false
        },
        {
            name: 'Winter Wear',
            slug: 'winter-wear',
            isHero: true,
            icon: '❄'
        },
        {
            name: 'Footwear',
            slug: 'footwear',
            isHero: false
        },
        {
            name: 'Accessories',
            slug: 'accessories',
            isHero: false
        },
        {
            name: 'Ethnic Wear',
            slug: 'ethnic-wear',
            isHero: false
        },
        {
            name: 'Sportswear',
            slug: 'sportswear',
            isHero: false
        },
        {
            name: 'Beauty & Grooming',
            slug: 'beauty-grooming',
            isHero: false
        },
        {
            name: 'Home & Living',
            slug: 'home-living',
            isHero: false
        },
        {
            name: 'Electronics',
            slug: 'electronics',
            isHero: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' : 'bg-background/80 backdrop-blur-sm'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between h-16 md:h-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent tracking-tight",
                                        children: "Fashino"
                                    }, void 0, false, {
                                        fileName: "[project]/components/premium-navbar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/premium-navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden lg:flex items-center gap-1",
                                    children: categories.map((category)=>{
                                        const categoryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryData"])(category.slug);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: category.slug === activeCategory ? dropdownRef : null,
                                            onMouseEnter: ()=>setActiveCategory(category.slug),
                                            onMouseLeave: ()=>setActiveCategory(null),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/${category.slug}`,
                                                    className: `relative px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 group ${category.isHero ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30' : 'text-foreground hover:text-primary'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                category.name,
                                                                category.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: category.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 43
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: `w-3.5 h-3.5 transition-transform duration-300 ${activeCategory === category.slug ? 'rotate-180' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${activeCategory === category.slug || category.isHero ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                activeCategory === category.slug && categoryData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mega$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MegaDropdown"], {
                                                    category: category,
                                                    data: categoryData,
                                                    onClose: ()=>setActiveCategory(null)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, category.slug, true, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/premium-navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 md:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `hidden md:flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2.5 transition-all duration-300 ${isSearchFocused ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-background' : 'hover:bg-muted'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search for products, brands and more",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    onFocus: ()=>setIsSearchFocused(true),
                                                    onBlur: ()=>setIsSearchFocused(false),
                                                    className: "bg-transparent outline-none text-sm w-64 placeholder:text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: toggleTheme,
                                            className: "p-2.5 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110",
                                            title: "Toggle theme",
                                            children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                className: "w-5 h-5 text-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/premium-navbar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: "w-5 h-5 text-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/components/premium-navbar.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/wishlist",
                                            className: "relative p-2.5 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110 group",
                                            title: "Wishlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-pulse",
                                                    children: wishlistItems.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCartOpen(true),
                                            className: "relative p-2.5 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110 group",
                                            title: "Shopping Cart",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold animate-pulse",
                                                    children: items.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: userMenuRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                                    className: "flex items-center gap-2 px-3 py-2 rounded-full hover:bg-muted transition-all duration-300 group",
                                                    children: [
                                                        user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: user.profilePic,
                                                            alt: user.name,
                                                            className: "w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "w-4 h-4 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/premium-navbar.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden md:block text-sm font-semibold text-foreground",
                                                            children: user.name || 'User'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 text-muted-foreground transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                isUserMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 border-b border-border",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: user.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/dashboard",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200",
                                                                    onClick: ()=>setIsUserMenuOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                            className: "w-4 h-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-foreground",
                                                                            children: "My Account"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 239,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/wishlist",
                                                                    className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200",
                                                                    onClick: ()=>setIsUserMenuOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                            className: "w-4 h-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-foreground",
                                                                            children: "Wishlist"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        logout();
                                                                        setIsUserMenuOpen(false);
                                                                    },
                                                                    className: "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                            className: "w-4 h-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-foreground",
                                                                            children: "Logout"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/premium-navbar.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/premium-navbar.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            className: "lg:hidden p-2 rounded-full hover:bg-muted transition-all duration-300",
                                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/premium-navbar.tsx",
                                                lineNumber: 278,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/premium-navbar.tsx",
                                                lineNumber: 280,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/premium-navbar.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/premium-navbar.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/premium-navbar.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden py-4 border-t border-border animate-in slide-in-from-top duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${category.slug}`,
                                        className: "block px-4 py-2 rounded-lg hover:bg-muted transition-colors duration-200 font-medium",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: [
                                            category.name,
                                            " ",
                                            category.icon
                                        ]
                                    }, category.slug, true, {
                                        fileName: "[project]/components/premium-navbar.tsx",
                                        lineNumber: 291,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/premium-navbar.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/premium-navbar.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/premium-navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/premium-navbar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/premium-navbar.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PremiumNavbar, "2Nu9F2WD2VHToKCFniRm1lFK8HU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = PremiumNavbar;
var _c;
__turbopack_context__.k.register(_c, "PremiumNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "LegacyHeader",
    ()=>LegacyHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premium$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/premium-navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premium$2d$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumNavbar"], {}, void 0, false, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Header;
function LegacyHeader() {
    _s();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items } = useCart();
    const { items: wishlistItems } = useWishlist();
    const { user, logout } = useAuth();
    useEffect({
        "LegacyHeader.useEffect": ()=>{
            const handleScroll = {
                "LegacyHeader.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["LegacyHeader.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "LegacyHeader.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["LegacyHeader.useEffect"];
        }
    }["LegacyHeader.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-40 w-full smooth-transition ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-background'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/",
                                    className: "text-2xl font-bold tracking-tight text-foreground hover:text-primary smooth-hover",
                                    style: {
                                        fontFamily: 'cursive'
                                    },
                                    children: "Fashino"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/shop",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/men",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Men"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/women",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Women"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/shop",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Collections"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden sm:flex items-center bg-muted rounded-full pl-4 pr-2 py-2 smooth-transition hover:bg-secondary/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search collections...",
                                                    className: "bg-transparent outline-none text-sm w-32 placeholder:text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {
                                                    className: "w-4 h-4 text-muted-foreground cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeToggle, {}, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/wishlist",
                                            className: "relative p-2 hover:bg-muted rounded-full smooth-hover group",
                                            title: "Wishlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heart, {
                                                    className: "w-5 h-5 text-foreground group-hover:text-primary smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                wishlistItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-1 right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold animate-pulse",
                                                    children: wishlistItems.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCartOpen(true),
                                            className: "relative p-2 hover:bg-muted rounded-full smooth-hover group",
                                            title: "Shopping Cart",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShoppingCart, {
                                                    className: "w-5 h-5 text-foreground group-hover:text-primary smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-1 right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold animate-pulse",
                                                    children: items.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                                    href: "/dashboard",
                                                    className: "hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-full smooth-hover",
                                                    children: [
                                                        user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: user.profilePic || "/placeholder.svg",
                                                            alt: user.name,
                                                            className: "w-6 h-6 rounded-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(User, {
                                                            className: "w-6 h-6 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: user.name || 'User'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: logout,
                                                    className: "p-2 hover:bg-muted rounded-full smooth-hover",
                                                    title: "Logout",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogOut, {
                                                        className: "w-5 h-5 text-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                            href: "/login",
                                            className: "hidden sm:block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:shadow-lg smooth-transition hover:scale-105",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "md:hidden p-2 hover:bg-muted rounded-full smooth-hover",
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "md:hidden mt-4 pb-4 space-y-3 fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/shop",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/men",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Men"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/women",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Women"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/shop",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Collections"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                    href: "/login",
                                    className: "block text-sm font-medium text-primary hover:underline",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartDrawer, {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LegacyHeader, "/7UoInXGYJp5KjTA/NjuTfOwQEw=", true);
_c1 = LegacyHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "LegacyHeader");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Footer() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const footerBg = theme === 'dark' ? 'bg-background text-foreground' : 'bg-gray-100 text-foreground';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `${footerBg} py-16 px-4 md:px-6 smooth-transition`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold mb-4",
                                    children: "Fashino"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-75",
                                    children: "Premium fashion for the modern individual."
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Men"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Women"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Collections"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Sale"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Contact Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Shipping Info"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Returns"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold mb-4",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Privacy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Terms"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Cookies"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-70 smooth-hover",
                                                children: "Accessibility"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `border-t ${theme === 'dark' ? 'border-black/20' : 'border-foreground/20'} pt-8 text-center text-sm opacity-75`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 Fashino. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Footer, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPinIcon>");
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
function DashboardPage() {
    _s();
    const { user, logout, updateProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        address: '',
        profilePic: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!user) {
                router.push('/login');
            } else {
                setFormData({
                    name: user.name || '',
                    email: user.email || '',
                    phone: user.phone || '',
                    address: user.address || '',
                    profilePic: user.profilePic || ''
                });
            }
        }
    }["DashboardPage.useEffect"], [
        user,
        router
    ]);
    // Update form data when user changes from auth context
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (user) {
                setFormData({
                    "DashboardPage.useEffect": (prev)=>({
                            ...prev,
                            name: user.name || prev.name,
                            email: user.email || prev.email,
                            phone: user.phone || prev.phone,
                            address: user.address || prev.address,
                            profilePic: user.profilePic || prev.profilePic
                        })
                }["DashboardPage.useEffect"]);
            }
        }
    }["DashboardPage.useEffect"], [
        user
    ]);
    if (!user) {
        return null;
    }
    const recentOrders = [
        {
            id: 1,
            date: '2025-01-15',
            total: '₹12,499',
            status: 'Delivered',
            items: 2
        },
        {
            id: 2,
            date: '2025-01-10',
            total: '₹9,475',
            status: 'Delivered',
            items: 1
        },
        {
            id: 3,
            date: '2025-01-05',
            total: '₹22,800',
            status: 'In Transit',
            items: 3
        }
    ];
    const wishlistItems = [
        {
            id: 1,
            name: 'Premium Leather Jacket',
            price: '₹19,999',
            status: 'In Stock'
        },
        {
            id: 2,
            name: 'Silk Dress',
            price: '₹13,999',
            status: 'Out of Stock'
        },
        {
            id: 3,
            name: 'Casual T-Shirt',
            price: '₹2,499',
            status: 'In Stock'
        }
    ];
    const handleProfileUpdate = async (e)=>{
        e.preventDefault();
        try {
            await updateProfile(formData);
            setIsEditModalOpen(false);
        // Update local state to reflect changes immediately
        // The auth context will update, and useEffect will sync
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFormData((prev)=>({
                        ...prev,
                        profilePic: reader.result
                    }));
            };
            reader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-6 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: user.profilePic || "/placeholder.svg",
                                            alt: user.name,
                                            className: "w-24 h-24 rounded-full border-4 border-primary object-cover shadow-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 rounded-full border-4 border-primary bg-muted flex items-center justify-center shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                className: "w-12 h-12 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl font-bold text-foreground",
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground flex items-center gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this),
                                                    " ",
                                                    user.email
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this),
                                            user.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground flex items-center gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    user.phone
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            user.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground flex items-center gap-2 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    user.address
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsEditModalOpen(true),
                                        className: "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition hover:scale-105 flex-1 md:flex-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            "Edit Profile"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            logout();
                                            router.push('/');
                                        },
                                        className: "flex items-center gap-2 px-6 py-3 border-2 border-destructive text-destructive rounded-lg font-semibold hover:bg-destructive/5 smooth-transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Total Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "w-6 h-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Lifetime purchases"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Total Spent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                                className: "w-6 h-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "₹44,774"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Across all purchases"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-lg p-6 space-y-2 hover:shadow-lg smooth-transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Wishlist Items"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-6 h-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Saved for later"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-foreground mb-4",
                                            children: "Recent Orders"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        recentOrders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: recentOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 smooth-transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: [
                                                                        "Order #",
                                                                        order.id
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        order.date,
                                                                        " • ",
                                                                        order.items,
                                                                        " items"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-foreground",
                                                                    children: order.total
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`,
                                                                    children: order.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, order.id, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground",
                                            children: "No orders yet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "mt-6 block w-full py-3 text-center bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition hover:scale-105 active:scale-95",
                                            children: "Start Shopping"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card border border-border rounded-lg p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-foreground mb-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                "Wishlist"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 max-h-48 overflow-y-auto",
                                            children: wishlistItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-foreground",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: item.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/wishlist",
                                            className: "mt-4 block w-full py-2 text-center text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5 smooth-transition",
                                            children: "View All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            isEditModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-background border border-border rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-foreground mb-6",
                            children: "Edit Profile"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleProfileUpdate,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-3",
                                            children: "Profile Picture"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-24 h-24 rounded-full border-4 border-primary bg-muted flex items-center justify-center overflow-hidden",
                                                    children: formData.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: formData.profilePic || "/placeholder.svg",
                                                        alt: "Preview",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"], {
                                                        className: "w-12 h-12 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium cursor-pointer hover:shadow-lg smooth-transition",
                                                    children: [
                                                        "Upload Photo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: handleImageUpload,
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.name,
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                            placeholder: "Your name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: formData.email,
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        email: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                            placeholder: "your@email.com"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            value: formData.phone,
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        phone: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                            placeholder: "+91 XXXXX XXXXX"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-foreground mb-2",
                                            children: "Address"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.address,
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        address: e.target.value
                                                    })),
                                            className: "w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                            placeholder: "Your address",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg smooth-transition",
                                            children: "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsEditModalOpen(false),
                                            className: "flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-semibold hover:bg-muted smooth-transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 254,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "qDIPqlOfP5baZQZISgNQFW//dT4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9225b01f._.js.map