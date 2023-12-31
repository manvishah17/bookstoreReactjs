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

      if (response && response.data) {

        const { userObj, auth } = response.data;
        localStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('token', auth);
        navigate('/');
      } else {
        console.error('Invalid response from server');
      }

    } catch (error) {
      console.error('Error signing in:', error.response.data.msg);
    }
  };

  return (
    <form>  <div className='login'>
      <h3>Sign In</h3>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </div> </div>
    </form>
  );
}

export default SignIn;