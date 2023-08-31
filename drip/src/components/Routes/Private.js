import { useEffect, useState } from "react"
import {useAuth} from "../../context/authContext"
import {Outlet} from "react-router-dom"
import Login from "../../pages/login/Login"
import axios from "axios"

function Private() {
  const [ok,setOk]=useState(false)
  const [auth]=useAuth()

  useEffect(()=>{ 
    const authCheck=async ()=>{
       const res=await axios.get("http://localhost:8000/api/v1/auth/authenticate");
       if(res.data.ok){
        setOk(true)
       }
       else{
        setOk(false)
       }
    }
    if(auth?.token){
        authCheck();
    }
  },[auth?.token])

  return ok?<Outlet/>:<Login goBack="true"/>
}
 
export default Private