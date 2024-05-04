import React from 'react';
import logo from '../img/VodafoneLogo.png';
import { Form, Button } from 'react-bootstrap';
import '../style/SignIn.css'; // Import your custom CSS for styling
import MyForm from '../components/myForm'

const CloneComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add logic to handle form submission here
  };
  return (
    <div>
      {/* {title,label1,type1,label2,type2,btn} */}
      <MyForm title={"Clone number"} label1={"Production number"} type1={"number"} label2={"testing number"} type2={"number"} btn={"clone"}/>
      {/* <Form className="form-signin" onSubmit={handleSubmit}>
    <img className="mb-4" src={logo} alt="" width="72" height="72" />
    <h1 className="h3 mb-3 font-weight-normal">Clone number</h1>
    <Form.Group controlId="ProductionNumber">
      <Form.Label>Production number</Form.Label>
      <Form.Control type="phone" placeholder="Production number" required autoFocus />
    </Form.Group>
    <Form.Group controlId="TestNumber">
      <Form.Label>Test Number</Form.Label>
      <Form.Control type="phone" placeholder="Test Number" required />
    </Form.Group>

    <Button variant="primary" type="submit" className="btn-lg btn-block" p-2>
      clone
    </Button>
    <p className="faceIssueMSG" bg="warning" >If you face any issue please contact with charging support teams</p>
  </Form> */}
  </div>
  )
}

export default CloneComponent



