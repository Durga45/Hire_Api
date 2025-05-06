import express from "express";
import userController from "../controllers/user.controller";

const userRoutes=express.Router();

userRoutes.get("/",userController.getAll)
userRoutes.post("/signup",userController.create)

export default userRoutes;