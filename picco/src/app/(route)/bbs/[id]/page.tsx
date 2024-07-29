import BoardButton from '@/components/bbs/board/boardButton'
import BoardTitle from '@/components/bbs/board/boardTitle'
import PopularBox from '@/components/bbs/popular/popularBox'
import VisitBookmark from '@/components/bbs/visit/visitBookmark'
import styles from './page.module.css'
import BoardTaps from '@/components/bbs/board/boardTaps'
import { getChannel } from '@/controller/channel'
const Channel = async ({ params }: { params: { id: string } }) => {
  const id = params.id

  if (!id) {
    return <></>
  }
  console.log('id', id)

  const slug = id
  const channel = await getChannel(slug)

  if (!channel) {
    return <></>
  }

  return (
    <div className={styles.bbs_wrapper}>
      <article className={styles.board_wrap}>
        <BoardTitle channel={channel} />
        <div className={styles.button_warp}>
          {/* component 호출마다 props로 넘겨줘야 한다. */}
          <BoardButton channel={channel} />
        </div>
        <VisitBookmark />
        <div className={styles.article_list}>
          <div className={styles.channel_taps}>
            {/* 채널 탭 */}
            <BoardTaps />
          </div>
        </div>
        {/* component 호출마다 props로 넘겨줘야 한다. */}
        <BoardButton channel={channel} />
      </article>
      <aside className={styles.sidebar_wrapper}>
        <PopularBox />
      </aside>
    </div>
  )
}

export default Channel
