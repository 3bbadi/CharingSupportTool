import React, { useState } from 'react';
import logo from '../img/VodafoneLogo.png';
import { Form, Button } from 'react-bootstrap';
// import OPS_KEY from "../../API_KEYS/API_KEYS"
import { API_URL } from '../../API_KEYS/API_KEYS';
// import axios from 'axios';

const CloneComponent = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');

        try {
            const requestData = new URLSearchParams({
                var1: number1,
                var2: number2,
            });

            console.log('Sending request to PHP file with the following data:', requestData.toString());

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestData,
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            if (!response.ok) {
                throw new Error('Failed to execute script. Response not OK.');
            }

            const data = await response.text();
            console.log('Response data:', data);
            setMessage(data);
        } catch (error) {
            console.error('Error executing script:', error);
            setMessage('Failed to execute script. ' + error.message);
        }
    };

    return (
        <div>
            <Form className="form-signin" onSubmit={handleSubmit}>
                <img className="mb-4" src={logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Clone number</h1>
                <Form.Group controlId="ProductionNumber">
                    <Form.Label>Production number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Production number"
                        value={number1}
                        onChange={(e) => setNumber1(e.target.value)}
                        required
                        autoFocus
                    />
                </Form.Group>
                <Form.Group controlId="TestNumber">
                    <Form.Label>Test Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Test Number"
                        value={number2}
                        onChange={(e) => setNumber2(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-lg btn-block">
                    Clone
                </Button>
                {message && <p>{message}</p>}
                <p className="faceIssueMSG" bg="warning">
                    If you face any issue please contact with charging support teams
                </p>
            </Form>
        </div>
    );
};

export default CloneComponent;
