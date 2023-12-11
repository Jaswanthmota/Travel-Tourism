import React from 'react';
import './news.css';
import {Container, Row, Col } from 'reactstrap';
import male from '../assests/images/male.png'
function News() {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information..</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder="enter your email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p> Tour management involves the planning, coordination, and execution of logistics for tours, 
            ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
            travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
                        </p>                  
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={male} alt=" "/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default News;
