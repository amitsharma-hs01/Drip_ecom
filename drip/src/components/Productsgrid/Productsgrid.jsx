import React, { useEffect, useState } from 'react'
import axios from "axios"

import "./productsgrid.css"
import { toast } from 'react-toastify';
import Productcard from '../ProductCard/Productcard';
function Productsgrid({category}) {
  const [products,setProducts]=useState([]);
  const [nav,setNav]=useState("flex-start");
  const getProducts=async()=>{
    console.log("getproduct")
    const {data}=await axios.get(`http://localhost:8000/api/v1/product/get-by-category/${category}`)
    if(data.success){
        setProducts(data.products)
    }
    else{
        toast.error(data.success)
    }
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className="pgrid">
       <div className="cat">{category}</div>
      <div className="products"style={{justifyContent:nav}}>
       {products.map(p=><Productcard key={p._id} product={p}/>)}
       </div>
       <div className="page">
         <div className="op" style={{
          backgroundColor:nav==="flex-start"?"#85d7f7":"#898989"
         }} onClick={()=>{
          setNav("flex-start")}}></div>
         <div className="op" style={{
          backgroundColor:nav==="center"?"#85d7f7":"#898989"
         }} onClick={()=>{
          setNav("center")}}></div>
         <div className="op" style={{
          backgroundColor:nav==="flex-end"?"#85d7f7":"#898989"
         }} onClick={()=>{
          setNav("flex-end")
         }}></div>
       </div>
    </div>
  )
}

export default Productsgrid