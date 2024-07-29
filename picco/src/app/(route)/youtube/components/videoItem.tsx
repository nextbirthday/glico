/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './videoItem.module.css'
import Link from 'next/link'
const VideoItem = (props: any) => {
  const { video, selectVideo } = props
  console.log(video)
  return (
    <Link href={`/watch/${video.id.videoId}`} className={styles.thumbnail_box}>
      <div className={styles.video_item} /* onClick={() => selectVideo(video)} */>
        <div>
          <img className={styles.video_thumbnail} src={video.snippet.thumbnails.high.url} alt="썸네일" />
        </div>
        <div>
          <p className={styles.video_title} key={video.id}>
            {video.snippet.title}
          </p>
          <p className={styles.video_channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoItem
