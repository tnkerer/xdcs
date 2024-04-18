import GreenAboutCard from './components/AboutCards/Green'
import OrangeAboutCard from './components/AboutCards/Orange'
import PurpleAboutCard from './components/AboutCards/Purple'
import RedAboutCard from './components/AboutCards/Red'

import trust from './components/AboutCards/assets/trust.svg'
import design from './components/AboutCards/assets/design.svg'
import scalability from './components/AboutCards/assets/scalability.svg'
import performance from './components/AboutCards/assets/performance.svg'

import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/css/navigation'
import styles from './styles.module.scss'
import { useState } from 'react'

const AboutUsContent = () => {
  SwiperCore.use([Autoplay])

  const [active, setActive] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.smallTitle}>
            About Us
          </div>

          <div className={styles.title}>
            We offer solutions <div className={styles.thinTitle}> you can&nbsp;<span className={styles.gradient}>trust</span></div>
          </div>

          <div className={styles.text}>
          Focused on cutting-edge technology, X Digital Capital Solutions uses the best technologies and practices to create innovative blockchain solutions.
          </div>

         

          <div className={styles.text}>
          We abstract the complexity of interacting with the blockchain. Our mission is to create user-friendly applications to make the transition from conventional web applications to Web3 seamlessly and intuitive. Always focused on delivering the best experience to the endpoint client.
          </div>
        </div>
        
        <div className={styles.rightSide}>
          <div className={styles.cardsGrid}>
            <GreenAboutCard title='Strategy' text='Our primary mission is to draft and build a tailored Web3 strategy that will catalyze business growth' image={trust} />
            <PurpleAboutCard title='Scalability' text='Our tools scale on demand with high maintainability and extensibility' image={scalability} />
            <OrangeAboutCard title='Flexibility' text='We oversee network validators, enforce security practices, and developing on-chain apps' image={design} />
            <RedAboutCard title='Innovation' text='Embrace innovation and secure your competitive edge by partnering with X Digital Capital Solutions' image={performance} />
          </div>

          <div className={styles.mobileCardsGrid}>
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true
              }}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>            
              <GreenAboutCard title='Strategy' text='Our primary mission is to draft and build a tailored Web3 strategy that will catalyze business growth' image={trust} />
              </SwiperSlide>

              <SwiperSlide>            
              <PurpleAboutCard title='Scalability' text='Our tools scale on demand with high maintainability and extensibility' image={scalability} />
              </SwiperSlide>

              <SwiperSlide>            
              <OrangeAboutCard title='Flexibility' text='We oversee network validators, enforce security practices, and developing on-chain apps' image={design} />
              </SwiperSlide>

              <SwiperSlide>            
              <RedAboutCard title='Innovation' text='Embrace innovation and secure your competitive edge by partnering with X Digital Capital Solutions' image={performance} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContent