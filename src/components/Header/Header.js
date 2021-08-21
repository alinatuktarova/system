import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './Header.module.scss'
import img from '../../img/logo.PNG'
import { setMenu } from '../../actions/menuAction'

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleOnPress(e) {
    if (e.key === 'Enter') {
      setOpen(!open);
    }
  }

  return (
    <>
      <div className={styles.header}>
        <img className={styles.header__img} src={img} alt="Pharm.helper" />
        <h1 className={styles.header__title}>Название</h1>
        <div
          className={`${styles.header__burger_menu} ${open && styles.activeBigMenu}`}
          tabIndex={0}
          onClick={() => {
            setOpen(!open);
            dispatch(setMenu());
          }}
          role="button"
          onKeyPress={handleOnPress}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </>
  )
}

export default Header
