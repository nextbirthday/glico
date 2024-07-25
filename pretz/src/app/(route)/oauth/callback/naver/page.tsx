'use client'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

const Page = () => {

    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    const naverLoginHandler = async (code: string ) => {
      
      try {

        const res = await axios.post(process.env.NEXT_PUBLIC_SPRING_IP + 'naver/oauth/callback', 
          {
            code: code,
            state: state
          }
        );
      
        const data = res.data;
        console.log("Data returned from API: ", data);
      
        if (data.success) {
          window.location.href = '/';
        } else{
          window.location.href = '/member/login';
        }
      } catch (error) {
          console.error("Error occurred during the Naver API call:", error);
      }
  };
  
    useEffect(()=>{

      if (code) { 
        naverLoginHandler(code);
      }

    },[code]);

  return (
    <div>
      Processing Naver Login...
      <h2>${code}</h2>
      <h2>${state}</h2>
    </div>
  )
}

export default Page;

