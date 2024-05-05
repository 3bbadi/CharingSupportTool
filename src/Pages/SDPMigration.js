import React, { useState, useEffect } from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import MyForm from '../components/myForm';
import SDPsList from '../SDPs.json'; // Assuming SDPs.json contains the list of SDP options

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
    const { productionNumberInput, SDPInput } = formData; // Destructure formData object

    // Update state with the entered productionNumber
    setProductionNumber(productionNumberInput);
    setSDP(SDPInput);

    // Perform migration logic here...
    // console.log(`Migrating SDP ${sdp} for production number ${productionNumber}`);
  };

  return (
    <div>
      <NavbarComponent />
      <MyForm
        title="SDP Migration"
        label1="Production number"
        label2="#SDP"
        type1="text" // Assuming type1 is for entering production number
        type2="dropdown" // Assuming type2 should be a dropdown/select
        options={sdpOptions} // Pass SDP options as props to MyForm component
        btn="Migrate"
        onSubmit={handleMigration}
      />
      <p>Entered Production Number: {productionNumber}</p>
    </div>
  );
};

export default SDPMigration;
