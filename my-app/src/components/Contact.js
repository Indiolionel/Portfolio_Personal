
import React, { useState } from "react";
import *  as  Yup from 'yup';
import { Field, Form, Formik } from 'formik'




export default function Contact() {

    const matchEmail = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const [loading, setLoading] = useState(false)

    const handlerNew = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    const SignupSchema = Yup.object().shape({

        email: Yup.string().matches(matchEmail, "Email invalido").required('Required'),
        subject: Yup.string()
            .min(4, 'Minimo 4 caracteres')
            .max(20, 'Maximo 20 caracteres')
            .required('Required'),
        message: Yup.string()
            .required('Required')
            .min(6, 'Minimo 6 caracteres')
            .max(125, 'Maximo 125 caracteres')


    });

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex w-full justify-center sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 bg-gray-100 rounded-lg items-center sm:mr-10 p-8 flex justify-center relative">
                    
                    <div className="bg-gray-800 relative flex w-full flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1 text-indigo-400">
                                Azul, Bs.As 7300
                            </p>
                        </div>
                        <div className="lg:w-1/3 px-6 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-700 w-1/2 leading-relaxed">
                                santi.cocciardi@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                PHONE
                            </h2>
                            <p className="leading-relaxed text-indigo-400">+054-2216240572</p>
                        </div>
                    </div>
                </div>

                <Formik

                    initialValues={{
                        email: '',
                        subject: '',
                        message: ''

                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values, { resetForm }) => {
                        const { subject, email, message } = values;
                        const dataObject = {
                            email,
                            messages: {
                                subject,
                                message
                            }
                        }
                        try {
                            const url = `${process.env.URL}/contact`

                            const data = await fetch(url, {
                                method: "POST",
                                body: JSON.stringify(dataObject),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                            });
                            console.log(data)
                            handlerNew()
                            resetForm()
                            return data;

                        } catch (err) {

                            console.log(err)

                        }

                    }}
                >
                    {({ errors, touched }) => (

                        <div className="max-lg:w-3/4 lg:w-1/2 space-y-8">

                            <Form className='flex flex-col mt-8 space-y-6 relative'>
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                        Email
                                    </label>
                                    <Field
                                        style={errors.email && { border: "solid 1px rgb(214,47,39)" }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                {errors.email && touched.email ? (

                                    <div className='text-red-600 mt-0'>{errors.email}</div>
                                ) : null}

                                <div className="relative">
                                    <label htmlFor="subject" className="leading-7 text-sm text-gray-400">
                                        Subject
                                    </label>
                                    <Field
                                        style={errors.subject && { border: "solid 1px rgb(214,47,39)" }}
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                {errors.subject && touched.subject ? (

                                    <div className='text-red-600 mt-0'>{errors.subject}</div>
                                ) : null}

                                <div className="relative">

                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-400">
                                        Message
                                    </label>
                                    <Field
                                        style={errors.message && { border: "solid 1px rgb(214,47,39)" }}
                                        type="text"
                                        id="message"
                                        name="message"
                                        as="textarea"
                                        className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    />

                                </div>
                                {errors.message && touched.message ? (
                                    <div className='text-red-600 mt-0'>{errors.message}</div>
                                ) : null}

                                <button
                                    type="submit"
                                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    {loading && <div className="bg-green-600 border -mt-24  h-1/6  w-full absolute opacity-70"> <p className="text-white text-lg px-4">Mensaje enviado, a la brevedad tendras una respuesta !!</p></div>}

                                    Submit

                                </button>

                            </Form>
                        </div>
                    )}

                </Formik>
            </div>
        </section>
    );
}