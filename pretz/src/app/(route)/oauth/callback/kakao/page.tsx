'use client'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {

    const searchParams = useSearchParams();
    const code = searchParams.get("code");

    const kakaoLoginHandler = async (code: string) => {
        const res = await axios.post(`/api/oauth/callback/kakao?code=${code}`);
    
        const data = res.data;
        console.log("data returned from api : ", data);
    };

    useEffect(() => {
        
        if (code) { 
            kakaoLoginHandler(code);
        }
      }, [code]);

  return (
     <div>Processing Kakao Login... 
        <h2>${code}</h2>
     </div>
  )
}

export default Page;