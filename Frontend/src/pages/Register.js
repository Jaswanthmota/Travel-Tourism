import React,{useState} from 'react';
import '../styles/login.css';
import {Container, Row, Col,Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import register from '../assests/images/register.png';
import log from '../assests/images/log1.jpg';
import { useNavigate } from 'react-router-dom';
function Register() {
  const nav1=useNavigate();
  const [logName, setLog]=useState({
    username:undefined,
    email:undefined,
    password:undefined
  });
  const handleChange=e=>{
    setLog(prev=>({...prev, [e.target.id]:e.target.value}));
  };

   const handleClick=e=>{
    e.preventDefault();
    nav1('/login');
   }
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={register} alt=""/>
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={log} alt="" />
                  </div>
                  <h2>Register</h2>
                  <Form >
                    <FormGroup>
                      <input type="text"
                      placeholder="Enter username"
                      required
                      id="username" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="email"
                      placeholder="Enter your mailId"
                      required
                      id="email" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="password"
                      placeholder="Enter your passcode"
                      required
                      id="password" onChange={handleChange}/>
                    </FormGroup>
                    <Button className="btn secondary__btn auth__btn" type="Submit" onClick={handleClick}>Create Account
                    </Button>
                  </Form>
                  <p>Already have an account<Link to='/login'>Login</Link></p>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Register;
