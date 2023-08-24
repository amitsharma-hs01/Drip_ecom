import React from 'react'
import "./header.css"
import logoText from "./assets/logo_text.png"
import searchIcon from "./assets/magnifying-glass-solid.svg"
import userIcon from "./assets/user-solid.svg"
import favoriteIcon from "./assets/heart-solid.svg"
import cartIcon from "./assets/bag-shopping-solid.svg"
import { Link } from 'react-router-dom'

function StickyHeader() {
  return (
    <div key="header" className={`sticky`}>
    <div key="logoCont" className='logoCont'>
       <img src={logoText} id="logoText" alt=''/>
    </div>
    <ul className="nav">
      <li key ="0" className="search-box">
        <input type="text" name="search-input" id="search-input" style={{
        
        }} /> 
        <img src={searchIcon}alt="" className='icon' />
      </li>

      <Link to="/account">
      <li key="1"><img src={userIcon} alt="" className="icon" /></li>
      </Link>

      <Link to="/favorites">
      <li key="2">
        <img src={favoriteIcon} alt="" className="icon" /></li>
      </Link>

      <Link to="/cart">
      <li key="3">
        <img src={cartIcon} alt="" className="icon" />
      </li>
      </Link>

    </ul>
    
  </div>
  )
}

export default StickyHeader