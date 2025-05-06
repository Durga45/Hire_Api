import { NextFunction, Request,Response } from "express";
import prisma from "../../../globals/prisma";

class userController{
  async getAll (req:Request,res:Response,next:NextFunction){
    const users=await prisma.user.findMany()
    res.status(200).json({"message":"all right done","data":users})
  }

  async create(req:Request,res:Response,next:NextFunction){
    const {name,email,password,role}=req.body
    const user=await prisma.user.create({
      data:{
        name,
        email,
        password,
        role
      }
    })
    res.status(201).json({"result":"user created succesfully"})
  }
}

export default new userController()