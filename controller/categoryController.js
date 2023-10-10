import slugify from "slugify";
import categoryModel from "../models/categoryModel.js"

export const createController =async(req,res)=>{
  try {
   const {name}=req.body;
   if(!name){
      return res.status(401).send({
         success:false,
         message:"name is required"
      })
   }
   const category = await categoryModel.findOne({name})
   if(category){
    return res.status(200).send({
      success:false,
      message:"category already exists"
    })
   }
   const newCategory=await new categoryModel({name,slug:slugify(name)}).save()
   res.status(201).send({
    success:true,
    message:"category created",
    ...newCategory  
   })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"error in category"
    })
  }
}

export const updateCategoryController =async(req,res)=>{
    try {
      const {name}=req.body;
      const {id}=req.params;
      console.log(id);
      const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});
      res.status(200).send({
        success:"true",
        message:"Category updated successfully",
        category
      })
    } catch (error) {
      res.status(500).send({
        success:false,
        message:"error while updating"
      })
    }
}

export const getAllController =async(req,res)=>{
   try {
    const categories=await categoryModel.find({})
    res.status(200).send({
      success:true,
      categories
    })
   } catch (error) {
    console.log(error)
     res.status(500).send({
      success:false,
      message:"error while fetching category"
     })
   }
}

export const getOneController=async(req,res)=>{
  try {
    const category=await categoryModel.findOne({slug:req.params.slug})
    if(!category){
      return res.send({
        success:false,
        message:"category not found"
      })
    }
    res.status(200).send({
      success:true,
      message:"category fetched succefully",
      category
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"error while fetching the category"
    })
  }
}

export const deleteOneController=async(req,res)=>{
  try {
    const dlt=await categoryModel.findByIdAndDelete(req.params.id)
    res.status(200).send({
      success:true,
      message:"category deleted successfully"
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message:"error while fetching category"
    })
  }
}