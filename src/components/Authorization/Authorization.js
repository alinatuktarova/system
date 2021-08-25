import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './Authorization.module.scss'
import TextButton from '../TextButton/TextButton'
import AuthorizationInput from '../AuthorizationInput/AuthorizationInput'
import { setValue } from '../../actions/ValuesAction'

const Authorization = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const userSchema = yup.object().shape({
    email: yup.string().required('Введите email'),
    password: yup.string().required('Введите пароль'),
  })
  return (
    <div className={styles.block}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          if (values.password === 'test' && values.email === 'test') {
            history.push('/diary');
            dispatch(setValue());
          } else {
            setErrorMessage(true);
          }
        }}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className={styles.authorization}>
            <span className={styles.authorization__title}>Вход в систему</span>
            <AuthorizationInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Логин"
            />
            <div className={styles.error__box}>
              {
            touched.email
            && errors.email
            && (
              <span className={styles.error}>{errors.email}</span>
            )
            }
            </div>
            <AuthorizationInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Пароль"
            />
            <div className={styles.error__box}>
              {touched.password
            && errors.password
            && (
              <span className={`${styles.error}`}>{errors.password}</span>
            )}
            </div>
            <TextButton text="Войти" func={handleSubmit} />
            <div className={styles.errorMessage__box}>
              <span className={`${errorMessage ? styles.errorMessage : styles.none}`}>Не удается войти.</span>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Authorization
