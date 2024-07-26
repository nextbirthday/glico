'use client'

import React from 'react'
import { Dropdown, MenuProps, Space } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import styles from './visitRecent.module.css'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
]
const VisitRecent = () => {
  return (
    <Space>
      <span className={styles.recent_text}>최근 방문 채널</span>
    </Space>
  )
}

export default VisitRecent
