import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const globalErrorHandler =(err:any,req:Request,res:Response,next:NextFunction) =>{


    let errorMessage;

    if(err?.message){
        if(err.code === "P2002")
        {
            errorMessage = "Already Exist";
        }
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        stack: err.stack,
        message: errorMessage,
        error: err,
    });
};


