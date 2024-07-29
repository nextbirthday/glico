import { Empty, Tag } from 'antd'
import React from 'react'
import NewvisitItem from './newvisitItem'

const NewvisitList = () => {
  const tagNames = ['adam', 'archive', 'NBA', 'audio']

  return (
    <>
      <>{tagNames.length < 1 ? <Empty /> : tagNames.map((tagName, index) => <NewvisitItem key={index} tagName={tagName} />)}</>
    </>
  )
}

export default NewvisitList
