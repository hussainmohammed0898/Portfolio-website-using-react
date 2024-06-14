import React from 'react'
import { Col, Container,  } from 'react-bootstrap'
import { BsTwitterX } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
   <footer className='py-5 px-lg-5 '>
    <Container>
        <Col className='d-flex justify-content-between' >
        <div className="col-auto">
         <p class="mb-0">Copyright ©</p>
        </div>
        <div className='col-auto'>
            <div className='social-icons'>
                <Link to={'https://www.instagram.com/mhd_hussain/'} >
                <BsTwitterX />
                </Link>
                <Link to>
                <RxInstagramLogo />
                </Link>
                <Link to={'https://www.linkedin.com/in/mohammed-hussain-s-870623249'}>
                <BiLogoLinkedinSquare />
                </Link>
                <Link to={'https://github.com/hussainmohammed0898'}>
                <AiOutlineGithub />
                </Link>
            </div>
        </div>

        </Col>
    </Container>

   </footer>
  )
}

export default Footer