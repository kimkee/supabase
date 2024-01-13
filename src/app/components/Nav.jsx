'use client'
import React, {  useEffect,useState } from 'react'; //useState, useEffect
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import clsx from 'clsx';
import ui from '@/app/ui.js';

export default function Nav() {
  
  // const location = useLocation();
  const pathname = usePathname();

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
  
  useEffect( () => {
    window.addEventListener("scroll",scrollEvent);
  },[]);

  return (
    <>
      <div className={`floatnav ${ isOnTop ? `on-top` : `` }` }>
        <button type="button" className="bt top" onClick={goTop}><i className="fa-solid fa-arrow-up"></i><em>위로</em></button>
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
              {/* <Linka href={`/user/${userInfo.uid}`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></Link> */}
              <Link href={`/user/login`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
