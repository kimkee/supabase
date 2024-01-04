import Image from 'next/image'
import styles from './page.module.css'
import { createClient } from "@supabase/supabase-js";
// import { cookies } from 'next/headers';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default async function About() {
 

  const  goods  = await supabase.from("goods").select();


  
  return (
    <main>
        <h1>About</h1>
        <table className={styles.table}>
          <tbody>
            
            {goods.data.map( (data,idx) =>{
              const createdAt = new Date(data.created_at);
              const time = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'medium' }).format(createdAt);
              return(
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price_org}</td>
                <td>{time}</td>
              </tr>
              )
            })}
            
          </tbody>
        </table>
        
        <pre>{JSON.stringify(goods, null, 2)}</pre>
        <pre>{goods.status}</pre>
         
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
