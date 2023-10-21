
import React, { useState, useEffect } from 'react';

import logo from '../assets/img/doctor-logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Nav ,Navbar, Container,NavItem,Form,Button} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css'



function NavBar() {

    return ( 
<Navbar expand ="md" className= "scrolled">
   
    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
    <Nav className="ms-auto">
    <Nav.Link href="#About">About</Nav.Link>
    <Nav.Link href="#Experience">Experience</Nav.Link>
        <Nav.Link href="#feedback">Testimonals</Nav.Link>
        
    </Nav>
    <span className='navbar-text'>
        <div className='social-icon '>
<a href=''><img src={navIcon1} alt="" /></a>
<a href='https://www.facebook.com/shubhanshi.shelar.3'><img src={navIcon2} alt="" /></a>

<a href='https://www.instagram.com/shubhanshi.shelar/'><img src={navIcon3} alt="" /></a>

        </div>
        <a href='#connect'><button className='vvd' ><span>Let's Connect</span></button></a>
    </span>
    
</Navbar>


     );
}

export default NavBar;
