import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose";

export const  connectDb=async ()=>{
   await mongoose.connect("mongodb+srv://amit:amit9898@ecom.rxb9zsk.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("connected to the database")
    }).catch((err)=>{console.log(err)})
}
