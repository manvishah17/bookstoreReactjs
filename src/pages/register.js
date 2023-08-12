import React from "react";
import "./Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register=()=> {

    const navigate=useNavigate()
    const [user,setuser]=useState({
    username:'',
    email:'',
    password:''
    })
    let name,value
    const handleChange=(e)=>{
    name=e.target.name
    value=e.target.value
    
    setuser({...user,[name]:value})
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        
            axios.post('http://localhost:3001/Register',user)
            .then(res=>console.log(res))
            setuser({
            username:'',
            email:'',
            password:''
            
        })     
    alert("Successfully Registered")
    }

    

    const handleLogin=()=>{
      navigate('/Login')
    }

  return (
    <div className='register'>
      
    <div className='register-container'>
      <h2>Sign-Up Page</h2>
      <div>
        <label htmlFor="username" className='username'>Username:</label>
        <input
          type="text"
          id="username"
          name='username'
          value={user.username}
          placeholder='Username'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className='email'>Email:</label>
        <input
          type="text"
          id="email"
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={handleChange}
        />
      </div>
      <div>

        <label htmlFor="password" className='password'>Password:</label>
        <input
          type="password"
          id="password"
          name='password'
          value={user.password}
          placeholder='Password'
          onChange={handleChange}
        />
      </div>
      
      <button onClick={handleSignUp}>Sign Up</button>
      <p>Click here to <span onClick={handleLogin} className="login-link">Login</span></p>

      </div>
      
    </div>
  );
}

export default Register;
