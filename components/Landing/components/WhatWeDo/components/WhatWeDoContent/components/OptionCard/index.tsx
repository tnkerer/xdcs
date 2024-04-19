import Image from 'next/image'

import styles from './styles.module.scss'

import nft from './assets/rwa.png'
import sc from './assets/sc.png'
import smartphone from './assets/smart.png'

import { useState } from 'react'

const OptionsCard = () => {
  const [option, setOption] = useState(nft)
  const [selected, setSelected] = useState(1)
  
  return (
    <div className={styles.container}>
      <div className={styles.centerContainer}>
        <div className={styles.imageContainer}>
          <Image src={option} alt='Services' width={300} height={240}/>
        </div>
      </div>

      <div className={styles.titleContainer}>
        {option == nft ? 'RWA Tokenization' : null}
        {option == sc ? 'Smart Contracts' : null}
        {option == smartphone ? 'Private Staking Partner' : null}
      </div>

      <div className={styles.descriptionContainer}>
        {option == nft ? 
          'RWA Tokenization comes in many shapes and sizes. Utilizing blockchain technology we can take any physical asset and convert its value to a digital form. This opens up a new world of possibilities for any traditional asset class.'
        : null}

        {option == sc ? 
          'Lets work together to build your very own custom blockchain solution, tailored to your ideas and ambitions. At XDCS we offer the necessary tool kits to digitize your Web2 business.'
        : null}

        {option == smartphone ? 
          'Institutions, Enterprises and Family Offices are taking notice of Web3 solutions for wealth management. Diversify your portfolio into digital assets with XDCS today.'
        : null}
      </div>

      <div className={styles.optionsContainer}>
        <div className={selected == 1 ? styles.selectedOptions : styles.options} onClick={() => (setOption(nft), setSelected(1))}></div>
        <div className={selected == 2 ? styles.selectedOptions : styles.options} onClick={() => (setOption(sc), setSelected(2))}></div>
        <div className={selected == 3 ? styles.selectedOptions : styles.options} onClick={() => (setOption(smartphone), setSelected(3))}></div>
      </div>
    </div>
  )
}

export default OptionsCard