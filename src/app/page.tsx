'use client'

import { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'
import { SlideContext } from '@/contexts/slide-context'
import styles from './styles.module.scss'
import HeroSection from '@/components/landing-page/hero'
import OurMissionSection from '@/components/landing-page/our-mission'
import WhatWeOfferSection from '@/components/landing-page/what-we-offer'
import DcentSection from '@/components/landing-page/dcent'
import HireSection from '@/components/landing-page/hire-services'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface SlideDataType {
  from: number
  to: number
}

const LandingPage = () => {
  const [actualSlide, setActualSlide] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <SlideContext.Provider value={{ actualSlide, setActualSlide }}>
      <div className={styles.container}>
        <FullPage
          duration={800}
          afterChange={(data: SlideDataType) => {setActualSlide(data.to)}}
        >
          <Navbar />
          <Slide>
            <div id="heroPage">
              <HeroSection />
            </div>
          </Slide>

          <Slide>
            <div id="aboutUsPage">
              <OurMissionSection />
            </div>
          </Slide>

          <Slide>
            <div id="whatWeDoPage">
              <WhatWeOfferSection />
            </div>
          </Slide>

          <Slide>
            <div id="projectsPage">
              <DcentSection />
            </div>
          </Slide>

          <Slide>
            <div id="metamathPage">
              <HireSection />
            </div>
          </Slide>

          <Slide>
            <Footer />
          </Slide>
        </FullPage>
      </div>
    </SlideContext.Provider>
  )
}

export default LandingPage