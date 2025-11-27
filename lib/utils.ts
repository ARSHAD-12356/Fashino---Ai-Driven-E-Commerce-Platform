import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Create a deterministic hash from a string
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

type GarmentKey =
  | 'jeans'
  | 'pants'
  | 'tshirt'
  | 'shirt'
  | 'hoodie'
  | 'jacket'
  | 'sweater'
  | 'dress'
  | 'top'
  | 'skirt'
  | 'leggings'
  | 'bag'
  | 'eyewear'
  | 'scarf'
  | 'kids'
  | 'generic'

function detectGarmentKey(title: string, subcategory?: string, category?: string): GarmentKey {
  const t = title.toLowerCase()
  const s = (subcategory || '').toLowerCase()
  const combined = `${t} ${s}`
  const has = (word: string) => combined.includes(word)

  if (has('jeans') || has('denim')) return 'jeans'
  if (has('trouser') || has('chino') || has('pants') || has('cargo')) return 'pants'
  if (has('t-shirt') || has('tee')) return 'tshirt'
  if (has('shirt') || has('oxford') || has('flannel')) return 'shirt'
  if (has('hoodie') || has('sweatshirt')) return 'hoodie'
  if (has('jacket') || has('coat') || has('outerwear') || has('blazer')) return 'jacket'
  if (has('sweater') || has('knit') || has('cardigan')) return 'sweater'
  if (has('dress') || has('gown')) return 'dress'
  if (has('top') || has('camisole') || has('cami') || has('blouse')) return 'top'
  if (has('skirt')) return 'skirt'
  if (has('legging') || has('yoga')) return 'leggings'
  if (has('bag') || has('backpack') || has('handbag') || has('tote') || has('sling')) return 'bag'
  if (has('sunglasses') || has('glasses') || has('eyewear')) return 'eyewear'
  if (has('scarf') || has('shawl') || has('belt')) return 'scarf'
  if ((category || '').toLowerCase() === 'kids') return 'kids'
  return 'generic'
}

const GRADIENT_PALETTES: Array<[string, string]> = [
  ['#280a2c', '#632357'],
  ['#291a5d', '#5236b3'],
  ['#691719', '#c7263a'],
  ['#084045', '#0fb6a0'],
  ['#1b2a49', '#305c8c'],
  ['#45330a', '#d4a017'],
  ['#102a43', '#0b6ba8'],
  ['#3a0b2e', '#a31545'],
  ['#19332a', '#1f8058'],
  ['#2b1a1d', '#a84e45'],
]

const ACCENT_COLORS = ['#ffd166', '#f8f9fa', '#9bafd9', '#ff9f1c', '#2ec4b6', '#f25f5c', '#e0c3fc', '#c2f970']

const GARMENT_LABELS: Record<GarmentKey, string> = {
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
  generic: 'FASHION',
}

const GARMENT_BADGES: Record<GarmentKey, string> = {
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
  generic: 'FX',
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function getInitials(value: string): string {
  const cleaned = value.replace(/[^A-Za-z0-9\s]/g, '').trim()
  const words = cleaned.split(/\s+/).filter(Boolean)
  if (words.length === 0) return 'FX'
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase().padEnd(2, 'X')
  return (words[0][0] + words[1][0]).toUpperCase()
}

// Deterministic SVG generator so every product always maps to the same visual
function generateProductImageUrl(productName: string, category?: string, subcategory?: string): string {
  const seed = hashString(`${productName}-${category || ''}-${subcategory || ''}`)
  const [gradientStart, gradientEnd] = GRADIENT_PALETTES[seed % GRADIENT_PALETTES.length]
  const accent = ACCENT_COLORS[seed % ACCENT_COLORS.length]
  const garmentKey = detectGarmentKey(productName, subcategory, category)
  const badge = GARMENT_BADGES[garmentKey]
  const label = GARMENT_LABELS[garmentKey]
  const shortName = productName.length > 28 ? `${productName.slice(0, 25)}...` : productName
  const safeName = escapeXml(shortName)
  const initials = getInitials(productName)
  const safeCategory = escapeXml((category || 'Fashino').toUpperCase())
  const rotation = seed % 360

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
</svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function getProductImage(
  image?: string,
  category?: string,
  subcategory?: string,
  title?: string
): string {
  if (image && image !== '/placeholder.svg') {
    const trimmed = image.trim()
    if (trimmed.startsWith('/') || trimmed.startsWith('data:image') || trimmed.startsWith('http')) {
      return trimmed
    }
  }

  // Generate deterministic product-specific image based on product name
  if (title) {
    return generateProductImageUrl(title, category, subcategory)
  }

  // Fallback for products without title
  return getFallbackImage(title, category, subcategory)
}

export function getFallbackImage(
  title?: string,
  category?: string,
  subcategory?: string
): string {
  const productName = title || 'Product'
  return generateProductImageUrl(productName, category, subcategory)
}

