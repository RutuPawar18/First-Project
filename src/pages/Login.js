import { Link } from 'react-router-dom'
import{ToastContainer} from 'react-toastify'
import React from 'react'
import { useState } from 'react';


function Login() {

  const[email] =useState(' ')
  const[password] =useState(' ')

  function Login(e){
    e.preventDefault();
    if(email || password)
    {
      alert("All filed are mandatory, Please fill details")
    }
    else{
      alert("Registration successful")
    }
  }

  return (
    <div className='container'>
    <h1>Login</h1>
    <form>
      <div>
        <label htmlFor='email'>email</label>
        <input
        
        type='email'
        name='email'
        placeholder='Enter your email...'
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
    
        type='password'
        name='password'
        placeholder='Enter your password...'
        />
      </div> 

      <button type ='submit'> Login</button>
      <Link to ="/Home" Home> </Link>
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
