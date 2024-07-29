/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './boardTitle.module.css'
import Link from 'next/link'
import { FaBookOpen } from 'react-icons/fa'
import { CiBellOn } from 'react-icons/ci'
import { GoPlus } from 'react-icons/go'
const BoardTitle = ({ channel }: any) => {
  const firstChannel = channel && channel[0]
  return (
    <div className={styles.board_title}>
      <div className={styles.left}>
        {/* 채널 아이콘 이미지 */}
        <Link href={`/bbs/${firstChannel.slug}`}>
          <img src="/cutscene/BG_CS_S1Final_14.jpg" alt="채널아이콘" className={styles.channel_icon} />
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <Link href="/bbs" className={styles.channel_name}>
            {firstChannel.name}&nbsp;채널
          </Link>
          <div className={styles.buttons}>
            <Link href={`/bbs/${firstChannel.slug}`} className={styles.wiki_button}>
              <span className={styles.button_text}>
                <span className={styles.button_icon}>
                  <FaBookOpen />
                </span>
                채널위키
              </span>
            </Link>
            <Link href={`/bbs/${firstChannel.slug}`} className={styles.wiki_button}>
              <span className={styles.button_text}>
                <span className={styles.button_icon}>
                  <CiBellOn />
                </span>
                구독
              </span>
            </Link>
            <Link href={`/bbs/${firstChannel.slug}`} className={styles.wiki_button_notification}>
              <span className={styles.button_text}>
                <span className={styles.button_icon}>
                  <GoPlus />
                </span>
                알림
              </span>
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          <span className={styles.subscriber_count}>구독자 {firstChannel.subscriber}명</span>
          <span className={styles.notification_count}> | 알림수신 count</span>
          <div className={styles.channel_text}>
            {firstChannel.title !== null && ` ${firstChannel.title}`} {firstChannel.gacha !== null && `| ${firstChannel.gacha}`}{' '}
            {firstChannel.information !== null && `| ${firstChannel.information}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardTitle
