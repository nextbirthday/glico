import React from 'react'
import styles from './searchChannel.module.css'
const SearchChannel = () => {
  return <input type="text" className={styles.input} autoComplete="off" placeholder="...채널 찾기"></input>
}

export default SearchChannel
