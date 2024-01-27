import React, { useState } from 'react'
import Singup from './Singup'


const Login = () => {
  
  const[Email, setEmail] = useState('')
  const[password, setpassword] = useState('')

 
  return (
    <div>
      <div className='bg-white/50  h-96 w-[100%] mt-32 p-4 rounded-lg'>
       <h2 className='text-center font-bold text-black '>instagram</h2>
       <div className='justify-center mt-9'>
        <p >Email</p>
        <div className=''>
          <input type='text' placeholder='Email' value={Email} onChange={e => setEmail(e.target.value) } className='rounded-lg p-2 text-black'/>
          <p>Password</p>
          <input type='password' placeholder='Password' value={password} onChange={e => setpassword(e.target.value) } className='rounded-lg p-2 text-black'/>
        </div>
        <div className='relative top-5 text-center'>
          <button className='bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 rounded-lg p-2 w-[100%] font-bold'>Login</button>
        </div>
       </div>
       <span className='p-3 relative top-11'> Don't have an account ?
          <button  className='bg-blue-600 p-2 rounded-lg hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900'>SingUp</button> 
          </span>
      </div>
    </div>
  )
}

export default Login