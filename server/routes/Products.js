import express from "express";
import { getproducts,addProducts, getProductById } from "../controllers/Products.js";
const router=express.Router();


router.post("/add",addProducts);
router.get("/",getproducts);
router.get("/:id",getProductById);

export default router;