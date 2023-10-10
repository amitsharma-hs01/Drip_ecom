import React from 'react'
import "./Productcard.css"
function Productcard({product}) {
  return (
    <div className="card">
        <div className="image">
            <img src={product.imageLink} alt="" height="100%" width="100%"/>
            
        </div>
        <p>{product.name}</p>
        <p>{product.price}/-</p>
        <p className="des">{product.description+"this is a placeholder for the product description"}</p>
        <div className="rating">
            <i className="fa fa-star" style={{color:"#95d7f7"}}></i>
            <i className="fa fa-star" style={{color:"#95d7f7"}}></i>
            <i className="fa fa-star" style={{color:"#95d7f7"}}></i>
            <i className="fa fa-star" style={{color:"#95d7f7"}}></i>
            <i className="fa fa-star" style={{color:"#ffffff"}}></i>
        </div>
        <div className="opt">
            <button className='cartup'>
              <i className="fa fa-shopping-bag"></i>
            </button>
            <button className="wishup">
                <i className="fa fa-heart">
                </i>
            </button>
        </div>
        
    </div>
  )
}

export default Productcard