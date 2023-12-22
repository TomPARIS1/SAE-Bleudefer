"use client";
import {FC, memo, useMemo, useState} from "react";
import {ProductsCategoryData} from "/components-kit/types";
import {ProductCardLayout} from "/components-kit/product-card-layout";
import {ProductFiltersResult} from "../types";
import {filterProducts} from "../utils/filter-products";
import Link from "next/link";
import {AddToCartButton} from "./add-to-cart-button";

type Props = {
    categories: ProductsCategoryData[];
    showFilters?: boolean
};

const NewProduct: FC<Props> = memo(function ({categories}) {
    const [filters, setFilters] = useState<ProductFiltersResult | undefined>();
    const filteredCategories = useMemo(() => filterProducts(categories, filters), [filters, categories]);

    return (

        <div className="flex flex-row gap-8 justify-center py-5">
            {/* Grille Produit */}
            {filteredCategories.slice(0, 1).map((cat) => (
                cat.products.slice(1, 4).map((product) => (
                    <ProductCardLayout
                        product={product}
                    />
                ))))}
        </div>
    );
});

NewProduct.displayName = "ProductList";
export {NewProduct};
