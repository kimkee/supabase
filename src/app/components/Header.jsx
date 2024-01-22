'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import {NavLink , useLocation } from 'react-router-dom'; // Link  , useLocation, useSearchParams,useParams, useSearchParams



export default function Header( {opts} ) {
  
  /* 
  if( typeof opts == "object" ){
    opts = Object.assign({type:'sub',cate:'page'},opts);
  }else{
    opts = Object.assign({type:'sub',cate:'page'});
  } 
  */
 
  opts ??= {};
  opts.type ??= "sub";
  opts.cate ??= "page";

  const router = useRouter();

  useEffect( () => {
    console.log(opts);
  });

  return (
    <>
      <header className={`header ${opts.type} ${opts.cate}`}>
        <div className="inr">
          <div className="ldt">
            {opts.type === 'main' &&
            <Link href="/" className="logo">
              <span className="btlogo"></span>
              <span className="txt">SUPAMARKET</span>
              <Image className="next" src="/img/next.svg" alt="Next.js Logo" width={26} height={16} priority />
            </Link>
            }
            {opts.type === 'sub' &&
              <>
                <button type="button" className="bt back" onClick={()=>{ router.back() }}><i className="fa-solid fa-arrow-left"></i>뒤로</button>
                <h3 className="htit"></h3>
              </>
            }
          </div>
          <div className="rdt">
            <button type="button" className="bt gnb"><i className="fa-sharp fa-solid fa-bars"></i><b>메뉴</b></button>
          </div>
        </div>
      </header>
    </>
  )
}
