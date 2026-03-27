import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: {
    template: '%s | Triss McAllen',
    default: 'Triss McAllen | Custom Graphic & Web Design',
  },
  description: 'Portfolio of Triss McAllen. Need a website or custom graphic design you can trust to grow your business? Contact us today!',
  keywords: ['Website Design', 'Graphic Design', 'Triss McAllen', 'Custom Graphics', 'Web Development', 'Fiverr Designer'],
  creator: 'Triss McAllen',
  openGraph: {
    title: 'Triss McAllen | Custom Graphic & Web Design',
    description: 'Need a website or custom graphic design you can trust to grow your business? We are ready to design and build something amazing for you.',
    url: 'https://trissmcallen.vercel.app',
    siteName: 'Triss McAllen Portfolio',
    images: [
      {
        url: 'https://trissmcallen.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triss McAllen | Custom Graphic & Web Design',
    description: 'Trusted and professional custom graphic and website design services.',
    images: ['https://trissmcallen.vercel.app/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-dark text-dark dark:text-white font-sans overflow-x-hidden selection:bg-primary selection:text-dark transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
