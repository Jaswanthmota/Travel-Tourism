import React,{useState, useEffect} from 'react';
import '../styles/tours.css';
import Commonsec from '../shared/Commonsec';
import tourData from '../assests/data/tours';
import Tourcard from './../shared/Tourcard';
import Searchbar from './../shared/Searchbar';
import Newsletter from './../shared/Newsletter';
import {Container, Row, Col} from 'reactstrap';
function Tours() {
 const [pagec, setPage1]=useState(0);
 const [page, setPage]=useState(0);

 useEffect(()=>{
  const pages=Math.ceil(5/4);
  setPage1(pages);
 }, [page]);

  return (
    <div>
      <Commonsec title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <Searchbar/>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {
              tourData?.map(tour=>(
              <Col lg="3" className="mb-4" key={tour.id}>
                <Tourcard tour={tour} />
              </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pagec).keys()].map(number=>(
                    <span key={number} onClick={()=>setPage(number)}
                    className={page == number ? "active__page" : ""}>
                      {number+1}
                    </span>
                  ))}
                </div>
              </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  )
}

export default Tours;
