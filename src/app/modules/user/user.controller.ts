import { Request, Response } from "express";
import { Userservice } from "./user.services";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const userInfo = req.body;
  console.log(req.body);
  const result = await Userservice.registerUserIntoDB(userInfo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

export const UserController = {
  registerUser,
};
