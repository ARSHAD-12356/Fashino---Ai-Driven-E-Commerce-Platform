import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Poppins, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { ProductChatbot } from '@/components/product-chatbot'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _poppins = Poppins({ weight: ['400', '500', '600', '700', '900'], subsets: ["latin"] });
const dancingScript = Dancing_Script({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: 'Fashino - Premium Fashion Store',
  description: 'Discover modern, luxury garments with curated collections for every occasion',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${dancingScript.variable}`}>
        <Providers>
          {children}
        </Providers>
        <ProductChatbot />
        <Analytics />
      </body>
    </html>
  )
}
