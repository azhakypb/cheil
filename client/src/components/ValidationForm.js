import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "yup-phone";
import { Button } from 'react-bootstrap';

const initialValues = {
  name: '',
  email: '',
  phone: ''
}

const onSubmit = values => {
  console.log('Form data', values.name, values.email, values.phone)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Поле Обязательно Для Заполнения'),
  email: Yup.string()
    .email('Почта введена не верно, формат: example@example.example')
    .required('Required'),
  phone: Yup.string().required('Поле Обязтельно Для Заполнения').phone("KZ")
})

function ValidationForm () {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  })

  //console.log('formik.touched', formik.touched)

  return (
    <form onSubmit={formik.handleSubmit} class="validForm">
      <div class='form-group'>
        <label htmlFor='name'>ФИО</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          class="form-control"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error'>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Электронная почта</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          class="form-control"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='form-group'>
        <label htmlFor='phone'>Номер телефона</label>
        <input
          type='text'
          id='phone'
          name='phone'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          class="form-control"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className='error'>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div class="text-center"><Button type="submit" variant="outline-dark bt1 bt2">ОТПРАВИТЬ ДАННЫЕ</Button></div>
    </form>
  )
}

export default ValidationForm