import React,{useState} from 'react';
import {Container,Form,Button} from "react-bootstrap";
import "../styles/Login.css";
import { Link,useNavigate} from "react-router-dom";

const Login = () => {
    const [formData,setformData]=useState({
            email:"",
            password:"",
    })
    const handlechange= (e) => {
      const{name,value}=e.target;
      setformData({...formData,[name]:value})
    }
    
    const handlesubmit= (e) => {
      e.preventDefault();
      console.log(formData);
    
    }
        
   return (
    <Container>
      <h1>Login</h1>
    <Form onSubmit={handlesubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handlechange} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handlechange} required/>
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
      </Form>
      </Container>
  );
};

export default Login;
