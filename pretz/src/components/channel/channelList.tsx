import React from 'react'
import styles from './channelList.module.css'
import { Empty } from 'antd'
import ChannelItem from './channelItem'

const ChannelList = ({ channelList }: any) => {

  return (
    <>
     {/*  <div className={styles.channel_list}>{channelList.length < 1 ? <Empty /> : channelList.map((channel: any, index: any) => <ChannelItem key={index} {...channel} />)}</div> */}

     <p>channelList</p>
    </>
  )

}

export default ChannelList;