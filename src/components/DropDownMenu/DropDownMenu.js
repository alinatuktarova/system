import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMenu } from '../../actions/menuAction';
import { setValue } from '../../actions/ValuesAction'
import styles from './DropDownMenu.module.scss'

const DropDownMenu = () => {
  const dispatch = useDispatch();
  const MenuState = useSelector((state) => state.menuState.menuState);
  function handleOnUnShow(e) {
    if (e.key === 'Enter' && MenuState) {
      dispatch(setMenu());
    }
  }

  return (
    <>
      {
      MenuState && (
        <div
          className={`${MenuState ? styles.background : ''}`}
          onClick={() => {
            if (MenuState) {
              dispatch(setMenu());
            }
          }}
          tabIndex={0}
          role="button"
          onKeyPress={handleOnUnShow}
          aria-label="Delete"
        >
          <div className={styles.menu}>
            <div className={`${!MenuState ? styles.menu__none : ''} ${MenuState ? styles.menu__field_student : ''}`}>О студенте</div>
            <Link
              to="/"
              className={styles.link}
              onClick={() => {
                if (MenuState) {
                  dispatch(setMenu());
                  dispatch(setValue());
                }
              }}
            >
              <div
                className={`${!MenuState ? styles.menu__none : ''} ${MenuState ? styles.menu__field_exit : ''}`}
                onClick={() => {
                  if (MenuState) {
                    dispatch(setMenu());
                  }
                }}
                tabIndex={0}
                role="button"
                onKeyPress={handleOnUnShow}
                aria-label="Delete"
              >
                Выход
              </div>
            </Link>
          </div>
        </div>
      )
}
    </>
  )
}

export default DropDownMenu
