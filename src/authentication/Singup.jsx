import React, { useState } from 'react'
import {createUserwithEmailAndPasssword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '/node_modules/.vite/deps/firebase_auth.js?v=4b8c4b36';


const Singup = () => {
  
  const[Email, setEmail] = useState('')
  const[Username,setusername] = useState('')
  const[password, setpassword] = useState('')

  const handelsingup=()=>{
    createUserwithEmailAndPasssword(auth, Email,password).then (
      signInWithEmailAndPassword(auth, Email, password)).then(
      updateProfile(auth.currentUser, {displayName: Username}
        )
    )
  }

  return (
    <div>
      <div>
      <div className='bg-white/50  h-96 w-[100%] mt-32 p-4 rounded-lg'>
       <h2 className='text-center font-bold text-black '>instagram</h2>
       <div className='justify-center mt-9'>
        <p >Email</p>
        <div className=''>
          <input type='text' placeholder='Email' value={Email} onChange={e => setEmail(e.target.value) } className='rounded-lg p-2 text-black'/>
          <p>Username</p>
          <input type='text' placeholder='Username' value={Username} onChange={e => setusername(e.target.value) }  className='rounded-lg p-2 text-black'/>
          <p>Password</p>
          <input type='password' placeholder='Password' value={password} onChange={e => setpassword(e.target.value) }  className='rounded-lg p-2 text-black'/>
        </div>
        <div className='relative top-5 text-center'>
          <button className='bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 rounded-lg p-2 w-[100%] font-bold'>Sing Up</button>
        </div>
       </div>
       <span className='p-3 relative top-6'> you have an account just
          <button  onClick={handelsingup} className='bg-blue-600 p-1 ml-3 rounded-lg hover:bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900'>Log in</button> 
          </span>
      </div>
    </div>
    </div>
  )
}

export default Singup