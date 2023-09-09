import React, { useEffect } from 'react'
import "./account.css"
import { useAuth } from '../../../context/authContext';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


function Account() {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location=useLocation();
  useEffect(() => {
    if (auth.user?.role === "1") {
      navigate("/admin")
    }
  })

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

    <div className='accountCont'>
      <div className='accNavCont'>
        <div className="profile">
          <div className="avatar">
            {auth.user.name[0]}
          </div>
          <p>{auth.user.name.toUpperCase()}</p>
          <button className='logoutBtn' onClick={handleLogout}>
            <i className="fa fa-power-off"></i>
          </button>
        </div>
        <ul className='menu'>
          <Link className='link' to="">
            <li className={`option ${location.pathname==="/account"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-user"></i>
              <p>Profile</p>
            </li>
          </Link>
          
        
          <Link className="link" to="address">
            <li className={`option ${location.pathname==="/account/address"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-map-marker"></i>
              <p>Addresses</p>
            </li>
          </Link>
        
          <Link className="link" to="orders">
            <li className={`option ${location.pathname==="/account/orders"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-truck"></i>
              <p>Orders</p>
            </li>
          </Link>

          <Link className="link" to="wishlist">
            <li className={`option ${location.pathname==="/account/wishlist"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-heart"></i>
              <p>Wishlist</p>
            </li>
          </Link>

          <Link className="link" to="cart">
            <li className={`option ${location.pathname==="/account/cart"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-shopping-cart"></i>
              <p>Cart</p>
            </li>
          </Link>

          <Link className="link" to="change-password">
            <li className={`option ${location.pathname==="/account/change-password"?"active":""}`}>
              <span className="before"></span>
              <i className="fa fa-lock"></i>
              <p>Password</p>
            </li>
          </Link> 
        </ul>
      </div>


      <div className='accContent'>
        <Outlet />
      </div>
    </div>
  )
}

export default Account