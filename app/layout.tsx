import "./globals.css";
import type { Metadata } from 'next'
import { Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/app/providers'
import { ProductChatbot } from '@/components/product-chatbot'

const greatVibes = Great_Vibes({ 
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Fashino - Premium Fashion Store',
  description: 'Discover modern, luxury garments with curated collections for every occasion',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={greatVibes.variable}>
      <body>
        <Providers>
          {children}
          <ProductChatbot />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
