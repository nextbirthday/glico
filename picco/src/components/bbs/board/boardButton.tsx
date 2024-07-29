'use client'
import React from 'react'
import Link from 'next/link'
import { Button, Flex } from 'antd'
import styles from './boardButton.module.css'
import { useSession } from 'next-auth/react'
const BoardButton = ({ channel }: any) => {
  const { data: session, status } = useSession()

  const firstChannel = channel && channel[0]
  console.log('firstChannel', firstChannel)
  return (
    <>
      <div>
        <div className={styles.float_left}>
          <Flex gap="small" wrap="wrap">
            <Button style={{ borderRadius: '0' }}>
              <Link href={`/bbs/${firstChannel.name}`}>전체글</Link>
            </Button>
            <Button style={{ borderRadius: '0', backgroundColor: 'red' }}>
              <Link href={`/bbs/${firstChannel.slug}?mode=best`}>
                <span style={{ color: 'white', fontWeight: '500' }}>개념글</span>
              </Link>
            </Button>
            <select className={styles.select_list_type} name="sort">
              <option value="rating">등록순</option>
              <option value="rating">추천순 (24시간)</option>
              <option value="ratingAll">추천순 (전체)</option>
              <option value="commentCount">댓글순</option>
            </select>
            <select className={styles.select_list_type} name="cut">
              <option>추천컷</option>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>50</option>
              <option>100</option>
            </select>
          </Flex>
        </div>
        <div className={styles.float_right}>
          {status === 'authenticated' && (
            <Button style={{ borderRadius: '0' }} className={styles.write_button}>
              {/* <Link href={`/bbs/${firstChannel.slug}/write?id=${firstChannel.slug}`}>
                <span style={{ fontWeight: '500' }}>글쓰기</span>
              </Link> */}
              <Link
                href={{
                  pathname: `/bbs/${firstChannel.slug}/write`,
                  query: { id: firstChannel.id },
                }}
              >
                <span style={{ fontWeight: '500' }}>글쓰기</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div style={{ paddingBottom: '0.05rem' }}></div>
    </>
  )
}

export default BoardButton
