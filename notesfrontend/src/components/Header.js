import React from 'react'
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap'
import {  useNavigate  } from 'react-router-dom'
import padie from '../components/padai.png'
import notes from '../components/note.png'


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
     
     <Navbar bg="info" expand="lg" variant='dark'> 
      <Container>
        <img src={padie} alt='studylogo' style={{width:"40px"}}></img>
        <Navbar.Brand href="#">Notes Storage</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
        <Nav className='m-auto'>
        
        <img src={notes} alt='studylogo' style={{width:"40px"}}></img>
        </Nav>

          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px',
                   display:"flex",
                   justifyContent:"center",
                   alignItems:"center"

          }}
            navbarScroll
          >
            <NavDropdown title="DropDown" id="navbarScrollingDropdown">
              <NavDropdown.Item  onClick={()=>{
               localStorage.removeItem("userInfo");
               navigate('/')

              }
              }>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
