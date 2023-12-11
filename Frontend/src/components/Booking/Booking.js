import React, {useState} from 'react';
import './booking.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {useNavigate} from 'react-router-dom';
function Booking({tour, avgRating}){
    const {price, reviews}=tour;
    const nav=useNavigate();
    const [credentials, setCred]=useState({
        userId:'01',
        userEmail:'jaswanth@gmail.com',
        fullname:'',
        phone:'',
        guestsize:1,
        book:''
    })
    const handleChange= e=>{
        setCred(prev=>({...prev, [e.target.id]: e.target.value}));
    };
    const serviceFee=10;
    const totalAmount=Number(price) * Number(credentials.guestsize) +Number(serviceFee);
    const handleClick= e=>{
        e.preventDefault();
        nav('/thank');
    }
  return (
     <div className='booking'>
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price}<span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating} ({reviews ?.length})
        </span>
    </div>
    
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
            <FormGroup>
                <input type="text" 
                placeholder="Full Name" 
                id="fullname" 
                required 
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <input type="number" 
                placeholder="Phone" 
                id="phone" 
                required 
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="d-flex align-items-cener gap-3">
                <input type="date" 
                placeholder="" 
                id="book" 
                required 
                onChange={handleChange}
                />
                <input type="number" 
                placeholder="Guest" 
                id="guestsize" 
                required 
                onChange={handleChange}
                />
            </FormGroup>
        </Form>
    </div>
    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className="border-0 px-0">
                <h5 className="d-flex align-items-center gap-1">
                    ${price} <i class="ri-close-circle-line"></i> 1 person
                </h5>
                <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
                <h5>Service Charge</h5>
                <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className="border-0 px-0">
                <h5>Total</h5>
                <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
    </div>
  </div>
  )
}

export default Booking;
