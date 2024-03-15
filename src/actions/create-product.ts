"use server";

import prisma from "../utils/prisma";
import {getTotalProduct} from "./get-total-product";

export async function createProduct(name: string, desc: string, imgUrl: string, category: string, price: number) {
    let categoryId = 0;
    let categorySlug = category.toLowerCase().replace(/\s/g, '-');
    let nameSlug = name.replace(/\s/g, '-');

    if (category == 'Les Precieux') {
        categoryId = 1;
    }
    else if (category == 'Empreintes Naturelles') {
        categoryId = 2;
    }
    else {
        categoryId = 3;
    }

    const id = await getTotalProduct() + 1;

    try {
        const createdProduct = await prisma.product.create({
            data: {
                id: id,
                name: name,
                slug: nameSlug,
                path: `${categorySlug}/${nameSlug}`,
                desc: desc,
                img: imgUrl,
                categoryId: categoryId,
                price: price,
            }
        })
        console.log(createdProduct);
    } catch (error) {
        console.error("Erreur lors de la création du produit :", error);
    }
}

