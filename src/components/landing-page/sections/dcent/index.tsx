import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const DcentSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.buyBox}>
          <div className={styles.title}>
            D&lsquo;CENT Biometric Wallet Safeguard Your Crypto Journey
          </div>

          <div className={styles.description}>
            Seize your crypto future with the D&lsquo;CENT Biometric Wallet – a cutting-edge hardware wallet ledger solution that unites self-custody, security, and user-friendly features for over 3,000 cryptocurrencies. 
          </div>

          <div className={styles.buttons}>
            <Link href={'/buydcent'}>
              <div className={styles.button}>
                More info
              </div>
            </Link>

            <div className={styles.button}>
              <Link href={'/buydcent'}>
                <Image width={20} height={20} src={'assets/icons/cart.svg'} alt='Buy' />
              </Link>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default DcentSection