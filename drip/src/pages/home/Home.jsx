import React from 'react'
import "./home.css"
import Productsgrid from '../../components/Productsgrid/Productsgrid';

function Home() {

  return (
  
    <div className='bodyCont'>
      <div className="banner">
      <img src={require("./banner.jpg")} alt="" width="95%"/>
      </div>
      <Productsgrid category="New-Arrivals"/>
      <Productsgrid category="Most-Trending"/>
      <Productsgrid category="Sneaker"/>
    </div>
    
  )
}

export default Home