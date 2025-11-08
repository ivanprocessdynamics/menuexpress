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
  keywords: 'sitios web restaurantes, páginas web restaurantes, diseño web gastronómico, reservas online, menú digital',
  authors: [{ name: 'Menu Express' }],
  openGraph: {
    title: 'Menu Express - Sitios Web para Restaurantes',
    description: 'Plantillas profesionales que aumentan tus reservas online',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
