import mongoose from "mongoose"

const productShema=new mongoose.Schema({
   name:{
     type:String,
     required:true
   },
   slug:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:true
   },
   category:{
    type:mongoose.ObjectId,
    ref:"categoryModel",
    required:true
   },
   imageLink:{
     type:String,
     required:true
   }
},{timestamps:true})

export default mongoose.model("productModel",productShema)