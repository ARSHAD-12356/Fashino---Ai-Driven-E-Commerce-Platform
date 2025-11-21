module.exports = [
"[project]/lib/products.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/lib_products_ts_bf2ab57e._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/products.ts [app-ssr] (ecmascript)");
    });
});
}),
];