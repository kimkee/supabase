'use client'
import Image from 'next/image'
import React, {  useEffect,useState } from 'react'; //useState, useEffect
import {NavLink , useLocation } from 'react-router-dom'; // Link  , useLocation, useSearchParams,useParams, useSearchParams



export default function Nav() {
  
  // const location = useLocation();
  

  const isActive = els => location.pathname.includes(`${els}`) ? "active" : "";
  
  const [isOnTop, setIsOnTop] = useState('');
  const scrollEvent = ()=> {
    if ( ui.lock.stat ) return;
    ui.viewport.scrollTop() > 50 ? setIsOnTop(true) : setIsOnTop(false);
  };

  const goTop = ()=> ui.scrollTo("body", 0 , 200 );


  const [userInfo, setUserInfo] = useState({});
  
  useEffect( () => {
    
  },[]);

  return (
    <>
      <header className={`header`}>
        <div className="inr">
          <div className="ldt">
            <a href="/" className="logo">
              <span className="btlogo"></span>
              <span className="txt">SUPAMARKET</span>
              <Image className="next" src="/next.svg" alt="Next.js Logo" width={26} height={27} priority />
            </a>
      
          </div>
          <div className="rdt">
      
      
            <button type="button" className="bt gnb"><i className="fa-sharp fa-solid fa-bars"></i><b>메뉴</b></button>
          </div>
        </div>
      </header>
    </>
  )
}
