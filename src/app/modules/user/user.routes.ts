import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidations } from "./user.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidations.registerUserValidationSchema),
  UserController.registerUser
);

export const UserRoutes = router;
