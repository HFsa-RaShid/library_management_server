import prisma from "../../utils/prisma.js";
import { IMembership } from "./membership.interface.js";

const createMembershipInDB = async (payload: IMembership) => {
  const result = await prisma.membership.create({
    data: payload,
  });
  return result;
};

const getAllMembershipsFromDB = async () => {
  const result = await prisma.membership.findMany({
    include: { user: true },
  });
  return result;
};

const getMyMembershipFromDB = async (userId: string) => {
  const result = await prisma.membership.findUnique({
    where: { userId },
    include: { user: true },
  });
  return result;
};

const updateMembershipInDB = async (id: string, payload: Partial<IMembership>) => {
  const result = await prisma.membership.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const membershipServices = {
  createMembershipInDB,
  getAllMembershipsFromDB,
  getMyMembershipFromDB,
  updateMembershipInDB,
};