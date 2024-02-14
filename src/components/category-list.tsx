"use client";
import {FC, memo, useMemo, useState} from "react";
import {ProductFilters} from "./product-filters";
import {ProductsCategoryData} from "tp-kit/types";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components";
import {ProductFiltersResult} from "../types";
import {filterProducts} from "../utils/filter-products";
import Link from "next/link";
import Image from 'next/image';
import menuB from "../img/menuB.jpg"
import {AddToCartButton} from "./add-to-cart-button";

type Props = {
    categories: ProductsCategoryData[];
    showFilters?: boolean
};

const CategoryList: FC<Props> = memo(function ({categories}) {
    const [filters, setFilters] = useState<ProductFiltersResult | undefined>();
    const filteredCategories = useMemo(() => filterProducts(categories, filters), [filters, categories]);

    return (
        <div className="flex flex-row gap-8 justify-center pt-5">
            {filteredCategories.map((cat) => (
                <section key={cat.id} className="relative">
                    <Link href={`/${cat.slug}`} className="link">
                        <div className="hover:scale-110 transition-all duration-500">

                            <Image
                                src={cat.img}
                                width={300}
                                height={300}
                                alt="Category Image"
                                className="border-2 border-gray-200"
                            />

                            <p className="uppercase text-center absolute bottom-0 left-0 right-0 bg-black text-white p-2 opacity-70">{cat.name}</p>
                        </div>
                    </Link>
                </section>
            ))}
        </div>
    );
});

CategoryList.displayName = "CategoryList";
export {CategoryList};
