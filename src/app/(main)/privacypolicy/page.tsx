import React from 'react'

import styles from './styles.module.scss'

type Props = {}

const PrivacyPolicyPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <div className={styles.title}>Privacy Policy</div>

        <div className={styles.title}>Interpretations and Definitions</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Interpretation</li>
          <li className={styles.listItem}>Definitions</li>
        </ul>

        <div className={styles.title}>Collecting and Using Your Personal Data</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Types of Data Collected</li>
          <li className={styles.listItem}>Use of Your Personal Data</li>
          <li className={styles.listItem}>Retention of Your Personal Data</li>
          <li className={styles.listItem}>Transfer of Your Personal Data</li>
          <li className={styles.listItem}>Disclosure of Your Personal Data</li>
          <li className={styles.listItem}>Security of Your Personal Data</li>
        </ul>

        <div className={styles.title}>Detailed Information on the Processing of Your Personal Data</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Email Marketing</li>
          <li className={styles.listItem}>Usage, Performance and Miscellaneous</li>
        </ul>

        <div className={styles.title}>GDPR Privacy</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Legal Basis for Processing Personal Data under GDPR</li>
          <li className={styles.listItem}>Your Rights under the GDPR</li>
          <li className={styles.listItem}>Exercising of Your GDPR Data Protection Rights</li>
        </ul>

        <div className={styles.title}>CCPA Privacy</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Categories of Personal Information Collected</li>
          <li className={styles.listItem}>Sources of Personal Information</li>
          <li className={styles.listItem}>Use of Personal Information for Business Purposes or Commercial Purposes</li>
          <li className={styles.listItem}>Disclosure of Personal Information for Business Purposes or Commercial Purposes</li>
          <li className={styles.listItem}>Sale of Personal Information</li>
          <li className={styles.listItem}>Share of Personal Information</li>
          <li className={styles.listItem}>Sale of Personal Information of Minors Under 16 Years of Age</li>
          <li className={styles.listItem}>Your Rights under the CCPA</li>
          <li className={styles.listItem}>Exercising Your CCPA Data Protection Rights</li>
          <li className={styles.listItem}>Do Not Sell My Personal Information</li>
        </ul>

        <div className={styles.title}>&quot;Do Not Track&quot; Policy as Required by California Online Privacy Protection Act (CalOPPA)</div>
        <ul className={styles.list}>
          <li className={styles.listItem}>Children&apos;s Privacy</li>
          <li className={styles.listItem}>Your California Privacy Rights (California&quot;s Shine the Light law)</li>
          <li className={styles.listItem}>California Privacy Rights for Minor Users (California Business and Professions Code Section 22581)</li>
          <li className={styles.listItem}>Links to Other Websites</li>
          <li className={styles.listItem}>Changes to this Privacy Policy</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage