import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
            <Navbar.Brand className='ps-2'>Sport Point</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link><Link to="/">Домой</Link></Nav.Link>
                    <Nav.Link><Link to="/profile">Профиль</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant='primary' className='me-2'>Войти</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}