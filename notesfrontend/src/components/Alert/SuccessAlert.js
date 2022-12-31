import React from "react";
import { Alert } from "react-bootstrap";
import './sucessAlert.css'
const SuccessAlert = (props) => {
  return (
    <div className="mainAlert">
      <Alert className="sucessAlert" ><h4>{props.children}</h4></Alert>
    </div>
  );
};

export default SuccessAlert;
