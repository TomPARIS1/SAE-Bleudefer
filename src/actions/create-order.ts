// create-order.ts
"use server";

import { computeCartTotal, computeLineSubtotal } from "../hooks/use-cart";
import prisma from "../utils/prisma";
import { CartData } from "../types";

export async function createOrder(cart: CartData) {

  try {
    const createdOrder = await prisma.order.create({
      data: {
        total: computeCartTotal(cart.lines),
        lines: {
          create: cart.lines.map((line) => ({
            productId: line.product.id,
            qty: line.qty,
            subtotal: computeLineSubtotal(line),
          })),
        },
      },
    });
    console.log(createdOrder);

    return createdOrder.id;
  } catch (error) {
    console.error("Erreur lors de la création de la commande :", error);
  }
}

