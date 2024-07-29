import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import SearchChannel from '@/components/bbs/search/searchChannel'
import BoardList from '@/components/bbs/board/boardList'
import PopularBox from '@/components/bbs/popular/popularBox'
import { getAllChannel } from '@/controller/channel'
import { Empty } from 'antd'

const Bbs = async () => {
  /* await code 누락 주의 */
  const channelList = await getAllChannel()

  // if (!channelList || channelList.length < 1) {
  //   return (
  //     <>
  //       <Empty />
  //     </>
  //   )
  // }
  return (
    <>
      <div className={styles.bbs_wrapper}>
        <article className={styles.board_wrap}>
          <div className={styles.form_group}>
            <div className={styles.form_text}>
              <SearchChannel />
              <div className={styles.private_channel_box}>
                <span className={styles.private_channel_text}>찾는 채널이 없나요?</span>
                <Link href="/bbs/private" className={styles.private_link}>
                  개인 채널 찾기
                </Link>
              </div>
            </div>
            {/* 게시판 목록(채널 리스트) */}
            <BoardList channelList={channelList} />
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
