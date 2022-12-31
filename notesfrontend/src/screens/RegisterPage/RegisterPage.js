import React, { useState } from "react";
import "./registerPage.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../LoginPage/Loading";
import ErrorAlert from "../../components/Alert/ErrorAlert";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"" ,
    password:"",
    cpassword:""

  });
  const[loading , setLoading] = useState(false)
  const [error, setError]= useState(false)
  const[emptyAlert, setEmptyAlert] = useState(false)
  const[sucess, setSucess] = useState(false)

  let Name, value;

  const onChangeHandler = (e)=>{
    Name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [Name]: value });
  }
  

  const onClickRegister = (e)=>{
    e.preventDefault();
    setLoading(true)
    const { name, email, phone, password, cpassword } = user

    if(password !==cpassword){
      setError(true)
      setLoading(false)
    }
    if(!email && !phone  && !password && !cpassword){
      setEmptyAlert(true)
      setLoading(false)
    }
    else{
     if( name &&  email && phone  && password && (password === cpassword)){
         axios.post("users/", user)
         .then( res => {
             setLoading(true)
             setSucess(true)
             navigate("/login")
         })
         
     } else {
         setLoading(false)
     }
    }
  }
  setTimeout(() => {
    setError(false)
    setEmptyAlert(false)
    setSucess(false)
 }, 6000)
  return (
   <>
    <Container  className="mt-3">
      <Row className="justify-content-md-center" >
        <Col sm={6}>
          {error && <ErrorAlert title={"password does't match"} variant={"danger"}></ErrorAlert>}
          {emptyAlert && <ErrorAlert title={"fill All The Details"} variant={"danger"}></ErrorAlert>}
          {sucess && <ErrorAlert title={"Registration Successfull"} variant={"success"}></ErrorAlert>}

        
        
        
        </Col>

      </Row>
    </Container>
    <Container className="justify-content-md-center">
      <Row className="justify-content-md-center mt-5">
        <Col sm={8}><Form>
            <Form.Group className="mb-1" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
               placeholder="Enter Name"
               name='name'
               value={user.name} 
               onChange={onChangeHandler}
               />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
               placeholder="Enter email"
              name='email'
              value={user.email}
              onChange={onChangeHandler}

              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
               type="number"
               placeholder="Enter Phone"
              name='phone'
              value={user.phone}
              onChange={onChangeHandler}

              />
              {loading && <Loading/>}
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              name='password'
              value={user.password}
              onChange={onChangeHandler}

              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="cpassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password"
              name='cpassword'
              value={user.cpassword} 
              onChange={onChangeHandler}
              />
            </Form.Group>
            <div className="button mt-3">
              <Button variant="primary" type="submit" onClick={onClickRegister}>
                Register
              </Button >
            </div>
          </Form>
  </Col>
      </Row>
      <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <Row>
          <Col>
            <p>I have already an Account!</p>
          </Col>
          <Col>
          <Button variant="outline-secondary" onClick={()=>{
               navigate('/login')
            }} style={{width:"80%"}}>login</Button>

        
          </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </Container>
   
   </>
  );
};

export default RegisterPage;
