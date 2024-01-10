import Image from 'next/image'
import Head from 'next/head';
import './page.css'
// import { cookies } from 'next/headers';
import List from './List.jsx';
import ui from '../ui.js';

export default async function Page() {
 
 
  return (
    <div className="container page prds">
      <main className={`contents`}>

        <List />
        
        {/* <pre>{JSON.stringify(products, null, 2)}</pre>
        <pre>{products.status}</pre> */}
       
      </main>
    </div>
  )
}
