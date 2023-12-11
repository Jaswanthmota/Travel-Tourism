import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assests/images/ava-1.jpg';
import ava02 from '../../assests/images/ava-2.jpg';
import ava03 from '../../assests/images/ava-3.jpg';
function Testimonial() {

  const settings={
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive:[
        {
            breakpoint: 992,
            settings:{
                slidesToShow: 2,
                SlidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                SlidesToScroll: 1,
            },
        },
      ]
  }

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
            Tour management involves the planning, coordination, and execution of logistics for tours, 
            ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
            travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava01}  className="w-25 h-25 rounded-2"alt=""/>
           <div>
            <h5 className="mb-0 mt-3">JASWANTH MOTA</h5>
            <p>Customer</p>
           </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
            Tour management involves the planning, coordination, and execution of logistics for tours, 
            ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
            travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava02}  className="w-25 h-25 rounded-2"alt=""/>
           <div>
            <h5 className="mb-0 mt-3">SUPRIYA</h5>
            <p>Customer</p>
           </div>
        </div>
      </div>


      <div className="testimonial py-4 px-3">
        <p>
            Tour management involves the planning, coordination, and execution of logistics for tours, 
            ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
            travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava03}  className="w-25 h-25 rounded-2"alt=""/>
           <div>
            <h5 className="mb-0 mt-3">JASWANTH</h5>
            <p>Customer</p>
           </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
            Tour management involves the planning, coordination, and execution of logistics for tours, 
            ensuring that artists and performers can focus on their craft. Responsibilities include budget management,
            travel arrangements, accommodations, safety, communication, problem-solving, and more. Tour managers play a crucial role in making tours successful and memorable.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
           <img src={ava01}  className="w-25 h-25 rounded-2"alt=""/>
           <div>
            <h5 className="mb-0 mt-3">JASWANTH MOTA</h5>
            <p>Customer</p>
           </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial;
