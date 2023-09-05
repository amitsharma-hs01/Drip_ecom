import React from 'react'

function AdminDashboard() {
    const handle=(e)=>{
        e.preventDefault();
        console.log("clicked")
    }
  return (
    <button onClick={handle}>
        click
    </button>
  )
}

export default AdminDashboard