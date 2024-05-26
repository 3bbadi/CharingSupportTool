import React, { useState } from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import MigrationComponent from '../components/MigrationComponent';

const SDPMigration = () => {
  // State to hold entered production number
  const [productionNumber, setProductionNumber] = useState('');

  // Handler for form submission
  const handleMigration = (formData) => {
    const { firstField } = formData; // Destructure formData object

    if (firstField.length === 10) {
      // Update state with the entered productionNumber
      setProductionNumber(firstField);
      console.log(`Migrating SDP for production number ${firstField}`);
    } else {
      alert("Number must be 10 digits");
    }
  };

  return (
    <div>
      <NavbarComponent />
      <MigrationComponent onSubmit={handleMigration} />
      <p>Entered Production Number: {productionNumber}</p>
    </div>
  );
};

export default SDPMigration;
