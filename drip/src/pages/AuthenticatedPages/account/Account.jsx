import React from 'react'
import "./account.css"
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [auth,setAuth]=useAuth();
  const navigate=useNavigate();
  return (

    <div className='accountCont'>
      {auth.user===null&&<button onClick={(e)=>{
        e.preventDefault();
        navigate("/login");
      }}>login</button>}


      {auth.user&&<button onClick={(e)=>{
         e.preventDefault();
         localStorage.removeItem("authData")
         setAuth({
          ...auth,
          user:null,
          token:""
         })
         navigate("/")
      }}>logout</button>}
    </div>
  )
}

export default Account