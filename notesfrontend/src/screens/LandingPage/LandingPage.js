import React from 'react'
import "./LandingPage.css"
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
     const Navigate = useNavigate();
  const onClickHandler = (e)=>{

        Navigate("/login")
  }
  const onClickRegister = (e)=>{
    Navigate('/register')
  }
  return (
    <div className='main'>
        <Container className='mainContainer'>
            <Row className='mainRow1'>
              <p>Welcome Tech Eagle Team</p>
              <h5>Add your items</h5>
            </Row>
            <Row className="mainRow2">
                <button  className='loginBtn' onClick={onClickHandler}>login</button>
                <button  className='signupBtn'onClick={onClickRegister}>signup</button>

            </Row>
        </Container>
    </div>
  )
}

export default LandingPage
