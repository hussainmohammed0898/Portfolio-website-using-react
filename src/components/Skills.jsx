import React, {  useState } from 'react'
import './skill.css'
import { Card, Col, Container, Row } from 'react-bootstrap'


function Skills() {
  
  const [skill] = useState([
    {
      title:'HTML',
      img: 'https://wallpapercave.com/wp/wp7421222.jpg'
    },
    {
      title:'CSS',
      img: 'https://media.sketchfab.com/models/17b34c2b98714c6799544939f476eed3/thumbnails/1530fc17080747b2882b59ce2192abe7/2716dfa933fe4d76af6856a1b50ee2a9.jpeg'
    },
    {
      title:'Bootstrap',
      img: 'https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png'
    },
    {
      title:'Java Script',
      img: 'https://astwellsoft.com/assets/images/blog/javascript.jpg'
    },
    {
      title:'React',
      img: 'https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png'
    },
    {
      title:'Node JS',
      img: 'https://media.licdn.com/dms/image/C5612AQE1jrcIqL4NUQ/article-cover_image-shrink_600_2000/0/1588054486345?e=2147483647&v=beta&t=_SZFaYC6dC9TDzP9zzLuJrqHg4S0ucT0zV7wV4aKSpw'
    },
    {
      title:'Mongo DB',
      img: 'https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png'
    },
    {
      title:'Redux',
      img: 'https://saigontechnology.com/assets/media/Blog/redux%20toolkit.webp'
    },

  ])

 
  return (
    <section className='full-height px-lg-5'>
    <Container>
      <Row>
      <div className="col-lg-12" >
         <h4 className="text-brand" data-aos="fade-up"  data-aos-delay="300">SKILLS</h4>
           <h1 data-aos="fade-up"  data-aos-delay="500">Acquired Skills</h1>
             </div>
      <Row xs={1} md={4} className="g-4" data-aos="fade-up"  data-aos-delay="700">
        {skill.map((skills)=>{
          
        
       return  ( <Col>  
               <Card className='card bg-base p-4 rounded-4 shadow-effect' >
            <Card.Img variant="top" src={skills.img} />
            <Card.Body>
              <Card.Title>{skills.title}</Card.Title>
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

export default Skills