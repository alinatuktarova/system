import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './DropDownMenu.module.scss'

const DropDownMenu = () => {
  const MenuState = useSelector((state) => state.menuState.menuState);
  return (
    <>
      <div className={`${MenuState && styles.menu}`}>
        <div className={`${!MenuState && styles.menu__none} ${MenuState ? styles.menu__field_student : ''}`}>О студенте</div>
        <Link to="/">
          <div className={`${!MenuState && styles.menu__none} ${MenuState ? styles.menu__field_exit : ''}`}>Выход</div>
        </Link>
      </div>
    </>
  )
}

export default DropDownMenu
