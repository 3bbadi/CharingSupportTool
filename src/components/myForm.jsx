import React from 'react';
import { Form, Button } from 'react-bootstrap';

const MyForm = ({ title, label1, type1, label2, type2, btn, onSubmit, options }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = {
      firstField: event.target.username.value,
      secondField: event.target.password.value,
    };
    onSubmit(formData); // Call onSubmit function with form data
  };

  return (
    <Form className="form-signin text-center" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">{title}</h1>
      <Form.Group controlId="firstField">
        <Form.Label>{label1}</Form.Label>
        <Form.Control type={type1} name="username" placeholder={label1} required autoFocus />
      </Form.Group>
      <Form.Group controlId="secondField">
        <Form.Label>{label2}</Form.Label>
        {type2 === 'dropdown' && options ? (
          <Form.Control as="select" name="password" required>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        ) : (
          <Form.Control type={type2} name="password" placeholder={label2} required />
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        {btn}
      </Button>
    </Form>
  );
};

export default MyForm;
