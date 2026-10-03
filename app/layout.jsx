import './globals.css';
import { receptionData } from '../config/reception';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: '#080709',
};

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://rajha-swetha-reception.vercel.app';
};

const siteUrl = getSiteUrl();

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${receptionData.couple.groom} & ${receptionData.couple.bride} — The Wedding Reception`,
  description: `You are cordially invited to celebrate the luxury evening reception of ${receptionData.couple.groom} and ${receptionData.couple.bride} on Friday, ${receptionData.event.date}, ${receptionData.event.time} at ${receptionData.event.venue}, ${receptionData.event.subVenue}, ${receptionData.event.city}.`,
  keywords: [
    'Rajha Mukilan',
    'Swetha',
    'Wedding Reception',
    'Sri Mahal Namakkal',
    'Luxury Wedding Reception',
    '13 November 2026',
    'Digital Wedding Invitation',
  ],
  openGraph: {
    title: `${receptionData.couple.groom} & ${receptionData.couple.bride} | Wedding Reception`,
    description: `An intimate luxury reception under the lights. ${receptionData.event.date}, ${receptionData.event.time} at ${receptionData.event.venue}, ${receptionData.event.city}.`,
    type: 'website',
    url: siteUrl,
    siteName: `${receptionData.couple.groom} & ${receptionData.couple.bride} Reception`,
    images: [
      {
        url: '/images/reception/canopy-lights.jpg',
        width: 1920,
        height: 1080,
        type: 'image/jpeg',
        alt: `${receptionData.couple.groom} & ${receptionData.couple.bride} Reception Celebration`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${receptionData.couple.groom} & ${receptionData.couple.bride} | Wedding Reception`,
    description: `An intimate luxury reception under the lights. ${receptionData.event.date} at ${receptionData.event.venue}, ${receptionData.event.city}.`,
    images: ['/images/reception/canopy-lights.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Strategic media preloads */}
        <link
          rel="preload"
          as="video"
          href="/reception-intro.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="image"
          href="/images/reception/canopy-lights.jpg"
          type="image/jpeg"
          fetchPriority="high"
        />

        {/* High-End Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Italiana&family=Montserrat:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Pinyon+Script&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 6 for minimal icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
