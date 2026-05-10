import prisma from "../../utils/prisma.js";
import { IUser } from "./user.interface.js";

// Create User (with default settings)
const createUserIntoDB = async (payload: IUser) => {
  const result = await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: payload,
    });

    // Default notification settings create karna
    await tx.notificationSettings.create({
      data: { userId: newUser.id },
    });

    return newUser;
  });
  return result;
};

// Get All Users
const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    include: {
      membership: true,
    },
  });
  return result;
};

// Get Single User by ID
const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: { id },
    include: {
      membership: true,
      notificationSettings: true,
    },
  });
  return result;
};

// Update User
const updateUserIntoDB = async (id: string, payload: Partial<IUser>) => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return result;
};

// Delete User
const deleteUserFromDB = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
  });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};