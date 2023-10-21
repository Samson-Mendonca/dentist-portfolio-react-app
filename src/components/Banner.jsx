import React, { useState, useEffect } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';

import headerImg from '../assets/img/doctor-header.png';
import { isVisible } from '@testing-library/user-event/dist/utils';
function Banner() {
    const torotate = ["Bachelor of Dental Surgery(BDS)"];
    const [loopnum, setloopnum] = useState(0);
    const [index, setindex] = useState(1);
    const [isDeleting, setisDeleting] = useState(false);
    const [text, settext] = useState("");
    const period = 2000;
    const [delta, setdelta] = useState(350);
    // 300 - Math.random()*100
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker);
    }, [text]);
    const tick = () => {
    let i =(loopnum % torotate.length);
    let fulltext = torotate[i];
    let updatedText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,text.length+1);
    settext(updatedText);
    if(isDeleting) {
        setdelta( delta/2)
    }
    if (isDeleting&& updatedText === fulltext){
        setisDeleting(true);
        setindex(previndex => previndex-1  );

        setdelta(period);
    }else if(isDeleting&& updatedText===""){
        setisDeleting(false);
        setloopnum(loopnum+1);
        setindex(1);
        setdelta(500);
    }else{
        setindex(previndex => previndex+1);
    }

}
    

    return ( 
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible?"animate__animated animate__jackInTheBox":""}>
                        <span className='tagline'>Welcome to my  Portfolio</span>
                        <h1>{"Hi I'm Shubhanshi"}</h1><span className='wrap'><h3>{text}</h3> </span>
                        <p>"A Wonderful Dentist  with a knack for pulling out teeth and watching people cry in misery and discomfort, A strong believer in smacking over-pampered  kids "</p>
                        </div>}</TrackVisibility>
                    </Col>
                    < Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>


        </section>
     );
}


export default Banner;
