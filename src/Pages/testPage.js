// import React, { useState , useEffect } from 'react'
import Test from '../components/testc';
import NavbarComponent from '../components/NavbarComponent'

const testPage = () => {

    const handleTest = (formData) => {
        // Perform validation
       
    };

    return (
        <div>
            <NavbarComponent />
            <Test onSubmit={handleTest} />
        </div>
    );

}

export default testPage;