import React from 'react'
import styles from './boardList.module.css'
import BoardItem from './boardItem'
import { Empty } from 'antd'
const BoardList = ({ channelList }: any) => {
  return (
    <>
      <div className={styles.board_list}>{channelList.length < 1 ? <Empty /> : channelList.map((channel: any, index: any) => <BoardItem key={index} {...channel} />)}</div>
    </>
  )
}

export default BoardList
