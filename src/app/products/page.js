import Image from 'next/image'
import Head from 'next/head';
import './page.css'
// import { cookies } from 'next/headers';
import List from './List.jsx';
import ui from '../ui.js';

export default async function About() {
 
 
  return (
    <div className="container page prds">
      <main className={`contents`}>

        <h1>Products</h1>

        <List />
        
        {/* <pre>{JSON.stringify(products, null, 2)}</pre>
        <pre>{products.status}</pre> */}
       
      </main>
    </div>
  )
}
