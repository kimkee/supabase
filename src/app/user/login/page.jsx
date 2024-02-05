"use client"
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React, {  useEffect, useRef } from 'react';
import { supabase } from '@/app/supabase.js'; 
import ui from '@/app/ui.js';

export default function Login() {
  const router = useRouter();
  const searchPrams = useSearchParams();
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const autoLogin = useRef(null);
  const saveSheck = ()=> {
    const saveLogin = autoLogin.current.checked;
    console.log(saveLogin);
    if (saveLogin) {
      const msg = `
        자동로그인을 사용하시면<br> 
        다음부터 회원아이디와 비밀번호를<br>
        입력하실 필요가 없습니다.<br><br>
        공공장소에서는 개인정보가 유출될 수 있으니 사용을 자제하여 주십시오.<br><br>
        자동로그인을 사용하시겠습니까?
      `;
      ui.confirm(msg, {
        tit: "로그인 설정",
        ycb: () => {
          autoLogin.current.checked = true;
        },
        ncb: () => {
          autoLogin.current.checked = false;
        },
        ybt: "예",
        nbt: "아니오",
      });
    }
  }
  const loginGithub = async ()=>{
    console.log("loginGithub");
    ui.loading.show(`glx`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin,
      },
    });
  }
  const loginGoogle = async ()=>{
    console.log("loginGoogle");
    ui.loading.show(`glx`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: location.origin
      },
    })
  }
  const loginKakao = async ()=>{
    console.log("loginKakao");
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: location.origin
      },
    });
  }

  const login = async ()=>{
    console.log("login");
    ui.alert("준비중입니다.");
  };

  const checkLogin = async ()=> {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session;
    
    if (session === null) {
      console.log('비 로그인');
      return '비 로그인'
    } else {
      console.log('로그인 됨');
      return '로그인 됨'
    }
  }

  useEffect(() => {
    checkLogin();
  },[]);

  return (
    <div className="container page sign in">
      <main className={`contents`}>
        
      <div className="sign-form">

          <div className="sns form">
            <div className="tit"><em className="t">SNS 로그인 </em></div>
            <div className="bts">
              <button type="button" className="btn" onClick={loginGithub}><i className="fa-brands fa-github" /><em>Github </em></button>
              <button type="button" className="btn" onClick={loginGoogle}><i className="fa-brands fa-google" /><em>Google </em></button>
              <button type="button" className="btn" onClick={loginKakao} disabled><i className="fa-brands fa-kickstarter-k" /><em>Kakao </em></button>
              <button type="button" className="btn" disabled><i className="fa-brands fa-twitter" /><em>Twitter </em></button>
            </div>
          </div>
          <div className="eml form">
            <div className="tit"><em className="t">Email 계정 로그인</em></div>
            <ul className="list">
              <li>
                <div className="dd"><span className="input"><input type="email" ref={userEmail} placeholder="이메일" /></span></div>
              </li>
              <li>
                <div className="dd"><span className="input"><input type="password" ref={userPassword} placeholder="비밀번호" /></span></div>
              </li>
            </ul>
            <div className="savelogin">
              <Link className={`bt`} href={`/user/join`}>
                회원가입하러 가기 <i className="fa-solid fa-chevron-right"></i>
              </Link>
              <label className="radio-check"><input type="checkbox" ref={autoLogin} onChange={saveSheck} /><span className="txt">자동 로그인</span><i className="tcx"></i></label>
            </div>
            <div className="btsbox btn-set"><button type="button" className="btn" onClick={login}><i className="fa-solid fa-right-to-bracket"></i><em>로그인</em></button></div>
          </div>
        </div>

        
      </main>
    </div>
  )
};
