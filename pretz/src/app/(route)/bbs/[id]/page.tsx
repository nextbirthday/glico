import ChannelButtonBox from '@/components/channel/channelButtonBox'
import ChannelTaps from '@/components/channel/channelTaps'
import ChannelTitle from '@/components/channel/channelTitle'
import axios from 'axios'
import styles from './page.module.css'
import PopularBox from '@/components/box/popularBox'
const Channel = async ({ params }: { params: { id: string } }) => {
  const id = params.id

  if (!id) {
    return <></>
  }
  console.log('id', id)

  const slug = id
  //const channel = await getChannel(slug)

  const channel = await axios.post(process.env.NEXT_PUBLIC_SPRING_IP + 'channel/item', slug);

  if (!channel) {
    return <></>
  }

  return (
    <div className={styles.bbs_wrapper}>
      <article className={styles.board_wrap}>
        <ChannelTitle channel={channel} />
        <div className={styles.button_warp}>
          {/* component 호출마다 props로 넘겨줘야 한다. */}
          <ChannelButtonBox channel={channel} />
        </div>
        {/* <VisitBookmark /> */}
        <div className={styles.article_list}>
          <div className={styles.channel_taps}>
            {/* 채널 탭 */}
            <ChannelTaps />
          </div>
        </div>
        {/* component 호출마다 props로 넘겨줘야 한다. */}
        <ChannelButtonBox channel={channel} />
      </article>
      <aside className={styles.sidebar_wrapper}>
        <PopularBox />
      </aside>
    </div>
  )
}

export default Channel
