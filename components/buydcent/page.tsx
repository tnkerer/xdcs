import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

type Props = {}

const BuyDcentPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <div className={styles.embed}>
          <video controls>
            <source src="assets/dcent/dcent.mp4" type="video/mp4" />
            {/* Add additional source elements for other video formats if needed */}
            Your browser does not support the video tag.
          </video>

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
            <Image width={187} height={186} src={'/assets/dcent/demonstration.svg'} alt='Dcent' />
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

          <div className={styles.button} onClick={() => {
            window.open('https://store.dcentwallet.com/products/biometric-wallet-xdcs?utm_source=yt_xdcs&utm_medium=affiliate&utm_campaign=202302_xdcs_v01', '_blank')
          }}>
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

          <div className={styles.button} onClick={() => {
            window.open('https://store.dcentwallet.com/products/biometric-wallet-2x-package-xdcs?utm_source=yt_xdcs&utm_medium=affiliate&utm_campaign=202302_xdcs_v01', '_blank')
          }}>
            Double Pack
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyDcentPage