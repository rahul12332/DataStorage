import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"90%", width:"100%" }}>
           <Spinner animation="border" role="status" variant={props.variant} style={{height:"100", width:"100", postion:"fixed"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>

    </div>
  )
}

export default Loading
