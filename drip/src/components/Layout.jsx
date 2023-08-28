import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Layout(props) {
  return (
   <>
      <Header/>
      
        <div style={{minHeight:"70vh",width:"100%",paddingTop:"80px"}}>
          <ToastContainer/>
          {props.children}</div>
      <Footer/>

    </>
  )
}

export default Layout