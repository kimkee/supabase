
import Image from 'next/image'
import Head from 'next/head';
import './page.css'
import List from './List.jsx';
import ui from '@/app/ui.js';


export default async function Page() {
 
 
  return (
    <div className="container page prds">
      <main className={`contents`}>

        <List />

      </main>
    </div>
  )
}
