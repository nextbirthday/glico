'use client'
/* eslint-disable @next/next/no-img-element */
import FormMessage from '@/components/form/formMessage'
import { Checkbox, Switch } from 'antd'
import Link from 'next/link'

import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegUser } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import { usePathname, useRouter } from 'next/navigation'
import styles from './signinById.module.css'

const SigninById = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [checkMessage, setCheckMessage] = useState(false);

  const onSubmit = async (data: any) => {
    if (!data) {
      return
    }
    const result = await signIn('credentials', {
      userid: data.userid,
      password: data.password,
      redirect: false,
      callbackUrl: '/',
    })

    /* 로그인 성공 */
    if (result && result.ok === true) {
      router.push('/')
    }

    /* 로그인 실패 */
    if (result && result.ok === false) {
      setCheckMessage(true)
    }

  }

  const onIpChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  const onKeepLoginChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <ul className={styles.panel_wrap}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <li className={styles.panel_item}>
          <div className={`${styles.panel_inner} ${styles.panel_inner_id}`}>
            <div className={styles.id_pw_wrap}>
              {/* 아이디 */}
              <div className={`${styles.signin_item} ${styles.signin_item_id}`}>
                <span className={styles.signin_label}>
                  <FaRegUser />
                </span>
                <input className={styles.signin_input} type="text" id="userid" placeholder="아이디" maxLength={20} {...register('userid')} required />
              </div>
              {/* 비밀번호 */}
              <div className={`${styles.signin_item} ${styles.signin_item_password}`}>
                <span className={styles.signin_label}>
                  <RiLockPasswordLine />
                </span>
                <input className={styles.signin_input} id="password" type="password" placeholder="비밀번호" maxLength={20} {...register('password')} required />
              </div>
            </div>
            <div className={styles.login_keep_wrap}>
              <div className={styles.keep_check}>
                <Checkbox onChange={onKeepLoginChange}>로그인 상태 유지</Checkbox>
              </div>
              <div className={styles.ip_check}>
                <Link href="https://nid.naver.com/login/ext/help_ip3.html">IP보안&nbsp;</Link>
                <Switch onChange={onIpChange} />
              </div>
            </div>
            {checkMessage && <FormMessage msg={`아이디 또는 비밀번호가 일치하지 않습니다.`} />}
            <div style={{ padding: '0 0 2rem 0' }}></div>
            <button type="submit" className={styles.signin_button}>
              <span className={styles.signin_text}>로그인</span>
            </button>
          </div>
        </li>
      </form>
    </ul>
  )
}

export default SigninById
