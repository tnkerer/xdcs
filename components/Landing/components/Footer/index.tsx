import styles from './styles.module.scss'
import { useEffect, useRef, useState } from "react"
import CTA, { CTAType } from '../../../CTA'

const Footer = () => {

  const [logos, setLogos] = useState<string[]>([]);
  const logoWidth = 150;
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    try {
      const response = await fetch('assets/partners/logos.json');
      const { logos } = await response.json();
      setLogos(logos);
    } catch (error) {
      console.error('Erro ao carregar logotipos:', error);
    }
  };
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
            © 2024 X Digital Capital Solutions &nbsp; <div style={{ cursor: 'pointer' }} onClick={() => {
              window.open('policy', '_self')
            }}>Privacy Policy</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.logosContainer}>
        <div className={styles.partnersContainer}>
          <div className={styles.title}>
            In Collaboration With:
          </div>

          <div className={styles.logoContainerWrapper}>
            <div className={styles.logoContainer} ref={containerRef}>
              {logos.map((logo, index) => (
                <img key={index} src={`assets/partners/${logo}`} alt={`Logo ${index}`} style={{ width: logoWidth }} />
              ))}
              {logos.map((logo, index) => (
                <img key={index + logos.length} src={`assets/partners/${logo}`} alt={`Logo ${index}`} style={{ width: logoWidth }} />
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer
