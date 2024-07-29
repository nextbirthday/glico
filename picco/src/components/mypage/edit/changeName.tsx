import { CloseOutlined } from '@ant-design/icons'
import { Divider, Input, Space } from 'antd'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import styles from './changeName.module.css'
import { useState } from 'react'
import FormMessage from '@/components/form/formMessage'

const ChangeName = ({ handlePopupClose }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
  const onSubmit = async (data: any) => {
    console.log('onSubmit data ===>', data)

    if (nameMessage) {
      alert('제대로 된 이름을 입력해주세요')
      return
    }
    if (!confirm('확인(예) 또는 취소(아니오)를 선택해주세요.')) {
      return
    } else {
      const userData = {
        userid: 'arisu',
        name: data.name,
      }
      try {
        const response = await axios.post('/api/edit/changeName', {
          data: userData,
        })
        console.log('response ===>', response)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={styles.edit_wrap}>
      <CloseOutlined onClick={handlePopupClose} style={{ float: 'right' }} />
      <h3>회원정보 중 이름 수정</h3>
      <Divider style={{ margin: '0.5rem 0 0.5rem 0' }} />
      <div className={styles.form_wrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction="vertical" className={styles.space_form}>
            <Space.Compact className={`${styles.form_item} ${styles.form_item_name}`}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} placeholder="이름" size="large" allowClear={true} onInput={handleName} required />}
              />
            </Space.Compact>
            {nameMessage && <FormMessage msg={`이름: 한글, 영문 대/소문자를 사용해 주세요.`} />}
            {nameMessage && <FormMessage msg={`(특수기호, 공백 사용 불가)`} />}
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

export default ChangeName
