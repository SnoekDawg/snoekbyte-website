import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s | SnoekByte',
    default: 'SnoekByte - Powerful Apps for E-commerce Growth',
  },
  description: 'We build smart Shopify applications that help store owners increase revenue, streamline operations, and never miss a sale.',
  keywords: ['Shopify', 'e-commerce', 'apps', 'BackorderPRO', 'pre-order', 'backorder', 'inventory management'],
  authors: [{ name: 'SnoekByte' }],
  creator: 'SnoekByte',
  metadataBase: new URL('https://snoekbyte.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snoekbyte.com',
    siteName: 'SnoekByte',
    title: 'SnoekByte - Powerful Apps for E-commerce Growth',
    description: 'We build smart Shopify applications that help store owners increase revenue, streamline operations, and never miss a sale.',
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
    description: 'We build smart Shopify applications that help store owners increase revenue.',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
