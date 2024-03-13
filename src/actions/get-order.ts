"use server";

import prisma from "../utils/prisma";

export async function getOrder(orderId: number) {
    return await prisma.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            lines: {
                include: {
                    product: true
                }
            }
        }
    });
}