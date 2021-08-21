import React from 'react'
import styles from './TextButton.module.scss'

function handlerClick(func) {
  if (func) func();
}

const TextButton = ({
  text, Block = false, func,
}) => (
  <button
    className={styles.TextButton}
    type="button"
    disabled={Block}
    onClick={() => handlerClick(func)}
  >
    {text}
  </button>
)

export default TextButton
