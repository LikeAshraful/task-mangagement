import React, { useState } from 'react'
import { Button, Form, ButtonToolbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onSubmit }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        fetch(`http://localhost:8000/login}`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });

        navigate('/')
    };


    return (
        <div className="login-form">

            <fieldset className="scheduler-border">
                <legend className="scheduler-border">Login</legend>

                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="********" value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className='d-flex justify-content-between'>
                        <small>
                            <p>Don't have an account? <a href="/sign-up">Register</a> here.
                            </p>
                        </small>
                        <ButtonToolbar>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </ ButtonToolbar>
                    </div>
                </Form>

            </fieldset>

        </div>
    );
}

export default Login