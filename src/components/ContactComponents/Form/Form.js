import React from 'react'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useRef } from 'react'
import { validation } from '../yup/yup';

function Form() {
    const form = useRef()
    const formik = useFormik({
        initialValues: {
            user_name: '',
            subject: '',
            user_mail: '',
            message: ''
        },
        validationSchema: validation,
        onSubmit: values => {
            console.log(values, "true")
            emailjs.sendForm('service_ivfdl7o',
                'template_mth5kzm',
                form.current, '_ADhGsPpRvean7llZ')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    })
    return (
        <div>
            <form ref={form} onSubmit={formik.handleSubmit}>
                {formik.errors.user_name && formik.touched.user_name &&

                    <label htmlFor="user_name" >
                        {formik.errors.user_name}
                    </label>}
                <div>
                    {!formik.errors.user_name && <label
                        className='text-bgTo'
                        htmlFor="user_name" >
                        Your Name
                    </label>}
                    <div className="mt-2">
                        <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.user_name}
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.user_mail && formik.touched.user_mail &&

                        <label htmlFor="user_mail" >
                            {formik.errors.user_mail}
                        </label>}
                    {!formik.errors.user_mail && <label
                        className='text-bgTo'
                        htmlFor="user_mail" >
                        Your Mail
                    </label>}
                    <div className="mt-2">
                        <input
                            id="user_mail"
                            name="user_mail"
                            type="mail"
                            onChange={formik.handleChange}
                            value={formik.values.user_mail}
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.subject && formik.touched.subject &&

                        <label htmlFor="subject"
                            className='text-bgTo'
                        >
                            {formik.errors.subject}
                        </label>}
                    {!formik.errors.subject && <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                        Your subject
                    </label>}
                    <div className="mt-2">
                        <input
                            id="subject"
                            name="subject"
                            type="subject"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.message && formik.touched.message &&

                        <label
                            className='text-bgTo'
                            htmlFor="message" >
                            {formik.errors.message}
                        </label>}
                    {!formik.errors.message && <label htmlFor="message" >
                        Your message
                    </label>}
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            type="textarea"
                            onChange={formik.handleChange}
                            value={formik.values.message}

                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"

                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
