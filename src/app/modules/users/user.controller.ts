
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { userServices } from "./user.service.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";

const createUser = catchAsync(async(req:Request, res:Response) => { 
    const result = await userServices.createUserIntoDB(req.body);

    sendResponse(res,{
        success: true,
        statusCode: httpStatus.OK,
        message: "User Created Successfully",
        data: result,
    });

});
   
export const userControllers ={
    createUser,
}