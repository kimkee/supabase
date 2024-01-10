
import { Inter } from 'next/font/google'

import Head from 'next/head';
import './globals.css'
import '/public/css/common.css'
import '/public/fontawesome/css/all.min.css'
/* import 'https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css'
import 'https://fonts.googleapis.com/earlyaccess/notosanskr.css' */
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
const inter = Inter({ subsets: ['latin'] })
import ui from './ui.js';

export const metadata = {
  title: '슈파마켓',
  description: 'Generated by create next app',
  keywords: ['슈파마켓', 'Next.js', 'React', '웹 개발'],
  canonical: 'https://example.com/canonical-url',
  robots: 'index, follow',
  author: 'Your Name',
  url: 'https://example.com/page-url',
  image: 'https://supabase.com/dashboard/favicon/favicon.ico',
  favicon: 'https://supabase.com/dashboard/favicon/favicon.ico',

}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={'body'}>

        <div className="wrap">
          {children}
        </div>
      </body>
    </html>
  )
}