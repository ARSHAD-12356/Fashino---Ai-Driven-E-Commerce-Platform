(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/dual-navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
var _s = __turbopack_context__.k.signature();
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User, LogOut, Moon, Sun, ChevronDown, Menu, X } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import { useWishlist } from '@/context/wishlist-context';
import { useTheme } from '@/context/theme-context';
import { CartDrawer } from '@/components/cart-drawer';
import { CategoryDropdown } from '@/components/category-dropdown';
import { getCategoryData } from '@/lib/category-data';
import { Logo } from '@/components/logo';
export function DualNavbar({ showCategoryBar = false }) {
    _s();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const { items } = useCart();
    const { items: wishlistItems } = useWishlist();
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const userMenuRef = useRef(null);
    const categoryRefs = useRef({});
    useEffect({
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
    useEffect({
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
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV("nav", {
                className: `sticky top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-black'}`,
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-6",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center justify-between h-20",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Logo, {
                                showIcon: true
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "hidden lg:flex items-center gap-8",
                                children: mainCategories.map((category)=>/*#__PURE__*/ _jsxDEV(Link, {
                                        href: `/${category.slug}`,
                                        className: "text-sm font-semibold hover:opacity-80 transition-opacity duration-200 relative group",
                                        children: [
                                            category.name,
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, category.slug, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center gap-3 md:gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 transition-all duration-300 ${isSearchFocused ? 'bg-white/20 ring-2 ring-white/30' : 'hover:bg-white/15'}`,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Search, {
                                                className: "w-4 h-4 text-white/80"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("input", {
                                                type: "text",
                                                placeholder: "Search for products...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                onFocus: ()=>setIsSearchFocused(true),
                                                onBlur: ()=>setIsSearchFocused(false),
                                                className: "bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-48 lg:w-64"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    isSearchFocused && /*#__PURE__*/ _jsxDEV("div", {
                                        className: "md:hidden absolute top-full left-0 right-0 bg-black p-4 border-t border-white/10",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex items-center gap-2 bg-white/10 rounded-full px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Search, {
                                                    className: "w-4 h-4 text-white/80"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("input", {
                                                    type: "text",
                                                    placeholder: "Search for products...",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    className: "bg-transparent outline-none text-sm text-white placeholder:text-white/60 flex-1",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    onClick: ()=>setIsSearchFocused(false),
                                                    className: "p-1 hover:bg-white/10 rounded",
                                                    children: /*#__PURE__*/ _jsxDEV(X, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    !isSearchFocused && /*#__PURE__*/ _jsxDEV("button", {
                                        className: "md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-200",
                                        onClick: ()=>setIsSearchFocused(true),
                                        children: /*#__PURE__*/ _jsxDEV(Search, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        onClick: toggleTheme,
                                        className: "p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Toggle theme",
                                        children: theme === 'dark' ? /*#__PURE__*/ _jsxDEV(Sun, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ _jsxDEV(Moon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Link, {
                                        href: "/wishlist",
                                        className: "relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Wishlist",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Heart, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            wishlistItems.length > 0 && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold",
                                                children: wishlistItems.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("button", {
                                        onClick: ()=>setIsCartOpen(true),
                                        className: "relative p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110",
                                        title: "Shopping Cart",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(ShoppingCart, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            items.length > 0 && /*#__PURE__*/ _jsxDEV("span", {
                                                className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold",
                                                children: items.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    user ? /*#__PURE__*/ _jsxDEV("div", {
                                        className: "relative",
                                        ref: userMenuRef,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("button", {
                                                onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                                className: "flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-full transition-all duration-200",
                                                children: [
                                                    user.profilePic ? /*#__PURE__*/ _jsxDEV("img", {
                                                        src: user.profilePic,
                                                        alt: user.name,
                                                        className: "w-8 h-8 rounded-full object-cover ring-2 ring-white/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",
                                                        children: /*#__PURE__*/ _jsxDEV(User, {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dual-navbar.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        className: "hidden md:block text-sm font-semibold",
                                                        children: user.name || 'User'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                        className: `w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            isUserMenuOpen && /*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "p-4 border-b border-border",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "font-semibold text-foreground",
                                                                children: user.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        className: "py-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                                href: "/dashboard",
                                                                className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground",
                                                                onClick: ()=>setIsUserMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(User, {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: "text-sm",
                                                                        children: "My Account"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                                href: "/wishlist",
                                                                className: "flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-foreground",
                                                                onClick: ()=>setIsUserMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(Heart, {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: "text-sm",
                                                                        children: "Wishlist"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("button", {
                                                                onClick: ()=>{
                                                                    logout();
                                                                    setIsUserMenuOpen(false);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-4 py-2.5 hover:bg-muted transition-colors duration-200 text-left text-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(LogOut, {
                                                                        className: "w-4 h-4 text-muted-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 252,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        className: "text-sm",
                                                                        children: "Logout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/dual-navbar.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/dual-navbar.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dual-navbar.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ _jsxDEV(Link, {
                                        href: "/login",
                                        className: "px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:scale-105",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dual-navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dual-navbar.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            showCategoryBar && /*#__PURE__*/ _jsxDEV("nav", {
                className: "sticky top-20 z-40 shadow-[0_12px_35px_rgba(139,15,29,0.35)]",
                "aria-label": "Category navigation",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "bg-gradient-to-r from-[#7a0d1c] via-[#8f101f] to-[#b71c27]",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between lg:justify-center h-16 gap-4 text-white",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "hidden lg:flex items-center gap-6 md:gap-8",
                                    children: bottomCategories.map((category, index)=>{
                                        const categoryData = getCategoryData(category.slug);
                                        // Determine if this is a left-side category (first 2)
                                        const isLeftSide = index < 2;
                                        return /*#__PURE__*/ _jsxDEV("div", {
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
                                                /*#__PURE__*/ _jsxDEV(Link, {
                                                    href: `/${category.slug}`,
                                                    className: "group text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white transition-colors duration-200 relative py-2",
                                                    children: [
                                                        category.name,
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            className: `absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${activeCategory === category.slug ? 'w-full' : 'w-0 group-hover:w-full'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/dual-navbar.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this),
                                                activeCategory === category.slug && categoryData && /*#__PURE__*/ _jsxDEV(CategoryDropdown, {
                                                    category: category,
                                                    data: categoryData,
                                                    onClose: ()=>setActiveCategory(null),
                                                    isLeftSide: isLeftSide
                                                }, void 0, false, {
                                                    fileName: "[project]/components/dual-navbar.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, category.slug, true, {
                                            fileName: "[project]/components/dual-navbar.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/dual-navbar.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors duration-[220ms] ease-out border border-white/30",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ _jsxDEV(X, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ _jsxDEV(Menu, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/dual-navbar.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dual-navbar.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        isMobileMenuOpen && /*#__PURE__*/ _jsxDEV("div", {
                            className: "lg:hidden py-4 px-4 animate-in fade-in slide-in-from-top-1 duration-[220ms] ease-out bg-[#6c0a18]/90 backdrop-blur",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "space-y-2",
                                children: bottomCategories.map((category)=>/*#__PURE__*/ _jsxDEV(Link, {
                                        href: `/${category.slug}`,
                                        className: "block px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-[220ms] ease-out font-medium text-sm uppercase tracking-wide",
                                        onClick: ()=>setIsMobileMenuOpen(false),
                                        children: category.name
                                    }, category.slug, false, {
                                        fileName: "[project]/components/dual-navbar.tsx",
                                        lineNumber: 342,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dual-navbar.tsx",
                                lineNumber: 340,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/dual-navbar.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dual-navbar.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV(CartDrawer, {
                isOpen: isCartOpen,
                onClose: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/dual-navbar.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DualNavbar, "YB6grYB6jtSlN3pOL0TM8Bn/L5Q=", false, function() {
    return [
        useCart,
        useWishlist,
        useAuth,
        useTheme
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
"[project]/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const carouselSlides = [
    {
        id: 1,
        title: 'Winter Collection',
        subtitle: 'Season 2024-2025',
        description: 'Discover our premium winter collection with exclusive designs and cozy fabrics.',
        image: '/modern-fashion-clothing-hero-1.jpg',
        cta: 'Shop Now'
    },
    {
        id: 2,
        title: 'Warm & Stylish',
        subtitle: 'Winter Essentials',
        description: 'Stay warm and fashionable with our curated winter wardrobe collection.',
        image: '/trendy-fashion-style-lookbook-3.jpg',
        cta: 'Explore Collection'
    },
    {
        id: 3,
        title: 'Luxury Winter Wear',
        subtitle: 'Premium Quality',
        description: 'Experience ultimate comfort with our luxury winter wear made from finest materials.',
        image: '/modern-womens-fashion-clothing.jpg',
        cta: 'View Now'
    }
];
function Hero() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlay, setIsAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!isAutoPlay) return;
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "Hero.useEffect.timer": (prev)=>(prev + 1) % carouselSlides.length
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 5000);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        isAutoPlay
    ]);
    const goToSlide = (index)=>{
        setCurrentSlide(index);
        setIsAutoPlay(false);
    };
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % carouselSlides.length);
        setIsAutoPlay(false);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + carouselSlides.length) % carouselSlides.length);
        setIsAutoPlay(false);
    };
    const slide = carouselSlides[currentSlide];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-screen overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    carouselSlides.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: s.image || "/placeholder.svg",
                                    alt: s.title,
                                    className: "w-full h-full object-cover",
                                    onError: (e)=>{
                                        const target = e.target;
                                        target.src = "/placeholder.svg";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/40 dark:bg-black/50"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, s.id, true, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 slide-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold uppercase tracking-wider text-white",
                                            children: slide.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight text-balance",
                                        children: slide.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed",
                                        children: slide.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-lg smooth-transition hover:scale-105 active:scale-95",
                                                children: slide.cta
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 smooth-transition hover:scale-105 active:scale-95",
                                                children: "Browse More"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prevSlide,
                onMouseEnter: ()=>setIsAutoPlay(false),
                className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white smooth-transition backdrop-blur-sm",
                "aria-label": "Previous slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: nextSlide,
                onMouseEnter: ()=>setIsAutoPlay(false),
                className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white smooth-transition backdrop-blur-sm",
                "aria-label": "Next slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3",
                children: carouselSlides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToSlide(index),
                        className: `smooth-transition h-2 rounded-full ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 left-1/2 -translate-x-1/2 z-10 md:block hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2 animate-bounce",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-white/70",
                            children: "Scroll to explore"
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-6 text-white",
                            fill: "none",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Hero, "jEUVMd9jK9kaJcFUDnN+ZpbCiFs=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/category-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryGrid",
    ()=>CategoryGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const categories = [
    {
        id: 1,
        name: 'Men',
        image: '/modern-mens-fashion-clothing.jpg',
        href: '/men'
    },
    {
        id: 2,
        name: 'Women',
        image: '/modern-womens-fashion-clothing.jpg',
        href: '/women'
    },
    {
        id: 3,
        name: 'Kids',
        image: '/kids-fashion-clothing-collection.jpg',
        href: '/kids'
    },
    {
        id: 4,
        name: 'Accessories',
        image: '/designer-fashion-accessories.jpg',
        href: '/accessories'
    }
];
function CategoryGrid() {
    _s();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4 md:px-6 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold tracking-tight mb-4",
                            children: "Shop by Category"
                        }, void 0, false, {
                            fileName: "[project]/components/category-grid.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Explore our curated collections"
                        }, void 0, false, {
                            fileName: "[project]/components/category-grid.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/category-grid.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: category.href,
                            className: "group relative overflow-hidden rounded-lg aspect-square cursor-pointer block",
                            onMouseEnter: ()=>setHoveredId(category.id),
                            onMouseLeave: ()=>setHoveredId(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: category.image || "/placeholder.svg",
                                    alt: category.name,
                                    className: `w-full h-full object-cover smooth-transition ${hoveredId === category.id ? 'scale-110' : 'scale-100'}`
                                }, void 0, false, {
                                    fileName: "[project]/components/category-grid.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-black/40 group-hover:bg-black/50 smooth-transition flex items-end p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "transform transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-white mb-2",
                                                children: category.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/category-grid.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold text-white opacity-0 group-hover:opacity-100 smooth-transition transform group-hover:translate-y-0 translate-y-2 inline-block",
                                                children: "Explore →"
                                            }, void 0, false, {
                                                fileName: "[project]/components/category-grid.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/category-grid.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/category-grid.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.id, true, {
                            fileName: "[project]/components/category-grid.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/category-grid.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/category-grid.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/category-grid.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(CategoryGrid, "W+Gi/GY1c+T76G87axG09SVXkEc=");
_c = CategoryGrid;
var _c;
__turbopack_context__.k.register(_c, "CategoryGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _s = __turbopack_context__.k.signature();
'use client';
import { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useWishlist } from '@/context/wishlist-context';
import Link from 'next/link';
import { getProductImage, getFallbackImage } from '@/lib/utils';
export function ProductCard({ id, name, price, originalPrice, image, rating, reviews, category, subcategory, stock }) {
    _s();
    const [isHovered, setIsHovered] = useState(false);
    const { addItem } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(id);
    const handleWishlistToggle = ()=>{
        if (isWishlisted) {
            removeFromWishlist(id);
        } else {
            addToWishlist(id);
        }
    };
    const imageSrc = getProductImage(image, category, subcategory, name);
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
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "group scale-in",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-xl smooth-transition mb-4",
                children: [
                    /*#__PURE__*/ _jsxDEV("img", {
                        src: imageSrc,
                        alt: name,
                        onError: (e)=>{
                            e.currentTarget.src = getFallbackImage(name, category, subcategory);
                        },
                        className: `w-full aspect-square object-cover smooth-transition ${isHovered ? 'scale-110' : 'scale-100'}`
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
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
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: handleWishlistToggle,
                        className: "absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg smooth-transition opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75",
                        children: /*#__PURE__*/ _jsxDEV(Heart, {
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
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 smooth-transition flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: handleAddToCart,
                                className: "w-full bg-primary text-primary-foreground py-2 font-semibold rounded-lg hover:bg-primary/90 smooth-transition flex items-center justify-center gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(ShoppingCart, {
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
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Link, {
                                        href: `/products/${id}`,
                                        children: /*#__PURE__*/ _jsxDEV("button", {
                                            className: "w-full bg-white/20 text-white py-2 font-semibold rounded-lg hover:bg-white/30 smooth-transition flex items-center justify-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Eye, {
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
                                    /*#__PURE__*/ _jsxDEV(Link, {
                                        href: `/products/${id}`,
                                        children: /*#__PURE__*/ _jsxDEV("button", {
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
            /*#__PURE__*/ _jsxDEV("div", {
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary smooth-transition",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/components/product-card.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex gap-0.5",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ _jsxDEV("span", {
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
                            /*#__PURE__*/ _jsxDEV("span", {
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
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
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
                            /*#__PURE__*/ _jsxDEV("span", {
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
                    /*#__PURE__*/ _jsxDEV("p", {
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
        useCart,
        useWishlist
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
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
"[project]/components/featured-products.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedProducts",
    ()=>FeaturedProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
'use client';
;
;
;
function FeaturedProducts() {
    const featuredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4 md:px-6 bg-secondary/3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold tracking-tight mb-4",
                            children: "Featured Collection"
                        }, void 0, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Handpicked items for the season"
                        }, void 0, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/featured-products.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: featuredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                            ...product
                        }, product.id, false, {
                            fileName: "[project]/components/featured-products.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/featured-products.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/featured-products.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/featured-products.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = FeaturedProducts;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProducts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/winter-collection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WinterCollection",
    ()=>WinterCollection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function WinterCollection() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const winterProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.season === 'Winter');
    // Get unique categories from winter products
    const categories = Array.from(new Set(winterProducts.map((p)=>p.category)));
    // Filter by selected category
    const filteredProducts = selectedCategory ? winterProducts.filter((p)=>p.category === selectedCategory) : winterProducts;
    // Group by subcategory for display
    const groupedBySubcategory = filteredProducts.reduce((acc, product)=>{
        const subcat = product.subcategory || 'Other';
        if (!acc[subcat]) {
            acc[subcat] = [];
        }
        acc[subcat].push(product);
        return acc;
    }, {});
    if (winterProducts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-4 md:px-6 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold tracking-tight mb-4",
                            children: "Winter Collection"
                        }, void 0, false, {
                            fileName: "[project]/components/winter-collection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground",
                            children: "Stay warm and stylish with our premium winter essentials"
                        }, void 0, false, {
                            fileName: "[project]/components/winter-collection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/winter-collection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-wrap justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedCategory(null),
                            className: `px-6 py-2 rounded-full smooth-transition ${selectedCategory === null ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`,
                            children: "All Categories"
                        }, void 0, false, {
                            fileName: "[project]/components/winter-collection.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(category),
                                className: `px-6 py-2 rounded-full smooth-transition ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`,
                                children: category
                            }, category, false, {
                                fileName: "[project]/components/winter-collection.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/winter-collection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                Object.entries(groupedBySubcategory).map(([subcategory, subcategoryProducts])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-6",
                                children: subcategory
                            }, void 0, false, {
                                fileName: "[project]/components/winter-collection.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                children: subcategoryProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                        ...product
                                    }, product.id, false, {
                                        fileName: "[project]/components/winter-collection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/winter-collection.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, subcategory, true, {
                        fileName: "[project]/components/winter-collection.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/winter-collection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/winter-collection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(WinterCollection, "RgHDLEuJ1Ja2GayX64Y/niiK+6s=");
_c = WinterCollection;
var _c;
__turbopack_context__.k.register(_c, "WinterCollection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/customer-reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerReviews",
    ()=>CustomerReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const reviews = [
    {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely love my purchase! The quality is exceptional and the fit is perfect. Fast shipping too!',
        product: 'Premium Essentials Tee',
        date: '2 days ago',
        verified: true
    },
    {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        comment: 'Best jacket I\'ve ever owned. Great for winter and looks stylish. Highly recommend!',
        product: 'Sports Performance Jacket',
        date: '5 days ago',
        verified: true
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        rating: 5,
        comment: 'The dress exceeded my expectations. Perfect for special occasions. Will definitely shop here again!',
        product: 'Silk Evening Dress',
        date: '1 week ago',
        verified: true
    },
    {
        id: 4,
        name: 'David Thompson',
        rating: 5,
        comment: 'Comfortable, stylish, and durable. Exactly what I was looking for. Great value for money!',
        product: 'Comfort Fit Jeans',
        date: '1 week ago',
        verified: true
    },
    {
        id: 5,
        name: 'Lisa Anderson',
        rating: 5,
        comment: 'Amazing quality! The material feels premium and the design is on point. Very satisfied!',
        product: 'Elegant Blazer',
        date: '2 weeks ago',
        verified: true
    },
    {
        id: 6,
        name: 'James Wilson',
        rating: 5,
        comment: 'Fast delivery and excellent customer service. The product quality is outstanding. 10/10!',
        product: 'Classic White Tee',
        date: '2 weeks ago',
        verified: true
    }
];
function CustomerReviews() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerReviews.useEffect": ()=>{
            const interval = setInterval({
                "CustomerReviews.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "CustomerReviews.useEffect.interval": (prev)=>(prev + 1) % reviews.length
                    }["CustomerReviews.useEffect.interval"]);
                }
            }["CustomerReviews.useEffect.interval"], 5000) // Change every 5 seconds
            ;
            return ({
                "CustomerReviews.useEffect": ()=>clearInterval(interval)
            })["CustomerReviews.useEffect"];
        }
    }["CustomerReviews.useEffect"], []);
    const goToPrevious = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + reviews.length) % reviews.length);
    };
    const goToNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % reviews.length);
    };
    const goToSlide = (index)=>{
        setCurrentIndex(index);
    };
    const currentReview = reviews[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4",
                            children: "What Our Customers Say"
                        }, void 0, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                            children: "Don't just take our word for it. See what thousands of satisfied customers have to say about their shopping experience."
                        }, void 0, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/customer-reviews.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center min-h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full text-center space-y-6 animate-in fade-in slide-in-from-right duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-6 justify-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary font-bold text-2xl",
                                                        children: currentReview.name.split(' ').map((n)=>n[0]).join('')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/customer-reviews.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 text-left max-w-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-xl text-foreground",
                                                                    children: currentReview.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 23
                                                                }, this),
                                                                currentReview.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full font-medium",
                                                                    children: "Verified Purchase"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/customer-reviews.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted-foreground mb-3",
                                                            children: currentReview.product
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/customer-reviews.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 mb-4",
                                                            children: [
                                                                ...Array(5)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: `w-5 h-5 ${i < currentReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`
                                                                }, i, false, {
                                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/customer-reviews.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/customer-reviews.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative max-w-2xl mx-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                    className: "absolute -top-4 -left-4 w-12 h-12 text-primary/10"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10 italic",
                                                    children: [
                                                        '"',
                                                        currentReview.comment,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/customer-reviews.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/customer-reviews.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: currentReview.date
                                        }, void 0, false, {
                                            fileName: "[project]/components/customer-reviews.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/customer-reviews.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToPrevious,
                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary smooth-transition flex items-center justify-center shadow-lg z-10",
                            "aria-label": "Previous review",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-6 h-6 text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToNext,
                            className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary smooth-transition flex items-center justify-center shadow-lg z-10",
                            "aria-label": "Next review",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-6 h-6 text-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/customer-reviews.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 mt-8",
                    children: reviews.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>goToSlide(index),
                            className: `w-3 h-3 rounded-full smooth-transition ${index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`,
                            "aria-label": `Go to review ${index + 1}`
                        }, index, false, {
                            fileName: "[project]/components/customer-reviews.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/customer-reviews.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-3 text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-6 h-6 fill-yellow-400 text-yellow-400"
                                    }, i, false, {
                                        fileName: "[project]/components/customer-reviews.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-foreground text-xl",
                                children: "4.9/5"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "Average Rating"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: "10,000+ Reviews"
                            }, void 0, false, {
                                fileName: "[project]/components/customer-reviews.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/customer-reviews.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/customer-reviews.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/customer-reviews.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/customer-reviews.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(CustomerReviews, "tPjzCc9H5UuFdWNuAHYoD0K4UOk=");
_c = CustomerReviews;
var _c;
__turbopack_context__.k.register(_c, "CustomerReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/newsletter-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterSection",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NewsletterSection() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscribed, setSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        setSubscribed(true);
        setEmail('');
        setIsSubmitting(false);
        setTimeout(()=>setSubscribed(false), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/newsletter-section.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/newsletter-section.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/newsletter-section.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold text-white",
                                    children: [
                                        "Join the Fashino Family ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "inline-block w-8 h-8 md:w-10 md:h-10 text-red-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newsletter-section.tsx",
                                            lineNumber: 38,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newsletter-section.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-blue-100 max-w-2xl mx-auto",
                                    children: "Exclusive offers, early access, and style tips delivered directly to your inbox."
                                }, void 0, false, {
                                    fileName: "[project]/components/newsletter-section.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newsletter-section.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "max-w-lg mx-auto space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300 group-focus-within:text-white transition-colors z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/newsletter-section.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "Enter your email address",
                                            className: "w-full pl-14 pr-4 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder:text-blue-200 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/20 smooth-transition text-base",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/newsletter-section.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/newsletter-section.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting || subscribed,
                                    className: "w-full py-4 bg-white text-blue-900 rounded-2xl font-bold text-lg hover:bg-blue-50 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group",
                                    children: subscribed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/newsletter-section.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            "Subscribed!"
                                        ]
                                    }, void 0, true) : isSubmitting ? 'Subscribing...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Subscribe Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/components/newsletter-section.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/newsletter-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/newsletter-section.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-blue-200/80 max-w-md mx-auto",
                            children: "We respect your privacy. You can unsubscribe anytime."
                        }, void 0, false, {
                            fileName: "[project]/components/newsletter-section.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/newsletter-section.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/newsletter-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/newsletter-section.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(NewsletterSection, "Mrl8MwO5KxwN8MAwj9kF/FPnjIw=");
_c = NewsletterSection;
var _c;
__turbopack_context__.k.register(_c, "NewsletterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/context/auth-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const loadUser = {
                "AuthProvider.useEffect.loadUser": async ()=>{
                    const saved = localStorage.getItem('user');
                    if (saved) {
                        try {
                            const parsedUser = JSON.parse(saved);
                            setUser(parsedUser);
                            // Fetch latest profile from database
                            try {
                                const response = await fetch('/api/auth/profile', {
                                    headers: {
                                        'x-user-id': parsedUser.id
                                    }
                                });
                                if (response.ok) {
                                    const data = await response.json();
                                    if (data.user) {
                                        setUser(data.user);
                                        localStorage.setItem('user', JSON.stringify(data.user));
                                    }
                                }
                            } catch (error) {
                                console.log('Could not fetch profile from DB, using cached:', error);
                            }
                        } catch (error) {
                            console.log('[v0] Error parsing user from localStorage:', error);
                            localStorage.removeItem('user');
                        }
                    }
                    setIsLoading(false);
                }
            }["AuthProvider.useEffect.loadUser"];
            loadUser();
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    const signup = async (email, name, password)=>{
        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    name,
                    password
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Signup failed');
            }
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    const updateProfile = async (updates)=>{
        if (user) {
            try {
                const response = await fetch('/api/auth/profile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-user-id': user.id
                    },
                    body: JSON.stringify(updates)
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.user) {
                        setUser(data.user);
                        localStorage.setItem('user', JSON.stringify(data.user));
                    }
                } else {
                    // Fallback to local update if API fails
                    const updatedUser = {
                        ...user,
                        ...updates
                    };
                    setUser(updatedUser);
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                }
            } catch (error) {
                // Fallback to local update if API fails
                const updatedUser = {
                    ...user,
                    ...updates
                };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            login,
            signup,
            logout,
            updateProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/auth-context.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ai-chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIChatbot",
    ()=>AIChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AIChatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            if (isOpen && messages.length === 0) {
                const greeting = `Hello${user ? ` ${user.name}` : ''}! 👋 I'm your shopping assistant. I can help you find products, check availability, and prices. What are you looking for today?`;
                setMessages([
                    {
                        id: '1',
                        text: greeting,
                        sender: 'bot',
                        timestamp: new Date()
                    }
                ]);
            }
        }
    }["AIChatbot.useEffect"], [
        isOpen,
        user,
        messages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChatbot.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["AIChatbot.useEffect"], [
        messages
    ]);
    const searchProducts = (query)=>{
        const lowerQuery = query.toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.name.toLowerCase().includes(lowerQuery) || product.category.toLowerCase().includes(lowerQuery) || product.subcategory?.toLowerCase().includes(lowerQuery) || product.description.toLowerCase().includes(lowerQuery));
    };
    const generateBotResponse = (userMessage)=>{
        const lowerMessage = userMessage.toLowerCase();
        // Greeting patterns
        if (lowerMessage.match(/hi|hello|hey|good morning|good afternoon|good evening/)) {
            return `Hello${user ? ` ${user.name}` : ''}! 👋 How can I help you find the perfect product today?`;
        }
        // Price queries
        if (lowerMessage.match(/price|cost|how much|₹|rupee/)) {
            const foundProducts = searchProducts(userMessage);
            if (foundProducts.length > 0) {
                const product = foundProducts[0];
                return `The ${product.name} is priced at ₹${product.price.toLocaleString('en-IN')} (Original: ₹${product.originalPrice.toLocaleString('en-IN')}). There's a ${Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% discount! 🎉`;
            }
            return "I couldn't find that product. Could you please specify the product name? For example, 'Premium Essentials Tee' or 'Winter Thermal Tee'.";
        }
        // Availability queries
        if (lowerMessage.match(/available|in stock|stock|have|do you have/)) {
            const foundProducts = searchProducts(userMessage);
            if (foundProducts.length > 0) {
                const product = foundProducts[0];
                const inStock = product.inStock ?? true;
                return inStock ? `Yes! The ${product.name} is currently in stock. You can add it to your cart right away! ✅` : `I'm sorry, the ${product.name} is currently out of stock. Would you like me to suggest similar products?`;
            }
            return "I couldn't find that product. Could you please specify the product name?";
        }
        // Product search
        const foundProducts = searchProducts(userMessage);
        if (foundProducts.length > 0) {
            if (foundProducts.length === 1) {
                const product = foundProducts[0];
                return `I found "${product.name}"! It's a ${product.category} ${product.subcategory} priced at ₹${product.price.toLocaleString('en-IN')}. ${product.inStock ?? true ? 'It\'s in stock!' : 'Currently out of stock.'} Would you like to know more?`;
            } else {
                const productList = foundProducts.slice(0, 5).map((p)=>`• ${p.name} - ₹${p.price.toLocaleString('en-IN')}`).join('\n');
                return `I found ${foundProducts.length} products matching your search:\n\n${productList}\n\nWould you like more details about any of these?`;
            }
        }
        // Default response
        return "I'm here to help you find products! You can ask me about:\n• Product availability\n• Prices\n• Product search\n\nTry asking: 'Do you have winter jackets?' or 'What's the price of Premium Essentials Tee?'";
    };
    const handleSend = async ()=>{
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        setIsTyping(true);
        // Simulate typing delay
        setTimeout(()=>{
            const botResponse = {
                id: (Date.now() + 1).toString(),
                text: generateBotResponse(input),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    botResponse
                ]);
            setIsTyping(false);
        }, 1000);
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl smooth-transition hover:scale-110 flex items-center justify-center z-50",
                "aria-label": "Open chat",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/ai-chatbot.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ai-chatbot.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 right-6 w-96 h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chatbot.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold",
                                        children: "Shopping Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chatbot.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-chatbot.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "hover:bg-primary/80 rounded-full p-1 smooth-transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-chatbot.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai-chatbot.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-chatbot.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                        children: [
                            messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`,
                                    children: [
                                        message.sender === 'bot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai-chatbot.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chatbot.tsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[80%] rounded-lg p-3 ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm whitespace-pre-wrap",
                                                children: message.text
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai-chatbot.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chatbot.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        message.sender === 'user' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai-chatbot.tsx",
                                                lineNumber: 184,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chatbot.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/components/ai-chatbot.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "w-4 h-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-chatbot.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chatbot.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted rounded-lg p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '0ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ai-chatbot.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '150ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ai-chatbot.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '300ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ai-chatbot.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ai-chatbot.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chatbot.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-chatbot.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/ai-chatbot.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-chatbot.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyPress: handleKeyPress,
                                    placeholder: "Ask about products, prices, availability...",
                                    className: "flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-chatbot.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: !input.trim(),
                                    className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-chatbot.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-chatbot.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ai-chatbot.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ai-chatbot.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai-chatbot.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(AIChatbot, "TKjdABV3JP2zXfevrxr4Ox+QI9A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AIChatbot;
var _c;
__turbopack_context__.k.register(_c, "AIChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b75eeba4._.js.map