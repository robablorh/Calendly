import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'


const Navbars = () => {
  return (
    <div>
        
                <Navbar   className='NavColor' variant="light">
                <Container>
                <Link to='/'><Navbar.Brand ><img  src={logo} className='log'/></Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link to='/'  className='nav-link'>Home</Link>
                    <Link to='/enterprise' className='nav-link'>Enterprise</Link>
                    <Link to='/individual' className='nav-link'>Individual</Link>
                    <Link to='/teams' className='nav-link'>Teams</Link>
                </Nav>
                </Container>
            </Navbar>
    </div>

    )
    
    }

export default Navbars
