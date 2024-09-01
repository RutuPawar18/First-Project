import { Link } from 'react-router-dom'
import{ToastContainer} from 'react-toastify'
import React from 'react'
import { useState } from 'react';

function Login() {

  const {ResisterInfo, setResisterInfo} = useState({
    email: " ",
    password: " "
  })

  const handleChange = (e)=>{
    const { name, value} =e.target;
    console.log(name, value);
    const copyResisterInfo = {...ResisterInfo};
    copyResisterInfo[name] =value;
    setResisterInfo(copyResisterInfo);
  }

  const handleResister = (e) =>{
    e.preventDefault();
    const {name, email} = ResisterInfo;
    if(name || email){
      alert("All filed are mandatory, Please fill the details")
    }
    else{
      alert("Registration successful")
    } 
  }

  return (
    <div className='container'>
    <h1>Login</h1>
    <form onSubmit={handleResister}>
      <div>
        <label htmlFor='email'>email</label>
        <input
        onChange={handleChange}
        type='email'
        name='email'
        placeholder='Enter your email...'
        //value={ResisterInfo.email}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
        onChange={handleChange}
        type='password'
        name='password'
        placeholder='Enter your password...'
        //value={ResisterInfo.password}
        />
      </div> 
      <button type ='submit'>Login</button>
      <span>
          Don't have an account?
        <Link to="/Resister">Resister</Link>
      </span>
    </form>
    <ToastContainer/>
  </div>
  )
}

export default Login
