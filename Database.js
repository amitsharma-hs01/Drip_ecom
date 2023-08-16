import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose";

export const  connectDb=async ()=>{
   await mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("connected to the database")
    }).catch((err)=>{console.log(err)})
}
