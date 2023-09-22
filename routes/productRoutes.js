import express from "express"
import { createProductController, deleteProductController, getAllProductController, getOneProductController, updateProductController } from "../controller/productController.js";
import { requireSignin,isAdmin } from "../middleware/authMiddleware.js";


const productRouter =express.Router();


productRouter.post("/create-product",requireSignin,isAdmin,createProductController)

productRouter.get("/get-all",getAllProductController)

productRouter.get("/get-one/:slug",getOneProductController)

productRouter.delete("/delete/:id",requireSignin,isAdmin,deleteProductController)

productRouter.post("/update/:id",requireSignin,isAdmin,updateProductController)
export default productRouter;