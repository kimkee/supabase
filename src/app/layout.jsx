import { Inter, Roboto_Mono , Noto_Sans } from 'next/font/google'
import Head from 'next/head';
import { openGraphImage } from '@/app/shared-metadata.js';
import '@/app/globals.css'
import '/public/css/common.css'
import '/public/fontawesome/css/all.min.css'
import ui from '@/app/ui.js';
import { GoogleAnalytics } from '@next/third-parties/google'
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '슈파마켓',
  description: '합리적 소비 슈파마켓!',
  keywords: ['슈파마켓', 'Next.js', 'React', '웹 개발'],
  canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  robots: 'index, follow',
  author: 'KimKeeHyun',
  url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  image: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico`,
  favicon: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico`,
  openGraph: {
    title: 'SUPAMARKET',
    description: '합리적 소비 솔루션 슈파마켓!',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: 'SUPAMARKET',
    ...openGraphImage,
    locale: 'ko_KR',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit:'cover',
  shrinkToFit: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" /> */}
      <body className={`body ${noto_sans.className}`}>

        <div className="wrap">
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-21BR0MNR32" />
    </html>
  )
}