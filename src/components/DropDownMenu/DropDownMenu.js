import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setValue } from '../../actions/ValuesAction'
import styles from './DropDownMenu.module.scss'

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const MenuState = useSelector((state) => state.menuState.menuState);

  function handleOnUnShow(e) {
    if (e.key === 'Enter') {
      dispatch(setValue());
    }
  }
  return (
    <>
      <div className={`${MenuState && styles.menu}`}>
        <div className={`${!MenuState && styles.menu__none} ${MenuState ? styles.menu__field_student : ''}`}>О студенте</div>
        <Link
          to="/"
        >
          <div
            className={`${!MenuState && styles.menu__none} ${MenuState ? styles.menu__field_exit : ''}`}
            onClick={() => dispatch(setValue())}
            tabIndex={0}
            role="button"
            onKeyPress={handleOnUnShow}
            aria-label="Delete"
          >
            Выход
          </div>
        </Link>
      </div>
    </>
  )
}

export default DropDownMenu
