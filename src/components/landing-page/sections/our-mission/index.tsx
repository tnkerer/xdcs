import React from 'react'
import Card from './components/card/index'

import styles from './styles.module.scss'

type Props = {}

const OurMissionSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Our Mission
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <Card />
        </div>

        <div className={styles.card}>
          <Card />
        </div>

        <div className={styles.card}>
          <Card />
        </div>

        <div className={styles.card}>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default OurMissionSection