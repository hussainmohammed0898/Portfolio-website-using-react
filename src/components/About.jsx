import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Aos from "aos"
import 'aos/dist/aos.css'

function About() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <section className='full-height px-lg-5'>
      <Container>
        <Row className='pb-4'>
          <div className='col-lg-12' data-aos="fade-up">
          <h6 className="text-brand">ABOUT</h6>
             <h1 data-aos="fade-up" data-aos-delay="500">My Education & Experiance</h1>
             </div>
        
        <Row className='gy-5'>
          <div className='col-lg-6' >
            <h3 className='mb-4' data-aos="fade-up" data-aos-delay="400">Education</h3>
            <Row className='py-2' data-aos="fade-up" data-aos-delay="700">
              <div className='col-12 mb-3'>
                <div className='bg-base p-4 rounded-4 shadow-effect'>
                <h4>Full Stack Development (MERN STACK)</h4>
                <p className='text-brand'>Entri Elevate Coding (Nov-2023-Onprogress)</p>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>B.COM Computer Application</h4>
                  <p className="text-brand">Kerala University (2018-2021)</p>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>Plus Two Commerce</h4>
                  <p className="text-brand">Higher Secondary Eduction (2016-2018)</p>
                </div>
              </div>
            </Row>
          </div>
          <div className="col-lg-6">
              <h2 className='mb-4' data-aos="fade-up" data-aos-delay="400">Experience</h2>
              <Row className=' gy-3 py-1' data-aos="fade-up" data-aos-delay="700">
                <div className="col-12" >
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>Store Manager</h4>
                  <p className='text-brand'>MI Store Kottiyam (April-2022 to August-2023)</p>
                  </div>
                </div>
                <div className="col-12">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>Xiaomi Promotor</h4>
                  <p className='text-brand'>MI Store Kottiyam (April-2021 to August-2022)</p>
                  </div>
                </div>
                <div className="col-12">
                <div className="bg-base p-4 rounded-4 shadow-effect">
                  <h4>Oppo Promotor</h4>
                  <p className='text-brand'>Cellcity Mobiles Mevaram (August-2019 to August-2020)</p>
                  </div>
                </div>
              </Row>
            </div>
        </Row>
        
        </Row>
      </Container>
    </section>
  )
}

export default About