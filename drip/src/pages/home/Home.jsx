import React from 'react'
import "./home.css"
import {useAuth} from "../../context/authContext.js"

function Home() {
  const [auth]=useAuth();
  return (
  
    <div className='bodyCont'>
      {JSON.stringify(auth)}
    </div>
    
  )
}

export default Home