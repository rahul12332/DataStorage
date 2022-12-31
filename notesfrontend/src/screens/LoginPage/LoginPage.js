import React from "react";
import "./loginPage.css";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import avtar from "./undraw_female_avatar_re_9amj.svg";
import { useState } from "react";
import Loading from "./Loading";
// import SuccessAlert from "../../components/Alert/SuccessAlert";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [sucess, setSucess] = useState(false);
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/createnotes");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = user;

    if (!email && !password) {
      setError(true)
      setLoading(false);
    } else {
      if (email && password) {
        axios.post("users/login", user).then((res) => {
          // setSucess(true);
          setLoading(true);
          localStorage.setItem("userInfo", JSON.stringify(res.data.token));
          localStorage.setItem("userInfoId", JSON.stringify(res.data.id));
          const userInfo = localStorage.getItem("userInfo");
          const userInfoId = localStorage.getItem("userInfoId");

          console.log("testing", userInfo);
          console.log("testing_ID", userInfoId);

          navigate("/createnotes");
        });
      } else {
        setError(true);
        setError(true)
        setLoading(false);
      }
    }
  };
  setTimeout(() => {
    setError(false)
 }, 5000)

  return (
    <div className="backgroundContainer">
    <Container >
      <Row className="justify-content-md-center" >
        <Col sm={6}>
          {error && <ErrorAlert title={"Invalid Credentials"} variant={"danger"}  ></ErrorAlert>}
          
        </Col>

      </Row>
    </Container>
      <Container className="loginContainer">
        <Row className="Row1">
          <h4>Welcome to Membership</h4>
          <p>login</p>
        </Row>
        <Row className="Row2">
          <figure>
            <img src={avtar} alt="" />
          </figure>
          {loading && <Loading />}
        </Row>
        <Row className="Row3">
          <div className="form">
            <Form>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="formEmail"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="formPassword"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="button">
                <Button
                  variant="primary"
                  type="submit"
                  value="login"
                  onClick={loginUser}
                >
                  Submit
                </Button>
              </div>
            </Form>
            <Row className="justify-content-md-center">
              <Col sm={8} className="justify-content-md-center mt-3">
                <Button variant="outline-danger" style={{width:"100%"}} onClick={()=>{
               navigate('/register')
            }}>SignUP</Button>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
