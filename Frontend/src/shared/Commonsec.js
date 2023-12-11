import React from 'react';
import './commonsec.css';
import {Container, Row, Col} from 'reactstrap';
function Commonsec({title}) {
  return (
    <div>
      <section className='common__sec'>
        <Container>
            <Row>
                <Col lg="12">
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Commonsec;
