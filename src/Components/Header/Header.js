import React from 'react'
// import reactbootstrap from 'react-bootstrap'
import { Navbar, Nav,Container } from 'react-bootstrap'
import './header.css'

function Header() {

    const handleLogout = () => {
        localStorage.removeItem('loginuser');
        window.location.href = '/'
    }

    let loggedinuser = JSON.parse(localStorage.getItem('loginuser'));

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Blog-Using-LocalStorage</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                {
                   loggedinuser ?
                    <Nav.Link href="/postBlog">Post Blog</Nav.Link> : null
                }
                <Nav.Link href="/registration">
                {
                    localStorage.getItem('loginuser') ? <span onClick={handleLogout} className='login-link'>Logout

                    </span> : <span className='login-link'>Login</span>
                }
                </Nav.Link>
                <Nav.Link>{
                    localStorage.getItem('loginuser') ? JSON.parse(localStorage.getItem('user')).name : ''
                }</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
