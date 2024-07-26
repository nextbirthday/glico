/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './about.module.css'
import { FaHtml5, FaDatabase } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import Image from 'next/image'
const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>Full-Stack Developer</p>
      <ul className={styles.majors}>
        <li className={styles.major}>
          <FaHtml5 className={styles.major_icon} />
          <p className={styles.major_title}>Front-End</p>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs, Next js</p>
        </li>
        <li className={styles.major}>
          <FaDatabase className={styles.major_icon} />
          <p className={styles.major_title}>Back-End</p>
          <p>Java, JavaScript, NodeJs, REST APIs, GraphQL, Python, Express, Nest JS</p>
        </li>
        <li className={styles.major}>
          <MdOutlinePhoneIphone className={styles.major_icon} />
          <p className={styles.major_title}>Mobile</p>
          <p>Android, ios, React Native, Flutter, Swift, Kotlin</p>
        </li>
      </ul>
      <ul className={styles.jobs}>
        <li className={styles.job}>
          <Image src="/jobs/acuon.png" width={96} height={36} alt="에큐온저축은행로고" />
          <div>
            <p className={styles.job_name}>에큐온저축은행 시스템 Back-End Developer</p>
            <p className={styles.job_period}>2023.05.01 ~ 2023.08.30 </p>
          </div>
        </li>
        <li className={styles.job}>
          <Image src="/jobs/plani.jpg" width={96} height={36} alt="플랜아이로고" />
          <div>
            <p className={styles.job_name}>플랜아이 Full Stack Developer</p>
            <p className={styles.job_period}>2023.10.10 ~ 2024.12.26 </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About
