import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js"

export const requireSignin = async (req,res,next)=>{
   try{ const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    next()
   } catch(err){
      res.status(500).send({
        message:"unauthorized access"
      })
   }
}

//admin access
export const isAdmin = async (req,res,next)=>{
   try{ 
      const {email}=req.body
      const user=await userModel.findOne({email})
      console.log(user.role,user)
      if(user.role!=1){
         return res.status(404).send({
            success:false,
            message:"you dont have access"
         })
      }
      else{
         next()
      }
   } catch(err){
      res.status(500).send({
        message:"unauthorized access"
      })
   }
}