import Image from 'next/image';
import './page.css';

export default async function Home() {
  return (
    <div className="container page home">
      <main className={`contents`}>
        
        <div className="box">
          <p><a href="/products"><Image className="next" src="/img/next.svg" alt="Next.js Logo" width={100} height={27} priority /> </a></p>
          <p><Image src="/img/vercel.svg" className="vecl" alt="Vercel Logo" width={100} height={24} priority /></p>
        </div>

        
      </main>
    </div>
  )
};
