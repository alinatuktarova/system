import React from 'react'
import styles from './TitleLine.module.scss'

const TitleLine = () => (
  <>
    <div className={styles.fisrtLine}>
      <div className={styles.grade}>№</div>
      <div className={styles.subject}>Предмет</div>
      <div className={styles.grade}>5</div>
      <div className={styles.grade}>4</div>
      <div className={styles.grade}>3</div>
      <div className={styles.grade}>2</div>
      <div className={styles.grade}>1</div>
      <div className={styles.lessons}>Пропущенные занятия</div>
      <div className={styles.credit}>Зачет</div>
    </div>
  </>
)

export default TitleLine
