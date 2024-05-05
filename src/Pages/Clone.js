import React, { useState , useEffect } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import CloneComponent from '../components/CloneComponent';
import MyForm from '../components/myForm';

const Clone = () => {
  ///////////////////// create the state   //////////////////
  const [Production, setProduction] = useState("");
const [Test, setTest] = useState("");

// Function to update state from form
const handleClone = (formData) => {
  // Perform validation
  if (formData.firstField.length === 10 && formData.secondField.length === 10) {
    // Update state if validation passes
    setProduction(formData.firstField);
    setTest(formData.secondField);
    console.log("great")
  } else {
    // Handle validation failure (e.g., show error message, prevent state update)
    // console.log("Validation failed: Production and Test must be 10 digits long");
    // Optionally display error message or take other actions
    // Example: setErrorPopupVisible(true);
   alert('The two numbers should be 10 digits (10xxxxxxxx)');
  }
};
  




  return (
    <div>
      <NavbarComponent / >
        {/* <CloneComponent /> */}
        <MyForm 
          title="Clone number"
          label1="Production number"
          type1="number"
          label2="Test number"
          type2="number"
          btn="Clone"
          onSubmit={handleClone}
        
        />
    </div>
  )
}

export default Clone;