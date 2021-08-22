import React from 'react'
import styles from './AuthorizationInput.module.scss'

const AuthorizationInput = ({
  type, name, onChange, onBlur, value, placeholder, disabled,
}) => (
  <div className={styles.box}>
    <input
      className={styles.box__input}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
)

export default AuthorizationInput
