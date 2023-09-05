import React, { useEffect, useState } from 'react'
import AdminDashboard from '../../pages/admin/adminDashboard/AdminDashboard'
import { useAuth } from '../../context/authContext'
import axios from 'axios';

function AdminRoute() {
    const [ok,setOk]=useState(false);
    const [auth]=useAuth();
   
    useEffect(()=>{

        const check=async ()=>{
            const {email}=auth.user
            const res=await axios.post("http://localhost:8000/api/v1/auth/admin-auth",{email});
            if(res.data.ok){
                setOk(true)
               }
               else{
                setOk(false)
               }
        }
       


        if(auth?.token){
            check();
        }
    },[auth])
   return ok?<AdminDashboard/>:<div>unauthorized</div>
}

export default AdminRoute