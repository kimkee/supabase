'use client'
import Files from '@/app/components/Files.jsx';
import { supabase } from '@/app/supabase.js'; // supabase 설정 파일 불러오기
import ui from '@/app/ui.js';
import React, { useState, useEffect } from 'react';

export default function Page() {


  const writePost = async ()=> {
    


    /* const { data, error } = await supabase.from('products').insert([
      {
        title: '타이틀', description: '상품 설명 ㄷㄷ' 
      },
    ]).select(); */
    console.log(data);
  }

  useEffect(() => {
    // ui.popsel.init();
  },[]);
  return (
    <div className="container page post write">
      <main className={`contents`}>
        <div className="board-write">
          <ul className="list">
            <li>
              {/* <label className="dt">사진</label> */}
              <Files opts="{mode:'write', page:'bbs', max:5}"/>
            </li>
            <li>
              <label className="dt">상품명</label>
              <div className="dd">
                <span className="input"><input type="text" placeholder="'입력하세요(최대'+titleMax+'글자)'" /></span>
              </div>
            </li>
            <li>
              <label className="dt">판매가격</label>
              <div className="dd">
                <span className="input"><input type="text" placeholder="입력하세요" /></span>
              </div>
            </li>
            <li>
              <label className="dt">판매지역</label>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_saiearea">
                    <option>서울</option>
                    <option>경기</option>
                  </select>
                </span>
              </div>
            </li>
            <li>
              <label className="dt">카테고리</label>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_cate">
                    <option>가전/디지털</option>
                    <option>가구/인테리어</option>
                    <option>생활/주방용품</option>
                    <option>의류</option>
                    <option>패션잡화</option>
                    <option>뷰티/미용</option>
                    <option>유아용품</option>
                    <option>스포츠/레져</option>
                    <option>도서/취미</option>
                    <option>반려동물용품</option>
                    <option>중고차</option>
                    <option>기타상품</option>
                  </select>
                </span>
              </div>
            </li>
            <li>
              <label className="dt">상품상태</label>
              <div className="dd">
                <label className="radio-check round"><input type="radio" name="radio1" /><em className="txt">새상품</em><i className="tcx"></i></label>
                <label className="radio-check round"><input type="radio" name="radio1" /><em className="txt">단순개봉</em><i className="tcx"></i></label>
                <label className="radio-check round"><input type="radio" name="radio1" /><em className="txt">중고</em><i className="tcx"></i></label>
              </div>
            </li>
            <li>
              <label className="dt">상품설명</label>
              <div className="dd">
                <span className="textarea">
                  <textarea className="reply" data-ui="autoheight" placeholder="'입력하세요(최대'1000'글자)'"></textarea>
                  <span className="num"><i className="i">{0}</i><b className="n">{5}</b></span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <nav className="floatbots">
        <div className="inr">
          <div className="btsbox btn-set">
            <button type="button" className="btn"><i className="fa-solid fa-list"></i><em>취소</em></button>
            <button type="button" className="btn" disabled="" onClick={()=>{writePost()}}><i className="fa-solid fa-pen-to-square"></i><em>등록</em></button>
          </div>
        </div>
      </nav>

    </div>
  )
}
