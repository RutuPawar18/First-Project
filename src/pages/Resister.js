import { useState } from 'react';
import { Link } from 'react-router-dom'
import{ToastContainer} from 'react-toastify'

function Resister() {

  const {ResisterInfo, setResisterInfo} = useState({
    name: " ",
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
    const {name, email, password} = ResisterInfo;
    if(name || email || password){
      alert("All filed are mandatory, Please fill details")
    }
    else{
      alert("Registration successful")
    } 
  }

  return (
    <div className='container'>
      <h1>Resister</h1>
      <form onSubmit={handleResister}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
          onChange={handleChange}
          type='text'
          name='name'
          autoFocus
          placeholder='Enter your name...'
         // value={ResisterInfo.name}
          />
        </div>
        <div>
          <label htmlFor='email'>Name</label>
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
        <button type ='submit'>Resister</button>
        <span>
            Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Resister