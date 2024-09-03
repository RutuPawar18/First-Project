import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      WelCome to this page

      <br>
      
      </br>

      <button type = 'Logout '>Logout</button>
      <Link to="/Login">Logout</Link>
    </div>
  )
}

export default Home
