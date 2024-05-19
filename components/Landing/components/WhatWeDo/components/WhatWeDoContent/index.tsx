import Image from 'next/image'

import styles from './styles.module.scss'
import OptionsCard from './components/OptionCard'
import CTA, { CTAType } from '../../../../../CTA'

const WhatWeDoContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.smallTitle}>
            What We Do
          </div>

          <div className={styles.title}>
            why choose <div className={styles.thinTitle}><span className={styles.gradient}>X Digital Capital Solutions</span></div>
          </div>
          
          <div className={styles.text}>
            Experienced in Smart Contract development, on and off-chain data processing, and analysis, our skills cover all steps towards developing your product. From back-end architectures to frond-end development, UI/UX development, test and quality assurance, and after scale support services.
          </div>

        </div>

        <div className={styles.rightSideContainer}>
          <div className={styles.columnContainer}>
            <div className={styles.optionsCardContainer}>
              <OptionsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoContent