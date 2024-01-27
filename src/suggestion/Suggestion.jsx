import React from 'react'
import './suggestion.css'
import {Avatar} from '@mui/material'

const Suggestion = () => {
  return (
    <div className='  mr-72 mt-9'>
    <div className='bg-blue-500 mr-10 rounded-lg h-80 '>
      <div className=' fixed'>
        <h3 className='text-2xl'>Suggestion</h3>
        <div className='relative bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 p-1 rounded-lg mt-2'>
          <Avatar className='text-lg'/> <span className='ml-20 absolute text-black font-semibold top-2'>king
          <button className=' bg-blue-400 p-1 ml-[90px] absolute top-0 text-white rounded-lg hover:bg-black'>Follow</button>
          </span>
          <p>followed by danBilzerian</p>
        </div>
        <div className='relative  bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 p-1 rounded-lg mt-2'>
          <Avatar className='text-lg'/> <span className='ml-20 absolute text-black font-semibold top-2'>king
          <button className='bg-blue-400  p-1 ml-[90px] absolute top-0 text-white rounded-lg hover:bg-black'>Follow</button>
          </span>
          <p>followed by danBilzerian</p>
        </div>
        <div className='relative  bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 p-1 rounded-lg mt-2'>
          <Avatar className='text-lg'/> <span className='ml-20 absolute text-black font-semibold top-2'>king
          <button className='bg-blue-400  p-1 ml-[90px] absolute top-0  text-white rounded-lg hover:bg-black'>Follow</button>
          </span>
          <p>followed by danBilzerian</p>
        </div>
        <div className='relative  bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-900 p-1 rounded-lg mt-2'>
          <Avatar className='text-lg'/> <span className='ml-20 absolute text-black font-semibold top-2'>king
          <button className='bg-blue-400  p-1 ml-[90px] absolute top-0 rounded-lg  text-white  hover:bg-black'>Follow</button>
          </span>
          <p>followed by danBilzerian</p>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Suggestion