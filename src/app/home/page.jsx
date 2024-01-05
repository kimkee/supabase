 



import Image from 'next/image'
import './page.css'



export default function Home() {
  return (
    <div className="container page home">
      <main className={`contents`}>
        
        <div className="box">
          <a href="/products"><Image className="next" src="/next.svg" alt="Next.js Logo" width={100} height={27} priority /> </a>
        </div>

        
      </main>
    </div>
  )
};
