"use client"
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '../supabase.js'; 
import React, { useState, useEffect } from 'react';


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
  // if(!products.data){return}
  
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


      <table className={'table'}>
        <tbody>
          
          {products.map( (data,idx) =>{
            const createdAt = new Date(data.created_at);
            const time = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }).format(createdAt);
            return(
            <tr key={idx}>
              <td>{data.id}</td>
              <td>{data.category}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>{time}</td> 
            </tr>
            )
          })}
          
        </tbody>
      </table>
      
    </section>



	)
}