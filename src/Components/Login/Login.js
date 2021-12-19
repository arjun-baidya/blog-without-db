import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import './login.css'

function Login() {

    const [email ,setEmail] = useState('');
    const [pass ,setPass] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        let loginuser = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        console.log(loginuser);
        setEmail(loginuser.email);
        setPass(loginuser.password);
        localStorage.setItem('loginuser', JSON.stringify(loginuser));
    }

    let loggedinuser = JSON.parse(localStorage.getItem('loginuser'));
    let registereduser = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
       if(loggedinuser === registereduser){
           window.location.href = '/'
       }
    }, [ registereduser, loggedinuser ]);

    return (
        <div>
            <Container>
                <Form className='registration-form' onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                <a className='login-link' href='/registration'>New User?</a>
                </Form>
            </Container>
        </div>
    )
}

export default Login
