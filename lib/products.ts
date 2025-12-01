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
    season: 'All-Season',
    colors: ["Slate Grey", "Charcoal", "Maroon", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    variantImages: [
      { color: "Slate Grey", url: "/mens-premium-t-shirt.jpg" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    colors: ["White", "Olive", "Navy Blue", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    variantImages: [
      { color: "White", url: "/mens-white-tshirt.jpg" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    colors: ["Classic Black", "Black", "Maroon", "Olive"],
    sizes: ["M", "L", "XL"],
    variantImages: [
      { color: "Classic Black", url: "/mens-graphic-tshirt.jpg" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 4,
    name: 'Winter Thermal Tee',
    category: 'Men',
    subcategory: 'T-Shirts',
    price: 1,
    originalPrice: 5499,
    image: '/mens-winter-thermal-shirt.jpg',
    rating: 4.9,
    reviews: 203,
    description: 'Warm thermal t-shirt perfect for winter season',
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "White", "Forest Green", "Maroon"],
    variantImages: [
      { color: "Charcoal", url: "/mens-winter-thermal-shirt.jpg" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Charcoal", "Olive", "Forest Green"],
    variantImages: [
      { color: "Navy", url: "/mens-polo-tshirt.jpg" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 6,
    name: 'Striped Cotton Tee',
    category: 'Men',
    subcategory: 'T-Shirts',
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Forest Green", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-striped-tshirt.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Olive", "Forest Green", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-vneck-sports-shirt.jpg" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Olive", "Forest Green", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-henley-thermal-shirt.jpg" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Maroon", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-crew-neck-tshirt.jpg" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 10,
    name: 'Long Sleeve Thermal',
    category: 'Men',
    subcategory: 'T-Shirts',
    price: 3999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=2000&auto=format&fit=crop',
    rating: 4.9,
    reviews: 198,
    description: 'Premium long sleeve thermal shirt for winter',
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Forest Green", "White", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Blue Striped", "Classic White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-casual-oxford-shirt.jpg" },
      { color: "Blue Striped", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Grey", "Blue Striped", "Pink"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-formal-white-shirt.jpg" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue Striped", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Grey", "Sky Blue", "Pink"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-linen-summer-shirt.jpg" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" },
      { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Blue Striped", "Black", "Classic White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-denim-shirt.jpg" },
      { color: "Blue Striped", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
      { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Navy", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-checkered-winter-shirt.jpg" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Sky Blue", "Classic White", "Pink"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-dress-shirt.jpg" },
      { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Classic White", "Blue Striped", "Sky Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-flannel-winter-shirt.jpg" },
      { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue Striped", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 18,
    name: 'Striped Business Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 4299,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHNoaXJ0fGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 112,
    description: 'Professional striped shirt for business',
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Pink", "Black", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHNoaXJ0fGVufDB8fDB8fHww" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 19,
    name: 'Corduroy Winter Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 4899,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHNoaXJ0fGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 134,
    description: 'Textured corduroy shirt for winter wear',
    season: 'Winter',
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Navy", "Classic White", "Sky Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHNoaXJ0fGVufDB8fDB8fHww" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
      { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 20,
    name: 'Slim Fit Casual Shirt',
    category: 'Men',
    subcategory: 'Shirts',
    price: 3599,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 167,
    description: 'Modern slim fit casual shirt',
    season: 'All-Season',
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Pink", "Sky Blue", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwc2hpcnR8ZW58MHx8MHx8fDA%3D" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
      { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    season: 'All-Season',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Khaki", "Black", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-comfort-fit-jeans.jpg" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 22,
    name: 'Black Slim Fit Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 3799,
    originalPrice: 6299,
    image: 'https://images.unsplash.com/photo-1541840031508-326b77c9a17e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 189,
    description: 'Sleek black slim fit jeans',
    season: 'All-Season',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Navy", "Khaki", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 23,
    name: 'Cargo Winter Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 4799,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 145,
    description: 'Warm cargo pants for winter',
    season: 'Winter',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Grey", "Navy", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1584865288642-42078afe6942?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 24,
    name: 'Navy Chino Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 123,
    description: 'Classic navy chino pants for any occasion',
    season: 'All-Season',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Navy", "Black", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 25,
    name: 'Formal Black Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 178,
    description: 'Premium formal black trousers',
    season: 'All-Season',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Olive", "Navy", "Khaki"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 26,
    name: 'Casual Grey Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 3299,
    originalPrice: 5799,
    image: 'https://images.unsplash.com/photo-1552904219-f4b87efe8792?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 156,
    description: 'Comfortable grey casual pants',
    season: 'All-Season',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Beige", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1552904219-f4b87efe8792?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 27,
    name: 'Thermal Winter Trousers',
    category: 'Men',
    subcategory: 'Pants',
    price: 5299,
    originalPrice: 8499,
    image: 'https://images.unsplash.com/photo-1678222532251-2f303290c1e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 167,
    description: 'Insulated thermal trousers for winter',
    season: 'Winter',
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy Blue", "Khaki", "Navy", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1678222532251-2f303290c1e5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 28,
    name: 'Light Blue Denim Jeans',
    category: 'Men',
    subcategory: 'Pants',
    price: 3599,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Classic light blue denim jeans',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Beige", "Olive", "Khaki"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 29,
    name: 'Woolen Winter Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1604182440345-4a82e1c3876b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Premium woolen pants for cold weather',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Khaki", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1604182440345-4a82e1c3876b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 30,
    name: 'Beige Chino Pants',
    category: 'Men',
    subcategory: 'Pants',
    price: 3699,
    originalPrice: 6199,
    image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 112,
    description: 'Versatile beige chino pants',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Beige", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1553247407-23251ce81f59?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMHBhbnRzfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Charcoal", "Black", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/mens-sports-jacket.jpg" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 32,
    name: 'Winter Puffer Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 9999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1675877879221-871aa9f7c314?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwamFja2V0fGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 187,
    description: 'Warm puffer jacket for extreme winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwamFja2V0fGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 33,
    name: 'Denim Casual Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 5999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 134,
    description: 'Classic denim jacket for everyday wear',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Black", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 34,
    name: 'Leather Biker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 12999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 156,
    description: 'Premium leather biker jacket',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 35,
    name: 'Wool Winter Blazer',
    category: 'Men',
    subcategory: 'Jackets',
    price: 8999,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1654719796836-62b889d4598d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Elegant wool blazer for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "White", "Forest Green", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1654719796836-62b889d4598d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwamFja2V0fGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 36,
    name: 'Bomber Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 6999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1760551600982-d8ecd70b709f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Trendy bomber jacket for casual style',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1760551600982-d8ecd70b709f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 37,
    name: 'Quilted Winter Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 8499,
    originalPrice: 13499,
    image: 'https://images.unsplash.com/photo-1597582927786-bae43be837a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 167,
    description: 'Stylish quilted jacket for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Olive", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1597582927786-bae43be837a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 38,
    name: 'Windbreaker Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 5499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1649768722421-bb3e728fb83d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Lightweight windbreaker for outdoor activities',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Maroon", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1649768722421-bb3e728fb83d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 39,
    name: 'Formal Black Blazer',
    category: 'Men',
    subcategory: 'Jackets',
    price: 7499,
    originalPrice: 12499,
    image: 'https://images.unsplash.com/photo-1759873911627-09f2f184708d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Professional formal black blazer',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Olive", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1759873911627-09f2f184708d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 40,
    name: 'Down Filled Winter Coat',
    category: 'Men',
    subcategory: 'Jackets',
    price: 11999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1601027847853-ea31bd3d5787?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    reviews: 178,
    description: 'Premium down-filled winter coat',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1601027847853-ea31bd3d5787?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Grey", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/womens-floral-summer-top.jpg" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 42,
    name: 'Winter Thermal Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 3699,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1633828788625-6af09e1911f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 134,
    description: 'Warm thermal top for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Maroon", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1633828788625-6af09e1911f0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 43,
    name: 'Casual Tank Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 1799,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1591530347006-82116c5bf6d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 89,
    description: 'Simple and versatile tank top',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Black", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1591530347006-82116c5bf6d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 44,
    name: 'Silk Camisole',
    category: 'Women',
    subcategory: 'Tops',
    price: 3199,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1660067262025-271603ac1283?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 123,
    description: 'Luxurious silk camisole',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1660067262025-271603ac1283?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 45,
    name: 'Striped Casual Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1633828907487-82fc7fac65e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 112,
    description: 'Classic striped casual top',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Grey", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1633828907487-82fc7fac65e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 46,
    name: 'Sweater Winter Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 4299,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1510381291098-5f7abba6eadd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Cozy sweater for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1510381291098-5f7abba6eadd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 47,
    name: 'Crop Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1626879210826-c953d2dfa15f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Trendy crop top for casual wear',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1626879210826-c953d2dfa15f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 48,
    name: 'Long Sleeve Thermal',
    category: 'Women',
    subcategory: 'Tops',
    price: 3999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1523190167743-545025bd59b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 167,
    description: 'Premium long sleeve thermal',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1523190167743-545025bd59b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 49,
    name: 'Lace Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 2899,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1680731307230-85f5e478962a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 134,
    description: 'Elegant lace top',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Charcoal", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1680731307230-85f5e478962a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 50,
    name: 'Knit Winter Sweater',
    category: 'Women',
    subcategory: 'Tops',
    price: 4799,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1583936381437-df1bfab46b02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 178,
    description: 'Warm knit sweater for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Charcoal", "Grey", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1583936381437-df1bfab46b02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwdG9wfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "White", "Forest Green", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/womens-silk-evening-dress.jpg" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 52,
    name: 'Maxi Winter Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 7999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Elegant maxi dress for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "White", "Olive", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1495385794356-15371f348c31?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 53,
    name: 'Casual Summer Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Light and breezy summer dress',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 54,
    name: 'Party Sequin Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 9999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 156,
    description: 'Glamorous sequin dress for parties',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Black", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 55,
    name: 'Formal Gown',
    category: 'Women',
    subcategory: 'Dresses',
    price: 16999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1598554889165-8139a49f2883?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
    rating: 5.0,
    reviews: 89,
    description: 'Premium formal gown for special events',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1598554889165-8139a49f2883?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 56,
    name: 'A-Line Winter Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 6999,
    originalPrice: 11499,
    image: 'https://images.unsplash.com/photo-1671848633245-79cc98b0dbe8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 134,
    description: 'Stylish A-line dress for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "White", "Olive", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1671848633245-79cc98b0dbe8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 57,
    name: 'Shift Casual Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 3999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 112,
    description: 'Comfortable shift dress for casual occasions',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 58,
    name: 'Bodycon Winter Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 5999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1534875756527-5e8e4392005f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 145,
    description: 'Sexy bodycon dress for winter parties',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Charcoal", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1534875756527-5e8e4392005f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 59,
    name: 'Wrap Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 5499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 128,
    description: 'Classic wrap dress for any occasion',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 60,
    name: 'Pleated Winter Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 7499,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1511130558090-00af810c21b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Elegant pleated dress for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Black", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1511130558090-00af810c21b1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Beige", "Grey", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/womens-yoga-pants.jpg" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 62,
    name: 'Black Leggings',
    category: 'Women',
    subcategory: 'Pants',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 189,
    description: 'Versatile black leggings',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Navy", "Khaki"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1551854838-212c50b4c184?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 63,
    name: 'Winter Thermal Leggings',
    category: 'Women',
    subcategory: 'Pants',
    price: 3699,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1552902831-bb0e060ac5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 156,
    description: 'Warm thermal leggings for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Khaki", "Black", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1552902831-bb0e060ac5a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 64,
    name: 'Formal Black Trousers',
    category: 'Women',
    subcategory: 'Pants',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Professional formal trousers',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Khaki", "Navy", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1552902875-9ac1f9fe0c07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 65,
    name: 'Denim Jeans',
    category: 'Women',
    subcategory: 'Pants',
    price: 3899,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1643302213971-0f21b7ada420?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 167,
    description: 'Stylish denim jeans for casual wear',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Grey", "Beige"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1643302213971-0f21b7ada420?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 66,
    name: 'Woolen Winter Pants',
    category: 'Women',
    subcategory: 'Pants',
    price: 4799,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1604182440345-4a82e1c3876b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Premium woolen pants for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Beige", "Navy", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1604182440345-4a82e1c3876b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 67,
    name: 'High Waist Pants',
    category: 'Women',
    subcategory: 'Pants',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 112,
    description: 'Flattering high waist pants',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Grey", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 68,
    name: 'Slim Fit Winter Trousers',
    category: 'Women',
    subcategory: 'Pants',
    price: 4599,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 134,
    description: 'Elegant slim fit trousers for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Khaki", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 69,
    name: 'Khaki Chino Pants',
    category: 'Women',
    subcategory: 'Pants',
    price: 3299,
    originalPrice: 5799,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Classic khaki chino pants',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Khaki", "Navy"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 70,
    name: 'Corduroy Winter Pants',
    category: 'Women',
    subcategory: 'Pants',
    price: 4399,
    originalPrice: 7199,
    image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Textured corduroy pants for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Navy", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1553247407-23251ce81f59?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwcGFudHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Olive", "Black", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/womens-elegant-blazer.jpg" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 72,
    name: 'Winter Wool Blazer',
    category: 'Women',
    subcategory: 'Blazers',
    price: 10999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1615348411055-3492a2c76ca2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 134,
    description: 'Warm wool blazer for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615348411055-3492a2c76ca2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 73,
    name: 'Casual Blazer',
    category: 'Women',
    subcategory: 'Blazers',
    price: 7999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1759873911575-0e4eec0c246c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 112,
    description: 'Casual blazer for everyday wear',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Grey", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1759873911575-0e4eec0c246c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 74,
    name: 'Formal Black Blazer',
    category: 'Women',
    subcategory: 'Blazers',
    price: 11999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1759873911627-09f2f184708d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 145,
    description: 'Premium formal black blazer',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "White", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1759873911627-09f2f184708d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 75,
    name: 'Quilted Winter Jacket',
    category: 'Women',
    subcategory: 'Blazers',
    price: 8999,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1597582927786-bae43be837a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 167,
    description: 'Stylish quilted jacket for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "White", "Olive", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1597582927786-bae43be837a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 76,
    name: 'Leather Jacket',
    category: 'Women',
    subcategory: 'Blazers',
    price: 14999,
    originalPrice: 21999,
    image: 'https://images.unsplash.com/photo-1521510895919-46920266ddb3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 189,
    description: 'Premium leather jacket',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Charcoal", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521510895919-46920266ddb3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Forest Green", "Charcoal", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/womens-denim-jacket.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 78,
    name: 'Puffer Winter Jacket',
    category: 'Women',
    subcategory: 'Blazers',
    price: 10999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1615349719958-8e6381dd2f3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 178,
    description: 'Warm puffer jacket for extreme winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Charcoal", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615349719958-8e6381dd2f3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 79,
    name: 'Bomber Jacket',
    category: 'Women',
    subcategory: 'Blazers',
    price: 7499,
    originalPrice: 12499,
    image: 'https://images.unsplash.com/photo-1760551600982-d8ecd70b709f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Trendy bomber jacket',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1760551600982-d8ecd70b709f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 80,
    name: 'Cardigan Winter Coat',
    category: 'Women',
    subcategory: 'Blazers',
    price: 6499,
    originalPrice: 10499,
    image: 'https://images.unsplash.com/photo-1615348294633-38751a1fdf8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Cozy cardigan for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615348294633-38751a1fdf8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwYmxhemVyfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "White", "Charcoal", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids-colorful-t-shirt.jpg" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 82,
    name: 'Kids Winter Thermal Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 2299,
    originalPrice: 3999,
    image: '/kids-winter-thermal-tee.jpg',
    rating: 4.8,
    reviews: 123,
    description: 'Warm thermal t-shirt for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids-winter-thermal-tee.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 83,
    name: 'Cartoon Print Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1799,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 156,
    description: 'Fun cartoon printed t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 84,
    name: 'Solid Color Kids Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1299,
    originalPrice: 2299,
    image: 'https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 89,
    description: 'Simple solid color t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Charcoal", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 85,
    name: 'Striped Kids Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1599,
    originalPrice: 2899,
    image: 'https://images.unsplash.com/photo-1632232963035-bc14755747c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 112,
    description: 'Striped t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Charcoal", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632232963035-bc14755747c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 86,
    name: 'Kids Long Sleeve Thermal',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 2499,
    originalPrice: 4299,
    image: '/Kids_long_sleeve.jpeg',
    rating: 4.8,
    reviews: 134,
    description: 'Warm long sleeve thermal for kids',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Black", "Olive", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/Kids_long_sleeve.jpeg" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 87,
    name: 'V-Neck Kids Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1699,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Stylish v-neck t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 88,
    name: 'Henley Kids Thermal',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 2599,
    originalPrice: 4499,
    image: '/kids_thermal.jpg',
    rating: 4.7,
    reviews: 145,
    description: 'Cozy henley thermal for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Black", "Olive", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids_thermal.jpg" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 89,
    name: 'Graphic Kids Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1899,
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1560506840-ec148e82a604?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 167,
    description: 'Cool graphic printed t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Forest Green", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1560506840-ec148e82a604?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 90,
    name: 'Kids Crew Neck Tee',
    category: 'Kids',
    subcategory: 'T-Shirts',
    price: 1399,
    originalPrice: 2599,
    image: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 112,
    description: 'Classic crew neck t-shirt for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Black", "Grey", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids-comfort-shorts.jpg" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 92,
    name: 'Kids Winter Thermal Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 134,
    description: 'Warm thermal pants for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 93,
    name: 'Kids Denim Shorts',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1599,
    originalPrice: 2899,
    image: 'https://images.unsplash.com/photo-1632337949070-1fdb69fe2159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 98,
    description: 'Stylish denim shorts for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337949070-1fdb69fe2159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 94,
    name: 'Kids Cotton Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1799,
    originalPrice: 3199,
    image: 'https://images.unsplash.com/photo-1631044237696-6b38064fbbf4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 112,
    description: 'Comfortable cotton pants for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1631044237696-6b38064fbbf4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 95,
    name: 'Kids Woolen Winter Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 2599,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Premium woolen pants for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "Grey", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 96,
    name: 'Kids Cargo Shorts',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1699,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1530845645774-eed359045642?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 89,
    description: 'Durable cargo shorts for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Forest Green", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1530845645774-eed359045642?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 97,
    name: 'Kids Chino Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1899,
    originalPrice: 3399,
    image: 'https://images.unsplash.com/photo-1632337948797-ba161d29532b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 123,
    description: 'Smart chino pants for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Olive", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337948797-ba161d29532b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 98,
    name: 'Kids Fleece Winter Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 2299,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 156,
    description: 'Soft fleece pants for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 99,
    name: 'Kids Sporty Shorts',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1499,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1632337948784-35863f872dc8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 101,
    description: 'Comfortable sporty shorts for active kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Forest Green", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337948784-35863f872dc8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 100,
    name: 'Kids Jogger Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 1999,
    originalPrice: 3599,
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Trendy jogger pants for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Forest Green", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Forest Green", "Olive", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids-sports-jersey.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Maroon", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/kids-casual-hoodie.jpg" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 103,
    name: 'Kids Winter Puffer Jacket',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Warm puffer jacket for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Charcoal", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 104,
    name: 'Kids Denim Jacket',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 112,
    description: 'Classic denim jacket for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Grey", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337950445-ba446cb0e26f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 105,
    name: 'Kids Fleece Hoodie',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 2799,
    originalPrice: 4699,
    image: 'https://images.unsplash.com/photo-1632232963035-bc14755747c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Soft fleece hoodie for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "White", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632232963035-bc14755747c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 106,
    name: 'Kids Winter Coat',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 5499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Stylish winter coat for kids',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 107,
    name: 'Kids Windbreaker Jacket',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1560506840-ec148e82a604?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Lightweight windbreaker for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1560506840-ec148e82a604?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 108,
    name: 'Kids Wool Winter Sweater',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 3699,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 145,
    description: 'Warm wool sweater for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 109,
    name: 'Kids Bomber Jacket',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 3199,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 123,
    description: 'Trendy bomber jacket for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Charcoal", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 110,
    name: 'Kids Quilted Vest',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 2699,
    originalPrice: 4399,
    image: 'https://images.unsplash.com/photo-1632337949070-1fdb69fe2159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 89,
    description: 'Stylish quilted vest for kids',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Charcoal", "Forest Green", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1632337949070-1fdb69fe2159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Charcoal", "White", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/leather-crossbody-bag.jpg" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 112,
    name: 'Shoulder Tote Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Spacious shoulder tote bag',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Forest Green", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 113,
    name: 'Backpack Winter',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 4499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 112,
    description: 'Durable backpack for winter travels',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "White", "Black", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1559563458-527698bf5295?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 114,
    name: 'Clutch Purse',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Elegant clutch purse',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 115,
    name: 'Messenger Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 5499,
    originalPrice: 8499,
    image: 'https://images.unsplash.com/photo-1713746834176-04c0069d6593?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Professional messenger bag',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1713746834176-04c0069d6593?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 116,
    name: 'Weekend Travel Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 6999,
    originalPrice: 10999,
    image: 'https://images.unsplash.com/photo-1685800750376-f4497f5da428?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Spacious travel bag for weekends',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1685800750376-f4497f5da428?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 117,
    name: 'Laptop Backpack',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1705909237050-7a7625b47fac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 156,
    description: 'Protective laptop backpack',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 118,
    name: 'Hobo Shoulder Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 4699,
    originalPrice: 7299,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Trendy hobo style shoulder bag',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 119,
    name: 'Sling Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 3499,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Compact sling bag for daily use',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZGJhZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 120,
    name: 'Winter Leather Handbag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Luxurious leather handbag',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRiYWd8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Forest Green", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/classic-sunglasses.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 122,
    name: 'Aviator Sunglasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Stylish aviator sunglasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1577803645773-f96470509666?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 123,
    name: 'Winter Reading Glasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1608539733292-190446b22b83?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 89,
    description: 'Comfortable reading glasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1608539733292-190446b22b83?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 124,
    name: 'Cat Eye Sunglasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 3299,
    originalPrice: 5599,
    image: 'https://images.unsplash.com/photo-1610136649349-0f646f318053?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 145,
    description: 'Trendy cat eye sunglasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1610136649349-0f646f318053?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 125,
    name: 'Wayfarer Style Glasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 3199,
    originalPrice: 5399,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 156,
    description: 'Classic wayfarer style glasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1508296695146-257a814070b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 126,
    name: 'Oversized Sunglasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 3799,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Chic oversized sunglasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1605813808456-26c16c0dfb77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 127,
    name: 'Blue Light Glasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 2799,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 112,
    description: 'Blue light protection glasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 128,
    name: 'Polarized Sunglasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 4299,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Polarized sunglasses for outdoor',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 129,
    name: 'Sporty Glasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 3599,
    originalPrice: 5799,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Sporty style glasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Maroon", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 130,
    name: 'Retro Round Glasses',
    category: 'Accessories',
    subcategory: 'Eyewear',
    price: 2899,
    originalPrice: 4799,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Vintage retro round glasses',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Maroon", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Maroon", "Forest Green", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/silk-scarf.jpg" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 132,
    name: 'Winter Wool Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 2499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Warm wool scarf for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "/premium-leather-belt.jpg" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 134,
    name: 'Cashmere Winter Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1583170492868-dd617c96fdee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 167,
    description: 'Premium cashmere scarf for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1583170492868-dd617c96fdee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 135,
    name: 'Fabric Canvas Belt',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjYXJmfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 112,
    description: 'Casual fabric canvas belt',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjYXJmfGVufDB8fDB8fHww" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 136,
    name: 'Cotton Printed Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 1699,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Colorful cotton printed scarf',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1457545195570-67f207084966?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 137,
    name: 'Metal Buckle Belt',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1623832101940-647285e32a58?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 134,
    description: 'Stylish metal buckle belt',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Charcoal", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1623832101940-647285e32a58?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 138,
    name: 'Pashmina Winter Shawl',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 3999,
    originalPrice: 6499,
    image: 'https://images.unsplash.com/photo-1485527691629-8e370684924c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 156,
    description: 'Luxurious pashmina shawl for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Maroon", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1485527691629-8e370684924c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 139,
    name: 'Linen Summer Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 1499,
    originalPrice: 2699,
    image: 'https://images.unsplash.com/photo-1631702786837-0bd68d6532aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Light linen scarf for summer',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1631702786837-0bd68d6532aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 140,
    name: 'Designer Leather Belt',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjYXJmfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Premium designer leather belt',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Forest Green", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjYXJmfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Olive", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "White", "Black", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Maroon", "Forest Green", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Pink", "Yellow", "Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Blue", "Yellow", "Gold"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=800&q=80" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Black", "Charcoal", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Olive", "Charcoal", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1500631195312-e3a9a5819f60?auto=format&fit=crop&w=800&q=80" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
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
    ,
    colors: ["Navy Blue", "Grey", "Black", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 152,
    name: 'Tailored Knit Co-ord',
    category: 'Women',
    subcategory: 'Co-ords',
    price: 7499,
    originalPrice: 11499,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 138,
    description: 'Soft knit polo and midi skirt pairing with contrast trims',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Additional Winter Products - Women
  {
    id: 153,
    name: 'Women Winter Wool Coat',
    category: 'Women',
    subcategory: 'Outerwear',
    price: 12999,
    originalPrice: 18999,
    image: 'https://images.unsplash.com/photo-1610973310510-82f514ea1986?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    reviews: 145,
    description: 'Luxurious wool coat for winter elegance',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1610973310510-82f514ea1986?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 154,
    name: 'Women Thermal Leggings',
    category: 'Women',
    subcategory: 'Pants',
    price: 3699,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1636096625948-c1235f1b2e9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Warm thermal leggings for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Beige", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1636096625948-c1235f1b2e9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
      { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 155,
    name: 'Women Winter Sweater',
    category: 'Women',
    subcategory: 'Tops',
    price: 4799,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1452689842785-5f14840dca48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 178,
    description: 'Cozy winter sweater for women',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1452689842785-5f14840dca48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlciUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 156,
    name: 'Women Puffer Jacket',
    category: 'Women',
    subcategory: 'Blazers',
    price: 10999,
    originalPrice: 16999,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.9,
    reviews: 198,
    description: 'Warm puffer jacket for extreme winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "White", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Additional Winter Products - Kids
  {
    id: 157,
    name: 'Kids Winter Puffer Jacket',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 145,
    description: 'Warm puffer jacket for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 158,
    name: 'Kids Winter Thermal Pants',
    category: 'Kids',
    subcategory: 'Shorts & Pants',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 134,
    description: 'Warm thermal pants for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Black", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1601925240970-98447486fcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 159,
    name: 'Kids Wool Winter Sweater',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 3699,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 145,
    description: 'Warm wool sweater for kids in winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGNsb3RoaW5nfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 160,
    name: 'Kids Winter Coat',
    category: 'Kids',
    subcategory: 'Hoodies & Jackets',
    price: 5499,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Stylish winter coat for kids',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Additional Winter Products - Accessories
  {
    id: 161,
    name: 'Winter Wool Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 2499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 145,
    description: 'Warm wool scarf for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Black", "Forest Green", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 162,
    name: 'Cashmere Winter Scarf',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1583170492868-dd617c96fdee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 167,
    description: 'Premium cashmere scarf for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Forest Green", "Olive", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1583170492868-dd617c96fdee?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 163,
    name: 'Winter Leather Gloves',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1599108859613-88a1fff8e2e4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 123,
    description: 'Warm leather gloves for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "White", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1599108859613-88a1fff8e2e4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 164,
    name: 'Winter Beanie Hat',
    category: 'Accessories',
    subcategory: 'Scarves & Belts',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1599108859614-c293188135b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 98,
    description: 'Warm beanie hat for winter',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Grey", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1599108859614-c293188135b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Footwear
  {
    id: 201,
    name: 'Men Casual Sneakers',
    category: 'Footwear',
    subcategory: 'Sneakers',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 234,
    description: 'Comfortable casual sneakers for everyday wear',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Red", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 202,
    name: 'Women Running Shoes',
    category: 'Footwear',
    subcategory: 'Sports Shoes',
    price: 4499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 189,
    description: 'Premium running shoes with cushioning',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Black", "Red"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 203,
    name: 'Men Formal Leather Shoes',
    category: 'Footwear',
    subcategory: 'Formal Shoes',
    price: 5999,
    originalPrice: 9999,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww',
    rating: 4.9,
    reviews: 156,
    description: 'Classic leather formal shoes',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Multi", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Multi", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 204,
    name: 'Women High Heels',
    category: 'Footwear',
    subcategory: 'Heels',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 198,
    description: 'Elegant high heels for special occasions',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Multi", "Black", "Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww" },
      { color: "Multi", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 205,
    name: 'Kids Sports Shoes',
    category: 'Footwear',
    subcategory: 'Kids Shoes',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 145,
    description: 'Durable sports shoes for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Blue", "Red"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 206,
    name: 'Men Winter Boots',
    category: 'Footwear',
    subcategory: 'Boots',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 167,
    description: 'Warm winter boots with insulation',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "White", "Multi"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Multi", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 207,
    name: 'Women Sandals',
    category: 'Footwear',
    subcategory: 'Sandals',
    price: 2499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.5,
    reviews: 123,
    description: 'Comfortable summer sandals',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 208,
    name: 'Men Canvas Shoes',
    category: 'Footwear',
    subcategory: 'Casual Shoes',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 178,
    description: 'Lightweight canvas shoes',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Red", "Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 209,
    name: 'Women Ballet Flats',
    category: 'Footwear',
    subcategory: 'Flats',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 134,
    description: 'Classic ballet flats for comfort',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "White", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 210,
    name: 'Kids School Shoes',
    category: 'Footwear',
    subcategory: 'Kids Shoes',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 112,
    description: 'Durable school shoes for kids',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Red", "Multi"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
      { color: "Multi", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Electronics
  {
    id: 301,
    name: 'Smart Watch Pro',
    category: 'Electronics',
    subcategory: 'Smart Watches',
    price: 12999,
    originalPrice: 19999,
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 456,
    description: 'Advanced smartwatch with health tracking',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 302,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1636115305669-9096bffe87fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 678,
    description: 'Premium wireless earbuds with noise cancellation',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 303,
    name: 'Fitness Tracker',
    category: 'Electronics',
    subcategory: 'Wearables',
    price: 3999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1620783770629-122b7f187703?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 345,
    description: 'Advanced fitness tracking device',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Grey", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1620783770629-122b7f187703?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 304,
    name: 'Smart Band',
    category: 'Electronics',
    subcategory: 'Wearables',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.5,
    reviews: 567,
    description: 'Affordable smart band with essential features',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Olive", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 305,
    name: 'Bluetooth Headphones',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 4499,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1643536768014-0756fa85ca4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 234,
    description: 'Over-ear Bluetooth headphones',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "White", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1643536768014-0756fa85ca4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 306,
    name: 'Smart Ring',
    category: 'Electronics',
    subcategory: 'Wearables',
    price: 8999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 189,
    description: 'Fashionable smart ring with health tracking',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 307,
    name: 'Wireless Speaker',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1636115305669-9096bffe87fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 278,
    description: 'Portable wireless speaker',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 308,
    name: 'Smart Watch Classic',
    category: 'Electronics',
    subcategory: 'Smart Watches',
    price: 8999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1620783770629-122b7f187703?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 312,
    description: 'Classic design smartwatch',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "White", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1620783770629-122b7f187703?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 309,
    name: 'Gaming Earbuds',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 2499,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.5,
    reviews: 145,
    description: 'Low latency gaming earbuds',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 310,
    name: 'Smart Watch Sport',
    category: 'Electronics',
    subcategory: 'Smart Watches',
    price: 10999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1643536768014-0756fa85ca4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 423,
    description: 'Sports-focused smartwatch',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Forest Green", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1643536768014-0756fa85ca4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhZGdldHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Beauty & Grooming
  {
    id: 401,
    name: 'Men Grooming Kit',
    category: 'Beauty',
    subcategory: 'Grooming',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 234,
    description: 'Complete grooming kit for men',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1612817288484-6f916006741a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 402,
    name: 'Face Moisturizer',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 456,
    description: 'Hydrating face moisturizer',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Olive", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 403,
    name: 'Hair Styling Gel',
    category: 'Beauty',
    subcategory: 'Hair Care',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.5,
    reviews: 567,
    description: 'Strong hold hair styling gel',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 404,
    name: 'Perfume Set',
    category: 'Beauty',
    subcategory: 'Fragrance',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1564594326930-17381130fd2e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 345,
    description: 'Premium perfume collection',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Grey", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1564594326930-17381130fd2e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 405,
    name: 'Shaving Kit',
    category: 'Beauty',
    subcategory: 'Grooming',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1598528738936-c50861cc75a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 278,
    description: 'Complete shaving kit',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Forest Green", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 406,
    name: 'Face Cleanser',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 899,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 412,
    description: 'Gentle face cleanser',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "White", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 407,
    name: 'Hair Shampoo',
    category: 'Beauty',
    subcategory: 'Hair Care',
    price: 799,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
    rating: 4.5,
    reviews: 389,
    description: 'Nourishing hair shampoo',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Olive", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 408,
    name: 'Body Lotion',
    category: 'Beauty',
    subcategory: 'Skincare',
    price: 699,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 523,
    description: 'Moisturizing body lotion',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Grey", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 409,
    name: 'Cologne Spray',
    category: 'Beauty',
    subcategory: 'Fragrance',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 267,
    description: 'Long-lasting cologne spray',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "White", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 410,
    name: 'Beard Oil',
    category: 'Beauty',
    subcategory: 'Grooming',
    price: 999,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 189,
    description: 'Nourishing beard oil',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "White", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Home & Living
  {
    id: 501,
    name: 'Cotton Bed Sheets',
    category: 'Home',
    subcategory: 'Bedding',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1572048572872-2394404cf1f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww',
    rating: 4.7,
    reviews: 234,
    description: 'Premium cotton bed sheets set',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 502,
    name: 'Decorative Cushions',
    category: 'Home',
    subcategory: 'Decor',
    price: 899,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww',
    rating: 4.6,
    reviews: 456,
    description: 'Set of decorative cushions',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 503,
    name: 'Table Lamp',
    category: 'Home',
    subcategory: 'Lighting',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.5,
    reviews: 189,
    description: 'Modern table lamp',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Olive", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 504,
    name: 'Wall Clock',
    category: 'Home',
    subcategory: 'Decor',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 278,
    description: 'Elegant wall clock',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 505,
    name: 'Curtains Set',
    category: 'Home',
    subcategory: 'Furnishing',
    price: 3999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1667312939978-64cf31718a6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 145,
    description: 'Premium curtains set',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "White", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 506,
    name: 'Throw Blanket',
    category: 'Home',
    subcategory: 'Bedding',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww',
    rating: 4.8,
    reviews: 312,
    description: 'Cozy throw blanket',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Olive", "Forest Green", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 507,
    name: 'Photo Frame Set',
    category: 'Home',
    subcategory: 'Decor',
    price: 1299,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww',
    rating: 4.5,
    reviews: 167,
    description: 'Set of decorative photo frames',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "White", "Maroon", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1618220179428-22790b461013?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 508,
    name: 'Rug Carpet',
    category: 'Home',
    subcategory: 'Furnishing',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 234,
    description: 'Premium area rug',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Grey", "Maroon", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 509,
    name: 'Pillow Set',
    category: 'Home',
    subcategory: 'Bedding',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 289,
    description: 'Comfortable pillow set',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Forest Green", "Maroon", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 510,
    name: 'Vase Set',
    category: 'Home',
    subcategory: 'Decor',
    price: 999,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww',
    rating: 4.5,
    reviews: 156,
    description: 'Decorative vase set',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Black", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1615874694520-474822394e73?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Sportswear
  {
    id: 601,
    name: 'Men Sports T-Shirt',
    category: 'Sportswear',
    subcategory: 'Tops',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1637666544359-0e88de7b3206?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 345,
    description: 'Breathable sports t-shirt',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Forest Green", "Olive"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1637666544359-0e88de7b3206?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 602,
    name: 'Women Yoga Pants',
    category: 'Sportswear',
    subcategory: 'Bottoms',
    price: 1999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1635929171657-ccb333d714f5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 456,
    description: 'Flexible yoga pants',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Olive", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1635929171657-ccb333d714f5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 603,
    name: 'Men Track Pants',
    category: 'Sportswear',
    subcategory: 'Bottoms',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1645207803533-e2cfe1382f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 234,
    description: 'Comfortable track pants',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Charcoal", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1645207803533-e2cfe1382f2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 604,
    name: 'Sports Jacket',
    category: 'Sportswear',
    subcategory: 'Outerwear',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1605235186531-bbd852b09e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.7,
    reviews: 189,
    description: 'Lightweight sports jacket',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Maroon", "White"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1605235186531-bbd852b09e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 605,
    name: 'Women Sports Bra',
    category: 'Sportswear',
    subcategory: 'Tops',
    price: 1299,
    originalPrice: 2199,
    image: 'https://images.unsplash.com/photo-1536244955395-0b8a2a5ab5df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 567,
    description: 'Supportive sports bra',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Black", "Charcoal", "Forest Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1536244955395-0b8a2a5ab5df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 606,
    name: 'Men Gym Shorts',
    category: 'Sportswear',
    subcategory: 'Bottoms',
    price: 999,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1593419528756-3cdfa1615b86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 278,
    description: 'Comfortable gym shorts',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1593419528756-3cdfa1615b86?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 607,
    name: 'Sports Hoodie',
    category: 'Sportswear',
    subcategory: 'Outerwear',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 312,
    description: 'Warm sports hoodie',
    season: 'Winter'
    ,
    colors: ["Navy Blue", "Grey", "Black", "Charcoal"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1483721310020-03333e577078?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 608,
    name: 'Women Running Shorts',
    category: 'Sportswear',
    subcategory: 'Bottoms',
    price: 1199,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.5,
    reviews: 145,
    description: 'Lightweight running shorts',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Olive", "Black", "Maroon"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 609,
    name: 'Men Compression Shirt',
    category: 'Sportswear',
    subcategory: 'Tops',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1540254597053-3901b858d40f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.8,
    reviews: 423,
    description: 'Performance compression shirt',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Charcoal", "Forest Green", "Grey"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1540254597053-3901b858d40f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
      { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 610,
    name: 'Sports Cap',
    category: 'Sportswear',
    subcategory: 'Accessories',
    price: 699,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1600696491085-19dbbeb4f8c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 267,
    description: 'UV protection sports cap',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Maroon", "Grey", "Black"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1600696491085-19dbbeb4f8c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
      { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
      { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" }
    ]
  },

  // Ethnic Wear
  {
    id: 701,
    name: 'Men Kurta',
    category: 'Ethnic',
    subcategory: 'Kurtas',
    price: 2999,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1757702522569-bf5c275261cf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 234,
    description: 'Traditional men kurta',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Blue", "Red", "Yellow"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1757702522569-bf5c275261cf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 702,
    name: 'Women Saree',
    category: 'Ethnic',
    subcategory: 'Sarees',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.unsplash.com/photo-1756483517695-d0aa21ee1ea1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 456,
    description: 'Elegant silk saree',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Blue", "Yellow", "Pink"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1756483517695-d0aa21ee1ea1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 703,
    name: 'Men Sherwani',
    category: 'Ethnic',
    subcategory: 'Sherwanis',
    price: 8999,
    originalPrice: 14999,
    image: 'https://images.unsplash.com/photo-1763971922545-c0ffa1c09cc0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.9,
    reviews: 189,
    description: 'Premium sherwani for special occasions',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Blue", "Yellow", "Gold"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1763971922545-c0ffa1c09cc0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 704,
    name: 'Women Lehenga',
    category: 'Ethnic',
    subcategory: 'Lehengas',
    price: 7999,
    originalPrice: 12999,
    image: 'https://manmohitfashion.com/cdn/shop/products/BeigeDesignerLehengaCholiWithHighQualityEmbroiderySequenceWorkWeddingLehengaCholiPartyWearLehengaCholiIndianWomen_Lengha_1_1024x1024_f6d46ef5-fbad-45a5-8dd0-530e329abfde.webp?v=1678178443',
    rating: 4.8,
    reviews: 345,
    description: 'Beautiful lehenga choli',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Gold", "Pink", "Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://manmohitfashion.com/cdn/shop/products/BeigeDesignerLehengaCholiWithHighQualityEmbroiderySequenceWorkWeddingLehengaCholiPartyWearLehengaCholiIndianWomen_Lengha_1_1024x1024_f6d46ef5-fbad-45a5-8dd0-530e329abfde.webp?v=1678178443" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 705,
    name: 'Men Dhoti',
    category: 'Ethnic',
    subcategory: 'Dhotis',
    price: 1499,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1668371679302-a8ec781e876e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.6,
    reviews: 167,
    description: 'Traditional dhoti',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Yellow", "Pink", "Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1668371679302-a8ec781e876e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 706,
    name: 'Women Salwar Kameez',
    category: 'Ethnic',
    subcategory: 'Salwar Suits',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/-f5kk3vhl.jpg',
    rating: 4.7,
    reviews: 278,
    description: 'Elegant salwar kameez',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Gold", "Yellow", "Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.jdmagicbox.com/quickquotes/images_main/-f5kk3vhl.jpg" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 707,
    name: 'Men Pathani Suit',
    category: 'Ethnic',
    subcategory: 'Pathanis',
    price: 3999,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1569810020669-aa9d38003ea7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4.7,
    reviews: 145,
    description: 'Stylish pathani suit',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Gold", "Red", "Green"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1569810020669-aa9d38003ea7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZXRobmljJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 708,
    name: 'Women Anarkali',
    category: 'Ethnic',
    subcategory: 'Anarkalis',
    price: 4499,
    originalPrice: 7499,
    image: 'https://images.unsplash.com/photo-1756483488645-5973a1a92e33?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.8,
    reviews: 312,
    description: 'Beautiful anarkali suit',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Green", "Gold", "Pink"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1756483488645-5973a1a92e33?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" },
      { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 709,
    name: 'Men Waistcoat',
    category: 'Ethnic',
    subcategory: 'Waistcoats',
    price: 2499,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1756483510900-ec43edbafb45?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D',
    rating: 4.6,
    reviews: 189,
    description: 'Traditional waistcoat',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Pink", "Blue", "Yellow"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://images.unsplash.com/photo-1756483510900-ec43edbafb45?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGV0aG5pYyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
      { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
  {
    id: 710,
    name: 'Women Dupatta',
    category: 'Ethnic',
    subcategory: 'Dupattas',
    price: 999,
    originalPrice: 1799,
    image: 'https://imagescdn.jaypore.com/img/app/product/3/39576428-11327689.jpg?w=500&auto=format',
    rating: 4.5,
    reviews: 234,
    description: 'Elegant dupatta',
    season: 'All-Season'
    ,
    colors: ["Navy Blue", "Pink", "Red", "Blue"]
    ,
    variantImages: [
      { color: "Navy Blue", url: "https://imagescdn.jaypore.com/img/app/product/3/39576428-11327689.jpg?w=500&auto=format" },
      { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Red", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
      { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" }
    ]
  },
]

export const products = allProducts.map((product, index) => ({
  ...product,
  stock: (product as any).stock ?? (40 + (index % 12) * 5),
}))
