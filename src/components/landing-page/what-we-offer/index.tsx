import MySwiper from '@/components/global/swiper';

import styles from './styles.module.scss'

type Props = {}

const WhatWeOfferSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        What we Offer
      </div>

      <div className={styles.slider}>
        <MySwiper />
      </div>
    </div>
  )
}

export default WhatWeOfferSection