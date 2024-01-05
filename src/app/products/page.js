import Image from 'next/image'
import Head from 'next/head';
import './page.css'
import { createClient } from "@supabase/supabase-js";
// import { cookies } from 'next/headers';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default async function About() {
 

  const products = await supabase.from("products").select().order('id', { ascending: true });


  
  return (
    <main>
        <Head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        </Head>
        <h1>Products</h1>
        <table className={'table'}>
          <tbody>
            
            {products.data.map( (data,idx) =>{
              const createdAt = new Date(data.created_at);
              const time = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }).format(createdAt);
              return(
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.category}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>{time}</td> 
              </tr>
              )
            })}
            
          </tbody>
        </table>
        
        <pre>{JSON.stringify(products, null, 2)}</pre>
        <pre>{products.status}</pre>
         
        <p><Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={"img"}
              width={100}
              height={24}
              priority
            /></p>
    </main>
  )
}
