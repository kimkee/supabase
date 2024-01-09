"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import ui from '../ui.js';

export default function List() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await fetch('/api/products',{sort:'id'}).then((response) => response.json())
    setProducts(response);
    // console.log(response);  
  }
  if(!products){return}
  return(
		        
		<section className="ui-pdlist">
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        
      <ul className="list tp-list">
        {products.map( (data,idx) =>{
          const image = process.env.NEXT_PUBLIC_SUPABASE_URL+data.images_url[0]||"";
          return(
            <li key={idx}>
              <Link href="" className="unit-pd">
                <div className="thum">
                  <div className="pic"><img className="img" src={image} alt="이미지"  onError={ ui.error.poster } /></div>
                  <button type="button" className="btzzim on">찜하기</button>
                  <em className="flg">
                    <i className="fg">{data.status}</i>
                  </em>
                </div>
                <div className="boxs">
                  <div className="tit">{data.title}</div>
                  <div className="prc"><em className="p">{ui.commas.add(data.price)}</em><i className="w">원</i></div>
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
                      <em className="ut-bdg a bdg">{data.condition}</em>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* <table className={'table'}>
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
      </table> */}
      
    </section>



	)
}