'use client'
import React, {  useEffect,useState } from 'react'; //useState, useEffect
// import {NavLink , useLocation } from 'react-router-dom'; // Link  , useLocation, useSearchParams,useParams, useSearchParams



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
      <div className={`floatnav ${ isOnTop ? `on-top` : `` }` }>
        <button type="button" className="bt top" onClick={goTop}><i className="fa-solid fa-arrow-up"></i><em>위로</em></button>
      </div>
      <nav id="menubar" className="menubar">
        <div className="inr">
          <ul className="menu">
            <li className={isActive("/home")}>
              <a href={`/`} className={"bt"}><i className="fa-regular fa-house"></i><em>Home</em></a>
            </li>
            <li className={isActive("/products")}>
              <a href={`/products`} className={"bt"}><i className="fa-solid fa-box"></i><em>Products</em></a>
            </li>
            <li className={isActive("/search")}>
              <a href={`/search`} className={"bt"}><i className="fa-regular fa-search"></i><em>Search</em></a>
            </li>
            <li className={isActive("user/")}>
              <a href={`/user/${userInfo.uid}`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></a>
              {/* <a href={`/user/signin`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></a> */}
            </li>
          </ul>
          {/* <ul className="menu">
            <li className={isActive("home")}>
              <NavLink to={`/home/`} className={"bt"}><i className="fa-regular fa-house"></i><em>Home</em></NavLink>
            </li>
            <li className={isActive("list/movie")}>
              <NavLink to={`/list/movie/0/`} className={"bt"}><i className="fa-regular fa-clapperboard-play"></i><em>Movie</em></NavLink>
            </li>
            <li className={isActive("list/tv")}>
              <NavLink to={`/list/tv/0/`} className={"bt"}><i className="fa-regular fa-tv-retro"></i><em>TV</em></NavLink>
            </li>
            <li className={isActive("search/movie")}>
              <NavLink to={`/search/movie/`} className={"bt"}><i className="fa-regular fa-search"></i><em>Search</em></NavLink>
            </li>
            <li className={isActive("user/")}>
              <NavLink to={`/user/${userInfo.uid}`} className={"bt"}> <i className="fa-regular fa-user"></i><em>Mypage</em></NavLink>
              <NavLink to={`/user/signin`} className={"bt"}><i className="fa-regular fa-user"></i><em>Login</em></NavLink>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  )
}
