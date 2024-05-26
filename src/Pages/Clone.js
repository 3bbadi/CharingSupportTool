import React, { useState , useEffect } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import CloneComponent from '../components/CloneComponent';
import MyForm from '../components/myForm';

const Clone = () => {
    const [production, setProduction] = useState('');
    const [test, setTest] = useState('');

    // Function to update state from form
    const handleClone = (formData) => {
        // Perform validation
        if (formData.firstField.length === 10 && formData.secondField.length === 10) {
            // Update state if validation passes
            setProduction(formData.firstField);
            setTest(formData.secondField);
            console.log('great');
        } else {
            alert('The two numbers should be 10 digits (10xxxxxxxx)');
        }
    };

    return (
        <div>
            <NavbarComponent />
            {/* Render either CloneComponent or MyForm based on your choice */}
            {/* <MyForm
                title="Clone number"
                label1="Production number"
                type1="number"
                label2="Test number"
                type2="number"
                btn="Clone"
                onSubmit={handleClone}
            /> */}
            <CloneComponent onSubmit={handleClone} />
        </div>
    );
};

export default Clone;
