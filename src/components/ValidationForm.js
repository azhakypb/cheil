import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik'
import * as Yup from 'yup';
import "yup-phone";

const ValidationForm = () => (
    <Formik
        initialValues = {{ fullname: "", email: "", phone: "" }}
        onSubmit = {(values, {setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
            }, 500);
        }}

        // validationSchema = {Yup.object().shape({
        //     fullname: Yup.string()
        //         .name()
        //         .required("Укажите Ваше Имя"),

        //     email: Yup.string()
        //         .email()
        //         .required("Required"),
            
        //     phone: Yup.string()
        //         .phone("KZ")
        //         .required("Required")
            
        // })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <form autoComplete="off" onSubmit={handleSubmit} class="validForm">
                <div class="form-group">
                    <label htmlFor="fullName">ФИО</label>
                    <input 
                        type="name" 
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        class="form-control"
                        />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Ваш email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        class="form-control"
                        />
                </div>
                <div class="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input 
                        type="tel" 
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        class="form-control"
                        />
                </div>
                <div class="text-center"><Button type="submit" disabled={isSubmitting} variant="outline-dark bt1 bt2">ОТПРАВИТЬ ДАННЫЕ</Button></div>
            </form>
            )
        }}

    </Formik>
);

export default ValidationForm;