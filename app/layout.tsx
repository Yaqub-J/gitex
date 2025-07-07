import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gitex Nigeria 2025',
  description: 'Gitex Nigeria 2025 is a premier technology event that brings together innovators, industry leaders, and enthusiasts to explore the latest advancements in technology and digital transformation.',
  generator: 'Next.js',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
