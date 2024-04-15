import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'

type Props = {
  icon: string,
  title: string,
  description: string
}

const Card = ({ description, icon, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image className={styles.img} width={40} height={40} src={icon} alt='icon' />
      </div>

      <div className={styles.title}>
        {title}
      </div>

      <div className={styles.description}>
        {description}
      </div>
    </div>
  )
}

export default Card