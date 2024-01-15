import { Inter, Roboto_Mono , Noto_Sans } from 'next/font/google'
import Head from 'next/head';
import { openGraphImage } from '@/app/shared-metadata.js';
import '@/app/globals.css'
import '/public/css/common.css'
import '/public/fontawesome/css/all.min.css'
import ui from '@/app/ui.js';

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
  canonical: 'https://supamarket.pages.dev',
  robots: 'index, follow',
  author: 'KimKeeHyun',
  url: 'https://supamarket.pages.dev',
  image: 'https://supamarket.pages.dev/favicon.ico',
  favicon: 'https://supamarket.pages.dev/favicon.ico',
  openGraph: {
    title: 'SUPAMARKET',
    description: '합리적 소비 솔루션 슈파마켓!',
    url: 'https://supamarket.pages.dev',
    siteName: 'SUPAMARKET',
    ...openGraphImage,
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`body ${noto_sans.className}`}>

        <div className="wrap">
          {children}
        </div>
      </body>
    </html>
  )
}