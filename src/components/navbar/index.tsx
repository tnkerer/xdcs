import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <Link href={'/'}>
          <Image className={styles.img} width={135} height={45} src={'/assets/brand/xdcslogo.svg'} alt='Logo' />
        </Link>
      </div>
      

      <div className={styles.side}>
        <Link href={'/privacypolicy'}>
          <div className={styles.button}>
            Privacy Policy
          </div>
        </Link>

        <Link href={'/contact'}>
          <div className={styles.button}>
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar