import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });


    const handleSubmit = (values, { setSubmitting }) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        }

        fetch(`http://localhost:8000/register`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });

        setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 100);

        navigate('/');
    };


    return (
        <div className="login-form">
            <fieldset className="scheduler-border">
                <legend className="scheduler-border">User Registration</legend>

                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit} >

                    {({ isSubmitting }) => (
                        <Form >
                            <Field name="name">
                                {({ field, meta }) => (
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''
                                                }`}
                                            {...field}
                                        />
                                        <ErrorMessage name="name" component="div" className="error text-danger" />
                                    </div>
                                )}
                            </Field>

                            <Field name="email">
                                {({ field, meta }) => (
                                    <div className="form-group">
                                        <label htmlFor="name">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''
                                                }`}
                                            {...field}
                                        />
                                        <ErrorMessage name="email" component="div" className="error text-danger" />
                                    </div>
                                )}
                            </Field>

                            <Field name="password">
                                {({ field, meta }) => (
                                    <div className="form-group">
                                        <label htmlFor="name">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''
                                                }`}
                                            {...field}
                                        />
                                        <ErrorMessage name="password" component="div" className="error text-danger" />
                                    </div>
                                )}
                            </Field>

                            <Field name="confirm_password">
                                {({ field, meta }) => (
                                    <div className="form-group">
                                        <label htmlFor="name">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="confirm_password"
                                            className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''
                                                }`}
                                            {...field}
                                        />
                                        <ErrorMessage name="confirm_password" component="div" className="error text-danger" />
                                    </div>
                                )}
                            </Field>

                            <div className='d-flex justify-content-between'>
                                <small>
                                    <p>Don't have an account? <a href="/login">Login</a> here.
                                    </p>
                                </small>

                                <ButtonToolbar className="text-right" >

                                    {/* <Button className="text-right" variant="primary" type="submit">
                                        Sign Up                                        
                                    </Button> */}
                                    <Button type="submit" variant="primary" className="text-right" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Sign Up'}
                                    </Button>
                                </ ButtonToolbar>
                            </div>
                        </Form>

                    )}
                </Formik>

            </fieldset>

        </div>
    );
}

