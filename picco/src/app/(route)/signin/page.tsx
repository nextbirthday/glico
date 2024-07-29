'use client'
/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/footer/footer'
import { Tabs } from 'antd'
import Link from 'next/link'

import SigninById from '@/components/signin/signinById'
import SigninByQr from '@/components/signin/signinByQr'
import styles from './page.module.css'

const Signin = () => {
  
  const onGoogleSignin = () => {
    console.log('onGoogleSignin')
  }

  const onNaverSignin = () => {
    console.log('onNaverSignin')
  }

  const onKakaoSignin = () => {
    console.log('onKakaoSignin')
  }

  return (
    <>
      <div className={styles.signin_body}>
        <header className={styles.signin_header}>
          <Link href="/">
            <img src="/jobs/nexon.svg" alt="회사로고" className={styles.signin_logo} />
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
            <Link href="/signup">&nbsp;&nbsp;회원가입</Link>
          </li>
        </ul>

        <ul className={styles.signin_social_menu}>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_google}`}>
            <button onClick={onGoogleSignin}>
              <img src="/social/google/google_circle.png" alt="구글로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_naver}`}>
            <button onClick={onNaverSignin}>
              <img src="/social/naver/btnG_icon_circle.png" alt="네이버로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
          <li className={`${styles.signin_social_button} ${styles.signin_social_button_kakao}`}>
            <button onClick={onKakaoSignin}>
              <img src="/social/kakao/kakao_circle.png" alt="카카오로그인" style={{ width: '4rem', height: '4rem' }} />
            </button>
          </li>
        </ul>
        <div style={{ padding: '0 0 1rem 0' }}></div>
        <Footer />
      </div>
    </>
  )
}

export default Signin
