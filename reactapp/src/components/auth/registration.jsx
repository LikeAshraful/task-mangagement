import React, { useState } from 'react'
import { Button, Form, ButtonToolbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registration = ({ onSubmit }) => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        };

        fetch(`http://localhost:8000/register`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });

        navigate('/')
    };


    return (
        <div className="login-form">

            <fieldset className="scheduler-border">
                <legend className="scheduler-border">User Registration</legend>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name}
                            onChange={e => setName(e.target.value)} />
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="confirm_password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="********" value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)} />
                    </Form.Group>

                    <div className='d-flex justify-content-between'>
                        <small>
                            <p>Don't have an account? <a href="/login">Login</a> here.
                            </p>
                        </small>

                        <ButtonToolbar className="text-right" >

                            <Button className="text-right" variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </ ButtonToolbar>
                    </div>


                </Form>

            </fieldset>

        </div>
    );
}

export default Registration