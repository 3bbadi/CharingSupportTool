import React, { useState } from 'react';
import logo from '../img/VodafoneLogo.png';
<<<<<<< HEAD
import { Form, Button, Spinner } from 'react-bootstrap';
=======
import { Form, Button } from 'react-bootstrap';
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40

const CloneComponent = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
=======
    const [message, setMessage] = useState('');
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted');
<<<<<<< HEAD
        setLoading(true);
=======
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40

        try {
            const requestData = new URLSearchParams({
                var1: number1,
                var2: number2,
            });

            console.log('Sending request to PHP file with the following data:', requestData.toString());

<<<<<<< HEAD
            const response = await fetch('http://10.30.145.89/build/backend/clone.php', {
=======
            const response = await fetch('https://10.30.145.89/build/backend/clone.php', {
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40
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
<<<<<<< HEAD
            alert('Done');
        } catch (error) {
            console.error('Error executing script:', error);
            alert('Failed to execute script. ' + error.message);
        } finally {
            setLoading(false);
=======
            setMessage(data);
        } catch (error) {
            console.error('Error executing script:', error);
            setMessage('Failed to execute script. ' + error.message);
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40
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
<<<<<<< HEAD
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
=======
                <Button variant="primary" type="submit" className="btn-lg btn-block">
                    Clone
                </Button>
                {message && <p>{message}</p>}
>>>>>>> 633c5a0b159f51139c37de7276888c7d61d0ff40
                <p className="faceIssueMSG" bg="warning">
                    If you face any issue please contact with charging support teams
                </p>
            </Form>
        </div>
    );
};

export default CloneComponent;
