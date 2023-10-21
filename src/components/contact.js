import React, { useState, useEffect } from 'react';
import { Container, Row, Col ,Button } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import { motion } from 'framer-motion';
import { styles } from '../style';
import emailjs from '@emailjs/browser'
import { fadeIn, textVariant,staggerContainer} from '../utils/motion';

import {SectionWrapper } from '../hoc/index';
function ContactComponent() {
    const formInitaldetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInitaldetails);
    const [ButtonText, setButtonText] = useState('Send');
    const [Status, setStatus] = useState({});
     const onFormUpdate = (category,value) => {
        setFormDetails({...formDetails, [category]:value});
    }

    
  
    return ( 
        
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                    <img src={contactImg}/>
                    </Col>
                    <Col md={6}>
                        <h2>
                            Get in Touch
                        </h2>
                         <form >
                            <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate("firstName",e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate("lastName",e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e)=>onFormUpdate("email",e.target.value)}/>
                            </Col> <Col sm={6} className='px-1'>
                            <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e)=>onFormUpdate("phone",e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea rows="6" value={formDetails.message} placeholder='inquiry' onChange={(e)=>onFormUpdate("message",e.target.value)}></textarea>
                            <button type='submit'><span>Submit</span></button>
                          </Col>
                          
                            </Row>
                         </form>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default ContactComponent;