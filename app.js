import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import { connectDb } from "./Database.js";
import {authRouter} from "./routes/authRoutes.js";
import bodyParser from "body-parser"
import cors from "cors";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";


const app=express();

//middleware
app.use(cors());
app.use(bodyParser.json())

//routes
app.use("/api/v1/auth",authRouter);
app.use ("/api/v1/category",categoryRouter)
app.get('/',(req,res)=>{
    res.send("hello from node")
})
app.use("/api/v1/product",productRouter)
const port = process.env.PORT || 5000


 connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}); 
