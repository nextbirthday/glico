/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './signinByQr.module.css'
import Image from 'next/image'
const SigninByQr = () => {
  return (
    <ul className={styles.panel_wrap}>
      <li className={styles.panel_item}>
        <div className={`${styles.panel_inner} ${styles.panel_inner_qr}`}>
          <div className={styles.qrcode_map}>
            <div className={styles.qrcode_inner}>
              <img src="/schale/schale_black_crop.png" alt="큐알로그인" className={styles.qr_image} />
              <div className={styles.time_wrap}>
                <p className={styles.time_next}>남은시간</p>
                <p className={styles.time_number}>00분 00초</p>
              </div>
            </div>
          </div>
          <h2 className={styles.top_desc}>
            공용 네트워크, 공용 PC라면 안전을 위해 <br /> QR코드로 로그인해주세요.
          </h2>
        </div>
      </li>
    </ul>
  )
}

export default SigninByQr
