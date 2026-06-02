import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import 'leaflet/dist/leaflet.css'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation',
  description: 'Expert upskilling courses, mock interviews, and educational consultation services for students and professionals. Get career guidance from industry experts and transform your future.',
  keywords: 'upskilling courses, mock interviews, educational consultation, career guidance, interview preparation, university selection, professional development',
  authors: [{ name: 'Chatura Solutions' }],
  creator: 'Chatura Solutions',
  publisher: 'Chatura Solutions',
  generator: 'Next.js',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chaturasolutions.com',
    siteName: 'Chatura Solutions',
    title: 'Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation',
    description: 'Expert upskilling courses, mock interviews, and educational consultation services for students and professionals seeking career advancement.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Chatura Solutions Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation',
    description: 'Expert upskilling courses, mock interviews, and educational consultation services for students and professionals seeking career advancement.',
    images: ['/logo.png'],
    creator: '@chaturasolutions',
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HKD24SXDR4"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HKD24SXDR4');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
