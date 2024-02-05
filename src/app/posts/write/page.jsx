'use client'
import Files from '@/app/components/Files.jsx';
import { supabase } from '@/app/supabase.js'; // supabase 설정 파일 불러오기
import ui from '@/app/ui.js';
import React, { useState, useEffect } from 'react';

export default function Page() {

  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);

  const writePost = async ()=> {
    /* const { data, error } = await supabase.from('products').insert([
      {
        title: '타이틀', description: '상품 설명 ㄷㄷ' 
      },
    ]).select(); */
    console.log(data);
  }

  const getCategory = async ()=>{
    const category = await fetch('/api/category').then((result) => result.json())
    setCategory(category);
  }
  const getLocation = async ()=>{
    const location = await fetch('/api/location').then((result) => result.json())
    setLocation(location);
  }

  useEffect(() => {
    getCategory();
    getLocation();
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
                <span className="input"><input type="tel" placeholder="입력하세요" /></span>
              </div>
            </li>
            <li>
              <label className="dt">판매지역</label>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_saiearea">
                    <option value="0">선택해주세요</option>
                    { location.length > 0 &&
                      location.map((data,idx) =>{
                        return <option key={idx} value={data.id}>{data.location}</option>
                      })
                    }
                  </select>
                </span>
              </div>
            </li>
            <li>
              <label className="dt">카테고리</label>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_cate">
                    <option value="0">선택해주세요</option>
                    { category.length > 0 &&
                      category.map((data,idx) =>{
                        return <option key={idx} value={data.id}>{data.category}</option>
                      })
                    }
                  </select>
                </span>
              </div>
            </li>
            <li>
              <label className="dt">상품상태</label>
              <div className="dd">
                <label className="radio-check round"><input type="radio" name="radio1" value="1" /><em className="txt">새상품</em><i className="tcx"></i></label>
                <label className="radio-check round"><input type="radio" name="radio1" value="2" /><em className="txt">단순개봉</em><i className="tcx"></i></label>
                <label className="radio-check round"><input type="radio" name="radio1" value="3" /><em className="txt">중고</em><i className="tcx"></i></label>
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
