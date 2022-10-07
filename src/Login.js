import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './login.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Login=()=>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const navigate=useNavigate();
  






    
const onSubmit = (data) => {
       
   axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`,data).then(res=>{
    <Alert variant="success">
    <Alert.Heading>you are login </Alert.Heading>
  </Alert>
   console.log(res.data)
   localStorage.setItem("token",res.data.data.token)
   navigate('/product')
  
  }).catch(error=>{
if(error.response?.status===401){
  <Alert variant="danger">
  <Alert.Heading>credencial invalid </Alert.Heading>
</Alert>

}
   console.log(error.response)})
  

      };

return(<div className="login-container">
<div style={{color:"white",border:"1px solid black"}}>
<p>max@gmail.com or piyoyo279@gmail.com</p>
<p>pass1234</p>
</div>
<div className="login-item">
<Form  onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            {...register("email")}
            defaultValue=""
            className="username"
          />
     </Form.Group>
    
     </Row>
     <Row>
     <Form.Group as={Col} md="4" className="password">
          <Form.Label >Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="password"
            {...register("password")}
            defaultValue=""
            className="username"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
     <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Button type="submit" className="username button">Sign in</Button>
      </Form.Group>
        </Row>
    </Form>
</div>

    
</div>)

}
export default Login;