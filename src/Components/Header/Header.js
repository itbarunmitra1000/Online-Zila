
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand to="#home" className="fw-bolder fs-3">Online  <span className="text-warning">Zila</span> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} className='text-dark navbar-style' to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className='text-dark navbar-style' to="/devices">Devices</Nav.Link>
                        <Nav.Link as={Link} className='text-dark navbar-style' to="/delivery">Delivery & Payment</Nav.Link>

                        <Nav.Link as={Link} className='text-dark navbar-style' to="/about">About Us</Nav.Link>

                        <Navbar.Text>
                            <span  > {user.displayName} </span>
                        </Navbar.Text>
                        {user.email ?
                            <button onClick={logout} className='btn-dark' >Log Out</button>
                            :
                            <>
                                <Nav.Link as={Link} className='text-dark navbar-style' to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} className='text-dark navbar-style' to="/register">Register</Nav.Link>
                            </>
                        }
                        <Nav.Link as={Link} className='text-dark navbar-style' to="/contact"><h4><FaShoppingCart /></h4></Nav.Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;