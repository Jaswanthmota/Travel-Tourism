import React,{useState, useRef} from 'react'
import '../styles/tourdetails.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import tourData from '../assests/data/tours'
import { useParams } from 'react-router-dom'
import calAvgRating from '../Utils/avgRating'
import avatar from '../assests/images/avatar.avif'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
function TourDetails() {

const {id} = useParams();
const reviewMsg = useRef('');
const [tourRate,setTour] = useState(0);
const tour = tourData.find(tour=> tour.id === id);
const{photo, title, desc, price, reviews, city, distance, address, maxGroupSize} = tour;
const {totalRating, avgRating} =calAvgRating(reviews);

const options={day:'numeric', month:'long', year:'numeric'};

const submitHandler= e=>{
  e.preventDefault();
  const reviewText = reviewMsg.current.value;
}
  return (
    <>
     <section>
      <Container> 
        <Row>
          <Col lg="8">
            <div className="tour__content">
            <img src={photo} alt="" />
            <div className="tour__info">
              <h2>{title}</h2>

              <div className="d-flex align-items-center gap-5">
                <span className="tour__rating d-flex align-items-center gap-1">
           <i class="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i>{calAvgRating === 0 ? null :avgRating}
           {totalRating === 0 ? (
            "Not rated"
            ) : (
            <span>({reviews.length})</span>
          )}
        
           </span>

             <span><i class="ri-map-pin-2-fill"></i>{address}
             </span>
            </div>
              <div className="tour__extra-details">
                <span>
                  <i class="ri-map-pin-line"></i>{city}
                </span>
                 <span>
                  <i class="ri-money-dollar-circle-line"></i>${price} /per person
                </span>
                 <span>
                  <i class="ri-map-pin-line"></i>{distance} km/hr
                </span>
                <span>
                  <i class="ri-group-fill"></i>{maxGroupSize}
                </span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            <div className="tour__reviews mt-4">
              <h4>Reviews({reviews?.length}reviews)</h4>
              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                  <span onClick={()=> setTour(1)}>
                    1<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={()=> setTour(2)}>
                    2<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={()=> setTour(3)}>
                    3<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={()=> setTour(4)}>
                    4<i class="ri-star-fill"></i>
                  </span>
                  <span onClick={()=> setTour(5)}>
                    5<i class="ri-star-fill"></i>
                  </span>
                </div>
                <div className="review__input">
                  <input type="text" ref={reviewMsg} placeholder="share your thoughts" required />
                  <button className="btn primary__btn text-white" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
              <ListGroup className="user__reviews">
                {reviews?.map(review => (
                    <div className="review__item">
                      <img src={avatar} alt="" /> 
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>
                              muhib
                            </h5>
                            <p>
                              {new Date('01-12-2023').toLocaleDateString(

                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5 <i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>Amazing Tour</h6>
                      </div>
                      </div> 
                  ))}
              </ListGroup>
            </div>
            </div>
          </Col>
          <Col lg="4">
             <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
      </Container>
      </section> 
      <Newsletter/>
    </>
  )
}

export default TourDetails;
