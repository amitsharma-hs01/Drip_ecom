import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import {useAuth} from "../../context/authContext.js"

function ManageProducts() {
  const [auth]=useAuth();
  const [products,setProducts]=useState([]);
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState();
  const [imageLink,setLink]=useState("https://www.snitch.co.in/cdn/shop/products/Snitch_29thNov22_57656.jpg?v=1670846856");
  const [quantity,setQuantity]=useState("");
  const [category,setCategory]=useState("");

  const getProducts=async()=>{
    try {
      const {data}=await axios.get("http://localhost:8000/api/v1/product/get-all");
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("error while fetching products");
    }
  }

  const createProduct=async ()=>{
    try {
      const categoryres=await axios.get(`http://localhost:8000/api/v1/category/get-one/${category}`);
      if(categoryres.data.success===true){
       // toast.success(categoryres.data.category._id);
        console.log(categoryres.data);
      }
      else{
        toast.error(categoryres.data.message);
        return;
      }
      const {email}=auth.user;
      const {data}=await axios.post("http://localhost:8000/api/v1/product/create-product",{
        email,
        product:{name,description,category:categoryres.data.category._id,price,quantity,imageLink}});
        if(data.success===true){
         // toast.success(data.message);
          console.log(data.products);
        }
        else{
          toast.error(data.message);
          return;
        }
      
    } catch (error) {
      console.log(error);
      toast.error("error while creating product");
    }
  }

  const deleteProduct = async(id)=>{
    const {email}=auth.user;
    try {
      const {data}=await axios.delete(`http://localhost:8000/api/v1/product/delete/${id}`,{data:{email}})
      if(data.success){
        toast.success(data.message);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("error while deleting product");
    }
  }
  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
       <div className="create-form" style={{
        marginBottom:"40px"
       }}>
          <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} />

          <input type="text" placeholder='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
          
          <input type="number" placeholder='price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />

          <input type="number" placeholder='quantity' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />

          <input type="text" placeholder='category name' value={category} onChange={(e)=>{setCategory(e.target.value)}} />

          <input type="text" placeholder='image link' value={imageLink} onChange={(e)=>{setLink(e.target.value)}}   />

          <img src={imageLink} alt="" width="50px"/>

          <button onClick={createProduct}>Create</button>

       </div>
       <button onClick={()=>{getProducts()}}>update list</button>
      <div className="products" style={{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        flexWrap:"wrap",
        height:"600px",
        overflow:"scroll"
      }}>
       
        {products?.map(p=>{
          return(
          <div className="ProductsCard" key={p._id} style={{width:"120px",
          height:"300px",
          margin:"20px",background:"#95d7f788", padding:"10px",
          borderRadius:"20px"}}>
            <p className="name">{p.name}</p>
            <img src={p.imageLink} alt="" width="100px" />
            <p>{p.price}/-</p>
            <p>{p.description}</p>
            <p>{p.category?.slug}</p>
            <button onClick={()=>{
              deleteProduct(p._id);
            }}>delete</button>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default ManageProducts