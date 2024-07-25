import React, { useEffect } from "react";
import Image from "next/image";
import KakaoImage from "/public/kakao/kakao_login_medium_narrow.png";

type KakaoShareButtonProps = {
    description: string;
}

const KakaoShareButton = ({description}: KakaoShareButtonProps) => {

    const shareUrl = typeof window != 'undefined' ? window.location.href: '';
    
    useEffect(() => {
        if (typeof window !== "undefined") {
       
          const { Kakao } = window;
    
          if (!Kakao.isInitialized()) {
            Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
          }
        }
      }, []);
     
    const handleShare = () => {
      
        const {Kakao} = window;

        Kakao.Share.sendDefault({
            objectType:'text',
            text:description,
            link: {
                mobileWebUrl: shareUrl,
                webUrl:shareUrl,
            },
        });

      }
  return (
    <div onClick={handleShare}>
       <Image
        className="cursor-pointer"
        src={KakaoImage}
        alt="카카오톡 공유 이미지"
      /> 
    </div>
  )
}

export default KakaoShareButton;