import React from 'react'
import styles from './Footer.module.css'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {
  return (
    <footer className={styles.footer_container}>



    <h2 className={styles.footertext}>KNOW-I</h2>
    <p className={styles.footertext}>Know deeply, innovate intelligently.</p>
    <div className={styles.social_icons}>
      <a href='https://www.linkedin.com/company/know-i-club/'><FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/></a>
      <a href='https://www.instagram.com/know_i_club?igshid=ZGNjOWZkYTE3MQ=='><FontAwesomeIcon icon={faInstagram} className={styles.instagram}/></a>
      <a href='https://www.youtube.com/@KNOW-IRESEARCHCLUB'><FontAwesomeIcon icon={faYoutube}className={styles.youtube}/></a>

    </div>
    
    <p className={styles.footertext}>&copy; 2024 KNOW-I. All rights reserved.</p>
    </footer>
  )
}
