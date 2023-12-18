import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { BrandProvider } from '@/providers/BrandContext'
import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Groww',
  description: 'An E-commerce shopping cart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={font.className}>
        <BrandProvider>
          {children}
        </BrandProvider>
      </body>
      
    </html>
  )
}
