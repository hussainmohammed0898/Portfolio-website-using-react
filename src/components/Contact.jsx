
import { Button, Container, Row } from 'react-bootstrap'
import './Contact.css';
import { useState } from 'react';


function Contact() {

  const [formData, setFormData] = useState({
    fullname:" ",
    number:" ",
    email:" ",
    subject:" ",
    message:" "
  })

  const [error, SetError] = useState({})

  const handleChange = (e)=>{
    const {name,value} =  e.target;
    setFormData({...formData,[name] :value});

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const validationError = {}
    if(!formData.fullname.trim()){
      validationError.fullname = 'Fullname is required'
    }else if(formData.fullname.length < 3){
      validationError.fullname = 'Fullname should have at least 3 character'
    }
    if(!formData.number.trim()){
      validationError.number = 'Phone nummber is required'
    }else if(!/^(0|91)?[6-9][0-9]{9}$/.test(formData.number)){
      validationError.number = 'Phone nummber should have atleast 10 digits'
    }
    if(!formData.email.trim()){
      validationError.email = 'Email nummber is required'
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationError.email = 'Invalid email address'
    }
    if(!formData.subject.trim()){
      validationError.subject = 'Subject is required'
    }
    if(!formData.message.trim()){
      validationError.message = 'Message is required'
    }

    SetError(validationError);

    if(Object.keys(validationError).length === 0){
      alert("Form submitted successfully")
    }



  }
  
  
  return (
    <section className='full-height px-lg-5'>
    <Container>
      <Row data-aos="fade-up">
        <div className='col-lg-12 pb-4'>
        <h6 class="text-brand">CONTACT</h6>
         <h1>Interested in working together? Let's talk </h1>
        </div>
        <div className='col-lg-12'  data-aos="fade-up" data-aos-delay="500">
          <form action="" className='g-lg-3 gy-3'  onSubmit={handleSubmit}>
            <Row>
            <div className='form-group col-md-6 mt-2'>
              <input type="text" className='form-control' name='fullname' placeholder='Enter your Full Name'   onChange={handleChange} />
              {error.fullname && <span className='alert-message'>{error.fullname}</span>}
            </div>
            <div className='form-group col-md-6 mt-2' >
              <input type="number" className='form-control' name='number' placeholder='Enter your mobile number'  onChange={handleChange}/>
              {error.number && <span className='alert-message'>{error.number}</span>}
            </div>
            </Row>
            <div className='form-group col-md-12 mt-3'>
              <input type="email" className='form-control' name='email' placeholder='Enter your Email-Address' onChange={handleChange}/>
              {error.email && <span className='alert-message'>{error.email}</span>}
            </div>
            <div className='form-group col-md-12 mt-3'>
              <input type="text" className='form-control' name='subject' placeholder='Enter your subject'  onChange={handleChange}/>
              {error.subject && <span className='alert-message'>{error.subject}</span>}
            </div>
            <div className='form-group col-md-12 mt-3'>
            <textarea name="message" rows="4" class="form-control"  placeholder="Enter your message"   onChange={handleChange}></textarea>
            {error.message && <span className='alert-message'>{error.message}</span>}
           
            </div>
            <div className='form-group col-md-12 mt-3'>
            <Button type='submit' className='btn btn-brand ' id='submit'>
              Contact me
            </Button>
            </div>

          </form>
        </div>
       


      </Row>
    </Container>
    </section>
  )
}

export default Contact