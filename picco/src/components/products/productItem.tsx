'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { MdOutlineRateReview } from 'react-icons/md'
import styles from './productItem.module.css'
const ProductItem = (product: any) => {
  const handleHeart = (event: any) => {
    event.preventDefault()
  }
  return (
    <ul className={styles.product_section}>
      <li className={styles.product_detail}>
        <div className={styles.product_b}>
          <Link href={`/products/${product.code}`}>
            <div className={styles.image_box}>
              <div className={styles.product_image}>
                <img src="/cutscene/BG_CS_S1Final_20.jpg" alt="상품이미지" style={{ width: '365.75px', height: '365.75px', objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.info_box}>
              <div className={styles.product_brand}>FILA</div>
              <div className={styles.product_name}>{product.name}</div>
              <div className={styles.product_price}>
                <span className={styles.price_sale}>
                  <span className={styles.price_number}>{product.price}</span>
                  <span className={styles.price_unit}>원</span>
                </span>
              </div>
              <div className="info_delivery">무료배송</div>
            </div>
          </Link>
          <div className={styles.heart_area}>
            <div className={styles.heart_box}>
              <button type="button" className={styles.heart_icon} onClick={handleHeart}>
                <CiHeart />
              </button>
              <span className={styles.heart_count}>0</span>
              <Link href={`/product/${product.code}/reviews`} style={{ display: 'flex', alignItems: 'center' }}>
                <span className={styles.review_icon}>
                  <MdOutlineRateReview />
                </span>
                <span className={styles.review_count}>0</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ProductItem
