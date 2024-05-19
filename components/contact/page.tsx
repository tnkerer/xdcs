import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss';

import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Engine } from 'tsparticles-engine'

type Props = {}

const ContactPage = (props: Props) => {

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

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all environment variables are available
    if (!process.env.SERVICE_ID || !process.env.TEMPLATE_ID || !process.env.PUBLIC_KEY) {
      alert('One or more EmailJS environment variables are missing');
      return;
    }

    const templateParams = {
      first_name: formState.firstName,
      last_name: formState.lastName,
      subject: formState.subject,
      email: formState.email,
      company: formState.company,
      message: formState.message,
    };

    emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
      process.env.PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        alert('Email sent successfully!');
        window.location.reload();
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Error sending email, please try again later. If the problem persists, please contact us at contact@xdcs.io.');
      })
      .catch((error) => {
        console.error('Error in emailjs.send:', error);
        alert('Error sending email, please try again later. If the problem persists, please contact us at contact@xdcs.io.');
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Contact Us
      </div>
      <form onSubmit={sendEmail} className={styles.inputsContainer}>
        <div className={styles.inputRow}>
          <div className={styles.input}>
            <div className={styles.label}>
              First Name
            </div>
            <div className={styles.inputHTML}>
              <input
                type="text"
                name="firstName"
                placeholder="Type here..."
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              Last Name
            </div>
            <div className={styles.inputHTML}>
              <input
                type="text"
                name="lastName"
                placeholder="Type here..."
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            Choose a subject
          </div>
          <div className={styles.inputHTML}>
            <input
              type="text"
              name="subject"
              placeholder="Type here..."
              value={formState.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            E-mail
          </div>
          <div className={styles.inputHTML}>
            <input
              type="email"
              name="email"
              placeholder="Type here..."
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            Company
          </div>
          <div className={styles.inputHTML}>
            <input
              type="text"
              name="company"
              placeholder="Type here..."
              value={formState.company}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.label}>
            Write a message
          </div>
          <div className={styles.inputHTML}>
            <textarea
              name="message"
              className={styles.inputTextArea}
              rows={4}
              cols={48}
              placeholder="Enter your text here..."
              value={formState.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
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

export default ContactPage;
