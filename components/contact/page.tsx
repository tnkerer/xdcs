import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Contact Us
      </div>

      <div className={styles.inputsContainer}>
        <div className={styles.inputRow}>
          <div className={styles.input}>
            <div className={styles.label}>
              First Name
            </div>

            <div className={styles.inputHTML}>
              <input type="text" placeholder='Type here...' />
            </div>
          </div>

          <div className={styles.input}>
            <div className={styles.label}>
              Last Name
            </div>

            <div className={styles.inputHTML}>
              <input type="text" placeholder='Type here...' />
            </div>
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.label}>
            Choose a subject
          </div>

          <div className={styles.inputHTML}>
            <input type="text" placeholder='Type here...' />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.label}>
            E-mail
          </div>

          <div className={styles.inputHTML}>
            <input type="text" placeholder='Type here...' />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.label}>
            Company
          </div>

          <div className={styles.inputHTML}>
            <input type="text" placeholder='Type here...' />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.label}>
            Write a message
          </div>

          <div className={styles.inputHTML}>
            <textarea
              /* value={value}
              onChange={handleChange} */
              className={styles.inputTextArea}
              rows={4}
              cols={48}
              placeholder="Enter your text here..."
            />
          </div>
        </div>

        <div className={styles.button}>
          Submit
        </div>
      </div>
    </div>
  )
}

export default ContactPage