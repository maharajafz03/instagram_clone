import React, { useState } from 'react'
import Authbg from '../assets/Authbg.jpg'
import Login from './Login'
// import './authentication.css'
import Singup from './Singup'

const Authentication = () => {

  const [active, setactive] = useState("Singup")
  return (
    <div>
    
      <div className='auth__left'>
      <img src={Authbg} className='authentication fixed '/>
      </div>
      <div className='auth__right fixed  left-20'>
      {active === "Login" ? (<Login />) : (<Singup />)}
      
        <div className='auth__more'>
          
        </div>
      </div>
    </div>
  )
}

export default Authentication