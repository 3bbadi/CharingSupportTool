import React, { useState , useEffect } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import CloneComponent from '../components/CloneComponent';
import MyForm from '../components/myForm';

const Clone = () => {
  ///////////////////// create the state   //////////////////
  const [Production,setProduction]=useState("");
  const [Test,setTest]=useState("");
  
  /////////////////  function to update state  form form  //////////////////// 
  const handleClone = (formData)=> {
    setProduction((prevProduction) => formData.firstField);
    setTest((prevTest) => formData.secondField);
    
  }
  
  ///////////// cloneValidation()
    useEffect(() => {
    if (Production.length === 10 &&  Test.length === 10){
      console.log("It's okaaaay");
    }else{
      // <ErrorPopup
        // show={showError}
        // errorMessage={errorMessage}
        // onClose={handleCloseError}
      // />
      // alert('the two numbers should be 10 digits (10xxxxxxxx)');
      console.log("It's NOT okaaaay");
    }
  }, [Production, Test]);

  




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