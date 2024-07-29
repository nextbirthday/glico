import { CloseOutlined } from '@ant-design/icons'
import { Divider, Input, Space } from 'antd'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import FormMessage from '@/components/form/formMessage'

import styles from './changePassword.module.css'
import { useRouter } from 'next/navigation'
const ChangePassword = ({ handlePopupClose }: any) => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
  const onSubmit = async (data: any) => {
    console.log('onSubmit data ===>', data)

    if (pwMessage) {
      alert('패스워드 정규화 통고 ㅏ 못함')
      return
    }
    const userData = {
      userid: 'arisu',
      password: data.password,
    }

    if (!confirm('비밀번호를 변경하시겠습니까?')) {
      return
    } else {
      const userData = {
        userid: 'arisu',
        password: data.password,
      }
      try {
        const response = await axios.post('/api/edit/changePassword', {
          data: userData,
        })
        console.log('response ===>', response)
        console.log('response status ===>', response.status)

        if (response.status === 200) {
          router.push('/mypage/edit/info')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={styles.edit_wrap}>
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>회원정보 중 비밀번호 수정</h3>
      <Divider style={{ margin: '0.5rem 0 0.5rem 0' }} />
      <div className={styles.form_wrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className={styles.space_form}>
            <Space.Compact className={`${styles.form_item} ${styles.form_item_name}`}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input {...field} type="password" placeholder="비밀번호" size="large" allowClear={true} onInput={handlePassword} required />}
              />
            </Space.Compact>
            {pwMessage && <FormMessage msg={`8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.`} />}
          </Space>
          <div className={styles.button_wrap}>
            <button type="button" className={styles.cancel_button} onClick={handlePopupClose}>
              <span className={styles.cancel_text}>취소</span>
            </button>
            <button className={styles.change_button} type="submit">
              <span className={styles.change_text}>변경</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
