import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fgphs.edu.pk'),
  title: 'Federal Grammar Public High School (FGPHS) | Karachi Board (BSEK)',
  description:
    'Official website and digital portal of Federal Grammar Public High School. Located at A-17, Block 16, Federal B Area, Gulberg Town, Karachi. Recognized by Board of Secondary Education Karachi. Admissions open, student result verification, and notices.',
  keywords: [
    'Federal Grammar Public High School',
    'FGPHS Karachi',
    'High School Federal B Area',
    'Schools in Gulberg Town Karachi',
    'BSEK Karachi Board schools',
    'IBA Hour of Code school Karachi',
    'Online admission Karachi school',
    'Student result portal Karachi'
  ],
  authors: [{ name: 'CodexPlus Development Team' }, { name: 'FGPHS Administration' }],
  openGraph: {
    title: 'Federal Grammar Public High School (FGPHS) - Karachi',
    description:
      'Premier high school education in Federal B Area, Gulberg Town, Karachi. Modern STEM computer lab, BSEK science practicals, and values-driven academics.',
    url: 'https://fgphs.edu.pk',
    siteName: 'Federal Grammar Public High School',
    images: [
      {
        url: '/images/hero-campus.jpg',
        width: 1200,
        height: 675,
        alt: 'Federal Grammar Public High School Karachi Campus'
      }
    ],
    locale: 'en_PK',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${plusJakarta.variable} ${geistMono.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#2b452b" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F7F5] text-[#2b452b] font-sans selection:bg-[#218a8a] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

