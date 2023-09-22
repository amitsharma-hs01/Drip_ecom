import express from "express"
import { createController, deleteOneController, getAllController, getOneController, updateCategoryController } from "../controller/categoryController.js";
import {requireSignin,isAdmin} from "../middleware/authMiddleware.js"


const categoryRouter= express.Router();

categoryRouter.post("/create-category",requireSignin,isAdmin,createController)

categoryRouter.put("/update-category/:id",requireSignin,isAdmin,updateCategoryController);

categoryRouter.get("/get-all",getAllController)

categoryRouter.get("/get-one/:slug",getOneController)

categoryRouter.delete("/delete-one/:id",requireSignin,isAdmin,deleteOneController)

export default categoryRouter