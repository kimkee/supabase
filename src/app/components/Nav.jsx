'use client'
import React, {  useEffect,useState } from 'react'; //useState, useEffect
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ui from '../ui.js';

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
              <a href={`/`} className={"bt"}><i className="fa-regular fa-house"></i><em>Home</em></a>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/products')}) }>
              <a href={`/products`} className={"bt"}><i className="fa-solid fa-box"></i><em>Products</em></a>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/search')}) }>
              <a href={`/search`} className={"bt"}><i className="fa-regular fa-search"></i><em>Search</em></a>
            </li>
            <li className={ clsx(`li`,{ 'active': pathname.includes('/user')}) }>
              <a href={`/user/${userInfo.uid}`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></a>
              {/* <a href={`/user/signin`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
