import React from 'react'
import { useAuth } from '../../context/authContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./adminLayout.css"


function AdminLayout({children}) {
    const [auth,setAuth] = useAuth();
    const navigate=useNavigate();
    const location=useLocation();

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
    <div className="admin-accountCont">
      <div className="admin-accNavCont">
        <div className="admin-profile">
          <div className="admin-avatar">
            {auth.user.name[0]}
          </div>
          <p>{auth.user.name.toUpperCase()}</p>
          <button className='admin-logoutBtn' onClick={handleLogout}>
            <i className="fa fa-power-off"></i>
          </button>
        </div>
    <ul className="admin-menu">
         <Link className='admin-link' to="">
            <li className={`option ${location.pathname==="/admin"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Profile</p>
            </li>
          </Link>
          <Link className='admin-link' to="manage-users">
            <li className={`option ${location.pathname==="/admin/manage-users"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Users</p>
            </li>
          </Link>
          <Link className='admin-link' to="manage-orders">
            <li className={`option ${location.pathname==="/admin/manage-orders"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Orders</p>
            </li>
          </Link>
          <Link className='admin-link' to="category">
            <li className={`option ${location.pathname==="/admin/category"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Category</p>
            </li>
          </Link>
          <Link className='admin-link' to="products">
            <li className={`option ${location.pathname==="/admin/products"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Products</p>
            </li>
          </Link>
    </ul>
    </div>
     <div className="admin-content">
        {children}
     </div>
    </div>
  )
}

export default AdminLayout