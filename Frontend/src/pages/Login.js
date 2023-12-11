import React,{useState} from 'react';
import '../styles/login.css';
import {Container, Row, Col,Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import login from '../assests/images/login.avif';
import log from '../assests/images/log1.jpg';
import { useNavigate } from 'react-router-dom';
function Login() {
  const nav1=useNavigate();
  const [logName, setLog]=useState({
    email:undefined,
    password:undefined
  });
  const handleChange=e=>{
    setLog(prev=>({...prev, [e.target.id]:e.target.value}));
  };

   const handleClick=e=>{
    e.preventDefault();
    nav1('/home')
   }
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login__container d-flex justify-content-between">
                <div className="login__img">
                  <img src={login} alt=""/>
                </div>
                <div className="login__form">
                  <div className="user">
                    <img src={log} alt="" />
                  </div>
                  <h2>Login</h2>
                  <Form >
                    <FormGroup>
                      <input type="email"
                      placeholder="Enter your mail"
                      required
                      id="email" onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="password"
                      placeholder="Enter your passcode"
                      required
                      id="password" onChange={handleChange}/>
                    </FormGroup>
                    <Button className="btn secondary__btn auth__btn" type="Submit" onClick={handleClick}>Login
                    </Button>
                  </Form>
                  <p>Don't have account<Link to='/register'>Create</Link></p>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Login;
