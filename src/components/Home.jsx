import React, { useEffect } from 'react'
import './Home.css'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-scroll'
import bg from '../Assets/IMAGE/banner.jpg'
import Aos from "aos"
import 'aos/dist/aos.css'

function Home() {
  useEffect(()=>{
    Aos.init();
  })
  return (
   <section id='intro' className='full-height'>
    <Container className='m-lg-5 py-lg-5'>
      <Row className='home-row m-lg-5 '>
      <div className='col-lg-8'>
        <h1 className='display-4 fw-bold' data-aos="fade-up">I'M A <span className='text-brand'>SOFTWARE DEVELOPER</span>FROM KERALA, INDIA</h1>
        <p className='lead mt-2 mb-4' data-aos="fade-up" data-aos-delay="500" >Hello there! I'm Mohammed Hussain S a dedicated MERN stack developer with a flair for crafting robust and efficient web applications. I thrive on turning innovative ideas into high-quality code and solving complex problems with elegant solutions.</p>
        <div data-aos="fade-up"  data-aos-delay="600">
          <Link className='btn btn-brand me-3'>Explore My Work</Link>
          <Link className='link-custom responsive-anchor'>Call: 9633870898</Link>
        </div>
      </div>
      <div className='col-lg-4 ' data-aos="fade-left" data-aos-delay="500">
      <img className='pro-img' src={bg} alt="img" />
      </div>
      </Row>
    </Container>
   </section>
    
  )
}

export default Home