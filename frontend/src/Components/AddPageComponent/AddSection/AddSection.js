import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./AddSection.scss"


function AddSection() {
    return (
        <div className='addpage'>
            <Formik
                initialValues={{ categories: '', price: '', tutorial: '', name: '', description: '' }}
                validationSchema={Yup.object({
                    categories: Yup.string().required('Required'),
                    price: Yup.string().required('Required'),
                    tutorial: Yup.string().required('Required'),
                    name: Yup.string().required('Required'),
                    description: Yup.string().required('Required'),
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3010/", values)
                }}
            >
                <Form>
                    <label htmlFor="categories">categories</label>
                    <Field name="categories" type="text" />
                    <ErrorMessage name="categories" />

                    <label htmlFor="price">price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="price" />

                    <label htmlFor="tutorial">tutorial</label>
                    <Field name="tutorial" type="text" />
                    <ErrorMessage name="tutorial" />

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="description">description</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddSection