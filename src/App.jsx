import React from 'react'
import Authentication from './authentication/Authentication'
import Homepage from './Homepage'
import './App.css'
import { useSelector } from 'react-redux'

const App = () => {

  const user = useSelector((state) => state.data.user.user) 
  console.log(user)
  return (
    <div>
      {user ?
       (<Homepage /> ) :
       (<Authentication />)
       }
      
       
    </div>
  )
}

export default App