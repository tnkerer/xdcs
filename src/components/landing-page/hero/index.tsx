import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div />

      <div className={styles.midContainer}>
        <div className={styles.title}>
          Building for the future <br /> in todays <span>Digital Economy</span>
        </div>

        <div className={styles.description}>
          
        </div>

        <div className={styles.button}>
          Let's Build
        </div>
      </div>

      <div className={styles.partnersContainer}>
        <div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection