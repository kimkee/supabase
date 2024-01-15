'use client';


import { useRouter } from 'next/navigation';
import Nav from '@/app/components/Nav.jsx';
import Header from '@/app/components/Header.jsx';
import Link from 'next/link';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <>
      {/* <Header /> */}
      <div className="container page p404">
        <main className={`contents`}>
          
          <div className="error-box">
            <h2 className="tit"><b>4</b><b>0</b><b>4</b></h2>
            <p className="msg">요청한 페이지를 찾을 수 없습니다.</p>
            <div className="bts">
              <button type="button" className="btn sm" onClick={ ()=>{router.back()} }>뒤로</button>
              <button type="button" className="btn sm" onClick={ ()=>{router.push(`/`)} }>메인</button>
            </div>
          </div>
        
        </main>
      </div>
      {/* <Nav /> */}
    </>
  );
};
