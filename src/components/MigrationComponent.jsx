import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import logo from '../img/VodafoneLogo.png';

export const MigrationComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add logic to handle form submission here
  };
  return (
    
      <div>
    <Form className="form-signin" onSubmit={handleSubmit}>
      <img className="mb-4" src={logo} alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Login</h1>
      <Form.Group controlId="inputEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email address" required autoFocus />
      </Form.Group>
      <Form.Group controlId="inputPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" className="btn-lg btn-block">
        Sign in
      </Button>
      <p className="faceIssueMSG" bg="danger" >If you face any issue please contact with charging support teams</p>
    </Form>
  </div>
  )
}

export default MigrationComponent