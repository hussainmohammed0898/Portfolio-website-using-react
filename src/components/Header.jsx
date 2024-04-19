import React from 'react'
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import contactImg from '../Assets/IMAGE/contact.png'


function Home() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className='container'>
        <div>
        <Navbar.Brand className='nav-brand' href="#home" as={Link} to={'/'}>Mohammed Hussain </Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link' as={Link}  to='/'>Home</Nav.Link>
            <Nav.Link className='nav-link' as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link className='nav-link' as={Link} to={'/skills'} >Skills</Nav.Link>
            <Nav.Link className='nav-link' as={Link} to={'/projects'}>Projects</Nav.Link>
          </Nav>
        <Button className='nav-btn' variant="warning" as={Link} to={'/contact'}>
          <img src={contactImg} alt="" />
          Conatct</Button>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default Home