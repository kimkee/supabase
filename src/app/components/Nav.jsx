'use client'
import React, { useEffect, useState } from 'react'; //useState, useEffect
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'
import clsx from 'clsx';
import ui from '@/app/ui.js';
import { supabase } from '@/app/supabase.js'; 
export default function Nav() {
  
  // const location = useLocation();
  const pathname = usePathname();
  const router = useRouter();

  // const isActive = els => location.pathname.includes(`${els}`) ? "active" : "";
  const isActive = function(els)  {
    console.log(EventTarget);
  };
  
  // console.log( isActive() );

  const [isOnTop, setIsOnTop] = useState('');
  const scrollEvent = ()=> {
    if ( ui.lock.stat ) return;
    ui.viewport.scrollTop() > 50 ? setIsOnTop(true) : setIsOnTop(false);
  };

  const goTop = ()=> ui.scrollTo("body", 0 , 200 );
  const [userInfo, setUserInfo] = useState({});
  
  const [isLogin, setIsLogin] = useState(null);

  const checkLogin = async ()=> {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session;
    
    if (session === null) {
      console.log('비 로그인');
      setIsLogin(false);
    } else {
      console.log('로그인 됨');
      console.log(authInfo);
      setIsLogin(true);
    }
  }

  const regGoods = ()=>{
    router.push('/posts/write');
    // ui.alert("준비중 입니다!");
  }

  useEffect( () => {
    checkLogin();
    window.addEventListener("scroll",scrollEvent);
  },[]);

  return (
    <>
      <div className={`floatnav ${ isOnTop ? `on-top` : `` }` }>
        <div className="inr">
          <button type="button" className="bt top" onClick={goTop}><i className="fa-solid fa-arrow-up"></i><em>위로</em></button>
          {pathname == ('/products') &&
          <button type="button" onClick={regGoods} className="bt reg">
              <i className="sn fa-solid fa-plus"></i>
              {/* <i className="sn fa-solid fa-caret-up"></i> */}
              <i className="bn fa-solid fa-box-open"></i>
              <em>상품등록</em>
          </button>
          }
        </div>
      </div>
      <nav id="menubar" className="menubar">
        <div className="inr">
          <ul className="menu">
            <li className={ clsx(`li`,{ 'active': pathname.includes('/home')}) }>
              <Link href={`/`} className={"bt"}><i className="fa-regular fa-house"></i><em>Home</em></Link>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/products')}) }>
              <Link href={`/products`} className={"bt"}><i className="fa-solid fa-box"></i><em>Products</em></Link>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/search')}) }>
              <Link href={`/search`} className={"bt"}><i className="fa-regular fa-search"></i><em>Search</em></Link>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/user')}) }>
              {isLogin === true
                ? 
                <Link href={`/user/${userInfo.uid}`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></Link>
                : 
                <Link href={`/user/login`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
