import {
  Formik, FieldArray, Field,
} from 'formik';
import * as yup from 'yup'
import React, { useState } from 'react'
import styles from './Line.module.scss'
import TextButton from '../TextButton/TextButton';
import TitleLine from '../TitleLine/TitleLine';

const Line = () => {
  const [exam, setExam] = useState([]);
  let totalResults = [];

  const userSchema = yup.object().shape({
    allValues: yup.array().of(
      yup.object().shape({
        subject: yup.string().min(3).max(16).required(),
        five: yup.number().min(0).required(),
        four: yup.number().min(0).required(),
        three: yup.number().min(0).required(),
        two: yup.number().min(0).required(),
        one: yup.number().min(0).required(),
        lessons: yup.number().min(0).required(),
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
          let count = Number(value.five)
            + Number(value.four)
            + Number(value.three)
            + Number(value.two)
            + Number(value.one);
          let final = sum / count;
          let checked;
          if ((final > 4.2) && (Number(value.lessons) < 8)) {
            checked = true;
            setExam((exams) => [...exams, 'Да']);
          } else {
            checked = false;
            setExam((exams) => [...exams, 'Нет']);
          }
          let finalObject = {
            discipline: value.subject,
            average_rating: final,
            isChecked: checked,
          }
          totalResults.push(finalObject);
          return null
        })
        console.log(totalResults);
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
                      <TitleLine />
                      {
                      allValues.map((_, index) => (
                        <div className={styles.box} key={index}>
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
                              min="1"
                              onChange={handleChange}
                              value={allValues[index].five || ''}
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
                              value={allValues[index].four || ''}
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
                              value={allValues[index].three || ''}
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
                              value={allValues[index].two || ''}
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
                              value={allValues[index].one || ''}
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
                              value={allValues[index].lessons || ''}
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
      )}
    </Formik>
  )
}

export default Line
