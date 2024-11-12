import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './userForm.module.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from "react-router-dom";
import TextField from '@mui/material/TextField';

  export const SignupForm = () => {
    return (
    <div className={styles.userForm}>
        <div className={styles.userForm__head}>
          <p className={styles.userForm__title}>Создать пользователя</p>
          <a className={styles.userForm__link} href={'ROUTE_CONSTANTS.ROOT'}>
            <ExitToAppIcon/>
          </a>
        </div>
        <Formik
            initialValues={{ user: '', email: '', password: '' }}
            validationSchema={Yup.object({
                user: Yup.string()
                    .max(15, 'Не более 15 символов')
                    .required('Нужно заполнить'),
                email: Yup.string()
                    .email('Email не действительный')
                    .required('Нужно заполнить'), 
                password: Yup.string()
                    .min(8, 'Не менее 8 символов')
                    .required('Нужно заполнить'),
            
            })}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
            }}
       >
        <Form className={styles.userForm__form}>
            <div className={styles.userForm__inputs}>
                <Field name="user" type="text" placeholder='Имя пользователя'/>
                <ErrorMessage className={styles.userFrom__error} name="user" />

                <Field name="email" type="email" placeholder='Email'/>
                <ErrorMessage className={styles.userFrom__error} name="email" />

                <Field name="password" type="password" placeholder='Пароль'/>
                <ErrorMessage className={styles.userFrom__error} name="password" />
            </div>
            <div className={styles.userForm__buttonContainer}>
              <button className={styles.userForm__button} type="submit">Создать</button>
            </div>
          
        </Form>
      </Formik>
    </div>
    );
  };