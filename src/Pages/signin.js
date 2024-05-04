import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MyForm from '../components/myForm';
import logo from '../img/VodafoneLogo.png';
import '../style/SignIn.css';

const SignIn = () => {
  const [error, setError] = useState(''); // State to hold error message

  const handleSignIn = (formData) => {
    const { username, password } = formData;

    // Simulated authentication logic (replace with your actual authentication logic)
    if (username === 'admin' && password === 'password') {
      // Successful authentication
      alert('Login successful!'); // Replace with desired action upon successful login
      setError('');
    } else {
      // Failed authentication
      setError('Invalid username or password');
    }
  };

  return (
    <div>
     
        <img className="mb-4" src={logo} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
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
