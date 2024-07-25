'use client'
/* eslint-disable @next/next/no-img-element */
import { Tabs } from 'antd'
import Link from 'next/link'

import SigninById from '../../../../components/login/signinById'
import SigninByQr from '../../../../components/login/signinByQr'
import styles from './page.module.css'

import KakaoLoginImage from "/public/kakao/kakao_login_medium_narrow.png";
import naverLoginImage from "/public/naver/btnG_완성형.png";

const Signin = () => {

  const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  
  const NAVER_STATE = "false";
  const NAVER_REDIRECT_URI = 'http://localhost:3000/oauth/callback/naver';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
  
  const handleGoogleLogin = () => {
    console.log('onGoogleSignin')
  }

  const handleNaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  }

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
      <div className={styles.signin_body}>
        <header className={styles.signin_header}>
          <Link href="/">
            <img src="/plani/logo.jpg" alt="회사로고" className={styles.signin_logo} />
          </Link>
        </header>

        <div className={styles.signin_wrap}>
          <div>
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="small"
              items={[
                {
                  label: 'ID 로그인',
                  key: '1',
                  children: (
                    <>
                      <SigninById />
                    </>
                  ),
                },
                {
                  label: '일회용 번호',
                  key: '2',
                  children: 'Content of 일회용 로그인 tab',
                },
                {
                  label: 'QR 로그인',
                  key: '3',
                  children: (
                    <>
                      <SigninByQr />
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <ul className={`${styles.signin_help_menu} `}>
          <li className={`${styles.signin_help_item} ${styles.signin_help_item_password}`}>
            <Link href="/user/help/findpw">비밀번호 찾기</Link>
          </li>
          <li className={`${styles.signin_help_item} ${styles.signin_help_item_id}`}>
            <Link href="/user/help/findid">&nbsp;&nbsp;아이디 찾기</Link>
          </li>
          <li className={`${styles.signin_help_item} ${styles.signin_help_item_signup}`}>
            <Link href="/member/join/agree">&nbsp;&nbsp;회원가입</Link>
          </li>
        </ul>

        <ul className={styles.signin_social_menu}>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_google}`}>
            <button onClick={handleGoogleLogin}>
              <img src="/google/google_circle.png" alt="구글로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_naver}`}>
            <button onClick={handleNaverLogin}>
              <img src="/naver/btnG_아이콘원형.png" alt="네이버로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_kakao}`}>
            <button onClick={handleKakaoLogin}>
              <img src="/kakao/kakao_circle.png" alt="카카오로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
        </ul>
        <div style={{ padding: '0 0 1rem 0' }}></div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Signin
