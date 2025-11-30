import "./globals.css";
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { ProductChatbot } from '@/components/product-chatbot'

export const metadata: Metadata = {
  title: 'Fashino - Premium Fashion Store',
  description: 'Discover modern, luxury garments with curated collections for every occasion',
  generator: 'v0.app',

}

import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={playfair.variable}>
        <Providers>
          {children}
          <ProductChatbot />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
