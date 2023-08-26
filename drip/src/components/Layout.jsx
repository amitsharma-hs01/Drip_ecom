import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'


function Layout(props) {
  return (
   <>
      <Header/>
      
        <div style={{minHeight:"80vh",width:"100%",paddingTop:"150px"}}>{props.children}</div>
      <Footer/>

    </>
  )
}

export default Layout