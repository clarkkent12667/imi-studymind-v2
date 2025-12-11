import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Improve ME Institute International Summer Career Experience | UCL London',
  description: 'Elite International Summer Career Experience for ambitious UAE students aged 12-18. Improve ME Institute, in collaboration with Study Mind, offers transformative career exploration at UCL London.',
  keywords: 'summer camps, career camps, UCL, London, UAE students, work experience, international education',
  icons: {
    icon: '/study mind favicon.png',
    shortcut: '/study mind favicon.png',
    apple: '/study mind favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'Transform Your Future at UCL London',
    description: 'Elite Summer Career Camps for Ambitious Students | Ages 12-18',
    images: ['/og-image.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

