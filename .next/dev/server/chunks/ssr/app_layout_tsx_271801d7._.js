module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import _geist from 'next/font/google/target.css?{"path":"layout.tsx","import":"Geist","arguments":[{"subsets":["latin"]}],"variableName":"_geist"}';
import _geistMono from 'next/font/google/target.css?{"path":"layout.tsx","import":"Geist_Mono","arguments":[{"subsets":["latin"]}],"variableName":"_geistMono"}';
import _poppins from 'next/font/google/target.css?{"path":"layout.tsx","import":"Poppins","arguments":[{"weight":["400","500","600","700","900"],"subsets":["latin"]}],"variableName":"_poppins"}';
import dancingScript from 'next/font/google/target.css?{"path":"layout.tsx","import":"Dancing_Script","arguments":[{"weight":["400","500","600","700"],"subsets":["latin"],"variable":"--font-dancing"}],"variableName":"dancingScript"}';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from '@/app/providers';
import './globals.css';
export const metadata = {
    title: 'Fashino - Premium Fashion Store',
    description: 'Discover modern, luxury garments with curated collections for every occasion',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)'
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)'
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml'
            }
        ],
        apple: '/apple-icon.png'
    }
};
export default function RootLayout({ children }) {
    return /*#__PURE__*/ _jsxDEV("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ _jsxDEV("body", {
            className: `font-sans antialiased ${dancingScript.variable}`,
            children: [
                /*#__PURE__*/ _jsxDEV(Providers, {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(Analytics, {}, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_layout_tsx_271801d7._.js.map