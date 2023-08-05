import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../Shared/firebase.init';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handlesubmit = event => {
        event.prevenyDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleemail = event => {
        setEmail(event.target.value);
    }

    const handlepassword = event => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <div style={{ textAlign: 'start' }} className='container mt-5'>

                <Form className='from' onSubmit={handlesubmit}>
                    <h2 className='text-primary text-center'>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlepassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p>New to Genius Car? <Link className='text-danger text-decoration-none' to="/singup">Please SingUp</Link> </p>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;