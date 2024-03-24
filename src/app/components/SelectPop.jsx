'use client'
import React, { useEffect, useState } from 'react'; //useState, useEffect
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'
import clsx from 'clsx';
import ui from '@/app/ui.js';
import { supabase } from '@/app/supabase.js';
export default function Select() {


  useEffect(() => {

  }, []);

  return (
    <article class="pop-select" data-selt-pop="${name}">
      <div class="pbd">
        <div class="phd ${tit ? 'is-tit':''}"><h3 class="ptit">${tit}</h3></div>
        <div class="pct">
          <main class="poptents">
            <div class="swiper-container slide">
              <ul class="swiper-wrapper list">
                ${list.map(li => {
                  const dis = li.d == true ? "disabled" : null;
                  return `<li class="swiper-slide ${dis}"><span class="bt" value="${li.v}">${li.t}</span></li>`;
                }).join("")}
              </ul>
            </div>
            <div class="btsbot">
              <button type="button" class="btcom">선택</button>
            </div>
          </main>
        </div>
        <button type="button" class="btn-sel-close"><i class="fa-regular fa-xmark"></i></button>
      </div>
    </article>    
  )
}
