"use server"

import prisma from "../utils/prisma";

export async function getUser(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    });
}
