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
            <form className="space-y-6" action="#" method="POST" ref={form} onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Your Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            autoComplete="user_name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="user_mail" className="block text-sm font-medium leading-6 text-gray-900">
                        user_mail
                    </label>
                    <div className="mt-2">
                        <input
                            id="user_mail"
                            name="user_mail"
                            type="mail"
                            autoComplete="user_mail"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                        Your subject
                    </label>
                    <div className="mt-2">
                        <input
                            id="subject"
                            name="subject"
                            type="subject"
                            autoComplete="subject"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                        Your message
                    </label>
                    <div className="mt-2">
                        <input
                            id="message"
                            name="message"
                            type="textarea"
                            autoComplete="message"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
