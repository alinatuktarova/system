import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss'
import img from '../../img/logo.PNG'
import { setMenu } from '../../actions/menuAction'

const Header = () => {
  const MenuState = useSelector((state) => state.menuState.menuState);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.valuesState.valuesState);

  function handleOnPress(e) {
    if (e.key === 'Enter') {
      dispatch(setMenu());
    }
  }

  const changeMenu = () => {
    dispatch(setMenu());
  }

  return (
    <div className={styles.header}>
      <img className={styles.header__img} src={img} alt="logo" />
      <h1 className={styles.header__title}>Учет успеваемости</h1>
      <div className={styles.header__box}>
        <div className={`${name ? styles.header__name : styles.none}`}>Туктарова А. Р.</div>
        { name
        && (
        <div
          className={`${styles.header__burger_menu} ${MenuState ? styles.activeBigMenu : ''}`}
          tabIndex={0}
          onClick={changeMenu}
          role="button"
          onKeyPress={handleOnPress}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
        )}
      </div>
    </div>
  )
}

export default Header
