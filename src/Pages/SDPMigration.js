import React, { useState, useEffect } from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import MyForm from '../components/myForm';
import SDPsList from '../SDPs.json'; // Assuming SDPs.json contains the list of SDP options
import { Prev } from 'react-bootstrap/esm/PageItem';
import { Alert } from 'react-bootstrap';

const SDPMigration = () => {
  // State to hold SDP options and production number
  const [SDP, setSDP] = useState([]);
  const [productionNumber, setProductionNumber] = useState('');

  // Set SDP options from JSON file on component mount
  useEffect(() => {
    // Simulate fetching data from a JSON file (SDPs.json)
    setSDP(SDPsList);
  }, []); // Empty dependency array ensures this runs only once after component mounts

  // Handler for form submission
  const handleMigration = (formData) => {
    const { firstField, secondField } = formData; // Destructure formData object

    if (firstField.length == 10){

      // Update state with the entered productionNumber and SDP
      setProductionNumber(firstField);
      setSDP(secondField);
      console.log(`Migrating SDP ${secondField} for production number ${firstField}`);
    }else{
      alert("number most be 10 digits")
    }
    
  };

  return (
    <div>
      <NavbarComponent />
      <MyForm
        title="SDP Migration"
        label1="Production number"
        label2="Migrate to SDP"
        type1="number" // Assuming type1 is for entering production number
        type2="dropdown" // Assuming type2 should be a dropdown/select
        options={SDPsList} // Pass SDP options as props to MyForm component
        btn="Migrate"
        onSubmit={handleMigration}
      />
      <p>Entered Production Number: {productionNumber}</p>
    </div>
  );
};

export default SDPMigration;
