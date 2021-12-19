import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './registration.css'

function Registration() {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [pass ,setPass] = useState('');

    const handleregistration = (e) => {
        e.preventDefault();
        let user = {
            id: Math.random().toString(36).substr(2, 9),
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        console.log(user);
        setName(user.name);
        setEmail(user.email);
        setPass(user.password);
        localStorage.setItem('user', JSON.stringify(user));

    }


    return (
        <div>
            <Container>
                <Form className='registration-form' onSubmit={handleregistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <a className='login-link' href='/login'>Already Registraed?</a>
                </Form>
            </Container>
        </div>
    )
}

export default Registration
