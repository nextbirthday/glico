'use client'

import { Progress } from 'antd'
import React from 'react'

const Skillprogress = () => {
  return (
    <>
      <p style={{ fontSize: '1.2rem' }}>HTML</p>
      <Progress percent={90} size="default" />
      <p style={{ fontSize: '1.2rem' }}>CSS</p>
      <Progress percent={60} status="active" />
      <p style={{ fontSize: '1.2rem' }}>Javascript</p>
      <Progress percent={80} />
      <p style={{ fontSize: '1.2rem' }}>React</p>
      <Progress percent={70} />
      <p style={{ fontSize: '1.2rem' }}>Next JS</p>
      <Progress percent={65} />
      <p style={{ fontSize: '1.2rem' }}>PostgresQL</p>
      <Progress percent={80} showInfo={true} />
    </>
  )
}

export default Skillprogress
