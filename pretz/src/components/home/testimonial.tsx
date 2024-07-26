/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './testimonial.module.css'
const Testimonial = () => {
  return (
    <section id="testimonial" className={styles.section}>
      <h2 className={styles.title}>Testimonials</h2>
      <p className={styles.description}>See what they say about me</p>
      <ul className={styles.testimonials}>
        <li className={styles.testimonial}>
          <img src="/cutscene/BG_CS_PR_08.jpg" alt="people1" className={styles.testimonial__image} />
          <div className={styles.testimonial__bubble}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur suscipit quia mollitia amet, vero inventore aliquid quaerat similique voluptates ipsam sunt
              maxime maiores odit accusamus nihil, facere accusantium dolores. <br />
              Every 25 seconds, deal 152~290% damage to one enemy. 50% chance to deal an additional 251~476% damage to enemies in a circular area around the targeted enemy.
            </p>
            <p>
              <span className={styles.testimonial__bubble__name}>Shiroko</span> Abydos
            </p>
          </div>
        </li>
        <li className={styles.testimonial}>
          <img src="/cutscene/BG_CS_PV4_075.jpg" alt="people1" className={styles.testimonial__image} />
          <div className={styles.testimonial__bubble}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur suscipit quia mollitia amet, vero inventore aliquid quaerat similique voluptates ipsam sunt
              maxime maiores odit accusamus nihil, facere accusantium dolores. <br />
              Every 25 seconds, deal 152~290% damage to one enemy. 50% chance to deal an additional 251~476% damage to enemies in a circular area around the targeted enemy.
            </p>
            <p>
              <span className={styles.testimonial__bubble__name}>A.R.O.N.A</span> SCHALE
            </p>
          </div>
        </li>
        <li className={styles.testimonial}>
          <img src="/cutscene/BG_CS_S1Final_27_2.jpg" alt="people1" className={styles.testimonial__image} />
          <div className={styles.testimonial__bubble}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus maiores corporis reprehenderit ex. Soluta consequuntur, dolores, quibusdam repellat
              ullam facere sapiente voluptatibus quos, impedit error nulla commodi vero expedita! <br />
              Deal 274~521% damage to one enemy. Deal an additional 292~554% damage to enemies in circular area around the targeted enemy.
            </p>
            <p>
              <span className={styles.testimonial__bubble__name}>Arisu</span> Millenium
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Testimonial
