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
"[project]/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggle() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 hover:bg-muted rounded-full smooth-hover transition-colors",
            "aria-label": "Toggle theme",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "w-5 h-5 text-foreground"
            }, void 0, false, {
                fileName: "[project]/components/theme-toggle.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "p-2 hover:bg-muted rounded-full smooth-hover transition-colors",
        "aria-label": "Toggle theme",
        children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "w-5 h-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "w-5 h-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/components/theme-toggle.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/theme-toggle.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "iaaoD1LWaTNugaH6cPmI/NfxUYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cart-drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme-toggle.tsx [app-client] (ecmascript)");
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
function Header() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/shop",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Shop"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/men",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Men"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/women",
                                            className: "text-sm font-medium text-foreground hover:text-primary smooth-hover",
                                            children: "Women"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard",
                                                    className: "hidden sm:flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-full smooth-hover",
                                                    children: [
                                                        user.profilePic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: user.profilePic || "/placeholder.svg",
                                                            alt: user.name,
                                                            className: "w-6 h-6 rounded-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-6 h-6 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: user.name || 'User'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: logout,
                                                    className: "p-2 hover:bg-muted rounded-full smooth-hover",
                                                    title: "Logout",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                        className: "w-5 h-5 text-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "hidden sm:block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:shadow-lg smooth-transition hover:scale-105",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCartOpen(true),
                                            className: "relative p-2 hover:bg-muted rounded-full smooth-hover group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "w-5 h-5 text-foreground group-hover:text-primary smooth-transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this),
                                                items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute top-1 right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold animate-pulse",
                                                    children: items.length
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "md:hidden p-2 hover:bg-muted rounded-full smooth-hover",
                                            onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                            children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 139,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/men",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Men"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/women",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Women"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/shop",
                                    className: "block text-sm font-medium hover:text-primary smooth-hover",
                                    children: "Collections"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "block text-sm font-medium text-primary hover:underline",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 154,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "CwxmUUOB72yw62xbMTUtwcB17ec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Footer() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const footerBg = theme === 'dark' ? 'bg-white text-black' : 'bg-gray-100 text-foreground';
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
"[project]/lib/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: '/placeholder.svg?height=400&width=400',
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
        image: 'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 138,
        description: 'Soft knit polo and midi skirt pairing with contrast trims',
        season: 'All-Season'
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProductCard({ id, name, price, originalPrice, image, rating, reviews }) {
    _s();
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const imageSrc = image && image.startsWith('/placeholder.svg') ? '/placeholder.svg' : image;
    const handleAddToCart = ()=>{
        addItem({
            id,
            name,
            price,
            image
        });
    };
    const discount = Math.round((originalPrice - price) / originalPrice * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group scale-in",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageSrc || "/placeholder.svg",
                        alt: name,
                        className: `w-full aspect-square object-cover smooth-transition ${isHovered ? 'scale-110' : 'scale-100'}`
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 52,
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
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsWishlisted(!isWishlisted),
                        className: "absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: `w-5 h-5 smooth-transition ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 66,
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
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    "Add to Cart"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 80,
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
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                "Details"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAddToCart,
                                        className: "w-full bg-primary/70 text-white py-2 font-semibold rounded-lg hover:bg-primary smooth-transition text-sm",
                                        children: "Buy Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/product-card.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 106,
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
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 112,
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
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 111,
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
                                lineNumber: 126,
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
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/product-card.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/product-card.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "7qcpTB4D7Fq0WsFV1WSVqTByTS4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/shop/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-vertical.js [app-client] (ecmascript) <export default as Sliders>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ShopPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        50000
    ]);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('featured');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredAndSortedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ShopPage.useMemo[filteredAndSortedProducts]": ()=>{
            let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "ShopPage.useMemo[filteredAndSortedProducts].filtered": (product)=>{
                    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesCategory = !selectedCategory || product.category === selectedCategory;
                    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
                    return matchesSearch && matchesCategory && matchesPrice;
                }
            }["ShopPage.useMemo[filteredAndSortedProducts].filtered"]);
            switch(sortBy){
                case 'price-low':
                    filtered.sort({
                        "ShopPage.useMemo[filteredAndSortedProducts]": (a, b)=>a.price - b.price
                    }["ShopPage.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'price-high':
                    filtered.sort({
                        "ShopPage.useMemo[filteredAndSortedProducts]": (a, b)=>b.price - a.price
                    }["ShopPage.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'rating':
                    filtered.sort({
                        "ShopPage.useMemo[filteredAndSortedProducts]": (a, b)=>b.rating - a.rating
                    }["ShopPage.useMemo[filteredAndSortedProducts]"]);
                    break;
                case 'newest':
                    filtered.sort({
                        "ShopPage.useMemo[filteredAndSortedProducts]": (a, b)=>b.id - a.id
                    }["ShopPage.useMemo[filteredAndSortedProducts]"]);
                    break;
                default:
                    break;
            }
            return filtered;
        }
    }["ShopPage.useMemo[filteredAndSortedProducts]"], [
        searchQuery,
        selectedCategory,
        priceRange,
        sortBy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/shop/page.tsx",
                lineNumber: 51,
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
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "Discover our curated collection of premium garments"
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/shop/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/shop/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 md:px-6 py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `md:block space-y-6 ${isMobileFilterOpen ? 'block' : 'hidden'} md:col-span-1`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted/50 p-4 rounded-lg md:bg-transparent md:p-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between md:hidden mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold",
                                                        children: "Filters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsMobileFilterOpen(false),
                                                        className: "text-sm underline",
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold mb-2",
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                className: "absolute left-3 top-3 w-4 h-4 text-muted-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Search products...",
                                                                value: searchQuery,
                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                className: "w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-3 text-sm",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            'Men',
                                                            'Women',
                                                            'Kids',
                                                            'Accessories'
                                                        ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedCategory(selectedCategory === cat ? null : cat),
                                                                className: `w-full text-left px-3 py-2 rounded-lg smooth-transition ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'}`,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-3 text-sm",
                                                        children: "Price Range (₹)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "50000",
                                                                value: priceRange[1],
                                                                onChange: (e)=>setPriceRange([
                                                                        priceRange[0],
                                                                        parseInt(e.target.value)
                                                                    ]),
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "₹"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/shop/page.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: priceRange[0],
                                                                        onChange: (e)=>setPriceRange([
                                                                                parseInt(e.target.value) || 0,
                                                                                priceRange[1]
                                                                            ]),
                                                                        className: "w-16 px-2 py-1 border border-border rounded",
                                                                        min: "0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/shop/page.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/shop/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: priceRange[1],
                                                                        onChange: (e)=>setPriceRange([
                                                                                priceRange[0],
                                                                                parseInt(e.target.value) || 50000
                                                                            ]),
                                                                        className: "w-16 px-2 py-1 border border-border rounded",
                                                                        max: "50000"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/shop/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "₹"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/shop/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold mb-3 text-sm",
                                                        children: "Sort By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sortBy,
                                                        onChange: (e)=>setSortBy(e.target.value),
                                                        className: "w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "featured",
                                                                children: "Featured"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "newest",
                                                                children: "Newest"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "price-low",
                                                                children: "Price: Low to High"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "price-high",
                                                                children: "Price: High to Low"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "rating",
                                                                children: "Top Rated"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/shop/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/shop/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/shop/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-6 md:hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsMobileFilterOpen(!isMobileFilterOpen),
                                                    className: "flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted smooth-transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sliders$3e$__["Sliders"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/shop/page.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Filters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/shop/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: [
                                                        filteredAndSortedProducts.length,
                                                        " items"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/shop/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/shop/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "Showing ",
                                                    filteredAndSortedProducts.length,
                                                    " products"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/shop/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/shop/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        filteredAndSortedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-full text-center py-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-muted-foreground",
                                                    children: "No products found matching your filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/shop/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSearchQuery('');
                                                        setSelectedCategory(null);
                                                        setPriceRange([
                                                            0,
                                                            50000
                                                        ]);
                                                    },
                                                    className: "mt-4 text-primary hover:underline",
                                                    children: "Clear filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/shop/page.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/shop/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                            children: filteredAndSortedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                                    ...product
                                                }, product.id, false, {
                                                    fileName: "[project]/app/shop/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/shop/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/shop/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/shop/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/shop/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/shop/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ShopPage, "EYo7oYx1LbbpO4AGTO+cxvSW2CI=");
_c = ShopPage;
var _c;
__turbopack_context__.k.register(_c, "ShopPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_eb98ddd5._.js.map