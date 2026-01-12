import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Inter - optimized for screen readability, professional, modern
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | SnoekByte',
    default: 'SnoekByte - Powerful Apps for E-commerce Growth',
  },
  description: 'We build smart Shopify applications that help store owners automate inventory management and never miss a sale. Over €10M revenue generated for businesses.',
  keywords: ['Shopify', 'e-commerce', 'apps', 'BackorderPRO', 'inventory management', 'backorder', 'dropshipping', 'automation'],
  authors: [{ name: 'SnoekByte' }],
  creator: 'SnoekByte',
  metadataBase: new URL('https://snoekbyte.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snoekbyte.com',
    siteName: 'SnoekByte',
    title: 'SnoekByte - Powerful Apps for E-commerce Growth',
    description: 'Smart Shopify applications for inventory automation. Over €10M revenue generated for businesses.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SnoekByte - E-commerce Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnoekByte - Powerful Apps for E-commerce Growth',
    description: 'Smart Shopify applications for inventory automation.',
    images: ['/images/og-image.png'],
    creator: '@snoekbyte',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
