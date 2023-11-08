"use client"

import Image from 'next/image';
import Link from 'next/link';

export const Product = function (props) {
    return (
        <>
            <div className="mr-12">
                <Link href={{
                    pathname: "/productDetails",
                    query: { productName: props.productName, productPrice: props.productPrice, img: props.img },
                }}>
                    <Image
                        src={props.img}
                        width={300}
                        height={300}
                        alt="Produit"
                        className="border-2 border-grey-200"
                    />
                </Link>
                <h1 className="mt-3 text-xl">{props.productName}</h1>
                <h2 className="text-2xl">{props.productPrice}</h2>
            </div>
        </>
    )
}