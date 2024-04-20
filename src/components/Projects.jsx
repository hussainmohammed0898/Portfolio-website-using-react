import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Projects() {
  const [project] = useState([
    {
      title:'Simple Home Page',
      discription:'This is a simple landing Home page with input fields using HTML and CSS.',
      link:'https://hussainmohammed0898.github.io/Homepage-Sample/',
      img:"https://www.codingnepalweb.com/wp-content/uploads/2023/09/Create-A-Beautiful-Responsive-Website-in-HTML-and-CSS.jpg"
    },
    {
      title:'The New YORK Times',
      discription:'This is a landing page of newyork times using HTML and CSS.',
      link:'https://hussainmohammed0898.github.io/The-New-york-Times/',
      img:'https://static01.nyt.com/images/2018/08/24/admin/onboarding_10/onboarding_10-superJumbo-v6.jpg'
    },
    {
      title:'Xiaomi',
      discription:'This is a responsive xiaomi landing page using HTML,CSS and Bootstrap.',
      link:'https://hussainmohammed0898.github.io/Xiaomi-sample/',
      img:'https://i.ytimg.com/vi/_W-YMnexzNs/maxresdefault.jpg'
    },
    {
      title:'Personal Website',
      discription:'This is a responsive personal website using HTML,CSS and Bootstrap.',
      link:'https://hussainmohammed0898.github.io/Portfolio-Website/',
      img:'https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc'
    },
  ]);
  
  return (
    <section className='full-height px-lg-5'>
      <Container>
        <Row className='pb-4'>
          <div className='col-lg-12'>
            <h4 className='text-brand' data-aos="fade-up"  data-aos-delay="300">Projects</h4>
            <h1 data-aos="fade-up"  data-aos-delay="500">My Recent Project</h1>
          </div>
        <Row className='gy-4' md={4} data-aos="fade-up"  data-aos-delay="700">
          {project.map((projects)=>{
            return (
              <Col>
          <Card style={{ width: '18rem' }} className='card bg-base p-4 rounded-4 shadow-effect'>
      <Card.Img variant="top" src={projects.img} />
      <Card.Body>
        <Card.Title>{projects.title}</Card.Title>
        <Card.Text>
          {projects.discription}
        </Card.Text>
        <Button variant="primary" as={Link} to={projects.link} className='link-custom'>Link</Button>
      </Card.Body>
    </Card>
          </Col>
            )
          })}
          
        </Row>
        </Row>
      </Container>

    </section>
  )
}

export default Projects