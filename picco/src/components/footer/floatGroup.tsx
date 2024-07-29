'use client'

import { QuestionCircleOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import React from 'react'

const FloatGroup = () => {
  return (
    <div>
      <FloatButton.Group shape="circle">
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  )
}

export default FloatGroup
