// SignIn.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function SignIn() {
    const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', credentials);
      // Handle successful sign-in (e.g., store the token, redirect, etc.)
      console.log('Successful sign-in:', response.data);
      alert("welcome User")
      navigate('/book')

    } catch (error) {
      console.error('Error signing in:', error.response.data.msg);
    }
  };

  return (
    <form>
      <h3>Log In</h3>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSignIn}>
          LOG In
        </button>
      </div>
    </form>
  );
}

export default SignIn;