// create-order.ts
"use server";

import { computeCartTotal, computeLineSubtotal } from "../hooks/use-cart";
import prisma from "../utils/prisma";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { CartData } from "../types";
import {ProductData} from "tp-kit/types";
import {fileLoader} from "ejs";
import {Property} from "csstype";
import Float = Property.Float;

export async function createProduct(name: string, desc: string, imgUrl: string, categorieId: number, price: number) {

    try {
        const createdProduct = await prisma.product.create({
            data: {
                name: name,
                slug: '',
                path: '',
                desc: desc,
                img: imgUrl,
                categoryId: categorieId,
                price: price,
            }
        })

        return createdProduct.id;
    } catch (error) {
        console.error("Erreur lors de la création du produit :", error);
    }
}

