import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import { connectDb } from "./Database.js";
import {authRouter} from "./routes/authRoutes.js";
import bodyParser from "body-parser";

const app=express();

//middleware
app.use(bodyParser.json())

//routes
app.use("/api/v1/auth",authRouter);

app.get('/',(req,res)=>{
    res.send("hello from node")
})

const port = process.env.PORT || 5000


 connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}); 
