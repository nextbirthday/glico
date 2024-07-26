import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import { Empty } from 'antd'
import axios from 'axios'
import ChannelSearchInput from '@/components/channel/channelSearchInput'
import ChannelList from '@/components/channel/channelList'
import PopularBox from '@/components/box/popularBox'

const Bbs = async () => {

  /* await code 누락 주의 */
  const channelList = await axios.get(process.env.NEXT_PUBLIC_SPRING_IP + 'channel/list');

   if (!channelList) {
     return (
       <>
         <Empty />
       </>
     )
   }

  return (
    <>
      <div className={styles.bbs_wrapper}>
        <article className={styles.board_wrap}>
          <div className={styles.form_group}>
            <div className={styles.form_text}>
              <ChannelSearchInput />
              <div className={styles.private_channel_box}>
                <span className={styles.private_channel_text}>찾는 채널이 없나요?</span>
                <Link href="/bbs/private" className={styles.private_link}>
                  개인 채널 찾기
                </Link>
              </div>
            </div>
            {/* 게시판 목록(채널 리스트) */}
            <ChannelList channelList={channelList} /> 
          </div>
        </article>
        <aside className={styles.sidebar_wrapper}>
          {/* 인기 검색어 박스 */}
          <PopularBox />
        </aside>
      </div>
    </>
  )
}

export default Bbs