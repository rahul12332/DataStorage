import React from 'react'
import { Container, Col } from 'react-bootstrap'
import errorImg from './undraw_page_not_found_re_e9o6.svg'

const PageError = () => {
  return (
   <>
   <Container >
    <Col className='d-flex justify-content-center' >
    <img src={errorImg} alt=""  />

    </Col>
    <Col className='d-flex justify-content-center mt-5' >
        <h1>OOOOps Sorry This Page Is Not Found</h1>
    </Col>
   </Container>
   </>
  )
}

export default PageError
