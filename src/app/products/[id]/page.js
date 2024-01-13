'use client'
import Image from 'next/image'
import Head from 'next/head';
import { usePathname, useRouter, useParams  } from 'next/navigation';
import '../page.css'

import List from '../List.jsx';
import ui from '../../ui.js';
export default function Page() {
 
  const params = useParams();
 
  return (
    <div className="container page prds">
      <div class="dd">fdsfsdf</div>
      <main className={`contents`}>

        <div class="pop">{`params.id = ${params.id}`}</div>
       
      </main>
    </div>
  )
}
