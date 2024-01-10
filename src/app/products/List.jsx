"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import ui from '../ui.js';
import Loading from '../components/Loading';
export default function List() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts();
  },[]);

  async function getProducts() {
    const tpData = localStorage.getItem("prdType") || 'tp-list';
    setIsTpList(tpData)
    const response = await fetch('/api/products',{ cache: 'no-store' }).then((response) => response.json())
    setProducts(response);
    // console.log(response);  
  }
  
  const [isTpList, setIsTpList] = useState('tp-list');
  const togTpList = (e, type)=>{
    console.log(`${type}`);
    setIsTpList( type );
    localStorage.setItem("prdType", type)  
  }


  // if(!products){return}
  return(
		        
		<section className="ui-pdlist">
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}

      { !products.length ? 
        <Loading opts={{type:'glx', cls:'abs'}}/>
        :
        <>
        <div className="bbs-opt">
          <div className="tots"><i className="fa-regular fa-square-poll-horizontal"></i> Total : {products.length} </div>
          <div className={`tbts ${isTpList}`}>
            <button type="button" onClick={(e)=>{togTpList(e,'tp-list')}} className={`bt-tog tp-list`}><i className="fa-solid fa-list"></i></button>
            <button type="button" onClick={(e)=>{togTpList(e,'tp-thum')}} className={`bt-tog tp-thum`}><i className="fa-solid fa-grip"></i></button>
          </div>
        </div>
        <ul className={`list ${isTpList}`}>
          {
            products.map( (data,idx) =>{
            const image = process.env.NEXT_PUBLIC_SUPABASE_URL+data.images_url[0]||"";
            const createdAt = new Date(data.created_at);
              const time = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }).format(createdAt);
            return(
              <li key={idx}>
                <Link href={"/products/item/"+data.id}  className="unit-pd">
                  <div className="thum">
                    <div className="pic"><img className="img" src={image} alt="이미지"  onError={ ui.error.poster } /></div>
                    <span className="btzzim on"><i className="fa-regular fa-heart"></i><b>찜하기</b></span>
                    { data.status == '판매중' ? null
                      :<em className="flg"><i className="fg">{data.status}</i></em>
                    }
                  </div>
                  <div className="boxs">
                    <div className="tit">{data.title}</div>
                    <div className="prc"><em className="p">{ui.commas.add(data.price)}</em><i className="w">원</i></div>
                    <div className="inf">
                      <em className="time">{time}</em>
                      <em className="name">{data.location}</em>
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
      </>
      }

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