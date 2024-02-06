'use client'
import Files from '@/app/components/Files.jsx';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/app/supabase.js'; // supabase 설정 파일 불러오기
import ui from '@/app/ui.js';
import React, { useState, useEffect, useRef } from 'react';

export default function Write() {
  const router = useRouter();
  
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [condition, setCondition] = useState([]);
  const [status, setStatus] = useState([]);
  const [priceTxt, setPriceTxt] = useState('');

  const [titleRef, descriptRef, priceRef, categoryRef, locationRef, conditionRef , salesRef] = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  
  const [statusVal, setStatusVal] = useState('0');
  const handleRadioChange = (event) => {
    setStatusVal(event.target.value || 0);
  };

  const writePost = async ()=> {
    /* const { data, error } = await supabase.from('products').insert([
      {
        title: '타이틀', description: '상품 설명 ㄷㄷ' 
      },
    ]).select(); */
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const location = locationRef.current.value;
    const sales = salesRef.current.value;
    const category = categoryRef.current.value;
    const descript = descriptRef.current.value;

    console.log(`상품타이틀 = `+ title);
    console.log(`판매가격 = `+ ui.commas.del(priceTxt));
    console.log(`판매장소 = `+location);
    console.log(`상품분류 = `+category);
    console.log(`상품상태 = `+statusVal);
    console.log(`상품설명 = `+descript);
    console.log(`판매상태 = `+sales);
  }

  const getCategory = async ()=>{
    const category = await fetch('/api/category').then((result) => result.json())
    setCategory(category);
  }
  const getLocation = async ()=>{
    const location = await fetch('/api/location').then((result) => result.json())
    setLocation(location);
  }
  const getCondition = async ()=>{
    const condition = await fetch('/api/condition').then((result) => result.json())
    setCondition(condition);
  }
  const getStatus = async ()=>{
    const status = await fetch('/api/status').then((result) => result.json())
    setStatus(status);
  }
  const priceForm = (e)=>{
    console.log(e.value);
    const val = ui.commas.add( ui.commas.del( e.value ) || "" );
    console.log(val);
    setPriceTxt(val);
  }

  // const revText = useRef('');
  const revNumMax = 1000;
  const [revNumNow, setRevNumNow] = useState(0)
  const autoheight = (e)=>{
    const $els = e.target;
    let tboxS;
    $els.style.height = "1rem";
    tboxS = $els.scrollHeight;
    $els.style.height = tboxS + "rem";
    const revTxtNow = descriptRef.current.value;
    setRevNumNow( ui.commas.add(descriptRef.current.value.length) );
      console.log( descriptRef.current.value );
      console.log( descriptRef.current.value.length , revNumMax  );
    if ( revTxtNow.length > revNumMax ) {
      $els.value = $els.value.slice(0, revNumMax );
      setRevNumNow( ui.commas.add(descriptRef.current.value.length) );
      ui.alert(`상품 설명은 1,000글자 까지 입니다.`,{
        ycb: () => {}
      });      
    }
  }


  useEffect(() => {
    getCategory();
    getLocation();
    getCondition();
    getStatus();
  },[]);

  return (
    <div className="container page post write">
      <main className={`contents`}>
        <div className="board-write">
          <div className="sales select-pop sm">
            <select className="slist" name="select_pop_saiearea" ref={salesRef}>
              { status.length > 0 &&
                status.map((data,idx) =>{
                  return <option key={idx} value={data.id}>{data.status}</option>
                })
              }
            </select>
          </div>
          <ul className="list">
            <li>
              <label className="dt">사진</label>
              <Files opts="{mode:'write', page:'bbs', max:5}"/>
            </li>
            <li>
              <div className="dt">상품명 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                <span className="input"><input type="text" ref={titleRef} placeholder={`입력하세요 (최대'${50}'글자)`} /></span>
              </div>
            </li>
            <li>
              <div className="dt">판매가격 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                <span className="input price">
                  <input ref={priceRef} type="tel" 
                    value={priceTxt}
                    onInput={(e)=>priceForm(e.currentTarget)}
                    placeholder="판매가격을 입력하세요"
                  />
                </span>
              </div>
            </li>
            <li>
              <div className="dt">판매지역 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_saiearea" ref={locationRef}>
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
              <div className="dt">카테고리 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                <span className="select-pop">
                  <select className="slist" name="select_pop_cate" ref={categoryRef}>
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
              <div className="dt">상품상태 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                { condition.length > 0 ?
                  condition.map( (data,idx) => {
                  return (
                    <label className="radio-check round" key={idx}>
                      <input type="radio" name="radio1" 
                        value={data.id} 
                        // checked={statusVal === data.id}
                        onChange={handleRadioChange} 
                        // defaultChecked={idx == 0 } 
                        />
                      <em className="txt">{data.condition}</em><i className="tcx"></i>
                    </label>
                  )
                }):
                <p style={{"height":"34rem","padding": "7rem 0"}}>Loading....</p>
                }
              </div>
            </li>
            <li>
              <div className="dt">상품설명 <i className="chk fa-solid fa-check"></i></div>
              <div className="dd">
                <span className="textarea">
                  <textarea className="reply" onInput={autoheight}  ref={descriptRef} data-ui="autoheight" placeholder={`입력하세요(최대'${`1,000`}'글자)`}></textarea>
                  <span className="num"><i className="i">{revNumNow}</i><b className="n">{ui.commas.add(revNumMax)}</b></span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <nav className="floatbots">
        <div className="inr">
          <div className="btsbox btn-set">
            <button type="button" className="btn" onClick={()=>{ router.back() }}><i className="fa-solid fa-list"></i><em>취소</em></button>
            <button type="button" className="btn" disabled="" onClick={()=>{writePost()}}><i className="fa-solid fa-pen-to-square"></i><em>등록</em></button>
          </div>
        </div>
      </nav>

    </div>
  )
}
