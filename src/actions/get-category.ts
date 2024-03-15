"use server"

import prisma from "../utils/prisma";

export async function getCategory(categoryId: number) {
    return await prisma.productCategory.findUnique({
        where: {
            id: 1,
        }
    });
}
