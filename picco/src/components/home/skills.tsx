import React from 'react'
import styles from './skills.module.css'
import Skillprogress from './skillprogress'

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>Skills</h2> <p className={styles.description}>Skills & Attributes</p>
      <p style={{ paddingBottom: '1rem' }}>Lorem ipsum dolor sit amet consectetur - Increase by 14~26.6%.</p>
      <div className={styles.skills}>
        <section className={styles.skills__coding}>
          <h3 className={styles.skills__title}>Coding Skills</h3>
          <Skillprogress />
        </section>
        <section className={styles.skills__tools}>
          <h3 className={styles.skills__title}>Tools</h3>
          <ul>
            <li className={styles.skills__title__li}>IntelliJ</li>
            <li className={styles.skills__title__li}>Web Storm</li>
            <li className={styles.skills__title__li}>Spring Boot</li>
            <li className={styles.skills__title__li}>DBeaver</li>
            <li className={styles.skills__title__li}>Visual Studio Code</li>
          </ul>
        </section>
        <section className={styles.skills__etc}>
          <h3 className={styles.skills__title}>ETC</h3>
          <ul>
            <li className={styles.skills__title__li}>Git</li>
            <li className={styles.skills__title__li}>Scrum Master</li>
            <li className={styles.skills__title__li}>Trinity</li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Skills
