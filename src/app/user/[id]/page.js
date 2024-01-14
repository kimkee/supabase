"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, {  useEffect, useRef, useState } from 'react';
import ui from '@/app/ui.js';
import { supabase } from '../../supabase.js'; 

export default function Page() {
  const router = useRouter();


  const logout = async function () {
    const { error } = await supabase.auth.signOut();
    router.push(`/`);
  }


  const [user, setUser] = useState();
  const getUser = async function () {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    console.log(user);
  }
  

  useEffect(() => {
    // checkLogin();
    getUser()
  },[]);

  return (
    <div className="container page user">
      <main className={`contents`}>
        
          <p><img width="60" src={user?.user_metadata.picture} alt="" /> </p>
          <p>{user?.id}</p>
          <p>{user?.email}</p>
          <p>{user?.user_metadata.name}</p>
          <p>{user?.app_metadata.provider}</p>
          <div className="btsbox btn-set"><button type="button" className="btn" onClick={logout}><i className="fa-solid fa-right-to-bracket"></i><em>로그아웃</em></button></div>

        
      </main>
    </div>
  )
};
