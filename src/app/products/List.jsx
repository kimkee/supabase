"use client"
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from "@supabase/supabase-js";
import React, { useState, useEffect } from 'react';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);


export default function List() {

  // const products = await supabase.from("products").select().order('id', { ascending: true });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  
  console.log(products);
  async function getProducts() {
    const { data } = await supabase.from("products").select().order('id', { ascending: true });
    setProducts(data);
    
  }
  return(
		        

    
		<section className="ui-pdlist">
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        
      <ul className="list tp-list" data-ui-ptype="ctn" data-ui-ptype-val="cate_list_1" id="pd_list">
        <li>
          <Link href="" className="unit-pd">
            <div className="thum">
              <div className="pic"><img className="img" src={"/img/noimage.png"} alt="이미지" /></div>
              <button type="button" className="btzzim on">찜하기</button>
              <em className="flg">
                <i className="fg">예약중</i>
              </em>
            </div>
            <div className="boxs">
              <div className="tit">LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기</div>
              <div className="prc"><em className="p">1,189,000</em><i className="w">원</i></div>
              <div className="inf">
                <em className="time">4일전</em>
                <em className="name">서울</em>
              </div>
              <div className="dec">
                <div className="hit">
                  <em className="ht repy"><i className="fa-regular fa-comment-dots"></i><b>1</b></em>
                  <em className="ht like"><i className="fa-regular fa-heart"></i><b>12</b></em>
                </div>
                <div className="opt">
                  <em className="ut-bdg a bdg">새상품</em>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="" className="unit-pd a">
            <div className="thum">
              <div className="pic"><img className="img" src={"/img/temp/goods_1.jpg"} alt="이미지" /></div>
              <button type="button" className="btzzim on">찜하기</button>
              <em className="flg">
                <i className="fg">예약중</i>
              </em>
            </div>
            <div className="boxs">
              <div className="tit">LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기 LG전자 트롬 건조기</div>
              <div className="prc"><em className="p">1,189,000</em><i className="w">원</i></div>
              <div className="inf">
                <em className="time">4일전</em>
                <em className="name">서울</em>
              </div>
              <div className="dec">
              <div className="hit">
                  <em className="ht repy"><i className="fa-regular fa-comment-dots"></i><b>1</b></em>
                  <em className="ht like"><i className="fa-regular fa-heart"></i><b>12</b></em>
                </div>
                <div className="opt">
                  <em className="ut-bdg a bdg">새상품</em>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      
    </section>



	)
}