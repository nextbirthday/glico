'use client'
import { Tabs, TabsProps } from 'antd'
import { useRouter } from 'next/navigation'
import ChannelTable from './channelTable'

const ChannelTaps = () => {
  const router = useRouter()

  const handleTabChange = (key: string) => {
    router.push(`/bbs/bluearchive?category=${key}`)
  }

  const items: TabsProps['items'] = [
    {
      label: '전체',
      key: '전체',
      children: (
        <>
          <ChannelTable />
        </>
      ),
    },
    {
      label: '공지',
      key: '공지',
      children: 'Content of 일회용 로그인 tab',
    },
    {
      label: '채널공지',
      key: '채널공지',
      children: (
        <>
          <ChannelTable />
        </>
      ),
    },
    {
      label: '정보',
      key: '정보',
      children: <></>,
    },
    {
      label: '질문',
      key: '질문',
      children: <></>,
    },
  ]

  return <Tabs defaultActiveKey="전체" items={items} type="card" onChange={handleTabChange} />
}

export default ChannelTaps
