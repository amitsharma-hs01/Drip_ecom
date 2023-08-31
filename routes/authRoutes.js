import express from "express";
import {loginController, registerController} from "../controller/authController.js"
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";
//router object
export const authRouter=express.Router()

authRouter.post('/register',registerController)


authRouter.post("/login",loginController)

authRouter.get('/test',requireSignin,isAdmin,(req,res)=>{
    res.send("tresting route")
})

//authentication route
authRouter.get('/authenticate',requireSignin,((req,res)=>{
    res.status(200).send({ok:true})
}))