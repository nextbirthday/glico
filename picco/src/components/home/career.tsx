/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import styles from './career.module.css'
import { useSession } from 'next-auth/react'

const projects = [
  { id: 1, category: 'Front-End', image: '/projects/project1.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 2, category: 'Front-End', image: '/projects/project2.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 3, category: 'Back-End', image: '/projects/project3.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 4, category: 'Mobile', image: '/projects/project4.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 5, category: 'Back-End', image: '/projects/project5.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 6, category: 'Mobile', image: '/projects/project6.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 7, category: 'Mobile', image: '/projects/project7.webp', description: 'lone coding with HTML, CSS, Javsscript' },
  { id: 8, category: 'Back-End', image: '/projects/project8.webp', description: 'lone coding with HTML, CSS, Javsscript' },
]
const categories = ['All', 'Front-End', 'Back-End', 'Mobile']

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleProject = (category: any) => {
    setSelectedCategory(category)
  }

  return (
    <section id="career" className={styles.section}>
      <div>
        <h2 className={styles.title}>Career</h2>
        <p className={styles.description}>Projects</p>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>
              <button className={`${styles.category} ${selectedCategory === category && styles.active}`} onClick={() => handleProject(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.projects}>
          {projects
            .filter((project) => selectedCategory === 'All' || project.category === selectedCategory)
            .map((project) => (
              <li key={project.id} className={`${styles.project} ${styles[project.category.toLowerCase()]}`}>
                <img src={project.image} alt="project" className={styles.project__image} />
                <div className={styles.project__metadata}></div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Career
