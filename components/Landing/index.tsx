import { useEffect, useState } from 'react'
import { FullPage, Slide } from 'react-full-page'
import { SlideContext } from '../../contexts/SlideContext'
import Sidebar from '../Sidebar'
import AboutUs from './components/AboutUs'
import SlideBar from './components/FixedComponents/SlideMenu'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatWeDo from './components/WhatWeDo'
import styles from './styles.module.scss'
import DcentSection from './components/Dcent'

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
          <SlideBar />
          <Sidebar />

          <Slide>
            <div id="heroPage">
              <Hero />
            </div>
          </Slide>

          <Slide>
            <div id="aboutUsPage">
              <AboutUs />
            </div>
          </Slide>

          <Slide>
            <div>
              <DcentSection />
            </div>
          </Slide>

          <Slide>
            <div id="whatWeDoPage">
              <WhatWeDo />
            </div>
          </Slide>

          <Slide>
            <div id="footerPage">
              <Footer />
            </div>
          </Slide>
        </FullPage>
      </div>
    </SlideContext.Provider>
  )
}

export default LandingPage
