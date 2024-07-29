'use client'
import Search, { SearchProps } from 'antd/es/input/Search'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoList from './components/videoList'
import VideoPlayer from './components/videoPlayer'
import { YoutubeOutlined } from '@ant-design/icons'

import styles from './page.module.css'
import { Spin } from 'antd'
const Youtube = () => {
  const [videoList, setVideoList] = useState()
  const [selectedVideo, setSelectedVideo] = useState(null)

  const fetchYoutube = async (keyword?: any) => {
    console.log('fetchYoutube keyword ===>', keyword)
    await axios
      .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${keyword}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
      .then((result: { data: { items: any } }) => {
        console.log('result.data.items ===>', result.data.items)
        setVideoList(result.data.items)
      })
      .catch((error: any) => console.log(error))
  }

  const onSearchYoutube: SearchProps['onSearch'] = async (value, _e, info) => {
    const keyword = value
    fetchYoutube(keyword)
  }
  const selectVideo = (video: any) => {
    setSelectedVideo(video)
  }

  useEffect(() => {
    const initial = 'NBA'
    fetchYoutube(initial)
  }, [])

  if (!videoList)
    return (
      <>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </>
    )
  return (
    <div>
      <div className={styles.youtube_header}>
        <div style={{ marginRight: '440px' }}>
          <span className={styles.youtube_icon}>
            <YoutubeOutlined />
          </span>
          <span className={styles.youtube_title}>Youtube</span>
        </div>
        <div className={styles.search_input}>
          <Search placeholder="검색" onSearch={onSearchYoutube} size="large" allowClear={true} style={{ width: 600 }} />
        </div>
      </div>

      {selectedVideo && (
        <div>
          <VideoPlayer video={selectedVideo} />
        </div>
      )}
      <VideoList videoList={videoList} selectVideo={selectVideo} />
    </div>
  )
}

export default Youtube
