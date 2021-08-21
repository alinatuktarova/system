import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <>
    <div className={styles.footer}>
      <h2 className={styles.footer__title}>Название</h2>
      <div className={styles.footer__block_text}>
        <span>Помощь</span>
        <span>Контакты</span>
      </div>
    </div>
  </>
)

export default Footer
