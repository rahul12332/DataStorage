import axios from "axios";
// import React, { useCallback } from 'react'
// import { useCallback } from 'react'
import { Form, Button, FloatingLabel, Container, Row, Col, Modal} from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import Loading from "../LoginPage/Loading";
import UserItems from "../../components/userItem";
import tick from '../../components/successTick.png'
const apiUrl = "http://localhost:5000/api/notes/";
let accessToken =  JSON.parse(localStorage.getItem("userInfo"))

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const CreateNotes = () => {
  
  const [loading, setloading] = useState(false)
  const [success, setSucess] = useState(false)
  const handleClose = () => setSucess(false);
  const [error , setError] = useState(false)
  const [empty, setEmpty] = useState(false)

  
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await axios.get(apiUrl);
        setUser(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getNotes();
  }, []);
  let Name, value;

  const onCreateNotes = (e)=>{
    Name = e.target.name;
    value = e.target.value;
    setData({ ...data, [Name]: value });
  }
  const PostCreateNotes = (e)=>{
    e.preventDefault();
    setloading(true)
    const { title, category, content } = data

   
    if(!title && !category && !content){
      setEmpty(true)
      setloading(false)
    }
    else{
     if( title &&  category && content){
         axios.post(apiUrl, data)
         .then( res => {
          setSucess(true)
             setloading(false)

         })
         
     } else {
      setError(true)
       setloading(false)
     }
    }
  }

  setTimeout(() => {
    setError(false)
    setEmpty(false)
 }, 6000)
  
  return (
    <>
     <Container className="mt-2">
      <Row className="justify-content-md-center" >
        <Col sm={6}>
          {error && <ErrorAlert title={"invalid inputs"} variant={"danger"} ></ErrorAlert>}
          {empty && <ErrorAlert title={"fill all the fields"} variant={"danger"} ></ErrorAlert>}

        </Col>

      </Row>
    </Container>
        <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col > <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" 
            placeholder="title" 
             name='title'
               value={data.title} 
               onChange={onCreateNotes}/>
            
          </Form.Group>
          {loading && <Loading variant={"warning"}></Loading> }


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text"
             placeholder="category" 
             name='category'
             value={data.category} 
             onChange={onCreateNotes}/>
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name='content'
              value={data.content} 
              onChange={onCreateNotes}
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" onClick={PostCreateNotes} className="mt-4">
            Submit
          </Button>
        </Form>
     </Col>
      </Row>
    </Container>
    
          <Container fluid="md mb-5 mt-3">
      <Row>
      
      {user &&
          user.map((user) => (
            <div className="covidItem col-md-4 my-2" key={user._id}>
              <UserItems user={user} />
            </div>
          ))}

      </Row>
    </Container>
       
    <Modal show={success} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center" >Notes Created SuccessFully</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center"> <img src={tick} alt=""  style={{width:"20%"}}/></Modal.Body>
         
      </Modal>

    
    </>
  );
};

export default CreateNotes;
