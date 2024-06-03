import React, { useState, useEffect } from 'react';
import MyForm from "./myForm";
import SDPsList from '../SDPs.json';
import logo from '../img/VodafoneLogo.png';
import { API_URL } from '../../API_KEYS/API_KEYS';


const MigrationComponent = () => {
  const [SDP, setSDP] = useState([]);
  const [productionNumber, setProductionNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Fetch SDP options from JSON file on component mount
    setSDP(SDPsList);
  }, []);

  const handleMigration = async (formData) => {
    setLoading(true);
    
    try {
      const requestData = new URLSearchParams({
        var1: formData.firstField,
        var2: formData.secondField,
      });

      const response = await fetch(API_URL , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: requestData,
      });

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
      <MyForm
        title="SDP Migration"
        label1="Production number"
        label2="Migrate to SDP"
        type1="number"
        type2="dropdown"
        options={SDPsList}
        btn={loading ? "Migrating..." : "Migrate"}
        onSubmit={handleMigration}
        disabled={loading}
      />
    </div>
  );
};

export default MigrationComponent;
