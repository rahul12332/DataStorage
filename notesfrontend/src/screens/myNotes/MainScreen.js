import React from "react";
import {Container, Row} from "react-bootstrap"
import './mainScreen.css'

const MainScreen = (props) => {
  return (
    <div className="mainBack">
      <Container>
        <Row>
          <div className="page">
            {props.title && (
              <>
                <h1 className="title">{props.title}</h1>
                <hr />
              </>
            )}
            {props.children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
