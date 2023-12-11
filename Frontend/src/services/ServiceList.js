import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';
import weather from '../assests/images/weather.png';
import guide from '../assests/images/guide.png';
import c1 from '../assests/images/c1.png';

const servicesdata=[
    {
        imgUrl:weather,
        title: "Calculate Weather",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        imgUrl:guide,
        title: "Best tour Guide",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        imgUrl: c1,
        title: "Setting",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
]

function ServiceList() {
  return (
    <>
      {
        servicesdata.map((item,index)=>( 
        <Col lg="3" key={index}>
            <ServiceCard item={item}/>
        </Col>
        ))}
    </>
  )
}

export default ServiceList;
