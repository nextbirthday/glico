/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './boardItem.module.css'
import Link from 'next/link'
import { GoPlus } from 'react-icons/go'
const BoardItem = (channel: any) => {
  return (
    <>
      <div className={styles.board_item}>
        <div className={styles.left}>
          {/* 채널 아이콘 이미지 */}
          <Link href={`/bbs/${channel.slug}`}>
            <img src="/cutscene/BG_CS_S1Final_14.jpg" alt="채널아이콘" className={styles.channel_icon} />
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.head}>
            <Link href={`/bbs/${channel.slug}`} className={styles.channel_name}>
              {channel.name}&nbsp;채널
            </Link>
            {/* 구독 버튼 + / 구독 시 V  */}
            <button type="button" className={styles.channel_subscribe_button}>
              <GoPlus size={'1.3em'} />
              {/* <FaCheck size={'1.3em'}/> */}
            </button>
          </div>
          <div className={styles.description}>
            <span className={styles.subscriber_count}>구독자 {channel.subscriber}명</span>
            <span className={styles.channel_user}>@{channel.ownerId}</span>
            <div className={styles.channel_text}>
              {channel.title} {channel.information !== null && `| ${channel.information}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardItem
