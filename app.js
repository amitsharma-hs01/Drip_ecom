import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import { connectDb } from "./Database.js";
import {authRouter} from "./routes/authRoutes.js";
import bodyParser from "body-parser"
import cors from "cors";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import path from "path"
import {fileURLToPath} from "url"

const app=express();


//

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
//middleware
app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"./drip/build")))

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

//rest api
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,'./drip/build/index.html'))
})
