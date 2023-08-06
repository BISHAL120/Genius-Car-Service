import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Shared/firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || '/';

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    // if (loading || sending) {
    //     return <Loading></Loading>
    // }

    const handlesubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleemail = event => {
        setEmail(event.target.value);
    }

    const handlepassword = event => {
        setPassword(event.target.value);
    }

    const resrtpassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Email Send');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div style={{ textAlign: 'start' }} className='container mt-5'>

                <Form className='from' onSubmit={handlesubmit}>
                    <h2 className='text-primary text-center'>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlepassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                    <p>New to Genius Car? <Link className='text-danger text-decoration-none' to="/singup">Please SingUp</Link> </p>
                    <p>Forget Password<button onClick={resrtpassword} className='btn btn-link text-danger text-decoration-none'>Reset Please</button> </p>
                    <SocialLogin></SocialLogin>
                </Form>

            </div>
        </div>
    );
};

export default Login;