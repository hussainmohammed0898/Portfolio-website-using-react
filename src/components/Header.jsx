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
            <Link className='nav-link link-custom' as={Link}  to='/'>Home</Link>
            <Link className='nav-link link-custom' as={Link} to={'/about'}>About</Link>
            <Link className='nav-link link-custom' as={Link} to={'/skills'} >Skills</Link>
            <Link className='nav-link link-custom' as={Link} to={'/projects'}>Projects</Link>
          </Nav>
        <Button className='nav-btn ms-lg-2' as={Link} to={'/contact'}>
          <img src={contactImg} alt="" />
          Conatct</Button>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default Home