import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" >
      <Container>
        <Container>
          <Row>
            <Col>
              {" "}
              <h2 style={{ color: "white" }}>AboutUs</h2>{" "}
            </Col>
            <Col xs={5}>
              {" "}
              <h2 style={{ color: "white" }}>
                <a className='MyliPro' href="https://www.linkedin.com/in/amit-chandra-280353225/"target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
  </a>
              </h2>
            </Col>
            <Col>
              {" "}
              <h2 style={{ color: "white" }}>
              <a className='MyliPro' href="https://github.com/rahul12332"target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>

                    </a>


                </h2>
            </Col>
          </Row>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Footer;
