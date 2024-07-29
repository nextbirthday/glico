import { CloseOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Space } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import styles from './changeEmail.module.css'
import axios from 'axios'
import { useState } from 'react'

const ChangeEmail = ({ handlePopupClose }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {

    const userData = {
      userid: 'webadm',
      email: data.email,
    }
    try {
      const response = await axios.post('/api/edit/changeEmail', {
        data: userData,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const sendEmail = () => {
    console.log('sendEmail')
  }
  
  return (
    <div className={styles.edit_wrap}>
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>회원정보 중 이메일 수정</h3>
      <Divider style={{ margin: '0.5rem 0 0.5rem 0' }} />
      <div className={styles.form_wrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className={styles.space_form}>
            <Space.Compact className={`${styles.form_item} ${styles.form_item_mobile}`}>
              <Controller name="email" control={control} render={({ field }) => <Input {...field} placeholder="이메일" size="large" allowClear={true} />} />
              <Button type="primary" className={styles.auth_button} size="large" onClick={sendEmail}>
                인증
              </Button>
            </Space.Compact>
            <Space.Compact className={`${styles.form_item} ${styles.form_item_auth_code}`}>
              <Controller name="auth_code" control={control} render={({ field }) => <Input {...field} placeholder="인증번호 입력" size="large" allowClear={true} />} />
            </Space.Compact>
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

export default ChangeEmail
