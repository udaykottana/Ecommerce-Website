import express from "express";
import { addToCart, addToFavorites, getAllCartItems, getAllOrders, getUserFavourites, placeOrder, removeFromCart, removeFromFavorites, UserLogin, UserRegister } from "../controllers/User.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router=express.Router();

router.post("/signup",UserRegister);
router.post("/signin",UserLogin);

router.get("/cart",verifyToken,getAllCartItems);
router.post("/cart",verifyToken,addToCart);
router.patch("/cart",verifyToken,removeFromCart);

router.get("/order",verifyToken,getAllOrders);
router.post("/order",verifyToken,placeOrder);

router.get("/favourite",verifyToken,getUserFavourites);
router.post("/favourite",verifyToken,addToFavorites);
router.patch("/favourite",verifyToken,removeFromFavorites);

export default router;