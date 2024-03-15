import {FC, memo, useMemo, useState} from "react";
import {ProductFilters} from "./product-filters";
import {ProductsCategoryData} from "tp-kit/types";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components";
import {ProductFiltersResult} from "../types";
import {filterProducts} from "../utils/filter-products";
import Link from "next/link";
import {AddToCartButton} from "./add-to-cart-button";
import prisma from "../utils/prisma";

type Props = {
    categories: ProductsCategoryData[];
    showFilters?: boolean
};

const NewProduct: FC<Props> = memo(async function () {
    const products = await prisma.product.findMany({ orderBy: { id: 'desc' } });

    return (

        <div className="flex flex-row gap-8 justify-center py-5">
            {/* Grille Produit */}
            {products.slice(0, 3).map((product) => (
                    <section key={product.id}>
                        <ProductCardLayout
                            product={product}
                        />
                    </section>
                ))}
        </div>
    );
});

NewProduct.displayName = "ProductList";
export {NewProduct};
