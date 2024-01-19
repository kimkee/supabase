'use client'
import React, { useEffect, useState } from 'react'; //useState, useEffect
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'
import clsx from 'clsx';
import ui from '@/app/ui.js';
import { supabase } from '@/app/supabase.js'; 
export default function Files() {
  

  useEffect( () => {
    
  },[]);

  return (
    <>
      <div className="ut-attfiles">
        <div className="adbts">
          <input type="file" className="file" id="fileInput" accept="image/* , video/*" multiple /* maxlength="5" */ />
          <span className="btfiles">
            <i className="fa-solid fa-camera"></i>
            <span className="num"><b className="i">{0}</b>/<b className="n">{0}</b></span>
          </span>
        </div>
        <div className="attach">
          {/* <div  key="index" data-index="index" className="pic">
            <b>{0}</b>
            <img className="img" src={"{image}"} alt="" />
            <button className="del" type="button" ><i className="fa-solid fa-xmark"></i></button>
            <input type="radio" name="rdFIle" className="rdo" />
            <div className="rbt" v-if="Files.length > 1">
              <button data-index="index-1" className="mbt"><i className="fa-solid fa-angle-left"></i></button>
              <button data-index="index+1" className="mbt"><i className="fa-solid fa-angle-right"></i></button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
