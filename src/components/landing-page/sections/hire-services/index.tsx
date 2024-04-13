import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const HireSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Quality and safety <br />
        Hire our services
      </div>

      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className={styles.button}>
        Don't waste time click here
      </div>
    </div>
  )
}

export default HireSection