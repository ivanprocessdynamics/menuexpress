import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Menu Express - Sitios Web para Restaurantes que Generan Reservas',
  description: 'Plantillas profesionales de sitios web especializadas para restaurantes. Diseño responsive, sistema de reservas integrado y optimizado para SEO. Tu sitio listo en 48 horas.',
  keywords: 'sitios web restaurantes, páginas web restaurantes, diseño web gastronómico, reservas online, menú digital, carta digital, website restaurante, diseño web hostelería',
  authors: [{ name: 'Menu Express' }],
  openGraph: {
    title: 'Menu Express - Sitios Web para Restaurantes que Generan Reservas',
    description: 'Plantillas profesionales que aumentan tus reservas online. Diseño responsive, fotos irresistibles y listo en 48 horas.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Menu Express',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu Express - Sitios Web para Restaurantes',
    description: 'Plantillas profesionales que aumentan tus reservas online',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Menu Express',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '199',
                highPrice: '349',
                priceCurrency: 'EUR',
                offerCount: '3',
              },
              description: 'Plantillas profesionales de sitios web para restaurantes',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
