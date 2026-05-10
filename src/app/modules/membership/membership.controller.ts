import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { membershipServices } from "./membership.service.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";

const createMembership = catchAsync(async (req: Request, res: Response) => {
  const result = await membershipServices.createMembershipInDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Membership created successfully",
    data: result,
  });
});

const getAllMemberships = catchAsync(async (req: Request, res: Response) => {
  const result = await membershipServices.getAllMembershipsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Memberships retrieved successfully",
    data: result,
  });
});

const getMyMembership = catchAsync(async (req: Request, res: Response) => {
  // Assuming req.user is populated by auth middleware
  const userId = req.params.userId; 
  const result = await membershipServices.getMyMembershipFromDB(userId as string);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Membership details retrieved",
    data: result,
  });
});

const updateMembership = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await membershipServices.updateMembershipInDB(id as string, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Membership updated successfully",
    data: result,
  });
});

export const membershipControllers = {
  createMembership,
  getAllMemberships,
  getMyMembership,
  updateMembership,
};