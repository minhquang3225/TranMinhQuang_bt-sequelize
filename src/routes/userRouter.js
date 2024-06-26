import express from "express";
import { order } from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.post("/add-order/:userID/:foodID", order);




export default userRouter