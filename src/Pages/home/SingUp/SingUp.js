import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Singup.css';
import { useState } from 'react';
import auth from '../../Shared/firebase.init';
import { Link } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Socialsingup from './Socialsingup/Socialsingup';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SingUp() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const [user] = useAuthState(auth);


    const handlesubmit = async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        toast('Verification Email Send');

    }


    if (user) {
        console.log(user);
    }

    const handlename = event => {
        setName(event.target.value);
    }

    const handleemail = event => {
        setEmail(event.target.value);
    }

    const handlepassword = event => {
        setPassword(event.target.value);
    }

    return (
        <div style={{ textAlign: 'start' }} className='container mt-5'>
            <Form className='from' onSubmit={handlesubmit}>
                <h2 className='text-primary text-center'>Please Sing UP</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handlename} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlepassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept Genius car Terms And Condition" />
                </Form.Group>
                <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Sing Up
                </Button>
                <p>Already have an Account? <Link className='text-danger text-decoration-none' to="/login">Please Login</Link> </p>
                <p className='text-danger'>{error?.message}</p>
                <Socialsingup></Socialsingup>
                <ToastContainer />
            </Form>
        </div>
    );
}

export default SingUp;