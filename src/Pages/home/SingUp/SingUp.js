import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Singup.css';
import { useState } from 'react';
import auth from '../../Shared/firebase.init';
import { Link } from 'react-router-dom';


function SingUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handlesubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

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
                <p>Already have an Account? <Link className='text-danger text-decoration-none' to="/login">Please Login</Link> </p>
                <Button variant="primary" type="submit">
                    Sing Up
                </Button>
            </Form>
        </div>
    );
}

export default SingUp;