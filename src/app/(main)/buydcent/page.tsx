import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

type Props = {}

const BuyDcentPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.embed}>
          <iframe width="1000" height="577" src="https://www.youtube.com/embed/izGwDsrQ1eQ" title="George Michael - Careless Whisper (Official Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className={styles.videoFooter}>
          <div className={styles.text}>
            <div className={styles.title}>
              D&apos;CENT Biometric Wallet Safeguard Your Crypto Journey
            </div>

            <div className={styles.description}>
              Seize your crypto future with the D&apos;CENT Biometric Wallet - a cutting-edge hardware wallet ledger solution that unites self-custody, security, and user-friendly features for over 3,000 cryptocurrencies.
            </div>
          </div>

          <div className={styles.img}>
            <Image width={207} height={186} src={'assets/dcent/demonstration.svg'} alt='Dcent' />
          </div>
        </div>
      </div>

      <div className={styles.buyContainer}>
          <div className={styles.img}>
            <Image width={100} height={180} src={'/assets/dcent/oneunit.svg'} alt='Preview' />
          </div>
        <div className={styles.card}>
          <div className={styles.titlePrice}>
            <div className={styles.title}>
              Biometric Wallet
            </div>

            <div className={styles.price}>
              $129.00
            </div>
          </div>

          <div className={styles.description}>
            Biometric Auth - Certified EAL5+ - NFT’s - Bluetooth - iOS & Android - dApp Browser - 3000+ Coins - Large Display - Convenient Update
          </div>

          <div className={styles.button}>
            Single
          </div>
        </div>
          <div className={styles.img}>
            <Image width={160} height={180} src={'/assets/dcent/twounit.svg'} alt='Preview' />
          </div>

        <div className={styles.card}>

          <div className={styles.titlePrice}>
            <div className={styles.title}>
              Biometric Wallet
            </div>

            <div className={styles.price}>
              $129.00
            </div>
          </div>

          <div className={styles.description}>
            Biometric Auth - Certified EAL5+ - NFT’s - Bluetooth - iOS & Android - dApp Browser - 3000+ Coins - Large Display - Convenient Update
          </div>

          <div className={styles.button}>
            Duo
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyDcentPage