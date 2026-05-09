

import prisma from "../../utils/prisma.js";
import { IUser } from "./user.interface.js";

const createUserIntoDB = async(payload: IUser) =>{
    const result = await prisma.user.create({
        data: payload,
    })

    return result;
};

export const userServices = {
    createUserIntoDB,
}