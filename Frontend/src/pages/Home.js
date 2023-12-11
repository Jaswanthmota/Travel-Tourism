import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Subtitle from './../shared/Subtitle';
import world from '../assests/images/world.png';
import h2 from '../assests/images/h2.jpg';
import h3 from '../assests/images/h3.jpg';
import experience from '../assests/images/experience.png';
import video from '../assests/images/video.mp4';
import '../styles/Home.css';
import Searchbar from '../shared/Searchbar';
import ServiceList from '../services/ServiceList';
import FeaturedTlist from '../components/featured-tour/FeaturedTlist';
import Mass from '../components/image-gallery/Mass';
import Testimonial from '../components/testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';
function Home() {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"}/>
                  <img src={world} alt=" "/>
                </div>
                <h1>
                 Travelling opens the door to creating{" "}
                 <span className="highlight">Memories</span>
                </h1>
                <p>
                  Tour management involves the planning, coordination, and execution of logistics for tours, 
                  ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
                   travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={h2} alt=" "/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={video} alt=" " controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={h3} alt=" "/>
              </div>
            </Col>
            <Searchbar/>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h5 className="services__title">We offer our best services</h5>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12' className='"mb-5'>
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTlist />
          </Row>
        </Container>
      </section>

      
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trips</h6>
                </div> 
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>12</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experience} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <Mass />
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={"Fans love"} />
              <h2 className="testimonial__title">What our fans say about us...
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      
      <Newsletter />
    </div>
  )
}

export default Home;
