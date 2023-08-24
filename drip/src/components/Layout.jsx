import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import StickyHeader from './header/StickyHeader'

function Layout(props) {
  return (
    <div style={{width:"100%",height:"100%"}}>
      {props.headerType==="sticky"?
        <StickyHeader/>:<Header/>}
        <main style={{minHeight:"80vh",width:"100%",paddingTop:"150px"}}>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default Layout