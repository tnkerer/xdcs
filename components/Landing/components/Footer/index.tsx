import styles from './styles.module.scss'

import CTA, { CTAType } from '../../../CTA'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.title}>
          Quality and safety <br />
          Hire our services
        </div>

        <div className={styles.description}>
          With over 25 years combined blockchain experience, you can benefit from our expertise in the space. <br />
          You can rely on our dedication to make your business part of the digital evolution.
        </div>

        <div className={styles.centerContainer}>
          <CTA 
            type={CTAType.REQUEST_SERVICES} 
            link='https://metamathstudios.com/services'
          />
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            © 2024 X Digital Capital Solutions &nbsp; <div style={{cursor: 'pointer'}}>Terms of Service</div>&nbsp;-&nbsp;<div style={{cursor: 'pointer'}}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
