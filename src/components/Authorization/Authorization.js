import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import styles from './Authorization.module.scss'
import TextButton from '../TextButton/TextButton'
import AuthorizationInput from '../AuthorizationInput/AuthorizationInput'

const Authorization = () => {
  const history = useHistory();
  const userSchema = yup.object().shape({
    email: yup.string().typeError('Неверно введен email').required('Введите email'),
    password: yup.string().required('Обязательное поле'),
  })
  return (
    <div className={styles.block}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          if (values.password === 'test' && values.email === 'test@mail.ru') {
            history.push('/diary');
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
          isValid,
          dirty,
        }) => (
          <div className={styles.authorization}>
            <span className={styles.authorization__title}>Вход в систему</span>
            <AuthorizationInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
            />
            {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}
            <AuthorizationInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Пароль"
            />
            {
            touched.password
            && errors.password
            && <p className={styles.error}>{errors.password}</p>
            }
            <TextButton text="Войти" Block={!isValid && !dirty} func={handleSubmit} />
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Authorization
