import { Secret } from "jsonwebtoken";
import config from "../../config";
import { jwtHelpers } from "../../helpers/jwtHelpers";
import prisma from "../../shared/prisma";
import { hashedPassword } from "../../utils/hashedPassword";
import { TProfile, TRegisterData, TUser } from "./user.interface";

const registerUserIntoDB = async (payload: TRegisterData) => {
  const hashPassword = await hashedPassword(payload?.password);

  const userInfo: TUser = {
    email: payload?.email,
    role: "LEARNER",
    password: hashPassword,
  };

  const registerdUserData = await prisma.$transaction(async (tx) => {
    // create user
    const createdUser = await tx.user.create({
      data: userInfo,
    });

    // create profle
    const profileInfo: TProfile = {
      name: payload.name,

      role: "LEARNER",
      userId: createdUser?.id,
    };
    const createdProfile = await tx.profile.create({
      data: profileInfo,
    });
    // end create profile
    return {
      name: createdProfile?.name,
      id: createdUser?.id,
      email: createdUser?.email,
      role: createdProfile?.role,
    };
  });

  const accessToken = jwtHelpers.generateJwtToken(
    {
      email: registerdUserData?.email,
      userId: registerdUserData.id,
    },
    config.jwt.accessSecret as Secret,
    config.jwt.accessSecretExpires_in as string
  );
  // send responce to controller
  return {
    registerdUserData,
    accessToken,
  };
};

export const Userservice = {
  registerUserIntoDB,
};
