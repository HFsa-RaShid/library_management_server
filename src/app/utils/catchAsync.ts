import { NextFunction, Request, RequestHandler, Response } from "express";


const catchAsync = (fn:RequestHandler) => async(req:Request, res:Response, next:NextFunction)=>{
    try{
        await fn(req,res,next);
    }
    catch(err){

    }
}

export default catchAsync;