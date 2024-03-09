'use client'
import Image from 'next/image'
import Head from 'next/head';
import { usePathname, useRouter, useParams  } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import '../page.css'
import List from '../List.jsx';
import ui from '@/app/ui.js';

export const runtime = 'edge';

export default function Page() {
 
  const params = useParams();
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getPrdtail(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[params.id]);

  const getPrdtail = async (prams)=> {

    console.log(prams);
    const response = await fetch(`/api/goods/${params.id}`,{ cache: 'no-store' }).then((response) => response.json())
    setProducts(response);
    console.log(response);  
  }
  return (
    <div className="container page prds">
      <main className={`contents`}>

        <h1 className="dd">Product Detail</h1>
        <div className="pop">{`params.id = ${params.id}`}</div>
        <p>{products.title}</p>
        <p>{products.description}</p>
        {products.images_url ? 
        <ul className="list">
          {products.images_url.map((img,idx)=>{
            return( <li key={idx}><img width={'100px'} src={process.env.NEXT_PUBLIC_SUPABASE_URL+img} alt={''}/></li> )
          })}
        </ul>
        :null}
        <pre>{ JSON.stringify( products, null, 4)}</pre>
      </main>
    </div>
  )
}
