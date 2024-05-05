import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MyForm from '../components/myForm';
import logo from '../img/VodafoneLogo.png';
import '../style/SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // State to hold error message
  //state >> error
  //setError  is a function to manipulate the state(error)
  //use useState is a function to set the initial value of the state 

  const handleSignIn = (formData) => {
    const { firstField , secondField } = formData;

    // Simulated authentication logic (replace with your actual authentication logic)
    if (firstField === 'admin' && secondField === 'password') {
      // Successful authentication
      alert('Login successful!'); // Replace with desired action upon successful login
      setError('');
      navigate('/clone');
    } else {
      // Failed authentication
      setError('Invalid username or password');
    }
  };

  return (
    <div>
     
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        {error && <p className="error-msg">{error}</p>} {/* Render error message if error state is truthy */}
        
        <MyForm
          title="Login"
          label1="User name"
          type1="text"
          label2="Password"
          type2="password"
          btn="Login"
          onSubmit={handleSignIn}
        />
      
    </div>
  );
};

export default SignIn;
