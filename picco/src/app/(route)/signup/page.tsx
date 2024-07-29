/* eslint-disable @next/next/no-img-element */
'use client'
import FormMessage from '@/components/form/formMessage'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegUser } from 'react-icons/fa'
import { FiCheckSquare } from 'react-icons/fi'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { MdEmail, MdOutlinePhoneIphone } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import './page.css'
interface SubmitData {
  userid: string
  password: string
  email: string
  name: string
  gender?: string
  mobile: string
  birth: string
  // image?: string;
}
const Signup = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  /* 회원가입 submit */
  const [checkMessage, setCheckMessage] = useState(false)
  const onSubmit = async (data: any) => {
    console.log('data ===>', data)

    // birth 변환
    const birthWithoutDash = data.birth.replace(/-/g, '')
    console.log('변환된 birth:', birthWithoutDash)

    // mobile 변환
    const mobileWithoutDash = data.mobile.replace(/-/g, '')
    console.log('변환된 mobile:', mobileWithoutDash)

    const submitData: SubmitData = {
      userid: data.userid,
      password: data.password,
      name: data.name,
      birth: birthWithoutDash, // 변환된 값을 사용
      email: data.email,
      mobile: mobileWithoutDash,
      // image: data.image,
    }

    // gender가 "선택안함"이 아닌 경우에만 추가
    if (data.gender && data.gender !== '선택안함') {
      submitData.gender = data.gender
    }

    console.log('submitData ===>', submitData)

    if (Object.values(submitData).some((value) => value == undefined)) {
      console.log('At least one property is undefined. Returning...')
      return
    }

    try {
      const response = await axios.post('/api/signup', {
        data: submitData,
      })
      console.log('response ===>', response)
      console.log('response.data.message ===>', response.data.message)
      if (response.data.message === 'ID중복') {
        alert('중복된 ID입니다.')
        setCheckMessage(true)
        return
      } else {
        setCheckMessage(false)
        /* 로그인페이지로 이동... */
        router.push('/signin')
      }

      //response.data.message === 'ID중복' ?? alert('중복된 ID입니다.')
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheck = () => {
    console.log('handleCheck')
  }
  /* 아이디 regex */
  const [idMessage, setIdMessage] = useState(false)
  const handleId = (e: any) => {
    const id = e.target.value

    // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
    if (!/^[a-z0-9_-]{5,20}$/.test(id)) {
      setIdMessage(true)
    } else {
      setIdMessage(false)
    }
  }

  /* 비밀번호 regex */
  const [pwMessage, setPwMessage] = useState(false)
  const handlePassword = (e: any) => {
    const password = e.target.value

    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(password)) {
      setPwMessage(true)
    } else {
      setPwMessage(false)
    }
  }

  /* 이메일 regex */
  const [emailMessage, setEmailMessage] = useState(false)
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (!emailRegex.test(email)) {
      setEmailMessage(true)
    } else {
      setEmailMessage(false)
    }
  }

  /* 이름 regex */
  const [nameMessage, setNameMessage] = useState(false)
  const handleName = (e: any) => {
    const name = e.target.value

    if (!/^[가-힣a-zA-Z]+$/u.test(name)) {
      setNameMessage(true)
    } else {
      setNameMessage(false)
    }
  }

  /* 생년월일 regex */
  const [birthMessage, setBirthMessage] = useState(false)
  const handleBirth = (e: any) => {
    let numericValue = e.target.value.replace(/[^0-9]/g, '')

    const isValidFormat = /^\d+$/.test(numericValue)

    if (!isValidFormat) {
      setBirthMessage(true)
    } else {
      setBirthMessage(false)

      const year = numericValue.substring(0, 4)
      const month = numericValue.substring(4, 6)
      const day = numericValue.substring(6, 8)

      const validYear = parseInt(year, 10) >= 1800 && parseInt(year, 10) <= 3000
      const validMonth = parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12
      const validDay = parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31

      if (!(validYear && validMonth && validDay)) {
        setBirthMessage(true)
        return
      }

      // Format the date as 'yyyy-mm-dd'
      const formattedValue = numericValue.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
      e.target.value = formattedValue
    }
  }

  /* 휴대전화번호 regex */
  const [mobileMessage, setMobileMessage] = useState(false)
  const handleMobile = (e: any) => {
    let numericValue = e.target.value.replace(/[^0-9]/g, '')

    // Validate if the input contains only numeric characters
    const isValidFormat = /^\d+$/.test(numericValue)

    if (!isValidFormat) {
      setMobileMessage(true)
    } else {
      setMobileMessage(false)

      const firstPart = numericValue.substring(0, 3)
      const middlePart = numericValue.substring(3, 7)
      const lastPart = numericValue.substring(7, 11)

      const validFirstPart = ['010', '011', '017', '018', '019'].includes(firstPart)

      const validMiddlePart = parseInt(middlePart, 10) >= 0 && parseInt(middlePart, 10) <= 9999
      const validLastPart = parseInt(lastPart, 10) >= 0 && parseInt(lastPart, 10) <= 9999

      if (!(validFirstPart && validMiddlePart && validLastPart)) {
        setMobileMessage(true)
        return
      }

      const formattedValue = numericValue.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      e.target.value = formattedValue
    }
  }
  /* 이메일인증 */
  const handleEmailCheck = (e: any) => {
    e.prevent.default()
  }
  return (
    <>
      <div className="signup__body">
        <div className="signup__logo">
          <Link href="/">
            <img src="/jobs/nexon.svg" alt="" className="signup__image" />
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signup__content">
            <div className="signup__list">
              {/* 아이디 */}
              <div className="signup__item id">
                <span className="signup__label">
                  <FaRegUser />
                </span>
                <input className="signup__input" type="text" id="userid" placeholder="아이디" maxLength={20} {...register('userid')} required onChange={handleId} />
                {/*  <div>
                  <Button onClick={handleCheck} className="id__check__button">
                    중복확인
                  </Button>
                </div> */}
              </div>
              {/* 비밀번호 */}
              <div className="signup__item password">
                <span className="signup__label">
                  <RiLockPasswordLine />
                </span>
                <input className="signup__input" id="password" type="password" placeholder="비밀번호" maxLength={20} {...register('password')} required onChange={handlePassword} />
              </div>
              {/* 이메일 */}
              <div className="signup__item email">
                <span className="signup__label">
                  <MdEmail />
                </span>
                <input className="signup__input" id="email" type="text" placeholder="이메일" {...register('email')} required onChange={handleEmail} />
                <div>
                  {/*  <Button onClick={handleEmailCheck} className="email__check__button">
                    인증메일 발송
                  </Button> */}
                </div>
              </div>
            </div>
            <div style={{ padding: '0.3rem 0 0 0' }}></div>
            {idMessage && <FormMessage msg={`아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.`} />}
            {pwMessage && <FormMessage msg={`비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.`} />}
            {emailMessage && <FormMessage msg={`이메일 주소가 정확한지 확인해 주세요.`} />}
            <div style={{ padding: '0.5rem 0 0 0' }}></div>
            <div className="signup__list">
              {/* 이름 */}
              <div className="signup__item name">
                <span className="signup__label">
                  <FaRegUser />
                </span>
                <input className="signup__input" type="text" id="name" placeholder="이름" {...register('name')} onChange={handleName} required />
              </div>
              {/* 생년월일 */}
              <div className="signup__item birth">
                <span className="signup__label">
                  <LiaBirthdayCakeSolid />
                </span>
                <input
                  className="signup__input"
                  id="birth"
                  type="text"
                  placeholder="생년월일 8자리 ('-' 없이 입력)"
                  maxLength={8}
                  {...register('birth')}
                  onChange={handleBirth}
                  required
                />
              </div>
              {/* 성별 */}
              <div className="signup__item gender">
                <span className="signup__label">
                  <FiCheckSquare />
                </span>
                <label className="radio__label">
                  <input type="radio" {...register('gender')} value="남자" className="radio__input" />
                  남자
                </label>
                <label className="radio__label">
                  <input type="radio" {...register('gender')} value="여자" className="radio__input" />
                  여자
                </label>
                <label className="radio__label">
                  <input type="radio" {...register('gender')} value="선택안함" className="radio__input" />
                  선택안함
                </label>
              </div>
              {/* 휴대전화번호 */}
              <div className="signup__item mobile">
                <span className="signup__label">
                  <MdOutlinePhoneIphone />
                </span>
                <input
                  className="signup__input"
                  id="mobile"
                  type="text"
                  placeholder="휴대전화번호 ('-' 없이 입력)"
                  maxLength={13}
                  {...register('mobile')}
                  onChange={handleMobile}
                  required
                />
              </div>
            </div>
            <div style={{ padding: '0.3rem 0 0 0' }}></div>
            {nameMessage && <FormMessage msg={`이름: 한글, 영문 대/소문자를 사용해 주세요. (특수기호, 공백 사용 불가)`} />}
            {birthMessage && <FormMessage msg={`생년월일: 생년월일이 정확한지 확인해 주세요.`} />}
            {mobileMessage && <FormMessage msg={`휴대전화번호: 휴대전화번호가 정확한지 확인해 주세요.`} />}
            {checkMessage && <FormMessage msg={`중복된 아이디입니다. 다른 아이디로 회원가입 진행해주세요.`} />}
            <div className="form_list"></div>
          </div>

          <button type="submit" className="signup_button">
            <span className="signup_text">Sign Up</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
