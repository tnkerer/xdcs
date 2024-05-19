import styles from './styles.module.scss'
import CTA, { CTAType } from '../../../CTA'

import { useCallback, useEffect, useRef, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Engine } from 'tsparticles-engine'

const Footer = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, [])

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
      <div className={styles.particlesJs}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          className={styles.particlesJs}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#3165AA",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  )
}

export default Footer
