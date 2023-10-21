import { Container, Row, Col } from "react-bootstrap";
 import logo from '../assets/img/doctor-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function FooterComponent() {
    return ( 
        <footer className="footer">
        <Container>
          <Row className="align-items-center">
        
            <Col size={12} sm={6}>
              <a href="#"><img src={logo} alt="Logo" /></a>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://www.facebook.com/shubhanshi.shelar.3"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/shubhanshi.shelar/"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
     );
}




export default FooterComponent;