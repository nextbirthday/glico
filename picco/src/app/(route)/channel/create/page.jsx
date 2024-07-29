'use client'
import { useForm } from 'react-hook-form'
import styles from './page.module.css'
import { useState } from 'react'
import FormMessage from '@/components/form/formMessage'
import { useSession } from 'next-auth/react'
const CreateChannel = () => {
  const { data: user } = useSession()
  const owner = user?.user?.userid
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    if (slugMessage) return null
    /* 채널 포인트 3000이상 일 때 통과시키는 로직 추가 필요 */
    console.log('data', data)
  }

  const [slugMessage, setSlugMessage] = useState(false)
  const handleSlug = (e) => {
    const slug = e.target.value

    if (!/^[a-zA-Z0-9]+$/u.test(slug)) {
      setSlugMessage(true)
    } else {
      setSlugMessage(false)
    }
  }
  return (
    <div className={styles.channel_wrapper}>
      <article className={styles.create_channel_wrap}>
        <div className={styles.row}>
          <div className={styles.card}>
            <h1 className={styles.card_title}>채널 만들기</h1>
            <h2 className={styles.card_subtitle}>
              채널을 만들면 <span className={styles.point_text}>3000</span> 포인트를 소모하게 됩니다.
            </h2>
            <div className={styles.form_group}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form_group_row}>
                  <label htmlFor="name_input" className={styles.name_label}>
                    채널 이름
                  </label>
                  <div className={styles.name_input_group}>
                    <input className={styles.name_input} type="text" {...register('name')} id="name_input" maxLength={256} required />
                    <p className={styles.name_description}>이름에 채널은 자동으로 추가됩니다. OOO 채널이라면 OOO만 입력해주세요.</p>
                  </div>
                </div>
                <div className={styles.form_group_row}>
                  <label htmlFor="description_input" className={styles.description_label}>
                    채널 설명
                  </label>
                  <div className={styles.description_input_group}>
                    <input className={styles.description_input} type="text" {...register('description')} id="description_input" maxLength={256} required />
                  </div>
                </div>

                <div className={styles.form_group_row}>
                  <label htmlFor="slug_input" className={styles.slug_label}>
                    채널 slug
                  </label>
                  <div className={styles.slug_input_group}>
                    <input className={styles.slug_input} type="text" {...register('slug')} id="slug_input" maxLength={256} required onInput={handleSlug} />
                    <p className={styles.slug_description}>
                      채널 slug란 주소창에 사용될 채널 아이디입니다. <br />
                      <strong>`ex) 포키 채널 pocky/bbs/pocky` </strong>
                      <br />
                      채널 slug는 알파벳과 숫자만 가능합니다.
                    </p>
                    {slugMessage && <FormMessage msg={` 채널 slug는 알파벳과 숫자만 가능합니다.`} />}
                  </div>
                </div>

                <button className={styles.submit_button} type="submit">
                  만들기
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
      <aside className={styles.sidebar_wrapper}>{/* <PopularBox /> */}</aside>
    </div>
  )
}

export default CreateChannel
