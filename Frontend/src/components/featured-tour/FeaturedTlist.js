import React from 'react';
import Tourcard from '../../shared/Tourcard';
import tourData from '../../assests/data/tours';
import {Col} from 'reactstrap';
function FeaturedTlist() {
  return (
    <>
      {
        tourData?.map(tour=>(
           <Col lg="3" className="mb-4" key={tour.id}>
            <Tourcard tour={tour} />
           </Col> 
        ))}
    </>
  )
}

export default FeaturedTlist;
