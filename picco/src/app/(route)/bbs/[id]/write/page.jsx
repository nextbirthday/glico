'use client'
import BoardTitle from '@/components/bbs/board/boardTitle'
import QuillEditor from '@/components/bbs/board/quillEditor'
import PopularBox from '@/components/bbs/popular/popularBox'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './page.module.css'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

const Write = () => {
  const { data: user } = useSession()
  const router = useRouter()
  const author = user?.user?.userid
  const params = useSearchParams()
  const id = params.get('id')
  const channelId = parseInt(id)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const submitData = {
      title: data.title,
      content,
      author,
      channelId,
    }

    console.log('submitData ===>', submitData)

    if (Object.values(submitData).some((value) => value === undefined || value === '')) {
      alert('본문을 작성해주세요.')
      return
    }

    try {
      const response = await axios.post('/api/board/createBoard', {
        data: submitData,
      })
      console.log('response ===>', response)

      if (response.data.result.id) {
        router.push('/bbs')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const quillRef = useRef()
  const [content, setContent] = useState('')

  const handleContent = useCallback((event) => {
    setContent(event)
  }, [])

  return (
    <div className={styles.write_wrapper}>
      <article className={styles.article_write}>
        {/* <BoardTitle /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.write_head}>글쓰기</div>
          <div className={styles.sub_row}>
            <span className={styles.bullet_point_text}>글머리</span>
            <span>
              <input type="radio" id="category-general" {...register('category')} defaultChecked required className={styles.radioInput} />
              <label htmlFor="category-general">일반</label>
            </span>
            <span>
              <input type="radio" id="category-notice" {...register('category')} value="공지" className={styles.radioInput} />
              <label htmlFor="category-notice">공지</label>
            </span>
            <span>
              <input type="radio" id="category-channel-notice" {...register('category')} value="채널공지" className={styles.radioInput} />
              <label htmlFor="category-channel-notice">채널공지</label>
            </span>
          </div>

          <div className={styles.title_row}>
            <div className={styles.title_input_group}>
              <span className={styles.title_group_text}>제목</span>
              <input className={styles.title_input} type="text" {...register('title')} id="input_title" maxLength={256} required />
            </div>
          </div>

          <div className={styles.write_body}>
            <QuillEditor quillRef={quillRef} handleContent={handleContent} />
          </div>

          <button className={styles.submit_button} type="submit">
            submit
          </button>
        </form>
      </article>

      <aside className={styles.sidebar_wrapper}>
        {/* 인기 검색어 박스 */}
        <PopularBox />
      </aside>
    </div>
  )
}

export default Write
