
const WatchVideo = ({ params }: { params: { watch_id: string } }) => {
  return (
    <div>
      <section>
        <iframe title="video play" width="100%" height="680px" src={`http://www.youtube.com/embed/${params.watch_id}`} frameBorder="0" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default WatchVideo
