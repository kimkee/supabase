'use client'
import Image from 'next/image'
import Head from 'next/head';
import { usePathname, useRouter, useParams  } from 'next/navigation';
import '../page.css'
import List from '../List.jsx';
import ui from '@/app/ui.js';

export const runtime = 'edge';

export default function Page() {
 
  const params = useParams();
 
  return (
    <div className="container page prds">
      <main className={`contents`}>

        <h1 class="dd">Product Detail</h1>
        <div class="pop">{`params.id = ${params.id}`}</div>
       
      </main>
    </div>
  )
}
