import React from 'react'
import styles from './popularBox.module.css'
import Link from 'next/link'
const PopularBox = () => {
  return (
    <div className={styles.sidebar_item}>
      <div className={styles.item_title}>인기 검색어</div>
      <div className={`${styles.link_list}`}>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
        <Link className={`${styles.link_list_item}`} href="//namu.wiki">
          검색어
        </Link>
      </div>
      <div className={styles.sidebar_by}>
        <Link href="//namu.wiki">
          <span style={{ color: '#0275d8' }}>나무위키</span>
          {`"제공"`}
        </Link>
      </div>
    </div>
  )
}

export default PopularBox
