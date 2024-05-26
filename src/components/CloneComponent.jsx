import React, { useState } from 'react';
import logo from '../img/VodafoneLogo.png';
import { Form, Button, Spinner } from 'react-bootstrap';

const CloneComponent = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');
        setLoading(true);

        try {
            const requestData = new URLSearchParams({
                var1: number1,
                var2: number2,
            });

            console.log('Sending request to PHP file with the following data:', requestData.toString());

            const response = await fetch('http://10.30.145.89/build/backend/clone.php', {
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
            alert('Done');
        } catch (error) {
            console.error('Error executing script:', error);
            alert('Failed to execute script. ' + error.message);
        } finally {
            setLoading(false);
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
                <Button variant="primary" type="submit" className="btn-lg btn-block" disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> Loading...
                        </>
                    ) : (
                        'Clone'
                    )}
                </Button>
                <p className="faceIssueMSG" bg="warning">
                    If you face any issue please contact with charging support teams
                </p>
            </Form>
        </div>
    );
};

export default CloneComponent;
