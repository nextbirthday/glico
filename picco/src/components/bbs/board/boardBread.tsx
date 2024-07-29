import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'
import styles from './boardBread.module.css'
const BoardBread = () => {
  return (
    <Breadcrumb
      className={styles.board_breadcrumb}
      style={{ fontSize: '1rem' }}
      items={[
        {
          title: <Link href="/bbs/bluearchive">전체</Link>,
        },
        {
          title: <Link href="/bbs">공지</Link>,
        },
        {
          title: <Link href="/bbs">채널공지</Link>,
        },
        {
          title: <Link href="/bbs">정보</Link>,
        },
        {
          title: <Link href="/bbs">대회</Link>,
        },
      ]}
    />
  )
}

export default BoardBread
