import React from 'react'
import VideoItem from './videoItem'
import styles from './videoList.module.css'
import { Empty } from 'antd'

const VideoList = (props: any) => {
  const { videoList, selectVideo } = props

  if (videoList)
    return (
      <div className={styles.video_grid}>
        {videoList?.length < 1 ? <Empty></Empty> : videoList.map((video: any, index: number) => <VideoItem key={index} video={video} selectVideo={selectVideo} />)}
      </div>
    )
}

export default VideoList
