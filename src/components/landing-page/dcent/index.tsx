import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const DcentSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div />

        <div className={styles.buyBox}>
          <div className={styles.title}>
            D'CENT Biometric Wallet Safeguard Your Crypto Journey
          </div>

          <div className={styles.description}>
            Seize your crypto future with the D'CENT Biometric Wallet – a cutting-edge hardware wallet ledger solution that unites self-custody, security, and user-friendly features for over 3,000 cryptocurrencies. 
          </div>

          <div className={styles.buttons}>
            <div className={styles.button}>
              More info
            </div>

            <div className={styles.button}>
              <Image width={20} height={20} src={'assets/icons/cart.svg'} alt='Buy' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DcentSection