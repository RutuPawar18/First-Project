import { Link } from 'react-router-dom'
import{ToastContainer} from 'react-toastify'
import React from 'react'
import { useState } from 'react';

function Resister() {

  const[name] =useState(' ')
  const[email] =useState(' ')
  const[password] =useState(' ')

  function Resister(e){
    e.preventDefault();
    if(name || email || password)
    {
      alert("All filed are mandatory, Please fill details")
    }
    else{  
      alert("Registration successful")
    }
  }  
  
  return (
    <div className='container'>
    <h1>Resister</h1>
    <form>
    <div>
        <label htmlFor='name'>Name</label>
        <input
        type='name'
        name='text'
        placeholder='Enter your name...'
        />
      </div> 
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

      <button type ='submit' > Resister</button>
      <span>
          Already have an account?
        <Link to="/Login">Login</Link>
      </span>
    </form>
    <ToastContainer/>
  </div>
  )
}

export default Resister