"use client";
import {FC, memo, useMemo, useState} from "react";
import {ProductsCategoryData} from "/components-kit/types";
import {ProductCardLayout} from "/components-kit/product-card-layout";
import {ProductGridLayout} from "/components-kit/product-grid-layout"
import {ProductFiltersResult} from "../types";
import Link from "next/link";
import {AddToCartButton} from "./add-to-cart-button";
import prisma from "../utils/prisma";

type Props = {
    categories: ProductsCategoryData[];
    showFilters?: boolean
};

const ProductList: FC<Props> = memo(function ({categories, showFilters = false}) {
    const [filters, setFilters] = useState<ProductFiltersResult | undefined>();
    const [filteredCategories, setFilteredCategories] = useState<ProductsCategoryData[]>(categories);

    return (
        <div className="flex flex-row gap-8 mt-4">
            {/* Grille Produit */}
            <div className="flex-1 space-y-24">
                {filteredCategories.map((cat) => (
                    <section key={cat.id}>
                        <h2 className="text-3xl font-bold mb-8 tracking-tight text-center">
                            <Link href={`/${cat.slug}`} className="link">Produits - {cat.name}</Link>
                        </h2>

                        <div className="flex flex-row justify-between pb-7">
                            <div className="flex">
                                <label htmlFor="product-filter" className="uppercase pr-2">Filtrer par</label>
                                <select name="filter" id="product-filter" className="block px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200">
                                    <option value="option1">Filtre 1</option>
                                    <option value="option2">Filtre 2</option>
                                    <option value="option3">Filtre 3</option>
                                </select>
                            </div>
                            <p className="uppercase">{cat.products.length} produits</p>
                        </div>

                        <ProductGridLayout products={cat.products}>
                            {(product) => (
                                <ProductCardLayout
                                    product={product}
                                />
                            )}
                        </ProductGridLayout>
                    </section>
                ))}
            </div>
        </div>
    );
});

ProductList.displayName = "ProductList";
export {ProductList};
