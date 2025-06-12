import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipNav from '@/components/layout/SkipNav'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'NYC Ayen | Luxury Hair Salon in Manhattan',
  description: 'Premier luxury hair salon in Manhattan specializing in precision cuts, signature color, and personalized styling for discerning professionals.',
  keywords: [
    'luxury hair salon NYC',
    'Manhattan hair salon',
    'precision cuts',
    'hair color',
    'professional styling',
    'hair extensions',
    'hair treatments'
  ],
  authors: [{ name: 'NYC Ayen' }],
  creator: 'NYC Ayen',
  publisher: 'NYC Ayen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nycayen.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'NYC Ayen | Luxury Hair Salon in Manhattan',
    description: 'Experience bespoke hair artistry with our master stylists in the heart of Manhattan.',
    url: 'https://nycayen.com',
    siteName: 'NYC Ayen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NYC Ayen Luxury Hair Salon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYC Ayen | Luxury Hair Salon in Manhattan',
    description: 'Experience bespoke hair artistry with our master stylists in the heart of Manhattan.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter text-gray-800 bg-white">
        <SkipNav />
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HairSalon',
              name: 'NYC Ayen',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Madison Avenue',
                addressLocality: 'New York',
                addressRegion: 'NY',
                postalCode: '10016'
              },
              telephone: '(212) 555-0123',
              url: 'https://nycayen.com',
              openingHours: [
                'Mo-Fr 09:00-20:00',
                'Sa 08:00-18:00',
                'Su 10:00-16:00'
              ],
              priceRange: '$$$',
              acceptsReservations: true,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127'
              },
              description: 'Premier luxury hair salon in Manhattan specializing in precision cuts, signature color, and personalized styling.',
              image: 'https://nycayen.com/salon-interior.jpg'
            })
          }}
        />
      </body>
    </html>
  )
}