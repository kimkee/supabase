'use client';

import { Link } from 'next/navigation'
import { useRouter } from 'next/navigation';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="container page p404">
        <main className={`contents`}>
          
          <div className="error-box">
            <h2 className="tit">404</h2>
            <p className="msg">요청한 페이지를 찾을 수 없습니다.</p>
            <div className="bts">
              <a className="btn sm" onClick={ ()=>{router.back()} }>뒤로</a>
              <a className="btn sm" href="/">메인</a>
            </div>
          </div>
        
        </main>
      </div>
      <Nav />
    </>
  );
};
