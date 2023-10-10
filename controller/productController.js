import slugify from "slugify";
import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js"

export const createProductController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity,imageLink } = req.body.product;
        //validation
        switch (true) {
            case !name:
                return res.send({
                    success: false,
                    message: "Please provide name"
                })
            case !description:
                return res.send({
                    success: false,
                    message: "Please provide description"
                })
            case !price:
                return res.send({
                    success: false,
                    message: "Please provide price"
                })
            case !category:
                return res.send({
                    success: false,
                    message: "Please provide category"
                })
            case !quantity:
                return res.send({
                    success: false,
                    message: "Please provide quantity"
                })
            case !imageLink:
                return res.send({
                    success:false,
                    message:"please provide image link"
                })
        }
       const products=new productModel({...req.body.product,slug:slugify(name)})
       await products.save();
       res.status(200).send({
        success:true,
        message:"products created successfully",
        products
       })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error while creating a product"
        })
    }
}

export const getAllProductController =async (req,res)=>{
  try {
    const products=await productModel.find({}).populate("category").sort({createdAt:-1})
    res.status(200).send({
        success:true,
        message:"products fetched successfully",
        products
    })
  } catch (error) {
    res.status(500).send({
        success:true,
        message:"error while fetcing category"
    })
    console.log(error)
  }
}

export const getOneProductController = async(req,res)=>{
  try {
    const product=await productModel.findOne({slug:req.params.slug}).populate("category")
    res.status(200).send({
        success:true,
        message:"product fetched successfully",
        product
    })
    res
  } catch (error) {
    res.status(500).send({
        success:false,
        message:"error while fetching the product"
    })
  }
}

export const deleteProductController=async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success:true,
            message:"product deleted successfully"
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"error while deleting product"
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity,imageLink } = req.body.product;
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({
                    success: false,
                    message: "Please provide name"
                })
            case !description:
                return res.status(500).send({
                    success: false,
                    message: "Please provide description"
                })
            case !price:
                return res.status(500).send({
                    success: false,
                    message: "Please provide price"
                })
            case !category:
                return res.status(500).send({
                    success: false,
                    message: "Please provide category"
                })
            case !quantity:
                return res.status(500).send({
                    success: false,
                    message: "Please provide quantity"
                })
            case !imageLink:
                return res.status(500).send({
                    success:false,
                    message:"please provide image link"
                })
        }
       const product=await productModel.findByIdAndUpdate(req.params.id,{
        ...req.body.product,
        slug:slugify(req.body.product.name)
       },{new:true})
       res.status(200).send({
        success:true,
        message:"product updated successfully",
        product
       })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error while creating a product"
        })
        console.log(error)
    }
}

export const getProductByCategoryController=async (req,res)=>{
   try {
    const {category}=req.params;
    const {_id}=await categoryModel.findOne({slug:category})
    console.log(_id);
    const products=await productModel.find({category:_id})

    res.status(200).send({
        success:true,
        message:"products fetched",
        products
    })

   } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false
    })
   }
}