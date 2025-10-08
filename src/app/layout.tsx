import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Lombok Welding - Pagar & Kanopi Premium Kustom',
  description: 'Spesialis pembuatan pagar, kanopi, dan teralis custom premium di Lombok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}