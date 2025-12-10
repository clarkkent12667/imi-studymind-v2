import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Study Mind International Summer Career Camps | UCL London',
  description: 'Elite Summer Career Camps for ambitious UAE students aged 12-18. Experience your future career at UCL London with Study Mind and ImproveMe.',
  keywords: 'summer camps, career camps, UCL, London, UAE students, work experience, international education',
  icons: {
    icon: '/study mind favicon.png',
    shortcut: '/study mind favicon.png',
    apple: '/study mind favicon.png',
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

