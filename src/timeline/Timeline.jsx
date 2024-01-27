import React from 'react'
import './timeline.css'
import Suggestion from '../suggestion/Suggestion'
import Post from './Post'

const Timeline = () => {
  return (
    <div className='timeline'>
        <div className='timeline__left'> 
         <div className='timeline__post'>
          <Post />
         </div>
         </div>
        <div className='timeline__right'> 
           <Suggestion /> 
        </div>
    </div>
  )
}

export default Timeline