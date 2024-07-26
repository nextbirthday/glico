import React from 'react'

const VideoPlayer = ({ video }: any) => {
  //console.log('VideoPlayer video ===>', VideoPlayer)

  return (
    <div>
      <section>
        <iframe title="video play" width="100%" height="100%" src={`http://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default VideoPlayer
