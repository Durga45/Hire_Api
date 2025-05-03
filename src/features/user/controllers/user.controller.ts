import { NextFunction, Request,Response } from "express";

class userController{
  getAll(req:Request,res:Response,next:NextFunction){
    res.status(200).json({"message":"all right done"})
  }
}

export default new userController()