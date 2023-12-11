import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import tourist from '../assests/images/tourist.avif'
function Newsletter() {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information</h2>
                    <div className="newsletter__input">
                         <input type="email" placeholder="Enter your email"/>
                         <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                        MERN Stack Tours & Travels Booking Website Design Using ReactJs, Node Js, MongoDB | Mern Project
                    </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                       <img src={tourist} alt=""></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter;
