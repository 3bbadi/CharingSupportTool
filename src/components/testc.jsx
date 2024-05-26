import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Testc = () => {
    const [loading, setLoading] = useState(false);

    const callPhpScript = async () => {
        setLoading(true);

        try {
            const response = await fetch('http://10.30.145.89/build/backend/test.php', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Failed to execute script. Response not OK.');
            }

            const data = await response.text();
            alert('PHP Response: ' + data);
        } catch (error) {
            console.error('Error executing script:', error);
            alert('Failed to execute script. ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button
                variant="primary"
                onClick={callPhpScript}
                className="btn-lg btn-block"
                disabled={loading}
            >
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
                    'Call PHP Script'
                )}
            </Button>
        </div>
    );
}

export default Testc;
