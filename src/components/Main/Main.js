import React from 'react'
import styles from './Main.module.scss'
import Line from '../Line/Line';

const Main = () => (
  <div className={styles.box}>
    <h1 className={styles.box__title}>Дневник</h1>
    <div className={styles.box__table}>
      <Line />
    </div>
  </div>
)

export default Main
