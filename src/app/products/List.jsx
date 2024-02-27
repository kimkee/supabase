"use client"
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import ui from '@/app/ui.js';
// import {conditionObj,locationObj,statusObj} from './getPrdObj.js';
import PrdObj from './getPrdObj.js';
import Loading from '@/app/components/Loading';
export default function List() {

  const [products, setProducts] = useState([]);
  const [conditionVar, setCondition] = useState({});
  const [locationVar, setLocation] = useState({});
  const [statusVar, setStatus] = useState({});
  const router = useRouter();

  const listVisbSet = ()=>{
    const listBoxs = document.querySelectorAll(".ui-pdlist .list>li");
    const ovserver = new IntersectionObserver( listBoxs => {
      listBoxs.forEach( box => {
        box.target.classList.toggle("visible", box.isIntersecting);
      },{
        threshold:0.5
      });
    });
    listBoxs.forEach( box => ovserver.observe(box) );
    console.log(ovserver);
  }

  useEffect(() => {
    getProducts({ opt:'sort', colum:'updated_at', asc:'desc' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getProducts = async (prams)=> {
    const tpData = localStorage.getItem("prdType") || 'tp-list';
    setIsTpList(tpData)
    console.log(prams);
    // const response = await fetch('https://api.kimkee7.workers.dev/',{ cache: 'no-store' }).then((response) => response.json())
    await PrdObj.then( data => {
      console.log(data );
      setCondition(data.conditionObj)
      setLocation(data.locationObj)
      setStatus(data.statusObj)
    })
    const response = await fetch(`/api/products/${prams.opt}/${prams.colum}/${prams.asc}`,{ cache: 'no-store' }).then((response) => response.json())
    setProducts(response);

  }
  products.length && listVisbSet();
  
  const [isTpList, setIsTpList] = useState('tp-list');
  const togTpList = (e, type)=>{
    console.log(`${type}`);
    setIsTpList( type );
    localStorage.setItem("prdType", type)  
  }


  // if(statusObj['1']){return}
  return(
		        
		<section className="ui-pdlist">
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      {/* <button onClick={listVisbSet}>d</button> */}
      { !products.length ? 
        <Loading opts={{type:'glx', cls:'abs'}}/>
        :
        <>
        <div className="bbs-opt">
          <div className="tots"><i className="fa-regular fa-square-poll-horizontal"></i> Total : {products.length} </div>
          <div className={`tbts ${isTpList}`}>
            {/* <button type="button" onClick={(e)=>{ getProducts({'opt1':'sort','opt2':'price'});  }} className={`bt-tog tp-list`}><i className="fa-solid fa-list"></i><b>LIST</b></button> */}
            <button type="button" onClick={(e)=>{togTpList(e,'tp-list')}} className={`bt-tog tp-list`}><i className="fa-solid fa-list"></i><b>LIST</b></button>
            <button type="button" onClick={(e)=>{togTpList(e,'tp-thum')}} className={`bt-tog tp-thum`}><i className="fa-solid fa-grip"></i><b>GRID</b></button>
          </div>
        </div>
        <ul className={`list ${isTpList}`}>
          { products.map( (data,idx) =>{
              const image = process.env.NEXT_PUBLIC_SUPABASE_URL+data.images_url[0] || "";
              const createdAt = new Date(data.updated_at);
              // const time = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium', timeStyle: 'short' }).format(createdAt);
              const time = ui.timeForm(createdAt);
              const price = ui.commas.add(data.price || '');
              return(
                <li key={idx} data-id={data.id} className={'visible'}>
                  <Link href={`/products/${data.id}`}  className="unit-pd">
                    <div className="thum">
                      <div className="pic"><img className="img" src={image} alt="이미지"  onError={ ui.error.poster } /></div>
                      
                      { idx % 5 === 1 &&
                      <span className="btzzim on"><i className="fa-regular fa-bookmark"></i><b>찜하기</b></span>
                      }

                      { statusVar[data.status_id] == '판매중' ? null
                      :<em className="flg"><i className="fg">{statusVar[data.status_id]}</i></em>}
                      
                    </div>
                    <div className="boxs">
                      <div className="tit">{data.title}</div>
                      <div className="prc"><em className="p">{price}</em><i className="w">원</i></div>
                      <div className="inf">
                        <em className="time" dangerouslySetInnerHTML={{ __html: time }}></em>
                        {/* <em className="name">{data.location}</em> */}
                      </div>
                      <div className="dec">
                        <div className="hit">
                          <em className="ht repy"><i className="fa-regular fa-comment-dots"></i><b>1</b></em>
                          <em className="ht like"><i className="fa-regular fa-heart"></i><b>12</b></em>
                        </div>
                        <div className="opt">
                          <em className="ut-bdg a bdg">{ data.location_id > 0 ? locationVar[data.location_id] : locationVar['99'] }</em>
                          <em className="ut-bdg a bdg">{conditionVar[data.condition_id]}</em>
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