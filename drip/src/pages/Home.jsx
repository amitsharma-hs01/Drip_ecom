import React from 'react'
import { useAuth } from '../context/authcontext' 

function Home() {
  const [auth,setAuth]=useAuth();
  return (
  
    <div >Home
      <pre>{JSON.stringify(auth)}</pre>
      <pre>{localStorage.getItem("authData")}</pre>
    </div>
    
  )
}

export default Home