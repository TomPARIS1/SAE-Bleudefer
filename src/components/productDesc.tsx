"use client"

import Image from 'next/image';
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AddToCartButton } from './add-to-cart-button';

// import { createOrder } from '../../../actions/create-orders';
import { PRODUCTS_CATEGORY_DATA} from "@/products-category.data";

type Props = {
    categorySlug: string;
    productSlug: string;
};

 const getProductBySlug = (categorySlug: string, productSlug: string) => {
    const category = PRODUCTS_CATEGORY_DATA.find((c) => c.slug === categorySlug);

    if (category) {
        const product = category.products.find((p) => p.slug === productSlug);

        if (product) {
            return product;
        }
    }

    return null;
};

export function ProductDesc({ params }: Props) {
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();
    const img = searchParams.get('img');
    const productName = searchParams.get('productName');
    const productPrice = searchParams.get('productPrice');

    // useEffect(() => {
    //     const productData = getProductBySlug(params.categorySlug, params.productSlug);
    //     setProduct(productData);
    // }, [params.categorySlug, params.productSlug]);
    //
    // const handleAddToCartClick = async () => {
    //     try {
    //         //...
    //     } catch (error) {
    //         console.error('An unexpected error occurred:', error);
    //     }
    // };

    return (
        <>
            <div className="flex justify-center mt-8">
                <div>
                    <Image
                        src={menuB}
                        width={360}
                        height={360}
                        alt="Image Produit"
                        className="border-2 border-gray-200"
                    />
                    <div className="flex mt-5 cursor-pointer">
                        <Image
                            src={menuB}
                            width={100}
                            height={100}
                            alt="Image Produit"
                            className="border-4 border-yellow-300 mr-5"
                        />
                        <Image
                            src={menuB}
                            width={100}
                            height={100}
                            alt="Image Produit"
                            className="border-2 border-gray-200"
                        />
                    </div>
                </div>
                <div className="ml-8">
                    <h1 className="text-3xl">{productName}, exemplaire unique <br/> {productPrice}</h1>
                    <p className="text-xl">Quantité: 1</p>
                    <br/>
                    <p className="max-w-xl text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus justo, dapibus eget
                        tempor nec, tristique vitae tortor.
                        Ut ultrices fermentum mollis. Donec euismod dolor ut turpis lobortis, in pretium massa
                        sollicitudin. Orci varius natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Praesent
                        consequat, urna ac convallis interdum, massa urna
                        fermentum mi, eget venenatis urna elit id mi. Integer sollicitudin lorem vitae egestas
                        efficitur. Pellentesque vehicula tincidunt ligula,
                        vitae consectetur magna elementum vitae. Nulla ut bibendum nulla, sit amet luctus massa. Donec
                        condimentum finibus ex sit amet auctor.
                    </p>
                    button={<AddToCartButton product={product} />}

                </div>

            </div>
            <h1 className="text-3xl text-center mt-5">VOUS POURRIEZ ÉGALEMENT AIMER</h1>
            <div className="flex mt-5 justify-center cursor-pointer">
                <Image
                    src={menuB}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuD}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuE}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuF}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuC}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200"
                />
            </div>

        </>
    )
}