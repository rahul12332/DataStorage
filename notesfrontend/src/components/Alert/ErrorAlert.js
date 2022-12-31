import React from 'react'
import { Alert } from 'react-bootstrap'
const ErrorAlert = (props) => {
  return (
       <Alert  className="errorAlert" variant={props.variant} >
        <h4 className='justify-content-md-center'>{props.title}</h4>
        </Alert>
  )
}

export default ErrorAlert
