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
          <Card icon='assets/icons/globe.svg' title='Lorem Ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        </div>

        <div className={styles.card}>
          <Card icon='assets/icons/security.svg' title='Lorem Ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        </div>

        <div className={styles.card}>
          <Card icon='assets/icons/lamp.svg' title='Lorem Ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        </div>

        <div className={styles.card}>
          <Card icon='assets/icons/rocket.svg' title='Lorem Ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        </div>
      </div>
    </div>
  )
}

export default OurMissionSection