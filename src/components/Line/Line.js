import {
  Formik, FieldArray, Form, Field,
} from 'formik';
import * as yup from 'yup'
import React, { useState } from 'react'
import styles from './Line.module.scss'
import TextButton from '../TextButton/TextButton';

const Line = () => {
  const [exam, setExam] = useState([]);
  let finalObject = [{
    discipline: '',
    average_rating: '',
    isChecked: '',
  }];

  const userSchema = yup.object().shape({
    allValues: yup.array().of(
      yup.object().shape({
        subject: yup.string().min(3).max(16).required(),
        five: yup.number().required(),
        four: yup.number().required(),
        three: yup.number().required(),
        two: yup.number().required(),
        one: yup.number().required(),
        lessons: yup.number().required(),
      }),
    ),
  })

  const remItem = (index) => {
    setExam((exams) => [...exams.slice(0, index), ...exams.slice(index + 1)]);
  }

  return (
    <Formik
      initialValues={{
        allValues: [{
          subject: '',
          five: '',
          four: '',
          three: '',
          two: '',
          one: '',
          lessons: '',
          credit: '',
        }],
      }}
      onSubmit={(values) => {
        setExam([]);
        values.allValues.map((value) => {
          let sum = Number(value.five * 5)
            + Number(value.four * 4)
            + Number(value.three * 3)
            + Number(value.two * 2)
            + Number(value.one * 1);
          let k = Number(value.five)
            + Number(value.four)
            + Number(value.three)
            + Number(value.two)
            + Number(value.one);
          let final = sum / k;
          let checked;
          if ((final > 4.2) && (Number(value.lessons) < 8)) {
            checked = true;
            setExam((exams) => [...exams, 'Да']);
          } else {
            checked = false;
            setExam((exams) => [...exams, 'Нет']);
          }
          finalObject = {
            discipline: value.subject,
            average_rating: final,
            isChecked: checked,
          }
          console.log(finalObject);
          return <></>
        })
      }}
      validationSchema={userSchema}
    >
      { ({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <FieldArray type="text" name="allValues">
              {
                (fieldArrayProps) => {
                  const {
                    push, remove,
                  } = fieldArrayProps;
                  const { allValues } = values;
                  return (
                    <div>
                      <div className={styles.box__buttons}>
                        <div className={styles.box__buttons_add}>
                          <TextButton func={() => push('')} text="Добавить предмет" />
                        </div>
                        <div className={styles.box__buttons_check}>
                          <TextButton func={handleSubmit} text="Проставить зачет" />
                        </div>
                      </div>
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
                      {
                      allValues.map((valuesss, index) => (
                        <div className={styles.box}>
                          <div className={styles.lineGrades}>
                            <Field
                              name="Number"
                              className={`${styles.input__grade}`}
                              value={index + 1}
                            />
                            <Field
                              name={`allValues[${index}].subject`}
                              className={`${styles.input__subject} 
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].subject
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].subject
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={allValues[index].subject || ''}
                            />
                            <Field
                              name={`allValues[${index}].five`}
                              className={`${styles.input__grade}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].five
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].five
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].four`}
                              className={`${styles.input__grade}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].four
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].four
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].three`}
                              className={`${styles.input__grade}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].three
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].three
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].two`}
                              className={`${styles.input__grade}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].two
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].two
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].one`}
                              className={`${styles.input__grade}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].one
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].one
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].lessons`}
                              className={`${styles.input__lessons}
                                ${touched.allValues
                                && touched.allValues[index]
                                && touched.allValues[index].lessons
                                && errors.allValues
                                && errors.allValues[index]
                                && errors.allValues[index].lessons
                                && styles.input__error}`}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <Field
                              name={`allValues[${index}].credit`}
                              className={styles.input__credit}
                              value={exam[index] ? exam[index] : ''}
                              disabled
                            />
                          </div>
                          {
                              index > 0 && (
                              <div
                                className={styles.delete_button}
                                onClick={() => {
                                  remove(index);
                                  remItem(index);
                                }}
                                tabIndex={0}
                                role="button"
                                onKeyPress={() => {
                                  remove(index);
                                  remItem(index);
                                }}
                                aria-label="Delete"
                              />
                              )
                          }
                          {
                               index === 0 && (
                               <div
                                 className={styles.delete_nobutton}
                               />
                               )
                          }
                        </div>
                      ))
                      }
                    </div>
                  );
                }
            }
            </FieldArray>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Line
