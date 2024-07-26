import { Tag } from 'antd'
import React from 'react'

const NewvisitItem = ({ tagName }: any) => {
  return (
    <Tag bordered={true} closable style={{ border: 'none' }}>
      {tagName}
    </Tag>
  )
}

export default NewvisitItem
