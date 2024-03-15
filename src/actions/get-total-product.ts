"use server";

import prisma from "../utils/prisma";

export async function getTotalProduct() {
    const product = await prisma.product.findMany();

    return product.length;
}