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
            <form className="space-y-6 shadow-2xl shadow-gray-100 border-spacing-36 bg-transparent w-96 p-12 rounded-3xl" ref={form} onSubmit={formik.handleSubmit}>
                {formik.errors.user_name && formik.touched.user_name &&

                    <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">
                        {formik.errors.user_name}
                    </label>}
                <div>
                    {!formik.errors.user_name && <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Your Name
                    </label>}
                    <div className="mt-2">
                        <input
                            id="user_name"
                            name="user_name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.user_name}
                            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.user_mail && formik.touched.user_mail &&

                        <label htmlFor="user_mail" className="block text-sm font-medium leading-6 text-gray-900">
                            {formik.errors.user_mail}
                        </label>}
                    {!formik.errors.user_mail && <label htmlFor="user_mail" className="block text-sm font-medium leading-6 text-gray-900">
                        Your Mail
                    </label>}
                    <div className="mt-2">
                        <input
                            id="user_mail"
                            name="user_mail"
                            type="mail"
                            onChange={formik.handleChange}
                            value={formik.values.user_mail}
                            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.subject && formik.touched.subject &&

                        <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
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
                            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    {formik.errors.message && formik.touched.message &&

                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                            {formik.errors.message}
                        </label>}
                    {!formik.errors.message && <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                        Your message
                    </label>}
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            type="textarea"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-cyan-100 shadow-2xl px-3 py-1.5 text-sm font-semibold leading-6 text-cyan-600 hover:text-white shadow-sm hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
