import React from 'react'
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [auth,setAuth] = useAuth();
    const navigate=useNavigate();
    const handleLogout = (e) => {
      e.preventDefault();
      localStorage.removeItem("authData")
      setAuth({
        ...auth,
        user: null,
        token: ""
      })
      navigate("/")
    }
  return (
    <button onClick={handleLogout}>
        Logout
    </button>
  )
}

export default AdminDashboard