import axios from "axios";
import { useState} from "react";
import { Card,Button, Col, Modal, Form, Container } from "react-bootstrap";
import tick from '../components/successTick.png'
import deleteLogo from '../components/deleteLogo.png'

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
const UserItems=({user})=>{
  const handleClose = () => setDeleteAlert(false);
  const [lgShow, setLgShow] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  

      const  deleteUser=(id)=>{
    axios.delete(apiUrl + id)
    .then( res => {
        setDeleteAlert(true)
    }).then(err=>{
      window.alert(err)
    })
  }
  const [updateAlert, setUpdateAlert] = useState(false) 
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
  });

  
  let Name, value;

  const onUpdateNotes = (e)=>{
    Name = e.target.name;
    value = e.target.value;
    setData({ ...data, [Name]: value });
  }

  setTimeout(() => {
    setLgShow(false)
 }, 100000)

  const updateUser= async(e)=>{
    try {
      e.preventDefault();
      await axios.put(`http://localhost:5000/api/notes/${user._id}`,data)
      setUpdateAlert(true)
    } catch (error) {
      window.alert(error)
    }
  }

  


  
    return (
      <>
      <Card>
        <Card.Header>{user.title}</Card.Header>
        <Card.Body>
          <Card.Title>{user.category}</Card.Title>
          <Card.Text>
            {user.content}
          </Card.Text>
          <Col>
          <Button variant="danger" onClick={()=>deleteUser(user._id)}>Delete</Button>
          <Button variant="warning" style={{marginLeft:40}} onClick={()=>setLgShow(true)}  >update </Button> 
          </Col>

          </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" 
        placeholder="title"
        value = {data.title}
        name='title'
        onChange={onUpdateNotes}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>category</Form.Label>
        <Form.Control type="text"
         placeholder="category" 
         value = {data.category}

         name='category'
         onChange={onUpdateNotes}
 
        />
      </Form.Group>
        {updateAlert && <Container className="d-flex justify-content-center">
          <Col>
          <h4>Update SuccessFull</h4>
          </Col>
          <Col>
          <img src={tick} alt=""  style={{width:"10%"}}/>

          </Col>
          </Container>}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>content</Form.Label>
        <Form.Control type="text" 
        placeholder="content"
        name="content" 
        value = {data.content}
        onChange={onUpdateNotes}


        />
            </Form.Group>
      
      <Button variant="primary" type="submit" onClick={updateUser} >
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>


      <Modal show={deleteAlert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex justify-content-center" >Notes deleted SuccessFully</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center"> <img src={deleteLogo} alt=""  style={{width:"20%"}}/></Modal.Body>
         
      </Modal>
      </>
      
      
  
    )
}

export default UserItems